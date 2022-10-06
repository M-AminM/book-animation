import classes from "./about.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop, faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [width, setWidth] = useState();
  const router = useRouter();

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

  useEffect(() => {
    if (width > 992) {
      router.replace("/");
    }
  }, [width]);

  const skills = [
    { name: "react", percent: "90%", id: 1 },
    { name: "nextjs", percent: "60%", id: 2 },
    { name: "redux", percent: "80%", id: 3 },
    { name: "javascript", percent: "80%", id: 4 },
    { name: "typescript", percent: "70%", id: 5 },
    { name: "sass", percent: "100%", id: 6 },
    { name: "git", percent: "65%", id: 7 },
    { name: "java", percent: "70%", id: 8 },
  ];

  const testimonials = [
    {
      name: "Albert Einstein",
      skill: "CEO / Gravity Inc",
      des: "He is a great and hardworking guy. I am so proud of i have him as my asistant. He helped me so much.",
      img: "./media/testo-01.jpg",
      id: 1,
    },
    {
      name: "Walter White",
      skill: "Chemist / Freelancer",
      des: "He was a great co-worker and a friend. I would not be where i am without his support.",
      img: "./media/testo-02.jpg",
      id: 2,
    },
    {
      name: "Dexter Morgan",
      skill: "Lab Geek / Miami Metro",
      des: "He is ok.",
      img: "./media/testo-03.jpg",
      id: 3,
    },
  ];

  return (
    <section className={classes.about}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ paddingTop: "40px" }}
      >
        <h2 className="main-title-box d-flex justify-content-center align-items-center">
          ABOUT
        </h2>
      </div>
      <p className={classes.aboutInfo}>
        I am amin asgharnejad, a student of Computer Engineering at guilan
        university I have been interested in programming for 2 years and started
        working, and I would like to reach my highest level in programming.
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="dash-title">EDUCATION</h2>
      </div>

      <div className={`${classes.yearBox} d-flex`}>
        <h3 className={classes.year}>2017 - 2020</h3>
        <div>
          <p className={classes.university}>Allameh Tabataba&apos;i High School</p>
          <p className={classes.degree}>diploma</p>
        </div>
      </div>

      <div className={`${classes.yearBox} ${classes.end} d-flex`}>
        <h3 className={classes.year}>2020 - 2024</h3>
        <div>
          <p className={classes.university}>University of Guilan</p>
          <p className={classes.degree}>
            bachelor&apos;s degree computer engineering
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <div className={classes.downloadButton}>
          <a href="/resume/Mohammad Amin Asgharnejad.pdf" download>
            {/* <FontAwesomeIcon style={{ width: "40px" }} icon={faDownload} /> */}
            DOWNLOAD CV
          </a>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <h2 className="dash-title">DEVELOPMENT SKILLS</h2>
      </div>
      <div>
        {skills.map((skill) => (
          <div key={skill.id} style={{ marginTop: "10px" }}>
            {skill.name}
            <div
              className={classes.percent}
              style={{ width: skill.percent }}
            ></div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <h2 className="dash-title">TESTIMONIALS</h2>
      </div>

      <div className="d-flex flex-column" style={{ paddingTop: "20px" }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="d-flex justify-content-between">
            <img className={classes.testo} src={testimonial.img} alt={testimonial.name}/>
            <div className={classes.testimonualsInfo}>
              <h4 className={classes.testName}>
                {testimonial.name} <span>{testimonial.skill}</span>
              </h4>
              <p className={classes.testDescription}>{testimonial.des}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <h2 className="dash-title">SERVICES</h2>
      </div>

      <div
        className={`${classes.services} d-flex justify-content-center align-items-center flex-column`}
      >
        <FontAwesomeIcon className={classes.laptopIcon} icon={faLaptop} />
        <h3 className={classes.servicesTitle}>Web Development</h3>
        <p className={classes.servicesDes}>
          I can develop Web apps. It is a long established fact that a reader
          will be distracted by the readable content.
        </p>
      </div>
    </section>
  );
};
export default About;
