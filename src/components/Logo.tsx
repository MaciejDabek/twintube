import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  & img {
    height: 3.6rem;
    width: auto;
  }

  & span {
    color: var(--color-gray-950);
    font-size: 2.4rem;
    font-weight: 600;
  }
`;

export default function Logo() {
  return (
    <Link to="/">
      <StyledLogo>
        <img src="/twintube-icon.png" alt="TwinTube logo" />
        <span>TwinTube</span>
      </StyledLogo>
    </Link>
  );
}
