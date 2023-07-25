import Image from "next/image";
import React from "react";

export const Testimonials = () => {
  return (
    <section className="w-full h-full overflow-hidden bg-gray-50 dark:bg-[#111827]">
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center justify-center gap-y-10 mb-20">
          <div className="w-full flex flex-col items-center justify-center mt-24">
            <div className=" mb-4 bg-gray-200 dark:bg-[#374151]  w-[105px] h-[28px] flex flex-col items-center justify-center rounded-[12px]">
              Testimonials
            </div>
            <div className="">Nice things people have said about me:</div>
          </div>
          {/* content */}
          <div className="flex flex-col md:flex-row mx-8 md:gap-x-8 gap-y-8 md:gap-y-0">
            {/* testimonial card 1 */}
            <div className="w-[358px] h-[408px] bg-white dark:bg-[#1F2937] flex flex-col items-center justify-center px-12 shadow-md rounded-[12px]">
              <div className="w-full h-full flex flex-col items-center justify-center  gap-y-10 ">
                <div className="w-[64px] h-[64px] rounded-full overflow-hidden">
                  <Image
                    src="/profile-icon.png"
                    width={64}
                    height={64}
                    alt="testimonials-profile"
                  />
                </div>
                <div className="leading-6">
                  “Job well done! I am really impressed. He is very very good at
                  what he does:) I would recommend Sagar and will rehire in the
                  future for Frontend development.”
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-[18px] dark:text-gray-50 text-gray-900">
                    John Doe
                  </h1>
                  <p>Founder - aitc.ai</p>
                </div>
              </div>
            </div>
            {/* testimonial card 1 */}
            <div className="w-[358px] h-[408px] bg-white dark:bg-[#1F2937] flex flex-col items-center justify-center px-12 shadow-md rounded-[12px]">
              <div className="w-full h-full flex flex-col items-center justify-center  gap-y-10 ">
                <div className="w-[64px] h-[64px] rounded-full overflow-hidden">
                  <Image
                    src="/profile-icon.png"
                    width={64}
                    height={64}
                    alt="testimonials-profile"
                  />
                </div>
                <div className="leading-6">
                  “Job well done! I am really impressed. He is very very good at
                  what he does:) I would recommend Sagar and will rehire in the
                  future for Frontend development.”
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-[18px] dark:text-gray-50 text-gray-900">
                    John Doe
                  </h1>
                  <p>Founder - aitc.ai</p>
                </div>
              </div>
            </div>
            {/* testimonial card 1 */}
            <div className="w-[358px] h-[408px] bg-white dark:bg-[#1F2937] flex flex-col items-center justify-center px-12 shadow-md rounded-[12px]">
              <div className="w-full h-full flex flex-col items-center justify-center  gap-y-10 ">
                <div className="w-[64px] h-[64px] rounded-full overflow-hidden">
                  <Image
                    src="/profile-icon.png"
                    width={64}
                    height={64}
                    alt="testimonials-profile"
                  />
                </div>
                <div className="leading-6">
                  “Job well done! I am really impressed. He is very very good at
                  what he does:) I would recommend Sagar and will rehire in the
                  future for Frontend development.”
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-[18px] dark:text-gray-50 text-gray-900">
                    John Doe
                  </h1>
                  <p>Founder - aitc.ai</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
