import "../styles/globals.css";
import { useState, useEffect } from "react";
import Header from "../components/header/header";
import NextNProgress from "nextjs-progressbar";

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
  });

  return (
    <>
      <NextNProgress />
      {show ? (
        <Header>
          <Component {...pageProps} />
        </Header>
      ) : (
        <>
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}

export default MyApp;
