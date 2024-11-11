"use client";
import { levels, plans } from "./config";
import Level from "./Level";
import Plan from "./Plan";
import {motion} from 'framer-motion';

const container = {
    hidden: { opacity: 0, scale: 0.3, x: -50 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        duration: 0.2,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.2
        }
    }
};

export default function Suntan() {
    const onLevel = () => {

    }

    const onPlan = () => {

    }

    return (
        <motion.div 
            variants={container} 
            initial="hidden" 
            animate="visible" 
            className="flex flex-row justify-between mt-5"
        >
            <motion.div 
                variants={container} 
                initial="hidden" 
                animate="visible"
                className="flex flex-col mt-14 mr-10"
            >
                <h2 className="text-3xl mb-5 font-semibold text-amber-900">Sun tan</h2>
                { levels.map(level => <Level key={level.name} onClick={onLevel} name={level.name} price={level.price}/>) }
            </motion.div>
            { plans.map(plan => 
                <Plan 
                    key={plan.title} 
                    onClick={onPlan} 
                    title={plan.title} 
                    price={plan.price} 
                    noOfChecks={plan.noOfChecks} 
                    color={plan.color}
                    text={plan.text}
                    levelPrices={plan.levelPrices}
                />) 
            }     
        </motion.div>
    );
}
