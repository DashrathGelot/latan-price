import Image from "next/image";
import RightArrow from "./components/common/RightArrow";

export default function Home() {
  return (
    <div>
      <div className="w-full flex flex-row h-80 justify-between">
        <div className="basis-[57%] relative text-center animate-jump-in animate-once animate-ease-in-out animate-duration-1000">
          <Image 
            className="rounded-md grayscale" 
            src={"/sun_tan_girl.jpg"} 
            alt="Home page"
            fill
          />
          <div className="w-full absolute top-20 left-0 text-center mt-10">
            <h2 className="text-4xl font-bold text-amber-300 text-center">
              Your Perfect Tan, Just a Shade Away!
            </h2>
          </div>
        </div>
        <div className="w-full basis-2/5 grid grid-flow-row gap-4">
          <div className="rounded-md h-32 border w-full relative bg-gradient-to-r from-violet-200 to-pink-200 animate-fade-left animate-duration-1000 animate-ease-in-out">
            <Image 
              src={"/sore.png"} 
              alt="Logo" 
              fill
            />
          </div>
          <div className="h-full rounded-md bg-gradient-to-br from-amber-300 via-amber-500 to-amber-800 animate-fade-left animate-duration-1000 animate-ease-in-out">
            <p className="animate-pulse text-2xl font-semibold p-6 text-center">Glow Beyond the Sun – Radiant Tans, Anytime, Anywhere!</p>
          </div>
        </div>  
      </div>
      <div className="mt-6 flex flex-col">
        <h2 className="text-4xl font-semibold text-red-700">a world of services, tailored for You!</h2>
        <div className="flex mt-4 justify-between">
          <div className="w-[48%] h-96 rounded-md mt-3 border relative animate-fade-right">
            <div className="w-full">
              <Image
                className="p-6"
                src={"/sun_tan.png"}
                alt="service image"
                fill
              />
            </div>
            <div className="w-full flex items-center absolute top-64 rounded left-0 text-center mt-10 justify-between p-6 bg-slate-400">
              <h2 className="text-2xl font-bold text-white text-center">
                Sun tan
              </h2>
              <div className="arrow">
                <RightArrow/>
              </div>
            </div>
          </div>
          <div className="w-[48%] h-96 rounded-md mt-3 border relative animate-fade-left">
            <Image
              className=""
              src={"/spray_tan.png"}
              alt="service image"
              fill
            />
            <div className="w-full flex items-center absolute top-64 rounded left-0 text-center mt-10 justify-between p-6 bg-slate-400">
              <h2 className="text-2xl font-bold text-white text-center">
                Spray Tan
              </h2>
              <div className="">
                <RightArrow/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4 justify-between">
          <div className="w-[48%] h-96 rounded-md mt-3 border relative animate-flip-up">
            <div className="w-full">
              <Image
                className="p-6"
                src={"/wellfit.png"}
                alt="service image"
                fill
              />
            </div>
            <div className="w-full flex items-center absolute top-64 rounded left-0 text-center mt-10 justify-between p-6 bg-slate-400">
              <h2 className="text-2xl font-bold text-white text-center">
                WellFit
              </h2>
              <div className="">
                <RightArrow/>
              </div>
            </div>
          </div>
          <div className="w-[48%] h-96 rounded-md mt-3 border relative animate-flip-up">
            <Image
              className=""
              src={"/advanced_red_light.png"}
              alt="service image"
              fill
            />
            <div className="w-full flex items-center absolute top-64 rounded left-0 text-center mt-10 justify-between p-6 bg-slate-400">
              <h2 className="text-2xl font-bold text-white text-center">
                Advanced Red Light
              </h2>
              <div className="">
                <RightArrow/>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-4 justify-between">
          <div className="w-[48%] h-96 rounded-md mt-3 border relative animate-fade-down">
            <div className="w-full">
              <Image
                className="p-6"
                src={"/cryo.png"}
                alt="service image"
                fill
              />
            </div>
            <div className="w-full flex items-center absolute top-64 rounded left-0 text-center mt-10 justify-between p-6 bg-slate-400">
              <h2 className="text-2xl font-bold text-white text-center">
                Cryo
              </h2>
              <div className="">
                <RightArrow/>
              </div>
            </div>
          </div>
          <div className="w-[48%] h-96 rounded-md mt-3 border relative animate-fade-down">
            <Image
              className=""
              src={"/booth.png"}
              alt="service image"
              fill
            />
            <div className="w-full flex items-center absolute top-64 rounded left-0 text-center mt-10 justify-between p-6 bg-slate-400">
              <h2 className="text-2xl font-bold text-white text-center">
                Infrared Sauna
              </h2>
              <div className="">
                <RightArrow/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
