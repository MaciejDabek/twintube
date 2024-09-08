import { MdMenu } from "react-icons/md";

import ButtonIcon from "./ButtonIcon";
import { useModal } from "./Modals";
import { useWindowSize } from "../lib/useWindowSize";
import { useSideBar } from "../contexts/SideBarContext";

export default function SideBarToggle() {
  const { isLarge } = useWindowSize();
  const { toggle: toggleSideBar } = useSideBar();
  const { toggle: toggleModal } = useModal();

  function handleClick() {
    if (isLarge) {
      toggleSideBar();
    } else {
      toggleModal("side-bar");
    }
  }

  return (
    <ButtonIcon onClick={() => handleClick()}>
      <MdMenu />
    </ButtonIcon>
  );
}
