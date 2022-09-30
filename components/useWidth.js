import { useState, useEffect } from "react";

export const useWidth = () => {
    const [width, setWidth] = useState(0); // default width, detect on server.
    const handleResize = () => setWidth(window.innerWidth);
    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);
    return width;
};

export const isLower991 = () => {
    const width = useWidth();
    if(width < 991) {
        return true;
    }else {
        return false;
    }
}