import Mobile from "../components/mobile/mobile";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import classes from "../styles/loading.module.scss";

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


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const handleStart = (url) => (url !== router.asPath) && setLoading(true);
      const handleComplete = (url) => (url === router.asPath) && setLoading(false);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError', handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })

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
            <Mobile>
              <Component {...pageProps} />
            </Mobile>
          ) : (
            <Component {...pageProps} />
          )}
        </>
      )}
    </>
  );
}

export default MyApp;
