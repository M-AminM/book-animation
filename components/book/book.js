import classes from "./book.module.scss";
import { useState, useEffect } from "react";
import About from "../about/about";

const Book = () => {
  const [show, setIsShow] = useState(false);

//   useEffect(() => {
//     const width = window.innerWidth;
//     setIsShow(width > 991 ? false : true);
//   }, []);
//   window.addEventListener("resize", () => {
//     const width = window.innerWidth;
//     setIsShow(width > 991 ? false : true);
//   });
//   window.addEventListener("load", () => {
//     const width = window.innerWidth;
//     setIsShow(width > 991 ? false : true);
//   });
  

  const [flipPage, setFlipPage] = useState(false);

  const closeHanlder = () => {
    const paper10 = document.querySelector(".jasem");
    paper10.style.zIndex = 0;

    const book = document.querySelector("#book");
    const paper2 = document.querySelector("#p5");
    book.style.transform = "translateX(0%)";
    paper2.classList.remove(classes.flipped);
    paper2.style.zIndex = 6;
    setTimeout(() => {
      const paper1 = document.querySelector("#p1");
      paper1.classList.remove(classes.flipped);
      paper1.style.zIndex = 7;
    }, 500);
  };

  const goNextPage = () => {
    setFlipPage(true);
    const book = document.querySelector("#book");
    const paper1 = document.querySelector("#p1");
    const paper2 = document.querySelector("#p5");
    book.style.transform = "translateX(50%)";
    paper1.classList.add(classes.flipped);
    paper1.style.zIndex = 3;
    paper2.style.zIndex = 2;
    setTimeout(() => {
      const book = document.querySelector("#book");
      const paper2 = document.querySelector("#p5");
      book.style.transform = "translateX(0%)";
      paper2.classList.add(classes.flipped);
      paper2.style.zIndex = 2;
    }, 500);
    // setTimeout(() => {
    //   const paper10 = document.querySelector(".jasem");
    //   paper10.style.zIndex = 10;
    // }, 900);
  };

  return (
    <div className={classes.mainBookSection}>
      <div>
        <div id="book" className={classes.book}>
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
                  <div onClick={goNextPage} className={classes.openPage}>
                    OPEN
                  </div>
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
              >
                <About />
                {/* <About /> */}
              </div>
            </div>
          </div>

          <div id="p5" className={`${classes.paper1} ${flipPage ? "" : "d-none"}`}>
            <div className={`${classes.front1} ${classes.background}`}>
              <div className={classes.nextPageAnish}>
                <div className={classes.openPage}>OPEN</div>
              </div>
            </div>
            <div className={classes.back1}>
              <div
                id="b1"
                className={classes.backContent}
                style={{
                  boxShadow: "-2px 4px 4px rgb(0 0 0 / 20%)",
                  overflowY: "scroll",
                }}
              >
                <div className={classes.close} onClick={closeHanlder}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                {/* <Contact /> */}
              </div>
            </div>
          </div>
          <div className={`${classes.back1} ${classes.jasem}`} style={{ zIndex: 0 }}>
            <div
              id="b1"
              className={classes.back1Content}
              style={{
                boxShadow: "0 6px 4px -2px rgb(0 0 0 / 20%)",
                overflowY: "scroll",
              }}
            >
              {/* <Skill /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Book;
