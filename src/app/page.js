"use client";
import { prefix } from "./prefix";
import Service from "./components/Service";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./components/common/Modal";
import { useState } from "react";
import ModalContainer from "./components/common/ModalContainer";
import { popups } from "./config";

const container = {
    hidden: { opacity: 1, scale: 0, y: 100 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
};
  
export default function Home() {
    const [topic, setTopic] = useState(undefined);
    const [popup, setPopup] = useState({});
    
    const text = "World of services, tailored for you!".split(" ");

    const popupButtons = ["New Client", "Member Rewards", "Policy"];

    const onTopic = (input) => {
        if ("close" === input) {
            setTopic(undefined);
            return;
        }
        setTopic(input);
        setPopup(popups.filter(p => p.title === input)[0]);
    }

    return (
        <div className="mt-6 flex flex-col">
            <div className="text-5xl text-amber-900 text-center title">
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
            <motion.div variants={container} initial="hidden" animate="visible" className="mt-2">
                <div className="flex mt-4 justify-between" >
                    <Service path={"/suntan"} name={"Sun tan"} img={`${prefix}/sun-bed-2.jpg`} 
                        desc={"Get a sun-kissed glow with our tanning service for a radiant, confident look year-round."}
                    />
                    <Service path={"/spraytan"} name={"Spray tan"} img={`${prefix}/spray-tan-2.jpg`}
                        desc={"Get a flawless, natural-looking tan with our spray tanning safe, quick, and long-lasting results."}
                    />
                    <Service path={"/infrared"} name={"Infrared Sauna"} img={`${prefix}/Infra-Red-Sauna.jpg`}
                        desc={"Get a sun-kissed glow with our tanning service for a radiant, confident look year-round."}
                    />
                    <Service path={"/wellfit"} name={"Wellfit"} img={`${prefix}/wellfit-2.jpg`}
                        desc={"Get a sun-kissed glow with our tanning service for a radiant, confident look year-round."}
                    />
                </div>
                <div className="flex mt-4 justify-evenly">
                    <Service name={"Cryo"} img={`${prefix}/Cryo-scaled.webp`}
                        desc={"Get a sun-kissed glow with our tanning service for a radiant, confident look year-round."}/>
                    <Service name={"Advanced red light"} img={`${prefix}/Red-Light-Therapy.jpg`}
                        desc={"Get a sun-kissed glow with our tanning service for a radiant, confident look year-round."}/>
                    <Service name={"Emerald laser"} img={`${prefix}/Emerald-Laser.webp`}
                        desc={"Get a sun-kissed glow with our tanning service for a radiant, confident look year-round."}/>
                </div>
            </motion.div>
            <div className="mt-8 flex justify-between">
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
