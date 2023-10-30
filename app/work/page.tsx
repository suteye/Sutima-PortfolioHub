"use client";
import Image from "next/image";
import salePage from "../../public/images/salePages.png";
import nosieMap from "../../public/images/noisemapping.png"
import EatU from "../../public/images/EatU.jpg"
import ContactUs from "@/components/contact-us";
import SlidingImages from "@/components/sliding-Images";
export default function Page() {
  return (
    <>
    <main className=" container">
      <section className="pb-[6rem] pt-[14rem]">
        <div className="">
          <h1 className=" mb-0 mt-0 text-[6rem] font-bold uppercase tracking-[-2px]">
            My Latest Work
          </h1>
        </div>
        <div className="grid auto-cols-[1fr] grid-cols-[1fr_1fr] grid-rows-[auto] gap-x-12 gap-y-32">        
        
        <div className="mb-6 overflow-hidden">
            <a href="/work/noise-mapping" target="_blank">
              <Image src={nosieMap} width={1440} height={900} alt="POS" />
              <div className="mb-1.5 mt-9 flex items-end justify-between">
              <div>
                <div className=" uppercase">
                  <div className=" text-[17px]">Development</div>
                  <div className=" invisible text-[17px] "></div>
                </div>
              </div>
              <div className=" uppercase">
                <div className=" text-[17px]">2023</div>
              </div>
            </div>
            <h3 className=" uppercase font-bold text-[50px] tracking-[-1px] leading-1">
            Noise Mapping
            </h3>
            </a>
          </div>

          <div className="mb-6 overflow-hidden">
            <a href="/work/eatu" target="_blank">
              <Image src={EatU} width={1440} height={900} alt="POS" />
              <div className="mb-1.5 mt-9 flex items-end justify-between">
              <div>
                <div className=" uppercase">
                  <div className=" text-[17px]">Design</div>
                  <div className=" invisible text-[17px] "></div>
                </div>
              </div>
              <div className=" uppercase">
                <div className=" text-[17px]">2023</div>
              </div>
            </div>
            <h3 className=" uppercase font-bold text-[50px] tracking-[-1px] leading-1">
            EatU
            </h3>
            </a>    
          </div>

          <div className="mb-6 overflow-hidden">
            <a href="/work/pos" target="_blank">
              <Image src={salePage} width={1440} height={900} alt="POS" />
              <div className="mb-1.5 mt-9 flex items-end justify-between">
              <div>
                <div className=" uppercase">
                  <div className=" text-[17px]">Development</div>
                  <div className=" text-[17px]">Deployment</div>
                  <div className=" invisible text-[17px] "></div>
                </div>
              </div>
              <div className=" uppercase">
                <div className=" text-[17px]">2022</div>
              </div>
            </div>
            <h3 className=" uppercase font-bold text-[50px] tracking-[-1px] leading-1">
                Point of Sale (POS)
            </h3>
            </a>
            
          </div>
        </div>
      </section>
    </main>
    <SlidingImages />
      <ContactUs/>
    </>
    
  );
}
