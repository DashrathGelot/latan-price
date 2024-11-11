import { motion } from "framer-motion";

const backdropVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 0.2,
      },
    }
};
  
const modalVariant = {
    hidden: {
      y: "100vh",
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
      },
    }
};
  

const Modal = ({ children, onClose }) => {
    return (
        <motion.div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-10 grid place-content-center"
            variants={backdropVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.div className="modal-container" variants={modalVariant}>
                {children}
                <motion.div
                    whileHover={{ rotate: 45 }}
                    className="close"
                    onClick={onClose}
                >
                    <div></div>
                    <div></div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Modal;
