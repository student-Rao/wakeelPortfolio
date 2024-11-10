import style from './style.module.css'
import Image from 'next/image'
import aboutpagepic from '../../../images/aboutpagepic.png'

export default function About(){
    return (
        <div className={style.aboutsection}>
            <p>About me</p>
            <div className={style.aboutlimit}>
                <div className={style.aboutpagepic}>
                <Image src={aboutpagepic} alt='' id={style.aboutpic}  />
                </div>
                <div className={style.aboutpagetext}>
                    <p>Hello, my name is Wakeel, and I am passionate about coding and software development. Since the day I wrote my first line of code, I have been fascinated by the power of technology to solve problems and create innovative solutions. Over the years, I have immersed myself in learning various programming languages, frameworks, and tools, with a strong focus on writing clean, efficient, and maintainable code. My journey in tech has been driven by a love for constant learning and the challenge of building something meaningful. Whether it’s developing user-friendly interfaces, working on back-end systems, or collaborating on complex projects, I strive to deliver high-quality results that make a difference. Coding for me is not just a career but a craft that I refine every day. Outside the digital world, I enjoy exploring new ideas, staying updated with the latest technology trends, and sharing my knowledge with others. This portfolio is a reflection of my dedication, skills, and the exciting projects I’ve worked on, and I’m thrilled to share it with you.</p>
                </div>
            </div>
            <div className={style.contactfooter}>
            <p>Made With <span><i className="ri-poker-hearts-fill"></i></span></p>
          </div>
        </div>
    )
}