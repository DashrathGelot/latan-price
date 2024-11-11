"use client";
import { prefix } from "./prefix";
import Service from "./components/Service";
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
};
  
export default function Home() {
    const text = "World of services, tailored for you!".split(" ");
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
                    <Service name={"A.R.T"} img={`${prefix}/Red-Light-Therapy.jpg`}
                        desc={"Get a sun-kissed glow with our tanning service for a radiant, confident look year-round."}/>
                    <Service name={"Emerald laser"} img={`${prefix}/Emerald-Laser.webp`}
                        desc={"Get a sun-kissed glow with our tanning service for a radiant, confident look year-round."}/>
                </div>
            </motion.div>
            <div className="mt-8 flex justify-between">
                <motion.button whileTap={{ scale: 0.85 }} type="button" className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-amber-900 font-semibold rounded-lg px-5 py-2 text-center me-2 mb-2">
                    New Client
                </motion.button>
                <motion.button whileTap={{ scale: 0.85 }} type="button" className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-amber-900 font-semibold rounded-lg px-5 py-2 text-center me-2 mb-2">
                    Member Rewards
                </motion.button>
                <motion.button whileTap={{ scale: 0.85 }} type="button" className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-amber-900 font-semibold rounded-lg px-5 py-2 text-center me-2 mb-2">
                    Policy
                </motion.button>
            </div>
        </div>
    );
}
