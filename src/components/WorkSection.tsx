import Image from "next/image";
import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

export const WorkSection = () => {
  return (
    <section id="work" className="w-full h-full overflow-hidden ">
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center justify-center gap-y-10 mb-20">
          <div className="w-full flex flex-col items-center justify-center mt-24">
            <div className=" mb-4 bg-gray-200 dark:bg-[#374151]  w-[105px] h-[28px] flex flex-col items-center justify-center rounded-[12px]">
              Works
            </div>
            <div className="">
              The skills, tools and technologies I am really good at:
            </div>
          </div>
          <div className="flex flex-col items-center justify-center odd:flex-row even:flex-row-reverse xl:w-[1152px] max:max-w-[1152px] mx-4">
            {/* card 1 */}
            <div className="w-full h-full flex flex-col md:flex-row  md:items-center min-h-[480px] overflow-hidden rounded-[12px] shadow-md">
              <div className="md:max-w-[576px] w-full md:min-h-[480px] flex flex-col items-center justify-center dark:bg-[#374151] bg-gray-50 flex-grow">
                <Image
                  src="/project.jpg"
                  width={480}
                  height={384}
                  alt="project"
                  className="max-h-[384px]"
                />
              </div>
              <div className="md:max-w-[576px] md:min-h-[480px] w-full h-full dark:bg-[#1F2937]">
                <div className="w-full h-full flex flex-col mt-3 gap-y-5 p-10">
                  <h1 className="text-[24px] font-semibold">Fiskil</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas nec urna ac tellus volutpat viverra. Vestibulum
                    ante ipsum primis in faucibus orci luctus et ultrices
                    posuere cubilia curae.
                  </p>
                  {/* tags */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-[#374151] px-4 rounded-[12px] flex flex-col items-center justify-center">
                      React
                    </div>
                    <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-[#374151] px-4 rounded-[12px] flex flex-col items-center justify-center">
                      React
                    </div>
                    <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-[#374151] px-4 rounded-[12px] flex flex-col items-center justify-center">
                      React
                    </div>
                    <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-[#374151] px-4 rounded-[12px] flex flex-col items-center justify-center">
                      React
                    </div>
                    <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-[#374151] px-4 rounded-[12px] flex flex-col items-center justify-center">
                      React
                    </div>
                    <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-[#374151] px-4 rounded-[12px] flex flex-col items-center justify-center">
                      React
                    </div>
                    <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-[#374151] px-4 rounded-[12px] flex flex-col items-center justify-center">
                      React
                    </div>
                    <div className="bg-gray-200 text-gray-900 dark:text-gray-50 dark:bg-[#374151] px-4 rounded-[12px] flex flex-col items-center justify-center">
                      React
                    </div>
                  </div>
                  {/* icon */}
                  <div className="mt-2 text-gray-600 translate-x-1">
                    <BsBoxArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
