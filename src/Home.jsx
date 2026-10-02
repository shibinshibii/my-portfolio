import "./stylesheets/styles.css";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import githubLogo from "./assets/github-mark-white.png";
import { FaPhoneAlt } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import rQg from "./assets/7253845.jpg";
import eCommerce from "./assets/ecommerce.jpg";
import socialImg from "./assets/social.png";
import quizImg from "./assets/quizimg.jpg";

import PdfModal from "./components/PdfModal";
import EcommerceModal from "./components/EcommerceModal";
import SocialMediaModal from "./components/SocialMediaModal";
import QuoteModal from "./components/QuoteModal";

function Home() {
  const phoneNumber = "+91 9061393493";

  /* hover label state */
  const [hover, setHover] = useState(null);

  /* modal open state – driven by ?project= URL param */
  const [searchParams, setSearchParams] = useSearchParams();
  const openModal = searchParams.get("project"); // "pdf" | "ecommerce" | "social" | "quote" | null

  const openProject = (id) => setSearchParams({ project: id });
  const closeProject = () => setSearchParams({});

  const ref = useRef(null);
  const IsInView = useInView(ref, { triggerOnce: true, margin: "-100px" });

  return (
    <>
      <motion.div
        initial={false}
        animate={{}}
        className="main"
        id="page"
      >
        {/* ─── Hero ─── */}
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
              I'm a full-stack developer who wants to help<br />make the
              internet a more creative, accessible,<br /> and better place.
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
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                <a href="https://www.linkedin.com/in/shibin-shibi-a783a32b7" target="_blank" rel="noopener noreferrer" className="linkedin-icon">
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
              <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                <a href="https://mail.google.com/mail/?view=cm&to=shibi393493@gmail.com" target="_blank" rel="noopener noreferrer" className="mail-icon">
                  <AiOutlineMail size={29} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: [50, -8, 3, 0], opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <a href="https://github.com/shibinshibii" target="_blank" rel="noopener noreferrer">
                <img src={githubLogo} alt="GitHub Logo" width="29" height="29" className="github-icon" />
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

            <Tooltip id="phone-tooltip" place="top" effect="solid" delayHide={4000}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span className="phone-number">{phoneNumber}</span>
              </div>
            </Tooltip>
          </div>
        </div>

        {/* ─── Projects ─── */}
        <div className="container2">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 2.6 }}
          >
            My Projects
          </motion.h2>

          <motion.div className="image-grid">

            {/* ── Card 1 – PDF Query ── */}
            <motion.div
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: [70, -10, 4, 0], opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 1.3 }}
            >
              <motion.div
                layoutId="card-pdf"
                className="image-box"
                whileHover={{ y: -9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onMouseEnter={() => setHover("pdf")}
                onMouseLeave={() => setHover(null)}
                onClick={() => openProject("pdf")}
                style={{ borderRadius: "5%", cursor: "pointer" }}
              >
                <motion.img layoutId="img-pdf" src={rQg} alt="PDF Query App" />
                {hover === "pdf" && <div className="text-overlay">PDF Query App</div>}
              </motion.div>
            </motion.div>

            {/* ── Card 2 – Ecommerce ── */}
            <motion.div
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: [70, -10, 4, 0], opacity: 1 }}
              transition={{ duration: 1.1, ease: "easeInOut", delay: 1.3 }}
            >
              <motion.div
                layoutId="card-ecommerce"
                className="image-box"
                whileHover={{ y: -9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onMouseEnter={() => setHover("ecommerce")}
                onMouseLeave={() => setHover(null)}
                onClick={() => openProject("ecommerce")}
                style={{ borderRadius: "5%", cursor: "pointer" }}
              >
                <motion.img layoutId="img-ecommerce" src={eCommerce} alt="E-commerce" />
                {hover === "ecommerce" && <div className="text-overlay">E-commerce website</div>}
              </motion.div>
            </motion.div>

            {/* ── Card 3 – Social Media ── */}
            <motion.div
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: [70, -10, 4, 0], opacity: 1 }}
              transition={{ duration: 1.3, ease: "easeInOut", delay: 1.3 }}
            >
              <motion.div
                layoutId="card-socialmedia"
                className="image-box"
                whileHover={{ y: -9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onMouseEnter={() => setHover("social")}
                onMouseLeave={() => setHover(null)}
                onClick={() => openProject("social")}
                style={{ borderRadius: "5%", cursor: "pointer" }}
              >
                <motion.img layoutId="img-socialmedia" src={socialImg} alt="Social Media" />
                {hover === "social" && (
                  <div className="text-overlay">Developer Community Social Media</div>
                )}
              </motion.div>
            </motion.div>

            {/* ── Card 4 – Quote Generator ── */}
            <motion.div
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: [70, -10, 4, 0], opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 1.3 }}
            >
              <motion.div
                layoutId="card-quote"
                className="image-box"
                whileHover={{ y: -9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                onMouseEnter={() => setHover("quote")}
                onMouseLeave={() => setHover(null)}
                onClick={() => openProject("quote")}
                style={{ borderRadius: "5%", cursor: "pointer" }}
              >
                <motion.img layoutId="img-quote" src={quizImg} alt="Quote Generator" />
                {hover === "quote" && (
                  <div className="text-overlay">Random Quote Generator</div>
                )}
              </motion.div>
            </motion.div>

          </motion.div>
        </div>

        {/* ─── Education ─── */}
        <motion.div
          className="container3"
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={IsInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.h2 className="h2">Education &amp; Qualification</motion.h2>
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

        {/* ─── Certifications ─── */}
        <motion.div
          className="container4"
          initial={{ y: 50, opacity: 0 }}
          animate={IsInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.3, ease: "easeInOut", delay: 0.5 }}
        >
          <h2>Certifications</h2>
          <p className="p1">Python Full Stack Developer - Internship Program</p>
          <p className="p2">
            <b>Technovalley Software India Pvt Ltd Kochi</b>{" "}
            <i>(Aug 2024 - Feb 2025)</i>
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

      {/* ── Per-project modals – outside page div so layoutId morphs freely ── */}
      <PdfModal isOpen={openModal === "pdf"} onClose={closeProject} />
      <EcommerceModal isOpen={openModal === "ecommerce"} onClose={closeProject} />
      <SocialMediaModal isOpen={openModal === "social"} onClose={closeProject} />
      <QuoteModal isOpen={openModal === "quote"} onClose={closeProject} />
    </>
  );
}

export default Home;
