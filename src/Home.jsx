import { Link, useNavigate } from "react-router-dom";
import "./stylesheets/styles.css";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import githubLogo from "./assets/github-mark-white.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import rQg from "./assets/7253845.jpg";
import eCommerce from "./assets/ecommerce.jpg";
import socialImg from "./assets/social.png";
import quizImg from "./assets/quizimg.jpg";

function Home() {
  const phoneNumber = "+91 9061393493";
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const handleButtonPdf = () => {
    setClicked(true);
    setTimeout(() => navigate("/pdf"), 400);
  };
  const handleButtonQuoteGenerator = () => {
    setClicked(true);
    setTimeout(() => navigate("/quotegenerator"), 400);
  };
  const handleButtonEcommerce = () => {
    setClicked(true);
    setTimeout(() => navigate("/ecommerce"), 400);
  };
  const handleButtonSocialMedia = () => {
    setClicked(true);
    setTimeout(() => navigate("/socialmedia"), 400);
  };

  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [showText4, setShowText4] = useState(false);

  const ref = useRef(null);
  const ref2 = useRef(null);
  const IsInView = useInView(ref, { triggerOnce: true, margin: "-100px" });
  const IsInView2 = useInView(ref2, { triggerOnce: true, margin: "-100px" });

  return (
    <motion.div
      initial={false}
      animate={clicked ? { x: -1000, opacity: -3 } : {}}
      transition={{ duration: 0.4 }}
      className="main"
      id="page"
    >
      <div className="container1">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: [-100, 10, 0], opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <h1>Shibin</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeIn", delay: 0.8 }}
        >
          <p>
            I’m a full-stack developer who wants to help<br></br>make the
            internet a more creative, accessible,<br></br> and better place.
          </p>
        </motion.div>
        <div className="hello">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: [50, -8, 3, 0], opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            whileTap={{ scale: 0.9 }}
            style={{ display: "inline-block" }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <a
                href="https://www.linkedin.com/in/shibin-shibi-a783a32b7"
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-icon"
              >
                <FaLinkedin size={29} />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: [50, -8, 3, 0], opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            whileTap={{ scale: 0.9 }}
            style={{ display: "inline-block" }}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <a
                href="https://mail.google.com/mail/?view=cm&to=shibi393493@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mail-icon"
              >
                <AiOutlineMail size={29} />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: [50, -8, 3, 0], opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <a
              href="https://github.com/shibinshibii"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={githubLogo}
                alt="GitHub Logo"
                width="29"
                height="29"
                className="github-icon"
              />
            </a>
          </motion.div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: [50, -8, 3, 0], opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeIn" }}
          >
            <a href="#" data-tooltip-id="phone-tooltip" className="phone-icon">
              <FaPhoneAlt size={26} color="whitesmoke" />
            </a>
          </motion.div>
          <Tooltip
            id="phone-tooltip"
            place="top"
            effect="solid"
            delayHide={4000}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span className="phone-number">{phoneNumber}</span>
            </div>
          </Tooltip>
        </div>
      </div>

      <div className="container2">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 2.6 }}
        >
          My Projects
        </motion.h2>
        <motion.div className="image-grid">
          {" "}
          <motion.div
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: [70, -10, 4, 0], opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 1.3 }}
          >
            <motion.div
              className="image-box"
              whileHover={{ y: -9 }}
              transition={{ duration: 0, ease: "easeIn" }}
              onMouseEnter={() => setShowText(true)}
              onMouseLeave={() => setShowText(false)}
              onClick={handleButtonPdf}
            >
              <img src={rQg} alt="img1"></img>
              {showText && <div className="text-overlay">PDF Query App</div>}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: [70, -10, 4, 0], opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 1.3 }}
          >
            <motion.div
              className="image-box"
              whileHover={{ y: -9 }}
              transition={{ duration: 0, ease: "easeIn" }}
              onMouseEnter={() => setShowText2(true)}
              onMouseLeave={() => setShowText2(false)}
              onClick={handleButtonEcommerce}
            >
              <img src={eCommerce} alt="img1"></img>
              {showText2 && (
                <div className="text-overlay">E-commerce website</div>
              )}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: [70, -10, 4, 0], opacity: 1 }}
            transition={{ duration: 1.3, ease: "easeInOut", delay: 1.3 }}
          >
            <motion.div
              className="image-box"
              whileHover={{ y: -9 }}
              transition={{ duration: 0, ease: "easeIn" }}
              onMouseEnter={() => setShowText3(true)}
              onMouseLeave={() => setShowText3(false)}
              onClick={handleButtonSocialMedia}
            >
              <img src={socialImg} alt="img1"></img>
              {showText3 && (
                <div className="text-overlay">
                  Developer Community Social Media
                </div>
              )}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: [70, -10, 4, 0], opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1.3 }}
          >
            <motion.div
              className="image-box"
              whileHover={{ y: -9 }}
              transition={{ duration: 0, ease: "easeIn" }}
              onMouseEnter={() => setShowText4(true)}
              onMouseLeave={() => setShowText4(false)}
              onClick={handleButtonQuoteGenerator}
            >
              <img src={quizImg} alt="img1"></img>
              {showText4 && (
                <div className="text-overlay">Random Quote Generator</div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="container3"
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        animate={IsInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <motion.h2 className="h2">Education & Qualification</motion.h2>

        <motion.div className="textbox">
          <ul>
            <li>
              <b>Bachelor of Computer Application (BCA) - </b>Calicut University{" "}
              <i>(2021-2024)</i>
            </li>
            <li>
              <b>Higher Secondary Education (Computer Science) - </b>MSM Higher
              Secondary School <i>(2019-2021)</i>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="container4"
        ref={ref2}
        initial={{ y: 50, opacity: 0 }}
        animate={IsInView2 ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
      >
        <h2>Certifications</h2>
        <p className="p1">Python Full Stack Developer - Internship Program</p>
        <p className="p2">
          <b>Technovalley Software India Pvt Ltd Kochi</b> <i>(Aug 2024 -Feb 2025)</i>
        </p>
        <ul>
          <li>
            Collaborating on real-world web applications, focusing on Django
            backend development and React-based frontend.{" "}
          </li>
          <li>
            Gaining hands-on experience in REST API development, database
            management, and performance optimization.{" "}
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
}
export default Home;
