"use client";
import Image from "next/image";
import salePage from "../../../public/images/salePages.png"
import ContactUs from "@/components/contact-us";
import SlidingImages from "@/components/sliding-Images";

export default function Pos() {
    return (
      <>
        <main className=" container">
          <div className=" mb-[6rem] mt-[14rem]">
            <section>
              <div className="mb-28 grid grid-cols-1 gap-4 gap-x-12 gap-y-12 md:grid-cols-2">
                <div className=" col-span-1 row-span-1 flex flex-col items-start">
                  <div className=" m-4 md:m-0">
                    <h1 className=" mb-0 mt-0 text-[6rem] font-bold uppercase leading-none -tracking-[2px]">
                      Point of Sale (POS)
                    </h1>
                    <p className=" mt-4 max-w-[32rem]">
                      This is a point-of-sale system that is project work for
                      the subject of{" "}
                      <i>Selected Topics In Software Engineering </i>. <br />
                      The system is designed to be used in a Bakery shop.
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
                    <div className=" leading-1.2  text-[1.375rem]">2022</div>
                    {/* divided line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] w-[272px] origin-left transform bg-[#0000004c] bg-opacity-30 md:w-[592px]"></div>
                  </div>
                  <div className="relative mb-8 pb-4">
                    <div className="">
                      <div className=" text-[#7a7575] opacity-60">
                        <p className=" text-[1.1rem]">Service</p>
                      </div>
                    </div>
                    <div className=" leading-1.2  text-[1.375rem]">
                      Development / Deployment
                    </div>
                    {/* divided line */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] w-[272px] origin-left transform bg-[#0000004c] bg-opacity-30 md:w-[592px]"></div>
                  </div>
                </div>
              </div>
              <Image
                src={salePage}
                width={1440}
                height={900}
                alt="POS"
              />
            </section>
            <section>
              <div className=" ml-auto mr-auto w-full max-w-[48rem]">
                <div className=" p-24">
                  <p>
                  It is a web application that is used to sell bakery and drinks, manage financial transactions, control and check the total number of bakery and drinks within the store.
                  </p>
                  <h3 className=" mb-4 mt-5 text-[25px] font-bold uppercase leading-[-1px] -tracking-[1px]">
                  Deployed a production on an AWS EC2 instance using a CI/CD pipeline built with GitHub Actions and Docker.
                  </h3>
                  <p>
                  And this project is developed using the MERN system, so it will use MongoDB, Express, React, and Node.
                  </p>
                </div>
              </div>

            </section>
          </div>
        </main>
        <SlidingImages />
        <ContactUs />
      </>
    );
}