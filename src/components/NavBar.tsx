import { useState } from "react";
import styled from "styled-components";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SideBarToggle from "./SideBarToggle";
import ThemeToggle from "./ThemeToggle";
import ButtonIcon from "./ButtonIcon";

import {
  MdArrowBack,
  MdMic,
  MdNotificationsNone,
  MdSearch,
} from "react-icons/md";

const StyledNavBar = styled.header`
  flex-shrink: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--color-gray-50);

  height: 5.6rem;
  padding: 0 1.6rem;
`;

const NavBarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export default function NavBar() {
  const [isSmallSearchOpen, setIsSmallSearchOpen] = useState(false);

  return (
    <StyledNavBar>
      {!isSmallSearchOpen && (
        <>
          <NavBarSection id="start">
            <SideBarToggle />
            <Logo />
          </NavBarSection>
          <NavBarSection id="center" className="mq-show-eq-md-or-lg">
            <SearchBar />
            <ButtonIcon $variant="light">
              <MdMic />
            </ButtonIcon>
          </NavBarSection>
          <NavBarSection id="end">
            <ButtonIcon
              className="mq-show-eq-sm"
              onClick={() => setIsSmallSearchOpen(true)}
            >
              <MdSearch />
            </ButtonIcon>
            <ButtonIcon className="mq-show-eq-sm">
              <MdMic />
            </ButtonIcon>
            <ThemeToggle />
            <ButtonIcon>
              <MdNotificationsNone />
            </ButtonIcon>
          </NavBarSection>
        </>
      )}
      {isSmallSearchOpen && (
        <>
          <ButtonIcon onClick={() => setIsSmallSearchOpen(false)}>
            <MdArrowBack />
          </ButtonIcon>
          <SearchBar />
          <ButtonIcon $variant="light">
            <MdMic />
          </ButtonIcon>
        </>
      )}
    </StyledNavBar>
  );
}
