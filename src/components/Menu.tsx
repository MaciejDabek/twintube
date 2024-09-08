import {
  MdOutlineArticle,
  MdOutlineEmojiEvents,
  MdOutlineExplore,
  MdOutlineFlag,
  MdOutlineHelpOutline,
  MdOutlineHistory,
  MdOutlineHome,
  MdOutlineLiveTv,
  MdOutlineLocalFireDepartment,
  MdOutlineMovie,
  MdOutlineMusicNote,
  MdOutlinePodcasts,
  MdOutlineSettings,
  MdOutlineSportsEsports,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import styled from "styled-components";

const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;

  width: 24rem;
  height: calc(100vh - 5.6rem);

  overflow-x: hidden;
  overflow-y: hidden;

  &:hover {
    overflow-y: auto;
  }
`;

const Item = styled.button`
  background-color: transparent;
  border: none;
  border-radius: var(--radius-md);

  font-size: 1.4rem;
  /* line-height: 0; */

  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 0.8rem 1.2rem;

  & svg {
    font-size: 2.4rem;
  }

  &:hover {
    background-color: var(--color-gray-300);
  }
`;

const SectionDivider = styled.div`
  background-color: var(--color-gray-300);
  width: 22rem;
  height: 1px;

  margin: 1rem 0;

  flex-shrink: 0;
`;

const SectionTitle = styled.h3`
  font-size: 1.6rem;
  padding: 0 1rem;

  margin-bottom: 0.6rem;
`;

const Copyright = styled.p``;

type MenuProps = {
  className?: string;
};

export default function Menu({ className }: MenuProps) {
  return (
    <StyledMenu className={className}>
      <Item>
        <MdOutlineHome />
        Home
      </Item>
      <Item>
        <MdOutlineExplore />
        Explore
      </Item>
      <Item>
        <MdOutlineSubscriptions />
        Subscriptions
      </Item>
      <SectionDivider />
      <Item>
        <MdOutlineVideoLibrary />
        You
      </Item>
      <Item disabled>
        <MdOutlineHistory />
        History
      </Item>
      <SectionDivider />
      <SectionTitle>Explore</SectionTitle>
      <Item>
        <MdOutlineLocalFireDepartment />
        Trending
      </Item>
      <Item>
        <MdOutlineLiveTv />
        Live
      </Item>
      <Item>
        <MdOutlineMusicNote />
        Music
      </Item>
      <Item>
        <MdOutlineMovie />
        Films
      </Item>
      <Item>
        <MdOutlineSportsEsports />
        Gaming
      </Item>
      <Item>
        <MdOutlineArticle />
        News
      </Item>
      <Item>
        <MdOutlineEmojiEvents />
        Sport
      </Item>
      <Item>
        <MdOutlinePodcasts />
        Podcasts
      </Item>
      <SectionDivider />
      <Item>
        <MdOutlineSettings />
        Settings
      </Item>
      <Item>
        <MdOutlineFlag />
        Report
      </Item>
      <Item>
        <MdOutlineHelpOutline />
        Help
      </Item>
      <SectionDivider />
      <Copyright>&copy; 2024</Copyright>
    </StyledMenu>
  );
}
