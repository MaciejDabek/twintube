import { ReactNode } from "react";

import styled from "styled-components";

import SideBar from "../components/SideBar";

const StyledSideBarLayout = styled.div`
  display: flex;
  width: 100%;
`;

type SideBarLayoutProps = {
  children: ReactNode;
};

export default function SideBarLayout({ children }: SideBarLayoutProps) {
  return (
    <StyledSideBarLayout>
      <SideBar />
      {children}
    </StyledSideBarLayout>
  );
}
