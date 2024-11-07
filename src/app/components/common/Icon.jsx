import Image from "next/image";

export default function Icon({src, className, width, path}) {
    return (
        <div className="m-4 mb-0">
            <Image
                className="p-4"
                src={src}
                alt="service image"
                width={70}
                height={50}
            />
        </div>
  );
}