import GlobalStyles from "../styles/GlobalStyles";
import styled from "styled-components";

import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar";
import { ThemeProvider } from "../contexts/ThemeContext";
import Modal from "../components/Modals";
import Menu from "../components/Menu";
import Logo from "../components/Logo";
import SideBarToggle from "../components/SideBarToggle";
import SideBarProvider from "../contexts/SideBarContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const StyledAppLayout = styled.div`
  background-color: var(--color-gray-50);
  color: var(--color-gray-800);

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Main = styled.main``;

const queryClient = new QueryClient();

export default function AppLayout() {
  return (
    <>
      <ThemeProvider>
        <SideBarProvider>
          <QueryClientProvider client={queryClient}>
            <GlobalStyles />

            <Modal>
              <StyledAppLayout>
                <NavBar />
                <Main>
                  <Outlet />
                </Main>
              </StyledAppLayout>

              <Modal.SideContent modalId="side-bar">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginLeft: "1.6rem",
                    height: "5.6rem",
                  }}
                >
                  <SideBarToggle />
                  <Logo />
                </div>
                <Menu />
              </Modal.SideContent>

              <Modal.InfoContent />
            </Modal>
          </QueryClientProvider>
        </SideBarProvider>
      </ThemeProvider>
    </>
  );
}
