import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Footer() {
  return (
    <>
      <hr></hr>

      <footer aria-label="Site Footer" class="bg-white mt-4">
        <div class="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
          <div class="flex flex-col items-center gap-4 rounded-lg bg-gradient-to-br from-violet-500 via-sky-500 to-violet-300 p-6 shadow-lg sm:flex-row sm:justify-between">
            <span
              class="text-xl text-white sm:text-xl"
              style={{ marginLeft: "1rem" }}
            >
              Build Empires on the Web with Empireweb.space
            </span>

            <Link
              class="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-indigo-600 active:bg-white/90"
              href="https://docs.google.com/forms/d/e/1FAIpQLSelAFDU0FMLFmmSFTc_eMNC_z9mtD51O4qA5UI_nXWXg2sO4Q/viewform"
              target="_blank"
            >
              <span class="text-sm font-medium"> Hire Us</span>

              <svg
                class="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
      {/* 
      <section className="">
        <div class="mx-auto max-w-screen-xl bg-white bg-gradient-to-br from-violet-500 via-sky-500 to-violet-300 ">
          <div class="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div class="mx-auto max-w-3xl text-center">
              <h2 class="text-3xl font-normal text-white sm:text-4xl">
                Build with us at Empireweb.space
              </h2>
            </div>
          </div>
          <div class="text-white"></div>
        </div>
      </section>
      */}
    </>
  );
}
