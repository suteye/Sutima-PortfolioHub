import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import Pic from "../../public/pic.jpg";

export default function Index() {
  return (
    <main>
      <div className="flex h-screen items-center justify-center">
        <div className="flex flex-col w-full mt-11 md:w-1/2">
          <div className="font-semibold">
            <h1 className="text-[45px]">Hello there</h1>
             <h2 className="text-[25px]">
                I’m Sutima
            </h2>   
            
            <h3 className="text-[25px]"> 
                <Typewriter
                    options={{
                        strings: ['a Freelance', 'a Frontend Developer', 'a Computer Science Student'],
                        autoStart: true,
                        loop: true,
                    }}
                /> 
            </h3>
            
            <p className="mt-5">
            (Description about me)
            </p>
          </div>
        </div>

        <div className="hidden w-1/2 md:flex">
          <Image src={Pic} alt="Your Photo" className="mx-auto h-full w-full" />
        </div>
      </div>
    </main>
  );
}
