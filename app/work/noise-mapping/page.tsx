"use client";
import Image from "next/image";
import nosieMap from "../../../public/images/noisemapping.png"
import ContactUs from "@/components/contact-us";
import SlidingImages from "@/components/sliding-Images";
export default function NoiseMapping() {
  return (
    <>
     <main className=" container">
      <div className=" mb-[6rem] mt-[14rem]">
        <section>
          <div className="mb-28 grid grid-cols-1 gap-4 gap-x-12 gap-y-12 md:grid-cols-2">
            <div className=" col-span-1 row-span-1 flex flex-col items-start">
              <div className=" m-4 md:m-0">
                <h1 className=" mb-0 mt-0 text-[6rem] font-bold uppercase leading-none -tracking-[2px]">
                  Noise Mapping
                </h1>
                <p className=" mt-4 max-w-[32rem]">
                  Noise mapping is used in the student presentation. Study of
                  Noise Pollution and Human Perception: a Noise Mapping in a
                  University Campus, This involves the collection of data on
                  noise levels across a specific area and the creation of visual
                  representations or maps to help researchers and policymakers
                  better understand the distribution of noise and its potential
                  effects on people.
                </p>
              </div>
            </div>

            <div className=" col-span-1 row-span-1 flex flex-col items-start">
              <div className="relative mb-8 pb-4">
                <div className="">
                  <div className=" text-[#7a7575] opacity-60">
                    <p className=" text-[1.1rem]">Year</p>
                  </div>
                </div>
                <div className=" leading-1.2  text-[1.375rem]">2023</div>
                {/* divided line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] w-[272px] origin-left transform bg-[#0000004c] bg-opacity-30 md:w-[592px]"></div>
              </div>
              <div className="relative mb-8 pb-4">
                <div className="">
                  <div className=" text-[#7a7575] opacity-60">
                    <p className=" text-[1.1rem]">Service</p>
                  </div>
                </div>
                <div className=" leading-1.2  text-[1.375rem]">Development</div>
                {/* divided line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] w-[272px] origin-left transform bg-[#0000004c] bg-opacity-30 md:w-[592px]"></div>
              </div>
            </div>
          </div>
          <video
            className=" w-full object-cover object-center"
            autoPlay
            loop
            playsInline
          >
            <source src="/Noise Pollution Chatbot_video.mp4" type="video/mp4" />
          </video>
        </section>
        <section>
          <div className=" ml-auto mr-auto w-full max-w-[48rem]">
            <div className=" p-24">
              <p>
                The data is collected from the LINE chatbot related to sound.
                The initial experiment involved using the LINE chatbot with
                voluntary student groups within the university area to report
                their experiences and provide information about the sounds they
                encountered.
              </p>
              <h3 className=" mb-4 mt-5 text-[25px] font-bold uppercase leading-[-1px] -tracking-[1px]">
                This development utilizes LINE APIs to access text messages and
                employs Google App Script to control the workflow.
              </h3>
              <p>
                The results can be visualized on a map, indicating the areas
                where noise pollution occurs. This research will contribute to
                the development of risk reduction measures and strategies to
                address the consequences of noise pollution. Ultimately, it aims
                to create a conducive learning environment for students and
                improve the overall quality of the university's internal
                environment.
              </p>
            </div>
          </div>

          <Image
            src={nosieMap}
            width={1440}
            height={900}
            alt="Noise Mapping_1"
          />
        </section>
      </div>
    </main>
    <SlidingImages />
      <ContactUs/>
    </>
   
  );
}
