import classes from "./book.module.scss";
import { useState } from "react";
import About from "../../pages/about";
import Contact from "../../pages/contact";
import Images from "../../pages/images";
import Cover from "../cover/cover";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Book = () => {
  const [flipPage, setFlipPage] = useState(false);

  const closeHanlder = () => {
    const paper10 = document.querySelector("#paper10");
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
    const paper10 = document.querySelector("#paper10");
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
    setTimeout(() => {
      paper10.style.zIndex = 10;
    }, 900);
  };


  return (
    <>
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
                        <h4 className={classes.subDesTitle}>
                          React Websites
                        </h4>
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
                    <div onClick={goNextPage} className={`${classes.openPage} d-flex flex-column`}>
                      <span className={classes.firstLine}></span>
                      <strong >OPEN</strong>
                      <span className={classes.firstLine}></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.back}>
                <div
                  id="b1"
                  className={`${classes.scroll} ${classes.backContent} ${classes.scroll}`}
                  style={{
                    transform: " rotateY(180deg)",
                    boxShadow: "2px 4px 4px rgb(0 0 0 / 20%)",
                    overflowY: "scroll",
                  }}
                >
                  <About />
                </div>
              </div>
            </div>

            <div
              id="p5"
              className={`${classes.paper1} ${flipPage ? "" : "d-none"}`}
            >
              <div className={`${classes.front1} ${classes.background}`}>
              </div>
              <div className={classes.back1}>
                <div
                  id="b1"
                  className={`${classes.backContent} ${classes.scroll}`}
                  style={{
                    boxShadow: "-2px 4px 4px rgb(0 0 0 / 20%)",
                    overflowY: "scroll",
                  }}
                >
                  <div className={classes.close} onClick={closeHanlder}>
                    <FontAwesomeIcon icon={faXmark}/>
                  </div>
                  <Contact />
                </div>
              </div>
            </div>
            <div
              id="paper10"
              className={`${classes.back1} ${classes.jasem}`}
              style={{ zIndex: 0 }}
            >
              <div
                id="b1"
                className={`${classes.back1Content} ${classes.scroll}`}
                style={{
                  boxShadow: "0 6px 4px -2px rgb(0 0 0 / 20%)",
                  overflowY: "scroll",
                }}
              >
                <Images />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.mobileCover} style={{overflow: "hidden"}}>
        <Cover />
      </div>

    </>
  );
};
export default Book;
