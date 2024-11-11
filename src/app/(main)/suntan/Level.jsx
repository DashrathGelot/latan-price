import {motion} from 'framer-motion';

const item = {
    hidden: { x: -20, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1
    }
};

export default function Level({name, price, onClick}) {
    return (
        <motion.div 
            onClick={onClick} 
            className="bg-amber-900 rounded-md p-2 m-2"
            variants={item}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
        >
            <h2 className="text-center text-lg font-semibold">{name}</h2>
            <h2 className="text-center text-lg font-semibold">{price}</h2>
        </motion.div>
    );
  }
  