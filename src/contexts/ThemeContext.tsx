import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

type Theme = "light" | "dark";

export type ThemeContextType = {
  theme: Theme;
  isLightTheme: boolean;
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: ThemeProviderProps) {
  // TODO save in local storage & initialize with preferred from browser
  const [theme, setTheme] = useState<Theme>("dark");
  const isLightTheme = theme === "light";
  const isDarkTheme = theme === "dark";

  useEffect(
    function () {
      if (isDarkTheme) {
        document.documentElement.classList.add("dark-theme");
        document.documentElement.classList.remove("light-theme");
      } else {
        document.documentElement.classList.remove("dark-theme");
        document.documentElement.classList.add("light-theme");
      }
    },
    [isDarkTheme]
  );

  function toggleTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider
      value={{ theme, isLightTheme, isDarkTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext(): ThemeContextType {
  const context = useContext(ThemeContext) as ThemeContextType;

  if (!context) {
    throw new Error("ThemeContext must be used inside of ThemeProvider");
  }

  return context;
}
