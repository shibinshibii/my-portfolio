import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import socialImg from "../assets/social.png";

function SocialMediaModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="pm-backdrop-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
          />

          <div className="pm-backdrop-center" onClick={onClose}>
            <motion.div
              layoutId="card-socialmedia"
              className="pm-card"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Developer Community Social Media"
              style={{ borderRadius: 18 }}
            >
              <div className="pm-hero">
                <motion.img layoutId="img-socialmedia" src={socialImg} alt="Social Media Platform" />
                <div className="pm-hero-overlay" />
                {/* In-progress badge */}
                <motion.div
                  className="pm-badge"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.18 }}
                >
                  In Progress
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18, delay: 0.12 }}
                >
                  <button className="pm-close" onClick={onClose} aria-label="Close" id="social-modal-close-btn">
                    <IoClose size={20} />
                  </button>
                </motion.div>
              </div>

              <motion.div
                className="pm-body"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.22, delay: 0.14 }}
              >
                <h2 className="pm-title">Developer Community Social Media</h2>

                <div className="pm-tags">
                  {["Django", "JavaScript", "HTML", "CSS", "AJAX", "Bootstrap"].map((t) => (
                    <span key={t} className="pm-tag">{t}</span>
                  ))}
                </div>

                <ul className="pm-list">
                  <li>Building a social media platform for developers to connect, share knowledge, and collaborate on projects.</li>
                  <li>Features: authentication, user-generated posts, follow system, interactive discussions, and real-time chat.</li>
                  <li>Implementing AJAX for seamless dynamic updates with a responsive Bootstrap UI.</li>
                </ul>

                <div className="pm-footer">
                  <span className="pm-note">🚧 Work in progress</span>
                  <Link to="/socialmedia" state={{ fromModal: true }} className="pm-btn pm-btn--view-more" id="social-modal-view-more-btn">
                    View More →
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default SocialMediaModal;
