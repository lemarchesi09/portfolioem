import logoEmail from "./assets/icon-email.svg"
import logoGithub from "./assets/icon-github.svg"
import logoLinkedin from "./assets/icon-linkedin.svg"
import {Link} from 'react-router-dom'
export default function Contact() {
  return (
    <div className=" bg-darkBg flex flex-col items-center py-[4.5rem] rounded-b-3xl -mt-10 ">
      <h2 className=" text-whiteBG text-xl">. contact</h2>
      <div className="flex w-full justify-center gap-8 my-10">
        <Link target="_blank" to={"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=lemarchesi9@gmail.com"} ><img src={logoEmail} alt="" /> </Link>
        <Link target="_blank" to={'https://github.com/lemarchesi09'}><img src={logoGithub} alt="" /> </Link>
        <Link target="_blank"  to={'https://www.linkedin.com/in/lemarchesi/'}><img src={logoLinkedin} alt="" /> </Link>
      </div>
      <p className="text-primaryPink">Let's get in touch!</p>
    </div>
  );
}
