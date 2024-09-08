import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

import SideBarLayout from "../layouts/SideBarLayout";
import FeedItem from "../components/FeedItem";
import CategoriesBar from "../components/CategoriesBar";

import { apiGetSearch } from "../services/youtubeApi";

const StyledFeed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  height: calc(100vh - 5.6rem);
  width: 100%;

  overflow-x: hidden;
  overflow-y: auto;

  padding: 2rem 2rem;
`;

const StyledFeedList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  width: 100%;
  height: 100px;
`;

export default function Feed() {
  const { data = [] } = useQuery({
    queryKey: ["feed"],
    queryFn: apiGetSearch,
    staleTime: 3600,
  });

  return (
    <SideBarLayout>
      <StyledFeed>
        <CategoriesBar />
        <StyledFeedList>
          {data.map((item) => (
            <FeedItem key={item.videoId} item={item} />
          ))}
        </StyledFeedList>
      </StyledFeed>
    </SideBarLayout>
  );
}
