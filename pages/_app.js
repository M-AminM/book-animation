import Mobile from "../components/mobile/mobile";
import "../styles/globals.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [show, setIsShow] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    setIsShow(width > 991 ? false : true);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      setIsShow(width > 991 ? false : true);
    });
    window.addEventListener("load", () => {
      const width = window.innerWidth;
      setIsShow(width > 991 ? false : true);
    });
  })

  return (
    <>
      {show ? (
        <Mobile>
          <Component {...pageProps} />
        </Mobile>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
