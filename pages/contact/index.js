import classes from "./contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Contact = () => {
    
  const submitHandler = (e) => {
    e.preventDefault();
  };

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

  return (
    <section className={classes.contact}>
      <div className="d-flex justify-content-center align-items-center">
        <div className="main-title-box">
          <p className="d-flex justify-content-center align-items-center">
            CONTACT
          </p>
        </div>
      </div>
      <p className={classes.contactTitle}>
        Please feel free to contact me about anything.
      </p>
      <div className="d-flex justify-content-center align-items-center">
        <div className="dash-title" style={{ marginTop: "15px" }}>
          LET'S SOCIALIZE
        </div>
      </div>
      <div className="d-flex justify-content-center" style={{ gap: "10px" }}>
        {/* <div className={`${classes.socialCircle} ${classes.icon} ${classes.iconFill}`}><FontAwesomeIcon icon={faGithub}/></div>
        <div className={`${classes.socialCircle} ${classes.icon} ${classes.iconEnter}`}><FontAwesomeIcon icon={faTelegram}/></div>
        <div className={`${classes.socialCircle} ${classes.icon} ${classes.iconExpand}`}><FontAwesomeIcon icon={faEnvelope}/></div>
        <div className={`${classes.socialCircle} ${classes.icon} ${classes.iconCollapse}`}><FontAwesomeIcon icon={faInstagram}/></div>
        <div className={`${classes.socialCircle} ${classes.icon} ${classes.iconRotate}`}><FontAwesomeIcon icon={faLinkedin}/></div> */}

      <a href="https://github.com/M-AminM" className={`${classes.socialCircle} ${classes.github}`}>
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.telegram.me/M_AminMM" className={`${classes.socialCircle} ${classes.telegram}`}>
            <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="mailto:aminfarid1234@gmail.com" className={`${classes.socialCircle} ${classes.gmail}`}>
            <FontAwesomeIcon icon={faEnvelope}/>
        </a>
        <a href="https://www.instagram.com/m_aminmm4/" className={`${classes.socialCircle} ${classes.instagram}`}>
            <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="http://www.linkedin.com/in/amin-asgharnejad-a79a27239" className={`${classes.socialCircle} ${classes.linkedin}`}>
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="dash-title">DROP ME A LINE!</div>
      </div>
      <div className={classes.contactLine}></div>
      <div className="d-flex justify-content-between">
        <div>
          <h4 className={classes.contactName}>Amin Asgharnejad</h4>
          <a href="mailto:aminfarid1234@gmail.com" className={classes.contactEmail}>aminfarid1234@gmail.com</a>
          <p className={classes.contactEarth}>Planet Earth</p>
          <p className={classes.contactEarth}>+989194075413</p>
        </div>

        <div className={classes.stamp}>
          <img src="/media/stamp-image.png" />
        </div>
      </div>

      <form style={{ paddingTop: "40px" }} onSubmit={submitHandler}>
        <div className="d-flex">
          <label htmlFor="name" className={classes.contactLabel}>
            NAME
          </label>
          <input className={classes.inputContact} name="name" id="name" type="text" />
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
          <textarea className={classes.inputContact} rows="5" id="message" />
        </div>

        <button className={classes.sendMessage}>SEND</button>
      </form>
    </section>
  );
};
export default Contact;
