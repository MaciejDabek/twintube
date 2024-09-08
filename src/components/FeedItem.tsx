import styled from "styled-components";

import { VideoThumbnail } from "../data/types";
import { MdMoreVert } from "react-icons/md";

const StyledFeedItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 100%;
  margin: 0 0.8rem 3.6rem;
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: var(--radius-xl);
  overflow: hidden;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: auto auto auto;
  column-gap: 1rem;
`;

const ChannelThumbnail = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: var(--color-gray-200);
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 1.6rem;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  margin-bottom: 0.6rem;
`;

const ChannelName = styled.p`
  font-size: 1.4rem;

  color: var(--color-gray-600);
`;

const Info = styled.p`
  font-size: 1.4rem;
  color: var(--color-gray-600);
`;

const MoreButton = styled.div`
  & svg {
    height: 2rem;
    width: 2rem;
  }
`;

type FeedItemProps = {
  item: VideoThumbnail;
};

export default function FeedItem({ item }: FeedItemProps) {
  return (
    <StyledFeedItem>
      <Thumbnail src={item.videoThumbnailUrl} />
      <Details>
        <ChannelThumbnail src={item.channelThumbnailUrl} />
        <Description>
          <Title>{item.videoTitle}</Title>
          <ChannelName>{item.channelTitle}</ChannelName>
          <Info>
            {item.videoViews} • {item.videoPublishedAgo}
          </Info>
        </Description>
        <div>
          <MoreButton>
            <MdMoreVert />
          </MoreButton>
        </div>
      </Details>
    </StyledFeedItem>
  );
}
