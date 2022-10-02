import "../styles/globals.css";
import { useState, useEffect } from "react";
import Header from "../components/header/header";

function MyApp({ Component, pageProps }) {
  const [show, setIsShow] = useState(false);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader-container">
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      ) : (
        <>
          {show ? (
            <Header>
              <Component {...pageProps} />
            </Header>
          ) : (
            <Component {...pageProps} />
          )}
        </>
      )}
    </>
  );
}

export default MyApp;
