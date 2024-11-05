import Image from "next/image";
import RightArrow from "./common/RightArrow";

export default function Service({name, img, isUp}) {
  return (
    <div className={`w-[24%] h-72 rounded-md mt-3 border relative ${isUp ? "animate-flip-up" : "animate-flip-down"}`}>
        <div className="w-full">
            <Image
                className="p-6"
                src={img}
                alt="service image"
                fill
            />
        </div>
        <div className="w-full flex items-center absolute top-44 rounded left-0 text-center mt-10 justify-between p-6 bg-slate-400">
            <h2 className="text-2xl font-bold text-white text-center">{name}</h2>
            <div className="arrow"><RightArrow/></div>
        </div>
    </div>
  );
}