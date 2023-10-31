"use client";
import Image from "next/image";
import EatU from "../../../public/images/EatU.jpg"
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
                    EatU
                  </h1>
                  <p className=" mt-4 max-w-[32rem]">
                    The EatU app is a mobile application used to randomize food.
                    And use it in reviews as a new option to help you decide.
                    Whether to choose a restaurant or a restaurant menu, and to
                    provide a variety of publicity channels for a restaurant.
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
                  <div className=" leading-1.2  text-[1.375rem]">Design</div>
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
              <source
                src="/EatU_video.mp4"
                type="video/mp4"
              />
            </video>
          </section>
          <section>
            <div className=" ml-auto mr-auto w-full max-w-[48rem]">
              <div className=" p-24">
                <p>
                  The app allows users to input their preferences, such as
                  cuisine type, dietary restrictions, and price range, and
                  generates random food options based on these inputs. It also
                  provides detailed information about each restaurant, including
                  ratings, reviews, and contact information.
                </p>
                <h3 className=" mb-4 mt-5 text-[25px] font-bold uppercase leading-[-1px] -tracking-[1px]">
                  Additionally, the app offers advertising opportunities for
                  restaurants to promote their menus and attract more customers.
                </h3>
                <p>
                  And has a distinctive feature of voice randomization. Just
                  tell the characters in the app, it will instantly randomized.
                  This unique feature of voice randomization adds an element of
                  surprise and fun to the app, making each interaction with the
                  characters a new and exciting experience. Users can enjoy a
                  wide range of voices.
                </p>
                <h3 className=" mb-4 mt-5 text-[25px] font-bold uppercase leading-[-1px] -tracking-[1px]">
                  The project was presented selected to present business ideas
                  to entrepreneurs at the “Digital Business Entrepreneurship
                  Seminar.”
                </h3>
              </div>
            </div>

            <Image
              src={EatU}
              width={1440}
              height={900}
              alt="EatU"
            />
          </section>
        </div>
      </main>
      <SlidingImages />
      <ContactUs />
    </>
  );
}
