"use client";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsDot } from "react-icons/bs";
import { LuGithub, LuFacebook, LuLinkedin } from "react-icons/lu";
import Image from "next/image";
import TextEffect from "gpt-type-effect";

export const HeroSection = () => {
  return (
    <section className="w-full h-full md:mt-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="w-full flex flex-col-reverse md:flex-row p-6 gap-y-10 mb-20 md:mb-16">
          <div className="flex flex-col items-start gap-y-10">
            <div className="flex flex-col gap-y-2">
              <h1 className="text-3xl font-bold">Hi, I&apos;m Rojan🖐️</h1>
              <div className=" text-[16px] h-[10rem] md:min-h-[10rem] md:w-[35vw] xl:w-[45vw] xl:h-[8rem]">
                <TextEffect
                  // minTypingDelay={1000}
                  // maxTypingDelay={3000}
                  thinkingDelay={10000}
                  caretBackground="#fff"
                  text="I'm a full stack developer (React.js & Node.js) with a
                focus on creating (and occasionally designing) exceptional
                digital experiences that are fast, accessible, visually
                appealing, and responsive. Even though I have been creating web
                applications for over 7 years, I still love it as if it was
                something new."
                />
              </div>
              <p className="text-[12px]">
                Powered by{" "}
                <a
                  href="https://www.npmjs.com/package/gpt-type-effect"
                  className="text-[#ffd032]"
                  target="_blank"
                >
                  &apos;gpt-type-effect&apos;
                </a>
              </p>
            </div>
            <div className="text-[16px]  flex flex-col gap-y-2">
              <div className="flex gap-x-2 items-center">
                <div className="text-xl">
                  <CiLocationOn />
                </div>{" "}
                Surunga, Saptati
              </div>
              <div className="flex gap-x-2 items-center">
                <div className="text-xl">
                  <BsDot />
                </div>
                Available for new projects
              </div>
            </div>
            <div className="flex text-lg  gap-x-3">
              <a
                href="https://github.com/rojanmagar2001"
                target="_blank"
                className="hover:text-[#ffc83d]"
              >
                <LuGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rojan-rana-magar-835580231/"
                target="_blank"
                className="hover:text-[#ffc83d]"
              >
                <LuLinkedin />
              </a>
              <a
                href="https://www.facebook.com/roz3n.magar.0911/"
                target="_blank"
                className="hover:text-[#ffc83d]"
              >
                <LuFacebook />
              </a>
            </div>
          </div>
          {/* image */}
          <div className="w-full h-full flex flex-col items-center md:items-end justify-center mb-5 md:mb-0">
            <div className="w-[400px] h-[360px] flex flex-col justify-center items-center relative">
              <Image
                src="/profile-img.jpg"
                width={280}
                height={320}
                alt="profile"
                className="w-[240px] h-[280px] md:w-[280px] md:h-[320px] object-cover bg-white border-white dark:border-[#030712] border-[8px] z-10"
              />
              <div className="absolute md:-bottom-4 md:right-8 w-[280px] bottom-5 h-[280px] md:w-[280px] md:h-[320px] bg-gray-200 dark:bg-[#374151] dark:border-[#030712] border-[8px] border-white"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
