import Image from "next/image";
import React from "react";

export const ExperienceSection = () => {
  return (
    <section
      id="exprerience"
      className="w-full h-full bg-gray-50 dark:bg-[#111827] overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-y-10 mb-16">
          <div className="flex flex-col items-center">
            <div className="mt-24 mb-10 bg-gray-200 dark:bg-[#374151]  w-[105px] h-[28px] flex flex-col items-center justify-center rounded-[12px]">
              Experience
            </div>
            <div className="">
              The skills, tools and technologies I am really good at:
            </div>
          </div>
          <div className="flex flex-col items-center mx-4 gap-y-8">
            {/* card 1 */}
            <div className="w-full flex flex-col md:flex-row justify-between bg-white dark:bg-[#1F2937]  md:gap-x-24 gap-y-4 md:gap-y-0 p-6 shadow-md rounded-[12px]">
              {/* Company logo */}
              <div className="dark:bg-[#1F2937]">
                <Image
                  src="/aitc.png"
                  width={102}
                  height={28}
                  alt="microsoft"
                />
              </div>
              {/* Experience details */}
              <div className="flex flex-col-reverse md:flex-row justify-between md:gap-x-24 gap-y-4 md:gap-y-0">
                {/* details */}
                <div className="flex flex-col items-start gap-y-4">
                  <h1 className="text-[24px] font-semibold">
                    Sr. Backend Developer
                  </h1>
                  <ul className="list-disc flex flex-col gap-y-2 text-[14px] translate-x-2 md:text-[16px]">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Ut pretium arcu et massa semper, id fringilla leo semper.
                    </li>
                    <li>Sed quis justo ac magna.</li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                </div>
                {/* date */}
                <div className="text-[14px]">Nov 2021 - Present</div>
              </div>
            </div>
            {/* card 1 */}
            <div className="w-full flex flex-col md:flex-row justify-between bg-white dark:bg-[#1F2937]  md:gap-x-24 gap-y-4 md:gap-y-0 p-6 shadow-md rounded-[12px]">
              {/* Company logo */}
              <div>
                <Image src="/aitc.png" width={102} height={28} alt="aitc" />
              </div>
              {/* Experience details */}
              <div className="flex flex-col-reverse md:flex-row justify-between md:gap-x-24 gap-y-4 md:gap-y-0">
                {/* details */}
                <div className="flex flex-col items-start gap-y-4">
                  <h1 className="text-[24px] font-semibold">
                    Sr. Backend Developer
                  </h1>
                  <ul className="list-disc flex flex-col gap-y-2 translate-x-2 text-[14px] md:text-[16px]">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Ut pretium arcu et massa semper, id fringilla leo semper.
                    </li>
                    <li>Sed quis justo ac magna.</li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                </div>
                {/* date */}
                <div className="text-[14px]">Nov 2021 - Present</div>
              </div>
            </div>
            {/* card 1 */}
            <div className="w-full flex flex-col md:flex-row justify-between bg-white dark:bg-[#1F2937]  md:gap-x-24 gap-y-4 md:gap-y-0 p-6 shadow-md rounded-[12px]">
              {/* Company logo */}
              <div>
                <Image src="/aitc.png" width={102} height={28} alt="aitc" />
              </div>
              {/* Experience details */}
              <div className="flex flex-col-reverse md:flex-row justify-between md:gap-x-24 gap-y-4 md:gap-y-0">
                {/* details */}
                <div className="flex flex-col items-start gap-y-4">
                  <h1 className="text-[24px] font-semibold">
                    Sr. Backend Developer
                  </h1>
                  <ul className="list-disc flex flex-col gap-y-2 translate-x-2 text-[14px] md:text-[16px]">
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                    <li>
                      Ut pretium arcu et massa semper, id fringilla leo semper.
                    </li>
                    <li>Sed quis justo ac magna.</li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </li>
                  </ul>
                </div>
                {/* date */}
                <div className="text-[14px]">Nov 2021 - Present</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
