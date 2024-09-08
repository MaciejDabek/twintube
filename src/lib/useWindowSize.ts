import { useState, useEffect } from "react";

export function useWindowSize() {
  const [isLarge, setIsLarge] = useState<boolean>(window.innerWidth > 1244);
  const [isMedium, setIsMedium] = useState<boolean>(
    window.innerWidth > 744 && window.innerWidth < 1245
  );
  const [isSmall, setIsSmall] = useState<boolean>(window.innerWidth < 745);

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth > 1244);
      setIsMedium(window.innerWidth > 744 && window.innerWidth < 1245);
      setIsSmall(window.innerWidth < 745);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isSmall, isMedium, isLarge };
}
