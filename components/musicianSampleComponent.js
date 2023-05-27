import React from "react";
import Link from "next/link";
import "../fonts/satoshi.css";
import "@/app/globals.css";

export default function MusicianSampleComponent() {
  return (
    <>
      <section
        className="bg-cover select-none"
        style={{
          backgroundImage: `url("/samplePages/musician.jpg")`,
          overFlowX: "hidden",
        }}
      >
        <div className="mx-auto lg:max-w-5xl sm:max-w-4xl md:max-w-6xl max-w-5xl h-screen px-4 py-20 sm:px-6 sm:py-30 lg:px-8">
          <h2
            className="text-left text-5xl font-bold text-white tracking-tight sm:text-6xl"
            style={{ lineHeight: "3.5rem" }}
          >
            <div className="inline-block mb-2">
              <div
                class="text-white inline-block text-[55px]  lg:text-7xl sm:text-[55px] italic"
                style={{ lineHeight: "3.7rem", fontFamily: "Satoshi-Blackasd" }}
              >
                Good Ole Country
              </div>
            </div>
            {/* <div class="text-orange-400 inline-block">AllegroStudio</div> */}
          </h2>
          <div className="mb-0 sm:mb-0 md:mb-3 lg:mb-5">
            {/*
            <div className="text-left inline-block sm:text-xl lg:text-xl text-white tracking-tight sm:text-lg sm:mt-3 lg:mt-5"></div>
             */}
            <div className="text-left grid grid-cols-2 md:grid-cols-5 gap-2 mt-10 text-white">
              <div>Memphis, TN</div>
              <div>Nashville, TN</div>
              <div>Knoxville, TN</div>
              <div>Charlotte, NC</div>
              <div>Raleigh, NC</div>
              <div>Clemson, SC</div>
              <div>Atlanta, GA</div>
              <div>Savannah, GA</div>
              <div>Huntsville, AL</div>
              <div>Birmingham, AL</div>
              <div>Jackson, MS</div>
              <div>Oxford, MS</div>
              <div>Biloxi, MS</div>
              <div></div>
              <div></div>
            </div>
          </div>

          <Link
            class="mt-8 ml-2 inline-block text-white rounded border border-white px-12 py-3 text-sm font-medium text-white"
            href="/"
          >
            Get Tickets Now
          </Link>
        </div>
      </section>
      <section
        className=" pt-10 py-10"
        style={{ backgroundImage: `url("/samplePages/musician.jpg")` }}
      >
        <div class="mx-auto px-4  sm:px-6 lg:px-8">
          <div class="text-white">
            <div class="mx-auto max-w-4xl text-left">
              <p class="text-lg text-gray-800 text-white select-none">
                The Grammy-winning country star is making his way to your town!
                From August to July, he&apos;ll be making his return back to the
                South, after spending the last six years of musical career in
                Los Angeles, California. From the heart of country music in
                Nashville, Tennessee all the way down to his hometown in Oxford,
                Mississippi, The South eagerly waits for his return to perform
                his RIAA-certified latest album,{" "}
                <i>&quot;Good Ole Country.&quot;</i>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
