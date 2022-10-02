import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { isLower991, useWidth } from "../../components/useWidth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptop } from "@fortawesome/free-solid-svg-icons";
import classes from "./about.module.scss";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [isShown, setIsShown] = useState(false);
  const { ref: myRef, inView: isInside } = useInView({ threshold: 0.3 });


  // const lower = isLower991();
  // const width = useWidth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (lower) {
  //     router.replace("/");
  //   }
  // }, [width]);
  console.log(isInside);
  if(isInside) {
      
  }

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
  })
  const router = useRouter();
    useEffect(() => {
      if(width > 992) {
        router.replace("/");
      }
    }, [width])
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
      des: "He was a great co-worker and a friend. I would't be where i am without his support.",
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
    <section className={classes.about} ref={myRef}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ paddingTop: "40px" }}
      >
        <div className="main-title-box">
          <p className="d-flex justify-content-center align-items-center">
            ABOUT
          </p>
        </div>
      </div>
      <p className={classes.aboutInfo}>
        I am amin asgharnejad, a student of Computer Engineering at guilan
        university I have been interested in programming for 3 years and started
        working, and I would like to reach my highest level in programming.
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <div className="dash-title">EDUCATION</div>
      </div>

      <div className={`${classes.yearBox} d-flex`}>
        <h2 className={classes.year}>2017 - 2020</h2>
        <div>
          <p className={classes.university}>Allameh Tabataba'i High School</p>
          <p className={classes.degree}>diploma</p>
        </div>
      </div>

      <div className={`${classes.yearBox} ${classes.end} d-flex`}>
        <h2 className={classes.year}>2020 - 2024</h2>
        <div>
          <p className={classes.university}>University of Guilan</p>
          <p className={classes.degree}>
            bachelor's degree computer engineering
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <div className="dash-title">DEVELOPMENT SKILLS</div>
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
        <div className="dash-title">TESTIMONIALS</div>
      </div>

      <div className="d-flex flex-column" style={{ paddingTop: "20px" }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="d-flex justify-content-between">
            <img className={classes.testo} src={testimonial.img} />
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
        <div className="dash-title">SERVICES</div>
      </div>

      <div
        className={`${classes.services} d-flex justify-content-center align-items-center flex-column`}
      >
        <FontAwesomeIcon className={classes.laptopIcon} icon={faLaptop} />
        <h2 className={classes.servicesTitle}>Web Development</h2>
        <p className={classes.servicesDes}>
          I can develop Web apps. It is a long established fact that a reader
          will be distracted by the readable content.
        </p>
      </div>
    </section>
  );
};
export default About;
