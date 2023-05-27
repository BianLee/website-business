import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function AboutCard() {
  return (
    <>
      <header aria-label="Site Header" class="shadow-sm bg-gray-800">
        <div class="mx-auto max-w-screen-xl p-7"></div>
      </header>
      <section
        class="mx-auto lg:max-w-6xl sm:max-w-4xl md:max-w-6xl max-w-5xl px-4 sm:px-6 lg:px-8"
        style={{ fontFamily: "'Ubuntu', sans-serif" }}
      >
        <div
          class="text-gray-800 lg:text-3xl sm:text-4xl text-4xl mt-8"
          style={{ lineHeight: "3.7rem" }}
        >
          Empireweb.space Team
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div
            style={{ paddingTop: "2rem", paddingBottom: "3rem" }}
            href="#"
            class="relative block overflow-hidden rounded-lg border border-gray-400 p-4 sm:p-6 lg:p-8"
          >
            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-pink-300 via-indigo-500 to-blue-600"></span>

            <div class="sm:flex sm:justify-between sm:gap-4">
              <h3 class="lg:text-3xl text-2xl font-bold text-gray-900 sm:text-2xl">
                Bian Lee{" "}
                <span class="text-sm">Founder / Lead Developer / Sales</span>
              </h3>
            </div>

            <div class="mt-4">
              <p class="max-w-full text-md text-gray-500">
                Bian Lee is the founder of Empireweb.space agency and is also
                the lead developer of all the projects. He is proficient in full
                stack development, with NextJS or MERN stack. He studies
                computer science and economics as a freshman in college.
              </p>
            </div>
          </div>
          <div
            href="#"
            style={{ paddingTop: "2rem", paddingBottom: "3rem" }}
            class="relative block overflow-hidden rounded-lg border border-gray-400 p-4 sm:p-6 lg:p-8"
          >
            <span class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-pink-300 via-indigo-500 to-blue-600"></span>

            <div class="sm:flex sm:justify-between sm:gap-4">
              <div>
                <h3 class="lg:text-3xl text-2xl font-bold text-gray-900 sm:text-2xl">
                  Ritvik Irigireddy{" "}
                  <span class="text-sm">Developer / Sales</span>
                </h3>
              </div>
            </div>

            <div class="mt-4">
              <p class="max-w-full text-md text-gray-500">
                Ritvik Irigireddy is a developer at Empireweb.space. He is an
                alumni of LaunchX program, and he has also done research at
                UCSD. He is proficient in full-stack development.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
