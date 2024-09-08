import {
  MdOutlineExplore,
  MdOutlineHome,
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import styled from "styled-components";

const StyledSimpleMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  padding: 1rem 1rem;

  width: 8.4rem;
  height: calc(100vh - 5.6rem);
`;

const Item = styled.button`
  background-color: transparent;
  border: none;
  border-radius: var(--radius-md);

  font-size: 1rem;
  /* line-height: 0; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;

  height: 7.2rem;
  width: 6.4rem;

  & svg {
    font-size: 2.4rem;
  }

  &:hover {
    background-color: var(--color-gray-300);
  }
`;

type MenuSimpleProps = {
  className?: string;
};

export default function MenuSimpleProps({ className }: MenuSimpleProps) {
  return (
    <StyledSimpleMenu className={className}>
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
      <Item>
        <MdOutlineVideoLibrary />
        You
      </Item>
    </StyledSimpleMenu>
  );
}
