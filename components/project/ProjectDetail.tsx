"use client";

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
      className="flex w-full justify-between items-center px-[100px] py-[50px] border-t border-[rgb(201, 201, 201)] cursor-pointer transition-all duration-200 ease-in-out hover:opacity-50"
    >
      <h2 className="text-[60px] m-0 font-normal transition-all duration-400 hover:-translate-x-[10px]">{title}</h2>
      <p className=" transition-all duration-[0.4s] font-light  hover:translate-x-[10px]">Development</p>
    </div>
  );
}
