import { FaGithub , FaLinkedin , FaDev } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className=" flex md:flex-row flex-col justify-between gap-3 mt-10 md:px-20 px-10 py-3 items-center bg-gradient-to-r from-[#e90074] to-[#660088]">
      <p className=" sm:text-[16px] text-[16px]">all right reserved <span className="text-[#660088] font-bold">Shehzad Rahim</span> 2024</p>
      <ul className="flex gap-4 text-2xl">
        <li>
            <Link className="hover:text-[#17b6e1]" href="https://github.com/Shehzad-Rahim"> <FaGithub />  </Link>
        </li>
        <li>
            <Link className="hover:text-[#17b6e1]" href="https://www.linkedin.com/in/shahzad-rahim-37932b2b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin /> </Link>
        </li>
        <li>
            <Link className="hover:text-[#17b6e1]" href="https://dev.to/srahimm33"> <FaDev /> </Link>
        </li>
      </ul>
      <p className=" sm:text-[16px] text-[14px]">shehzadrahim33@gmail.com</p>
    </div>
  )
}

export default Footer
