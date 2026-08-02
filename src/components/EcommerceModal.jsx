import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import eCommerce from "../assets/ecommerce.jpg";

function EcommerceModal({ isOpen, onClose }) {
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
              layoutId="card-ecommerce"
              className="pm-card"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="E-commerce"
              style={{ borderRadius: 18 }}
            >
              <div className="pm-hero">
                <motion.img layoutId="img-ecommerce" src={eCommerce} alt="E-commerce" />
                <div className="pm-hero-overlay" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18, delay: 0.12 }}
                >
                  <button className="pm-close" onClick={onClose} aria-label="Close" id="ecommerce-modal-close-btn">
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
                <h2 className="pm-title">E-commerce Platform</h2>

                <div className="pm-tags">
                  {["Django", "JavaScript", "HTML", "CSS", "AJAX"].map((t) => (
                    <span key={t} className="pm-tag">{t}</span>
                  ))}
                </div>

                <ul className="pm-list">
                  <li>Developed a fully functional e-commerce platform with product browsing, cart management, secure checkout, and order tracking.</li>
                  <li>Implemented real-time cart updates using AJAX & Fetch API for a seamless shopping experience.</li>
                  <li>Integrated Django Authentication for user account security and session management.</li>
                </ul>

                <div className="pm-footer">
                  <span className="pm-note">Private repository</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

export default EcommerceModal;
