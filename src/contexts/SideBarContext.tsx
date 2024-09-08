import { createContext, ReactNode, useContext, useState } from "react";

type SideBarContextType = {
  isSimple: boolean;
  toggle: () => void;
};

const SideBarContext = createContext<SideBarContextType | null>(null);

interface SideBarProviderProps {
  children: ReactNode;
}

export default function SideBarProvider({ children }: SideBarProviderProps) {
  const [isSimple, setIsSimple] = useState<boolean>(false);

  const toggle = () => {
    setIsSimple((prev) => !prev);
  };

  return (
    <SideBarContext.Provider value={{ isSimple, toggle }}>
      {children}
    </SideBarContext.Provider>
  );
}

export function useSideBar(): SideBarContextType {
  const context = useContext(SideBarContext);

  if (!context) {
    throw new Error("SideBarContext must be used within a SideBarProvider");
  }
  return context;
}
