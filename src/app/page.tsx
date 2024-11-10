import Image from "next/image";
import Link from "next/link";
import pic from '../../images/pic.png'
import { link } from "fs";
export default function Home() {
  return (
    
  <main className="main">
    <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"
/>
    <div className="maintextsec">
      <span>Rao Wakeel</span>
      <p>I am a student at GIAIC, where I have studied HTML, CSS, and TypeScript. I am currently learning about  Next, JS and I am developed a few projects using Next.JS</p>
      <button><b>Download CV</b></button>
      <div className="accountlinks">
        <li><Link href={'https://www.linkedin.com/in/rao-wakeel-445847318/'} target="_blank" ><i className="ri-linkedin-box-fill"></i></Link></li>
        <li><Link href={'https://www.facebook.com/profile.php?id=100087208187542'} ><i className="ri-facebook-circle-fill"></i></Link></li>
        <li><Link href={''} ><i className="ri-instagram-fill"></i></Link></li>
        <li><Link href={''} ><i className="ri-twitter-line"></i></Link></li>
      </div>
    </div>
    <div className="mainpicsec">
      <div className="image">
     {/* <Image src={pic} alt="pic" id="mypic" /> */}
      </div>
    </div>
  </main>
  );
}
