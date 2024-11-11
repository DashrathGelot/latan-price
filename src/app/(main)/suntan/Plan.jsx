"use client";
import Icon from "@/app/components/common/Icon";
import { prefix } from "@/app/prefix";
import {motion} from 'framer-motion';

const item = {
    hidden: { y: -100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function Plan({onClick, title, price, noOfChecks, color, text, levelPrices}) {
    return (
        <motion.div 
            variants={item}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center m-4 mb-2 mt-0 rounded-md"
        >
            <div onClick={onClick} className="flex flex-col justify-center items-center relative justify-items-center text-black text-center bg-[#dda15e] top-5 border-2 border-white h-[7.5rem] w-28 rounded-full">
                <p className="w-[60%] text-sm font-semibold">{title}</p>
                <p className="w-[90%] text-xl font-bold">{price}</p>
            </div>
            <div 
                className={`flex flex-col items-center rounded-md h-[93%] w-32`} 
                style={{
                    backgroundColor: color
                }}
            >
                { Array.from(Array(noOfChecks), (e, i) => <Icon key={i} src={`${prefix}/checked-white.svg`}/>) }
                { levelPrices && levelPrices.map(cost => <p key={cost} className="text-black text-3xl font-bold mt-[2.4rem] mb-3">{cost}</p>) }
                { text && <p className="text-white m-4 mb-0 mt-6 p-2 pb-0">{text}</p>}
            </div>
        </motion.div>
    );
}
