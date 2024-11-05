import Image from "next/image";

export default function ImgWithText({src, width, height}) {
    return <div className={`relative text-center animate-jump-in animate-once animate-ease-in-out animate-duration-1000`}>
        <Image 
            className="rounded-md grayscale" 
            src={src} 
            alt="Image"
            fill
        />
        <div className="w-full absolute top-20 left-0 text-center mt-10">
            <h2 className="text-4xl font-bold text-amber-300 text-center">
                Your Perfect Tan, Just a Shade Away!
            </h2>
        </div>
    </div>;
}