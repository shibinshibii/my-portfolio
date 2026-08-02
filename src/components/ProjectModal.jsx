import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

/* ─────────────────────────── animation variants ─────────────────────────── */
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalVariants = {
  /* Start tiny & slightly blurred – like a macOS app icon launching */
  hidden: {
    opacity: 0,
    scale: 0.35,
    y: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 26,
      mass: 0.9,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.55,
    y: 20,
    filter: "blur(6px)",
    transition: { duration: 0.18, ease: "easeIn" },
  },
};

/* ─────────────────────────── component ─────────────────────────── */
function ProjectModal({ project, onClose }) {
  /* Lock body scroll while modal is open */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* Close on Escape key */
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {/* Backdrop */}
      <motion.div
        className="pm-backdrop"
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        aria-label="Close modal"
      >
        {/* Modal card – stops click propagation so clicking inside doesn't close */}
        <motion.div
          className="pm-card"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          {/* Hero image */}
          <div className="pm-hero">
            <img src={project.image} alt={project.title} />
            <div className="pm-hero-overlay" />
            {/* Close button */}
            <button
              className="pm-close"
              onClick={onClose}
              aria-label="Close"
              id="modal-close-btn"
            >
              <IoClose size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="pm-body">
            <h2 className="pm-title">{project.title}</h2>

            {/* Tech stack pills */}
            <div className="pm-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="pm-tag">
                  {tag}
                </span>
              ))}
            </div>

            {/* Description bullets */}
            <ul className="pm-list">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="pm-footer">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pm-btn pm-btn--primary"
                  id="modal-live-demo-btn"
                >
                  <FiExternalLink size={15} />
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pm-btn pm-btn--secondary"
                  id="modal-github-btn"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;
