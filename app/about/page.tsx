import Image from "next/image";
import pic from "../../public/images/eye-pic.jpg";
export default function Page() {
  return (
    <main className=" container">
      <section className=" pb-24 pt-[14rem]">
        <h1 className=" mb-0 mt-0 text-[6rem] font-bold uppercase leading-none tracking-[-2px]">
          Sutima Phetsatien
        </h1>

        <div className="grid auto-rows-fr grid-cols-2 items-start gap-x-8 gap-y-8">
          <div className="col-span-1 row-span-1 grid">
            <div className=" text-[2rem]">
              I'm Sutima Phetsatien, a Front-end developer and Web developer
              with a passion for creating visually striking and user-friendly
              websites.
            </div>
            <div className="ml-auto mt-8 max-w-[31rem]">
              As a Web developer, I have a passion for creating innovative and
              user-friendly websites. With a strong background in programming
              and design, I thrive on turning ideas into functional and visually
              appealing online experiences. My goal is to stay up-to-date with
              the latest web technologies and deliver solutions that meet both
              client and user expectations.
            </div>
          </div>
          <div>
            <Image
              src={pic}
              alt="sutima"
              width={400}
              height={400}
              className=" ml-10"
            />
          </div>
        </div>

        <section className="flex items-start justify-between mt-20">
          <h2 className="mb-0 mt-0 text-[4.5rem] font-bold uppercase leading-none tracking-[-2px]">
            Experience
          </h2>
          <div className=" flex w-1/2 flex-col gap-y-8">
            <div className="relative flex items-end justify-between overflow-hidden pb-4">
              <div>
                <div className=" mb-0.5">
                  <div className=" text-[2rem] font-medium">
                    TOPGUN Company Limited
                  </div>
                  <div className=" uppercase">
                    <div className=" text-[1.1rem]">
                      Web Developer (Front-end)
                    </div>
                  </div>
                </div>
              </div>
              <div className=" text-[1rem]">February 2023 - Present</div>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] w-[280px] origin-left transform bg-[#0000004c] bg-opacity-30 md:w-[592px]"></div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
