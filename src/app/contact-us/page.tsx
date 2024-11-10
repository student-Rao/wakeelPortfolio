import style from './style.module.css'

export default function Contact(){
    return (
        <div className={style.contactsection}>
<link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"
/>
            <h1><b>Get in touch</b></h1>
          <div id={style.para}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div>
          <label className={style.form1}>
            <h2>Name</h2>
            {/* <br /> */}
            <input type="text" placeholder='Please enter your name' id={style.name} />
          </label>
          <label className={style.form1}>
            <h2>Email</h2>
          <input type="text" placeholder='Please enter your email' id={style.name} />
          </label>
          <label className={style.form1} >
          <h2>Message</h2>
          <textarea  id={style.message} placeholder='Message' ></textarea>
          </label>
          <button><b>Submint</b><i className="ri-terminal-line"></i></button>
          <div className={style.contactfooter}>
            <p>Made With <span><i className="ri-poker-hearts-fill"></i></span></p>
          </div>
        </div>
    )
}