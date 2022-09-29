import classes from "./about.module.scss";

const About = () => {
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
    <section className={classes.about}>
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

      <div className={`${classes.yearBox  } ${classes.end} d-flex`}>
        <h2 className={classes.year}>2020 - 2024</h2>
        <div>
          <p className={classes.university}>University of Guilan</p>
          <p className={classes.degree}>bachelor's degree computer engineering</p>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <div className="dash-title">DEVELOPMENT SKILLS</div>
      </div>
      <div>
        {skills.map((skill) => (
          <div key={skill.id} style={{ marginTop: "10px" }}>
            {skill.name}
            <div className={classes.percent} style={{ width: skill.percent }}></div>
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

      <div className={`${classes.services} d-flex justify-content-center align-items-center flex-column`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          style={{ width: "40px" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
          />
        </svg>
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
