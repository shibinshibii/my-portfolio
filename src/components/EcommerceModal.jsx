import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
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
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="pm-hero">
                <motion.img layoutId="img-ecommerce" src={eCommerce} alt="E-commerce" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
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

                <p className="pm-desc">
                  A fully functional e-commerce platform featuring seamless cart updates, secure checkout, and reliable order tracking.
                </p>

                <div className="pm-footer">
                  <Link to="/ecommerce" state={{ fromModal: true }} className="pm-btn pm-btn--primary" id="ecommerce-modal-view-more-btn">
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

export default EcommerceModal;
