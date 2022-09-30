import Link from "next/link";
import classes from "../book/book.module.scss";

const Cover = () => {
  return (
    <div id="p1" className={classes.paper} style={{ zIndex: "1" }}>
      <div className={`${classes.front} ${classes.mainBackground}`}>
        <div>
          <div>
            <p className={classes.nameTitle}>Amin Asgharnejad</p>
            <p className={classes.info}>Front End Developer</p>
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div className={classes.intro}>
              <div className={classes.description}>
                <h3 className={classes.desTitle}>I AM FROM</h3>
                <h4 className={classes.subDesTitle}>Earth</h4>
              </div>
              <div className={classes.description}>
                <h3 className={classes.desTitle}>I CREATE </h3>
                <h4 className={classes.subDesTitle}>React Websites</h4>
              </div>
              <div className={classes.description}>
                <h3 className={classes.desTitle}>I LIKE</h3>
                <h4 className={classes.subDesTitle}>Front End</h4>
              </div>
              <div className={classes.description}>
                <h3 className={classes.desTitle}>FREELANCE</h3>
                <h4 className={classes.subDesTitle}>Available</h4>
              </div>
            </div>
            <Link href="/about">
              <div className={classes.openPage}>OPEN</div>
            </Link>
          </div>
        </div>
      </div>
      <div className={classes.back}>
        <div
          id="b1"
          className={`${classes.scroll} ${classes.backContent}`}
          style={{
            transform: " rotateY(180deg)",
            boxShadow: "2px 4px 4px rgb(0 0 0 / 20%)",
            overflowY: "scroll",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Cover;
