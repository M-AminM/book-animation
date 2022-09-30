import classes from "./mobile.module.scss";
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
      <div className="d-flex">
        <Link href="/">
          <div className={classes.headerButton}>
            <FontAwesomeIcon icon={faAngleLeft}/>
          </div>
        </Link>
        <Link href="/about" className={classes.headerButton}>
          <div className={classes.headerButton}>
            <FontAwesomeIcon icon={faListAlt} />
          </div>
        </Link>
        <Link href="/images" className={classes.headerButton}>
          <div className={classes.headerButton}>
            <FontAwesomeIcon icon={faImage} />
          </div>
        </Link>
        <Link href="/contact" className={classes.headerButton}>
          <div className={classes.headerButton} style={{ border: "none" }}>
            <div className={classes.headerButton}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
};
export default MainHeader;
