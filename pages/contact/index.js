import classes from "./contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTelegram,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Contact = () => {
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

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = {};
    Array.from(e.currentTarget.elements).forEach((element) => {
      if (!element.name) return;
      formData[element.name] = element.value;
    });
    const results = await fetch("/api/mail", {
      method: "post",
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    });
    if (results.status == 200) {
      console.log("success");
    } else {
      console.log("error");
    }
  };


  return (
    <section className={classes.contact}>
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="main-title-box d-flex justify-content-center align-items-center">
          CONTACT
        </h2>
      </div>
      <p className={classes.contactTitle}>
        Please feel free to contact me about anything.
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="dash-title" style={{ marginTop: "15px" }}>
          LET'S SOCIALIZE
        </h2>
      </div>
      <div className="d-flex justify-content-center" style={{ gap: "10px" }}>
        <a
          href="https://github.com/M-AminM"
          className={`${classes.socialCircle} ${classes.github}`}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.telegram.me/M_AminMM"
          className={`${classes.socialCircle} ${classes.telegram}`}
        >
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a
          href="mailto:aminfarid1234@gmail.com"
          className={`${classes.socialCircle} ${classes.gmail}`}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.instagram.com/m_aminmm4/"
          className={`${classes.socialCircle} ${classes.instagram}`}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a
          href="http://www.linkedin.com/in/amin-asgharnejad-a79a27239"
          className={`${classes.socialCircle} ${classes.linkedin}`}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <h2 className="dash-title">DROP ME A LINE!</h2>
      </div>
      <div className={classes.contactLine}></div>
      <div className="d-flex justify-content-between">
        <div>
          <h4 className={classes.contactName}>Amin Asgharnejad</h4>
          <a
            href="mailto:aminfarid1234@gmail.com"
            className={classes.contactEmail}
          >
            aminfarid1234@gmail.com
          </a>
          <p className={classes.contactEarth}>Planet Earth</p>
          <p className={classes.contactEarth}>+989194075413</p>
        </div>

        <div className={classes.stamp}>
          <img src="/media/stamp-image.png" alt="stamp-image"/>
        </div>
      </div>

      <form style={{ paddingTop: "40px" }} onSubmit={submitHandler}>
        <div className="d-flex">
          <label htmlFor="name" className={classes.contactLabel}>
            NAME
          </label>
          <input
            className={classes.inputContact}
            name="name"
            id="name"
            type="text"
          />
        </div>

        <div className="d-flex">
          <label htmlFor="email" className={classes.contactLabel}>
            EMAIL
          </label>
          <input
            className={classes.inputContact}
            name="email"
            id="email"
            type="email"
          />
        </div>
        <div className="d-flex">
          <label htmlFor="subject" className={classes.contactLabel}>
            SUBJECT
          </label>
          <input
            className={classes.inputContact}
            name="subject"
            id="subject"
            type="text"
          />
        </div>
        <div className="d-flex">
          <label htmlFor="message" className={classes.contactLabel}>
            MESSAGE
          </label>
          <textarea className={classes.inputContact} name="message" rows="5" id="message" />
        </div>
        <button className={classes.sendMessage}>SEND</button>
      </form>
    </section>
  );
};
export default Contact;
