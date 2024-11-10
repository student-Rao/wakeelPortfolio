import Image from "next/image"
import portfoliologo from "../images/portfoliologo.png"
import Link from "next/link"
export default function Header() {
    return (
        <div className="navbar">
<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"
/>
            <ul className="navButtons">

                <li id="logo">
                    <Link href={'/'}>Portfolio</Link></li>
                <li className="laptopbtn">
                    <Link href={'/'}>Home</Link></li>
                <li className="laptopbtn">
                    <Link href={'contact-us'}>Contact </Link></li>
                <li className="laptopbtn">
                    <Link href={'about'}>About </Link></li>
                   <li id="menuicon"> <i className="ri-menu-fold-line"></i></li>
            </ul>
            <ul className="navMobileButtons">

                {/* <li id="logo"> */}
                    {/* <Link href={'/'}>Portfolio</Link></li> */}
                    <li id="crossicon"><i className="ri-contract-up-down-line"></i></li>
                <li>
                    <Link href={'/'}>Home</Link></li>
                <li>
                    <Link href={'contact-us'}>Contact </Link></li>
                <li>
                    <Link href={'about'}>About </Link></li>
                 
            </ul>
        </div>
    )

}