import Image from "next/image";
import React from "react";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="w-full h-full bg-gray-50 dark:bg-[#111827] overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="mt-24 mb-10 bg-gray-200 dark:bg-[#374151]  w-[105px] h-[28px] flex flex-col items-center justify-center rounded-[12px] cursor-pointer">
            About me
          </div>
          <div className="w-full flex flex-col md:flex-row mb-24 items-center md:gap-x-6 xl:gap-x-8">
            {/* IMAGE */}
            <div className="w-full h-full flex flex-col items-center justify-center mb-10 md:mb-0">
              <div className="w-[400px] h-[360px] flex flex-col justify-center items-center relative">
                <Image
                  src="/about-img.jpg"
                  width={400}
                  height={480}
                  alt="profile"
                  className="w-[280px] h-[360px] md:w-[400px] md:h-[480px] object-cover bg-white border-white dark:border-[#111827] border-[8px] z-10"
                />
                <div className="absolute md:-bottom-24 md:right-8 w-[320px] -bottom-5 h-[360px] md:w-[400px] md:h-[480px] bg-gray-200 border-[8px] border-gray-50 dark:bg-[#374151] dark:border-[#111827]"></div>
              </div>
            </div>
            {/* teXT */}
            <div className="mt-4 flex flex-col items-start mx-7">
              <h1 className="text-[24px] font-semibold leading-[32px] mb-4">
                Curious about me? Here you have it:
              </h1>
              <div className="flex flex-col items-start gap-y-4 text-[16px] leading-6 ">
                <p>
                  I&apos;m a passionate, self-proclaimed designer who
                  specializes in full stack development (React.js & Node.js). I
                  am very enthusiastic about bringing the technical and visual
                  aspects of digital products to life. User experience, pixel
                  perfect design, and writing clear, readable, highly performant
                  code matters to me.
                </p>
                <p>
                  I began my journey as a web developer in 2015, and since then,
                  I&apos;ve continued to grow and evolve as a developer, taking
                  on new challenges and learning the latest technologies along
                  the way. Now, in my early thirties, 7 years after starting my
                  web development journey, I&apos;m building cutting-edge web
                  applications using modern technologies such as Next.js,
                  TypeScript, Nestjs, Tailwindcss, Supabase and much more.
                </p>
                <p>
                  I am very much a progressive thinker and enjoy working on
                  products end to end, from ideation all the way to development.
                </p>
                <p>
                  When I&apos;m not in full-on developer mode, you can find me
                  hovering around on twitter or on indie hacker, witnessing the
                  journey of early startups or enjoying some free time. You can
                  follow me on Twitter where I share tech-related bites and
                  build in public, or you can follow me on GitHub.
                </p>
                <p>
                  One last thing, I&apos;m available for freelance work, so feel
                  free to reach out and say hello! I promise I don&apos;t bite
                  😉
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
