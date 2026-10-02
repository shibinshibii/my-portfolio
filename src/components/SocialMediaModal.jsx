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
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="pm-hero">
                <motion.img layoutId="img-socialmedia" src={socialImg} alt="Social Media Platform" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                <div className="pm-hero-overlay" />
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

                <p className="pm-desc">
                  A social platform where developers can connect, share knowledge, and collaborate on projects through interactive discussions and real-time chat.
                </p>

                <div className="pm-footer">
                  <Link to="/socialmedia" state={{ fromModal: true }} className="pm-btn pm-btn--primary" id="social-modal-view-more-btn">
                    Learn more
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
