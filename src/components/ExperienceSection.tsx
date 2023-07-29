import Image from "next/image";
import React from "react";

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
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
                    Backend Developer Intern
                  </h1>
                  <ul className="list-disc flex flex-col gap-y-2 text-[14px] translate-x-2 md:text-[16px]">
                    <li>
                      Developed RESTful APIs using Express.js and utilized
                      Prisma, Mongoose, or Sequelize ORM for database
                      interactions.
                    </li>
                    <li>
                      Managed databases (SQL/NoSQL) for efficient data
                      operations and employed TypeScript to enhance code
                      reliability and maintainability.
                    </li>
                    <li>
                      Adapted quickly to learning new technologies, such as
                      Prisma, Mongoose, Sequelize, and TypeScript, to stay
                      updated with the latest industry practices.
                    </li>
                    <li>
                      Utilized Git for version control and code collaboration
                    </li>
                    <li>Emphasized documentation for code and API endpoints</li>
                    <li>
                      Engaged in code reviews, offering and receiving
                      constructive feedback to enhance code quality.
                    </li>
                  </ul>
                </div>
                {/* date */}
                <div className="text-[14px]">July 2023 - July 2023</div>
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
                    Backend Developer
                  </h1>
                  <ul className="list-disc flex flex-col gap-y-2 translate-x-2 text-[14px] md:text-[16px]">
                    <li>
                      Developed RESTful APIs using Express.js and utilized
                      Prisma, Mongoose, or Sequelize ORM for database
                      interactions.
                    </li>
                    <li>
                      Conducted testing, debugging, and performance optimization
                      to improve the application&apos;s efficiency.
                    </li>
                    <li>
                      Utilized Git for version control and collaborated with the
                      team using branching and merging strategies.
                    </li>
                    <li>
                      Emphasized documentation for code, API endpoints, and
                      database schemas for easy understanding and maintenance.
                    </li>
                    <li>
                      Handled error validation and data integrity, ensuring a
                      smooth user experience.
                    </li>
                    <li>
                      Implemented containerization using Docker and Kubernates
                      for easier deployment and management of applications.
                    </li>
                    <li>
                      Gained experience with Amazon Web Services (AWS) for
                      hosting, managing, and scaling applications in the cloud
                      environment.
                    </li>
                  </ul>
                </div>
                {/* date */}
                <div className="text-[14px]">July 2023 - Present</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
