import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Samples() {
  return (
    <>
      <hr></hr>
      <section class="bg-white sm:mx-6 mx-6 lg:mx-0">
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 py-10">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-normal text-gray-900 sm:text-4xl text-left md:text-center sm:text-left lg:text-center">
              Designs catered for user specific needs
            </h2>
            <div class="mx-auto text-left md:text-center sm:text-left lg:text-center">
              <p class="mt-4 text-lg text-gray-800">
                We select appropriate frameworks, layouts, fonts, and color
                schemes to fit the purpose of a site. From{" "}
                <span class="bg-amber-100">
                  professional portfolios, artistic pages, org directories, and
                  startup landing pages, we always have the right design.
                </span>{" "}
                Check out the samples:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2 mt-8">
            <Link
              class="ml-2 text-center hover:bg-orange-50 inline-block text-gray-900 rounded border border-gray-900 px-12 py-3 text-sm font-medium text-gray-900"
              href="/musiciansample"
            >
              Musician&apos;s Page ↗
            </Link>
            <Link
              class="ml-2 text-center hover:bg-orange-50 inline-block text-gray-900 rounded border border-gray-900 px-12 py-3 text-sm font-medium text-gray-900"
              href="/collegeclubsample"
            >
              College Club ↗
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
