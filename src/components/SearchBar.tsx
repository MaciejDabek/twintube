import styled from "styled-components";

import { MdSearch } from "react-icons/md";

const StyledSearchBar = styled.div`
  display: flex;

  & input {
    background-color: transparent;

    font-size: 1.6rem;

    height: 4rem;
    width: 40vw;
    padding-left: 1.5rem;

    border: 2px solid var(--color-gray-300);
    border-right: none;
    border-top-left-radius: 1000px;
    border-bottom-left-radius: 1000px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  & button {
    background-color: var(--color-gray-100);
    color: var(--color-primary);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2.4rem;

    height: 4rem;
    width: 5.4rem;
    padding-right: 1rem;

    border: 2px solid var(--color-gray-300);
    border-top-right-radius: 1000px;
    border-bottom-right-radius: 1000px;
  }
`;

export default function SearchBar() {
  return (
    <StyledSearchBar>
      <input placeholder="Search..." />
      <button>
        <MdSearch />
      </button>
    </StyledSearchBar>
  );
}
