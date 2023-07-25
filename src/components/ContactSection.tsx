import React from "react";
import { GoMail } from "react-icons/go";

import { IoCallOutline, IoCopyOutline } from "react-icons/io5";
import { VscGithubAlt } from "react-icons/vsc";
import { PiTwitterLogoLight } from "react-icons/pi";
import { FiLinkedin } from "react-icons/fi";

export const ContactSection = () => {
  return (
    <section className="w-full h-full overflow-hidden ">
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center justify-center gap-y-10 mb-20">
          <div className="w-full flex flex-col items-center justify-center mt-24">
            <div className=" mb-4 bg-gray-200 dark:bg-[#374151]  w-[105px] h-[28px] flex flex-col items-center justify-center rounded-[12px]">
              Get in touch
            </div>
            <div className="">Nice things people have said about me:</div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <div className="flex items-center justify-between gap-x-4 md:gap-x-8 text-[20px] md:text-[36px] -tracking-[2%] font-thin">
              <a href="mailto: rozenmagar058@gmail.com">
                <GoMail />
              </a>
              <div className="font-semibold">rozenmagar058@gmail.com</div>
              <div>
                <IoCopyOutline />
              </div>
            </div>
            <div className="flex items-center justify-between gap-x-4 md:gap-x-8 text-[20px] md:text-[36px] -tracking-[2%] font-thin">
              <a href="tel: +9779823196300">
                <IoCallOutline />
              </a>
              <div className="font-semibold">+977 9823196300</div>
              <div>
                <IoCopyOutline />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-y-2">
            <div>You may also find me on these platforms!</div>
            <div className="flex items-center justify-between text-xl gap-x-3">
              <a>
                <VscGithubAlt />
              </a>
              <a>
                <PiTwitterLogoLight />
              </a>
              <a>
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
