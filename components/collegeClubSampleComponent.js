import React from "react";
import Link from "next/link";
import { Roboto } from "next/font/google";

import "@/app/globals.css";
import "@/app/quant.css";

export default function CollegeClubSampleComponent() {
  return (
    <>
      <section style={{ fontFamily: "'Ubuntu', sans-serif" }}>
        <header aria-label="Site Header" class="shadow-sm bg-gray-800">
          <div class="mx-auto max-w-screen-xl p-6">
            <div class="flex items-center justify-between gap-4 lg:gap-10">
              <div class="flex lg:w-0 lg:flex-1 text-2xl text-white">
                Quant Club
              </div>

              <nav
                aria-label="Site Nav"
                class="hidden gap-8 text-lg font-medium md:flex"
              >
                <a class="text-gray-200 text-white " href="">
                  About
                </a>
                <a class="text-gray-200 text-white " href="">
                  Members
                </a>
                <a class="text-gray-200 text-white " href="">
                  Projects
                </a>
              </nav>

              <div class="hidden flex-1 items-center justify-end sm:flex">
                <a class="text-gray-200 text-white text-lg" href="">
                  Apply
                </a>
              </div>

              <div class="lg:hidden">
                <button
                  class="rounded-lg bg-gray-100 p-2 text-gray-600"
                  type="button"
                >
                  <span class="sr-only">Open menu</span>
                  <svg
                    aria-hidden="true"
                    class="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </header>
        <section class="bg-gray-100">
          <div class="p-8 md:p-9 lg:px-13 lg:py-15">
            <div class="mx-auto max-w-lg text-center">
              <br />
              <h2
                class="text-5xl font-bold text-gray-700 md:text-5xl"
                style={{ lineHeight: "3.7rem" }}
              >
                We&apos;re Building the Future of Quant Research & Trading
              </h2>

              <p class="hidden text-gray-500 sm:mt-4 sm:block text-lg">
                We use mathematics and machine learning to manage our long/short
                equity fund, worth well over $70K.
              </p>
              <br />
              <br />
            </div>
          </div>
        </section>
      </section>
      <section class="overflow-hidden bg-white sm:grid sm:grid-cols-2">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 class="text-2xl font-bold text-gray-600 md:text-3xl">
              Solving some of the most complex problems in today&apos;s market
            </h2>

            <p class="hidden text-gray-500 md:mt-4 md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
              egestas tempus tellus etiam sed. Quam a scelerisque amet
              ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
              quisque ut interdum tincidunt duis.
            </p>
          </div>
        </div>

        <img
          alt="Student"
          src="samplePages/ny.jpg"
          class="h-56 w-full object-cover sm:h-full"
        />
      </section>
    </>
  );
}
