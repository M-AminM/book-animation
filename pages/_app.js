import Mobile from "../components/mobile/mobile";
import "../styles/globals.css";
import { useState, useEffect } from "react";
import { isLower991 } from "../components/useWidth";

function MyApp({ Component, pageProps }) {
  const lower = isLower991();

  return (
    <>
      {lower ? (
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
