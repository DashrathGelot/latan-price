import Image from "next/image";
import RightArrow from "./components/common/RightArrow";
import { prefix } from "./prefix";
import Service from "./components/Service";

export default function Home() {
  return (
    <div>
        <div className="w-full flex flex-row h-80 justify-between">
            <div className="basis-[57%] relative text-center animate-jump-in animate-once animate-ease-in-out animate-duration-1000">
                <Image 
                    className="rounded-md grayscale" 
                    src={`${prefix}/sun_tan_girl.jpg`} 
                    alt="Home page"
                    fill
                />
                <div className="w-full absolute top-20 left-0 text-center mt-20">
                    <h2 className="text-4xl font-bold text-amber-300 text-center">
                        Your Perfect Tan, Just a Shade Away!!!
                    </h2>
                </div>
            </div>
            <div className="w-full basis-2/5 grid grid-flow-row gap-5">
                <div className="rounded-md h-36 border w-full relative bg-gradient-to-r from-violet-200 to-pink-200 animate-fade-left animate-duration-1000 animate-ease-in-out">
                    <Image 
                        src={`${prefix}/sore.png`} 
                        alt="Logo" 
                        fill
                    />
                </div>
                <div className="h-full rounded-md bg-gradient-to-br from-amber-300 via-amber-500 to-amber-600 animate-fade-left animate-duration-1000 animate-ease-in-out justify-center">
                    <p className="animate-pulse text-3xl font-semibold p-6 text-center">Glow Beyond the Sun, Radiant Tans, Anytime, Anywhere!</p>
                </div>
            </div>  
        </div>
        <div className="mt-6 flex flex-col">
            <h2 className="text-3xl font-semibold text-red-700">a world of services, tailored for You!</h2>
            <div className="flex mt-4 justify-between">
                <Service name={"Sun tan"} img={`${prefix}/sun_tan.png`}/>
                <Service name={"Spray tan"} img={`${prefix}/spray_tan.png`} isUp={true}/>
                <Service name={"Wellfit"} img={`${prefix}/booth.png`}/>
                <Service name={"Cryo"} img={`${prefix}/cryo.png`} isUp={true}/>
            </div>
            {/* <div className="flex mt-4 justify-between">
                <Service name={"Advanced Red Light"} img={`${prefix}/advanced_red_light.png`}/>
                <Service name={"Cryo"} img={`${prefix}/cryo.png`} isUp={true}/>
                <Service name={"Infrared Sauna"} img={`${prefix}/wellfit.png`}/>
            </div> */}
        </div>
    </div>);
}
