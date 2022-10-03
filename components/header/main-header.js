import classes from "./header.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faListAlt,
  faEnvelope,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MainHeader = () => {
  const router = useRouter();
  const [about, setAbout] = useState(false);
  const [images, setImages] = useState(false);
  const [contact, setContact] = useState(false);

  const checkRouter = () => {
    if (router.pathname === "/about") {
      setAbout(true);
    } else {
      setAbout(false);
    }

    if (router.pathname === "/images") {
      setImages(true);
    } else {
      setImages(false);
    }

    if (router.pathname === "/contact") {
      setContact(true);
    } else {
      setContact(false);
    }
  };
  useEffect(() => {
    checkRouter();
  }, [router]);

  return (
    <header className={classes.header}>
      <nav className="d-flex">
        <Link href="/">
          <a className={classes.headerButton}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </a>
        </Link>
        <Link href="/about">
          <a
            className={classes.headerButton}
            style={{ background: about ? "#15B79C" : "#333" }}
          >
            <FontAwesomeIcon icon={faListAlt} />
          </a>
        </Link>
        <Link href="/images">
          <a
            className={classes.headerButton}
            style={{ background: images ? "#15B79C" : "#333" }}
          >
            <FontAwesomeIcon icon={faImage} />
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={classes.headerButton}
            style={{ background: contact ? "#15B79C" : "#333", border: "none" }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </Link>
      </nav>
    </header>
  );
};
export default MainHeader;
