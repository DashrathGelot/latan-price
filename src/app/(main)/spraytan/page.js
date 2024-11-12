"use client";
import {AnimatePresence, motion} from 'framer-motion';
import SprayTanPlan from './SprayTanPlan';
import { sprayTan, sprayTanPopups } from './config';
import Modal from '@/app/components/common/Modal';
import ModalContainer from '@/app/components/common/ModalContainer';
import { useState } from 'react';

const container = {
    hidden: { opacity: 0, scale: 0.3 },
    visible: {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.2
        }
    }
};

const itemAnimations = {
    "Sunless I": {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1
        }
    },
    "Sunless II": {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    },
    "Wellfit": {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1
        }
    },
};

export default function SprayTan() {
    const text = "Spray Tan".split(" ");
    const popupButtons = ["How to do", "What is WellFit", "Policy"];
    const [topic, setTopic] = useState(undefined);
    const [popup, setPopup] = useState({});

    const onTopic = (input) => {
        if ("close" === input) {
            setTopic(undefined);
            return;
        }
        setTopic(input);
        setPopup(sprayTanPopups.filter(p => p.title === input)[0]);
    }

    return (
        <div className="flex flex-col justify-between mt-6">
            <div className="text-5xl text-amber-900 text-center title m-7">
                { text.map((el, i) => (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25, delay: i / 10 }}
                        key={i}
                    > {el}{" "}</motion.span>
                    ))
                }
            </div>
            <motion.div 
                variants={container} 
                initial="hidden" 
                animate="visible"  
                className="h-full flex flex-row"
            >
                {
                    sprayTan.map(plan => <SprayTanPlan key={plan.title} title={plan.title} price={plan.price} desc={plan.desc} itemAnimation={itemAnimations[plan.title]}/>)
                }
            </motion.div>
            <div className="mt-16 flex justify-between">
                {popupButtons.map((name) => <motion.button 
                    key={name}
                    whileTap={{ scale: 0.85 }} 
                    type="button" 
                    className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-amber-900 font-semibold rounded-lg px-5 py-2 text-center me-2 mb-2"
                    onClick={() => onTopic(name)}
                >
                    {name}
                </motion.button>)}
            </div>
            <AnimatePresence>
                { topic && <Modal open={topic ? true : false} onClose={() => onTopic("close")}>
                    <ModalContainer title={popup.title} content={popup.content}/>
                </Modal>}
            </AnimatePresence>
        </div>
    );
}
