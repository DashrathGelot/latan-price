import Image from "next/image";

const IconButton = ({ src, altText, onClick, left, right, className }) => {
  return (
    <button id="iconButton" className={`text-primary focus:outline-none ml-3 mr-3 pl-3 pr-3 flex items-center justify-center ${className && className}`} onClick={onClick}>
      {right && <span className="mr-4">{right}</span>}
      <Image src={src} alt={altText} width={20} height={10} priority/> 
      {left && <span className="ml-6">{left}</span>}
    </button>
  );
};

export default IconButton;
