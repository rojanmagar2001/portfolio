import React from "react";

export const FooterSection = () => {
  return (
    <section className="w-full min-h-[70px] flex flex-col items-center justify-center bg-gray-50 dark:bg-[#111827] overflow-hidden">
      <div className="text-center">
        &copy; 2023 | <span className="underline">Designed</span> and{" "}
        <span className="underline">coded</span> with ❤️ by Rojan Rana Magar
      </div>
    </section>
  );
};
