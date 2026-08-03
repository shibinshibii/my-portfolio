import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import rQg from "../assets/7253845.jpg";

function PdfModal({ isOpen, onClose }) {
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
          {/* Frosted backdrop – separate from layoutId card so it can fade independently */}
          <motion.div
            className="pm-backdrop-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            onClick={onClose}
          />

          {/* Card morphs from the project card via layoutId */}
          <div className="pm-backdrop-center" onClick={onClose}>
            <motion.div
              layoutId="card-pdf"
              className="pm-card"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="PDF Query App"
              style={{ borderRadius: 18 }}
            >
              {/* Hero image – also morphs */}
              <div className="pm-hero">
                <motion.img layoutId="img-pdf" src={rQg} alt="PDF Query App" />
                <div className="pm-hero-overlay" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18, delay: 0.12 }}
                >
                  <button className="pm-close" onClick={onClose} aria-label="Close" id="pdf-modal-close-btn">
                    <IoClose size={20} />
                  </button>
                </motion.div>
              </div>

              {/* Body fades in after the card morphs */}
              <motion.div
                className="pm-body"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.22, delay: 0.14 }}
              >
                <h2 className="pm-title">PDF Query App</h2>

                <div className="pm-tags">
                  {["FastAPI", "React", "LlamaIndex", "Gemini"].map((t) => (
                    <span key={t} className="pm-tag">{t}</span>
                  ))}
                </div>

                <ul className="pm-list">
                  <li>Built a full-stack PDF Query Web App using React and FastAPI, letting users upload PDFs and ask context-based questions.</li>
                  <li>Integrated Gemini LLM via LlamaIndex to parse, index, and retrieve answers using vector embeddings from uploaded documents.</li>
                  <li>Implemented file uploads, local vector caching, and persistent chat history.</li>
                </ul>

                <div className="pm-footer">
                  <div className="pm-footer-row">
                    <a
                      href="https://pdf-query-app-delta.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pm-btn pm-btn--primary"
                      id="pdf-modal-live-btn"
                    >
                      <FiExternalLink size={15} /> Live Demo
                    </a>
                  </div>
                  <Link to="/pdf" state={{ fromModal: true }} className="pm-btn pm-btn--view-more" id="pdf-modal-view-more-btn">
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

export default PdfModal;
