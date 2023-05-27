import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Samples() {
  return (
    <>
      <section class="bg-white">
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 py-10">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-normal text-gray-900 sm:text-4xl">
              Designs catered for your specific need
            </h2>
            <div class="mx-auto text-center">
              <p class="mt-4 text-lg text-gray-800">
                I select appropriate frameworks, layouts, fonts, and color
                schemes to fit the purpose of a site. From{" "}
                <span class="bg-amber-100">
                  professional portfolios, artistic pages, directories for
                  organizations (and its members), and flashy startup landing
                  pages, I have the right design for your need
                </span>
                . Check out the samples:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <Link
              class="mt-4 ml-2 text-center inline-block text-gray-900 rounded border border-gray-900 px-12 py-3 text-sm font-medium text-gray-900"
              href="/musiciansample"
            >
              Musician&apos;s Page ↗
            </Link>
            <Link
              class="mt-4 ml-2 text-center inline-block text-gray-900 rounded border border-gray-900 px-12 py-3 text-sm font-medium text-gray-900"
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
