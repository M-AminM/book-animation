import classes from "./images.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Images = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    const width = window.innerWidth;
    setWidth(width);
  }, []);
  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      setWidth(width);
    });
    window.addEventListener("load", () => {
      const width = window.innerWidth;
      setWidth(width);
    });
  });
  const router = useRouter();
  useEffect(() => {
    if (width > 992) {
      router.replace("/");
    }
  }, [width]);

  const images = [
    {src1: "/media/01.jpg", title1: "Happy Bear", src2: "/media/03.jpg", title2: "Old Guy Superman"},
    {src1: "/media/07.jpg", title1: "Paper by FiftyThree", src2: "/media/06.jpg", title2: "Lightbox Image"},
    {src1: "/media/05.jpg", title1: "Volume 2", src2: "/media/02.jpg", title2: "Lightbox Gallery"},
    {src1: "/media/10.jpg", title1: "Character Sketches", src2: "/media/16.jpg", title2: "Cross Browser"},
    {src1: "/media/14.jpg", title1: "404 Page", src2: "/media/15.jpg", title2: "Rat"},
  ]

  return (
    <section className={classes.skill}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ paddingTop: "40px" }}
      >
        <h2 className="main-title-box d-flex justify-content-center align-items-center">
          IMAGES
        </h2>
      </div>
      {
        images.map(image => (
          <div>
            <div className={`${classes.mediaBox} d-flex`}>
              <img className={classes.mediaImage} src={image.src1} alt={image.title1}/>
              <img className={classes.mediaImage} src={image.src2} alt={image.title2}/>
            </div>
            <div className="d-flex" style={{ gap: "30px" }}>
              <h4
                className={`${classes.imageTitle} w-50`}
                style={{ textAlign: "center" }}
              >
                {image.title1}
              </h4>
              <h4
                className={`${classes.imageTitle} w-50`}
                style={{ textAlign: "center" }}
              >
                {image.title2}
              </h4>
            </div>
          </div>
        ))
      }
      <div className={`${classes.mediaBox}`}>
        <img className={`${classes.mediaImage} w-100`} src="/media/11.jpg" alt="Working Dudes"/>
      </div>

      <h4 className={classes.imageTitle} style={{ textAlign: "center" }}>
        Working Dudes
      </h4>
    </section>
  );
};
export default Images;
