import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import quizImg from "../assets/quizimg.jpg";

function QuoteModal({ isOpen, onClose }) {
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
              layoutId="card-quote"
              className="pm-card"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Random Quote Generator"
              style={{ borderRadius: 18 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="pm-hero">
                <motion.img layoutId="img-quote" src={quizImg} alt="Quote Generator" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                <div className="pm-hero-overlay" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18, delay: 0.12 }}
                >
                  <button className="pm-close" onClick={onClose} aria-label="Close" id="quote-modal-close-btn">
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
                <h2 className="pm-title">Random Quote Generator</h2>

                <p className="pm-desc">
                  A dynamic web app that fetches and displays random motivational quotes on demand, integrated with external quote APIs.
                </p>

                <div className="pm-footer">
                  <Link to="/quotegenerator" state={{ fromModal: true }} className="pm-btn pm-btn--primary" id="quote-modal-view-more-btn">
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

export default QuoteModal;
