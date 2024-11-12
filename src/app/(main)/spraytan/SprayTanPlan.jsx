"use client";
import {motion} from 'framer-motion';

export default function SprayTanPlan({onClick, title, price, desc, itemAnimation}) {
    return (
        <motion.div 
            variants={itemAnimation}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center m-4 mb-2 h-full"
        >
            <div 
                onClick={onClick} 
                className="flex flex-col justify-center items-center relative justify-items-center text-white text-center bg-amber-900 top-3 border-2 border-transparent h-36 w-36 rounded-full"
            >
                <p className="w-[75%] text-lg font-semibold">{title}</p>
                <p className="w-[90%] text-2xl font-bold">{price}</p>
            </div>
            <div 
                className={`flex flex-col items-center text-center rounded-lg w-80 h-80 bg-white p-5 px-7 curved-edge`} 
            >
                <p className="text-black text-lg mt-10 para">{desc}</p>
            </div>
        </motion.div>
    );
}