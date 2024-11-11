"use client";
import {motion} from 'framer-motion';

const item = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function SprayTanPlan({onClick, title, price, noOfChecks, color, text, levelPrices}) {
    return (
        <motion.div 
            variants={item}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center m-4 mb-2 h-full"
        >
            <div onClick={onClick} className="flex flex-col justify-center items-center relative justify-items-center text-white text-center bg-amber-900 top-12 border-2 border-transparent h-32 w-32 rounded-full">
                <p className="w-[75%] text-lg font-semibold">Sunless I</p>
                <p className="w-[90%] text-2xl font-bold">$49.99</p>
            </div>
            <div 
                className={`flex flex-col items-center text-center rounded-lg h-full w-[25%] bg-white p-5 px-7 curved-edge`} 
            >
                <p className="text-black text-lg mt-10 para">Get a sun-kissed glow with our tanning service for a radiant, confident look year-round.</p>
            </div>
        </motion.div>
    );
}