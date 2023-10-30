"use client";

import Link from "next/link";
import { prefix } from "@/utils/prefix";

type ProjectDetailProps = {
  index: number;
  title: string;
  manageModal: (
    isHovered: boolean,
    index: number,
    x: number,
    y: number,
  ) => void;
};

export default function Index({
  index,
  title,
  manageModal,
}: ProjectDetailProps) {
  return (
    <div
      onMouseEnter={(e) => {
        manageModal(true, index, e.clientX, e.clientY);
      }}
      onMouseLeave={(e) => {
        manageModal(false, index, e.clientX, e.clientY);
      }}
      className="border-[rgb(201, 201, 201)]  flex w-full cursor-pointer items-center justify-center border-t px-[100px] py-[50px] transition-all duration-200 ease-in-out hover:opacity-50 md:justify-between"
    >
      <p className=" ml-6 font-light transition-all duration-[0.4s] hover:translate-x-[10px]  md:ml-0">
      {index === 1 ? "2022" : "2023"}
      </p>
      <Link href={`${prefix}work/${index + 1}`}>
        <h2 className="m-0 text-[clamp(1rem,-0.14rem+4.862vw,3.75rem)] font-normal transition-all duration-400 hover:-translate-x-[10px]">
          {title}
        </h2>
      </Link>
      <p className=" ml-6 font-light transition-all duration-[0.4s] hover:translate-x-[10px]  md:ml-0">
        Development
      </p>
    </div>
  );
}
