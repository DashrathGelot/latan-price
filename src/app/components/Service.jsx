import Image from "next/image";
import RightArrow from "./common/RightArrow";
import Link from "next/link";
import { motion } from "framer-motion";

const item = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

export default function Service({name, img, className, width, path, desc}) {
  return (
    <motion.div 
        variants={item}
        className={
            `rounded-2xl border mt-3 bg-slate-100 flex flex-col items-center p-3
            ${width ? width : "w-[22%]"}
            ${className && className}`
        }
        // whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
        <div className="w-full h-32 relative rounded-2xl">
            <Image
                className="p-0 pb-0 rounded-2xl"
                src={img}
                alt="service image"
                fill
            />
        </div>
        <div className="text-center mt-2 mb-4">
            <p className="text-black text-sm h-14 para">{desc}</p>
        </div>
        <Link href={path ? path : ""} className="w-full flex items-center rounded-xl left-0 text-center justify-between p-1.5 bg-amber-900">
            <h2 className="text-xl font-semibold text-white text-center ml-2 satisfy">{name}</h2>
            <div className="arrow mr-2"><RightArrow/></div>
        </Link>
    </motion.div>
  );
}

// export default function Service({name, img, className, width, path}) {
//     return (
//       <motion.div 
//           variants={item}
//           className={
//               `rounded-2xl mt-3 bg-slate-100 service
//               ${width ? width : "w-[19%]"}
//               ${className && className}`
//           }
//           whileHover={{ scale: 1.2 }}
//           whileTap={{ scale: 0.9 }}
//           transition={{ type: "spring", stiffness: 400, damping: 17 }}
//       >
//           <div className="w-full h-44 relative">
//               <Image
//                   className="p-4 pb-0"
//                   src={img}
//                   alt="service image"
//                   fill
//               />
//           </div>
//           <Link href={path ? path : ""} className="w-full flex items-center rounded-b-2xl left-0 text-center justify-between p-4 bg-gradient-to-l from-slate-400 via-slate-500 to-zinc-600">
//               <h2 className="text-xl font-bold text-white text-center">{name}</h2>
//               <div className="arrow"><RightArrow/></div>
//           </Link>
//       </motion.div>
//     );
//   }