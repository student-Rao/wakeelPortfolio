import Image from "next/image"
import cvimage from '../../../images/cvimage.jpg'



export default function CV(){
    return(
        <div className="maincv">
         <div className="cvdiv">
            <Image src={cvimage} alt="cvimage" />
         </div>
        </div>
    )
}