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
        <div className="mt-6 flex flex-col justify-between">
            <div className="text-3xl font-semibold text-amber-800 text-center">
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
            <motion.div variants={container} initial="hidden" animate="visible" className="mt-4">
                <div className="flex mt-4 justify-between" >
                    <Service path={"/suntan"} name={"Sun tan"} img={`${prefix}/sun_tan.png`}/>
                    <Service path={"/spraytan"} name={"Spray tan"} img={`${prefix}/spray_tan.png`}/>
                    <Service path={"/infrared"} name={"Infrared Sauna"} img={`${prefix}/booth.png`}/>
                    <Service path={"/wellfit"} name={"Wellfit"} img={`${prefix}/wellfit.png`}/>
                </div>
                <div className="flex mt-4 justify-evenly">
                    <Service name={"Cryo"} img={`${prefix}/cryo.png`}/>
                    <Service name={"A.R.T"} img={`${prefix}/advanced_red_light.png`}/>
                    <Service name={"Emerald laser"} img={`${prefix}/emerald_laser.png`}/>
                </div>
            </motion.div>
            <div className="mt-20 flex justify-between">
                <motion.button whileTap={{ scale: 0.85 }} type="button" className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-amber-900 font-semibold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">
                    New Client
                </motion.button>
                <motion.button whileTap={{ scale: 0.85 }} type="button" className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-amber-900 font-semibold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">
                    Member Rewards
                </motion.button>
                <motion.button whileTap={{ scale: 0.85 }} type="button" className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-amber-900 font-semibold rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2">
                    Policy
                </motion.button>
            </div>
        </div>
    );
}
