import Image from "next/image";
import shehzad from '../../public/images/ShehzadRahim.png'
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex lg:flex-row flex-col ">

      <div className="flex flex-col lg:gap-5 gap-3 lg:w-1/2 lg:my-20 mt-32 mb-20 md:mb-20 lg:mx-28 mx-12">
      <h2 className="lg:text-4xl md:text-3xl text-2xl uppercase ">i am a professional</h2>
      <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-[#e90074] uppercase">web designer</h1>
     <p className="text-[17px] text-gray-300 md:w-[80%]">Hey I am <span className="font-bold text-[#e90074] ">Shehzad Rahim</span> From Karachi Pakistan, I am a modern web designer and developer with couple years of experience in IT field, also have giant intrest in Artificial Intelligence.</p>

     <button className="bg-[#e90074] w-[150px] py-2 rounded-full">
      <Link href='/contact'>Hire Me</Link>
      </button>
     </div>

     <div className="md:w-1/2 self-center">
     <div className="relative bg-gradient-to-r from-[#e90074] to-[#660088] md:my-5 my-2 md:mr-20 lg:w-[420px] md:w-[370px] w-[320px] lg:mx-0 mx-5  rounded-tr-[100px] rounded-tl-[50px] rounded-bl-[100px] overflow-hidden ">

      <Image className=" ml-1 transition-all duration-[3s]" src={shehzad} alt="shehzad rahim"></Image>
      
     

     </div>
     </div>
    </div>
  );
}
