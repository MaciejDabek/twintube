import styled from "styled-components";

type ButtonStyleProps = {
  $variant?: "light" | "default";
};

const ButtonIcon = styled.button<ButtonStyleProps>`
  background: none;
  border: none;
  border-radius: 100%;

  padding: 0.6rem;

  line-height: 0;

  background-color: ${(props) => {
    switch (props.$variant) {
      case "light":
        return "var(--color-gray-200)";
      default:
        return "inherit";
    }
  }};

  &:hover {
    background-color: ${(props) => {
      switch (props.$variant) {
        case "light":
          return "var(--color-gray-400)";
        default:
          return "var(--color-gray-200)";
      }
    }};
  }

  & svg {
    height: 2.4rem;
    width: 2.4rem;
    color: var(--color-primary);
  }
`;

export default ButtonIcon;
