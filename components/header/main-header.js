import classes from "./header.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faListAlt,
  faEnvelope,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav className="d-flex">
        <Link href="/">
          <a className={classes.headerButton}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </a>
        </Link>
        <Link href="/about" className={classes.headerButton}>
          <a className={classes.headerButton}>
            <FontAwesomeIcon icon={faListAlt} />
          </a>
        </Link>
        <Link href="/images" className={classes.headerButton}>
          <a className={classes.headerButton}>
            <FontAwesomeIcon icon={faImage} />
          </a>
        </Link>
        <Link href="/contact" className={classes.headerButton}>
          <a className={classes.headerButton} style={{ border: "none" }}>
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </Link>
      </nav>
    </header>
  );
};
export default MainHeader;
