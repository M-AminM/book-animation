import classes from "./contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTelegram, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    
  const submitHandler = (e) => {
    e.preventDefault();
  };

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
        <div className={classes.socialCircle}><FontAwesomeIcon icon={faGithub}/></div>
        <div className={classes.socialCircle}><FontAwesomeIcon icon={faTelegram}/></div>
        <div className={classes.socialCircle}><FontAwesomeIcon icon={faEnvelope}/></div>
        <div className={classes.socialCircle}><FontAwesomeIcon icon={faInstagram}/></div>
        <div className={classes.socialCircle}><FontAwesomeIcon icon={faLinkedin}/></div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className="dash-title">DROP ME A LINE!</div>
      </div>
      <div className={classes.contactLine}></div>
      <div className="d-flex justify-content-between">
        <div>
          <h4 className={classes.contactName}>Amin Asgharnejad</h4>
          <p className={classes.contactEmail}>aminfarid1234@gmail.com</p>
          <p className={classes.contactEarth}>Planet Earth</p>
          <p className={classes.contactEarth}>+989194075413</p>
        </div>

        <div className={classes.stamp}>
          <img src="https://themes.pixelwars.org/bookcard/images/site/stamp-image.png" />
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