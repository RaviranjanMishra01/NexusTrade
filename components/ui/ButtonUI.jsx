import Image from "next/image";
import "./ButtonUI.css";



function ButtonUI({ text,className,img }){
    return <>
          <button className={`${className}`}>
            {img && (<Image src={img} alt="icon" width={20} height={20}/>)}
            {text}
            </button>
    </>
}
export default ButtonUI;