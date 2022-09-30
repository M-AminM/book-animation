import classes from "./images.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isLower991 } from "../useWidth";

const Images = () => {
  const lower = isLower991();

  return (
    <>
      <section className={classes.skill}>
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ paddingTop: "40px" }}
        >
          <div className="main-title-box">
            <p className="d-flex justify-content-center align-items-center">
              IMAGES
            </p>
          </div>
        </div>

        <div className={`${classes.mediaBox} d-flex`}>
          <img className={classes.mediaImage} src="/media/01.jpg" />
          <img className={classes.mediaImage} src="/media/03.jpg" />
        </div>

        <div className="d-flex" style={{ gap: "30px" }}>
          <h4
            className={`${classes.imageTitle} w-50`}
            style={{ textAlign: "center" }}
          >
            Happy Bear
          </h4>
          <h4
            className={`${classes.imageTitle} w-50`}
            style={{ textAlign: "center" }}
          >
            Old Guy Superman
          </h4>
        </div>

        <div className={`${classes.mediaBox} d-flex`}>
          <img className={classes.mediaImage} src="/media/07.jpg" />
          <img className={classes.mediaImage} src="/media/06.jpg" />
        </div>

        <div className="d-flex" style={{ gap: "30px" }}>
          <h4
            className={`${classes.imageTitle} w-50`}
            style={{ textAlign: "center" }}
          >
            Paper by FiftyThree
          </h4>
          <h4
            className={`${classes.imageTitle} w-50`}
            style={{ textAlign: "center" }}
          >
            Lightbox Image
          </h4>
        </div>

        <div className={`${classes.mediaBox} d-flex`}>
          <img className={classes.mediaImage} src="/media/05.jpg" />
          <img className={classes.mediaImage} src="/media/02.jpg" />
        </div>

        <div className="d-flex" style={{ gap: "30px" }}>
          <h4
            className={`${classes.imageTitle} w-50`}
            style={{ textAlign: "center" }}
          >
            Volume 2
          </h4>
          <h4
            className={`${classes.imageTitle} w-50`}
            style={{ textAlign: "center" }}
          >
            Lightbox Gallery
          </h4>
        </div>

        <div className={`${classes.mediaBox} d-flex`}>
          <img className={classes.mediaImage} src="/media/10.jpg" />
          <img className={classes.mediaImage} src="/media/16.jpg" />
        </div>

        <div className="d-flex" style={{ gap: "30px" }}>
          <h4
            className={`${classes.imageTitle} w-50`}
            style={{ textAlign: "center" }}
          >
            Character Sketches
          </h4>
          <h4
            className={`${classes.imageTitle} w-50`}
            style={{ textAlign: "center" }}
          >
            Cross Browser
          </h4>
        </div>

        <div className={`${classes.mediaBox} d-flex`}>
          <img className={classes.mediaImage} src="/media/14.jpg" />
          <img className={classes.mediaImage} src="/media/15.jpg" />
        </div>

        <div className="d-flex" style={{ gap: "30px" }}>
          <h4
            className={`${classes.imageTitle} w-50`}
            style={{ textAlign: "center" }}
          >
            404 Page
          </h4>
          <h4
            className={`${classes.imageTitle} w-50`}
            style={{ textAlign: "center" }}
          >
            Rat
          </h4>
        </div>
        <div className={`${classes.mediaBox}`}>
          <img className={`${classes.mediaImage} w-100`} src="/media/11.jpg" />
        </div>

        <h4 className={classes.imageTitle} style={{ textAlign: "center" }}>
          Working Dudes
        </h4>
      </section>
    </>
  );
};
export default Images;
