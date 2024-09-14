import React from "react";

export default function Home() {
  return (
    <section id="home" className="relative py-60">
      <div className="container mx-auto flex px-10 md:flex-row flex-col items-center relative z-10">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            <span className="block text-white text-xl">FULL-STACK DEVELOPER</span>
            <span className="block">
              <span className="text-white">Hi, I'm </span>
              <span className="text-red-600 text-3xl">SHARON OBINDA</span>
            </span>
            <span className="text-white">From Nairobi, Kenya</span>.
          </h1>
        </div>
      </div>
    </section>
  );
}
