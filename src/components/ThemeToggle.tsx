import { MdDarkMode, MdLightMode } from "react-icons/md";

import ButtonIcon from "./ButtonIcon";

import { useThemeContext } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { isLightTheme, isDarkTheme, toggleTheme } = useThemeContext();

  return (
    <ButtonIcon onClick={toggleTheme}>
      {isDarkTheme && <MdLightMode />}
      {isLightTheme && <MdDarkMode />}
    </ButtonIcon>
  );
}
