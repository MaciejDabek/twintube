import styled from "styled-components";

import Menu from "./Menu";
import MenuSimple from "./MenuSimple";

import { useSideBar } from "../contexts/SideBarContext";

const StyledSideBar = styled.div``;

export default function SideBar() {
  const { isSimple } = useSideBar();

  return (
    <StyledSideBar>
      <MenuSimple
        className={isSimple ? "mq-show-eq-md-or-lg" : "mq-show-eq-md"}
      />
      <Menu className={isSimple ? "mq-show-never" : "mq-show-eq-lg"} />
    </StyledSideBar>
  );
}
