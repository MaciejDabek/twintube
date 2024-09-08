import axios from "axios";

import { VideoThumbnail } from "../data/types";
import {
  parseDuration,
  parsePublishedDate,
  parseViews,
} from "../utils/parseData";

const apiURL = "https://youtube.googleapis.com/youtube/v3/";
const apiKEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export async function apiGetCategories() {
  try {
    const res = await axios.get(
      `${apiURL}videoCategories?part=snippet&regionCode=PL&key=${apiKEY}`
    );

    return res?.data?.items;
  } catch (err) {
    console.error(err);
  }
}

export async function apiGetSearch() {
  const url = `${apiURL}search?part=snippet&maxResults=10&type=video&q=react+js&key=${apiKEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!data.items) {
      throw new Error("No items found");
    }

    // Fetch the channel thumbnails in a second step, because they aren't included in the initial search response
    const videoData: VideoThumbnail[] = await Promise.all(
      data.items.map(async (item: any) => {
        const videoId = item.id.videoId;
        const videoTitle = item.snippet.title;
        const videoThumbnailUrl = item.snippet.thumbnails.medium.url;

        const videoPublishedAgo = parsePublishedDate(item.snippet.publishedAt);
        const channelId = item.snippet.channelId;
        const channelTitle = item.snippet.channelTitle;

        const statsResponse = await fetch(
          `${apiURL}videos?part=statistics,contentDetails&id=${videoId}&key=${apiKEY}`
        );
        const statsData = await statsResponse.json();
        const videoDuration = parseDuration(
          statsData.items[0].contentDetails.duration
        );
        const videoViews = parseViews(statsData.items[0].statistics.viewCount);

        // Fetch the channel thumbnail
        const channelUrl = `${apiURL}channels?part=snippet&id=${channelId}&key=${apiKEY}`;
        const channelResponse = await fetch(channelUrl);
        const channelData = await channelResponse.json();
        const channelThumbnailUrl =
          channelData.items.at(0).snippet.thumbnails.default.url;

        return {
          videoId,
          videoTitle,
          videoThumbnailUrl,
          videoDuration,
          videoPublishedAgo,
          videoViews,
          channelId,
          channelTitle,
          channelThumbnailUrl,
        };
      })
    );

    return videoData;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
}
