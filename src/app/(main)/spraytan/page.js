"use client";
import {motion} from 'framer-motion';
import SprayTanPlan from './SprayTanPlan';

export default function SprayTan() {
    const onLevel = () => {

    }

    const onPlan = () => {

    }

    const text = "Spray Tan".split(" ")

    return (
        <div className="flex flex-col justify-between mt-10">
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
            <div className="h-full">
                <SprayTanPlan/>
            </div>
        </div>
    );
}
