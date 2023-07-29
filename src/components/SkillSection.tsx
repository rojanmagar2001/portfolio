import Image from "next/image";
import React from "react";

export const SkillSection = () => {
  return (
    <section id="skill" className="w-full h-full overflow-hidden">
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center justify-center gap-y-10 mb-20">
          <div className="w-full flex flex-col items-center justify-center mt-24">
            <div className=" mb-4 bg-gray-200 dark:bg-[#374151]  w-[105px] h-[28px] flex flex-col items-center justify-center rounded-[12px]">
              Skills
            </div>
            <div className="">
              The skills, tools and technologies I am really good at:
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-24 gap-y-4 ">
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image
                src="/logo/javascript.svg"
                width={64}
                height={64}
                alt="javascript"
              />
              <span>Javascript</span>
            </div>
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image
                src="/logo/typescript.svg"
                width={64}
                height={64}
                alt="typescript"
              />
              <span>Javascript</span>
            </div>
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image src="/logo/react.svg" width={64} height={64} alt="react" />
              <span>React</span>
            </div>
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image
                src="/logo/nextjs.svg"
                width={64}
                height={64}
                alt="nextjs"
              />
              <span>Nextjs</span>
            </div>
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image
                src="/logo/nodejs.svg"
                width={64}
                height={64}
                alt="nodejs"
              />
              <span>Nodejs</span>
            </div>
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image
                src="/logo/express.svg"
                width={64}
                height={64}
                alt="express"
              />
              <span>Express.js</span>
            </div>
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image
                src="/logo/nestjs.svg"
                width={64}
                height={64}
                alt="nestjs"
              />
              <span>Nest.js</span>
            </div>
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image
                src="/logo/socket.svg"
                width={64}
                height={64}
                alt="socket"
              />
              <span>Socket.io</span>
            </div>
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image
                src="/logo/postgres.svg"
                width={64}
                height={64}
                alt="postgres"
              />
              <span>PostgresSql</span>
            </div>
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image src="/logo/mysql.svg" width={64} height={64} alt="mysql" />
              <span>MySql</span>
            </div>
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image src="/logo/sass.svg" width={64} height={64} alt="sass" />
              <span>Sass/Scss</span>
            </div>
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image
                src="/logo/tailwind.svg"
                width={64}
                height={64}
                alt="tailwind"
              />
              <span>Tailwindcss</span>
            </div>
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image src="/logo/rust.svg" width={64} height={64} alt="rust" />
              <span>Rust</span>
            </div>
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image
                src="/logo/python.svg"
                width={64}
                height={64}
                alt="python"
              />
              <span>Python</span>
            </div>
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image
                src="/logo/php.svg"
                width={64}
                height={64}
                alt="php"
                className="w-[64px] h-[64px]"
              />
              <span>PHP</span>
            </div>
            <div className="flex flex-col items-center w-[88px] h-[100px] gap-y-1">
              <Image src="/logo/git.svg" width={64} height={64} alt="git" />
              <span>Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
