import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function About() {
  return (
    <>
      <br />
      <br />
      <br />
      <section className="">
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 bg-white bg-gradient-to-br from-violet-500 via-sky-500 to-violet-300 rounded-md">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-normal text-white sm:text-4xl">
              Dear Reader...
            </h2>
          </div>
          <div class="text-white">
            <div class="mx-auto max-w-5xl text-left">
              <p class="mt-4 text-lg text-white">
                Effective communication is the key to success in every
                organization. In today&apos;s digitized world, it starts with a
                webpage that stands out in its looks and performance. I&apos;ve
                been building websites and dabbling in web technologies since
                middle school. I&apos;ve acquired skills, big and small, in all
                aspects; from choosing fonts, implementing code-splitting,
                lazy-loading contents, and combining many different technologies
                and framework to optimizing my workflow. <br />
                <br />
                Here are some of my accomplishments: My biggest site, that I
                built for a 501(c)(3) non-profit, received over 200k+ traffic. A
                web app I developed in high school won a local business
                competition, winning me mentorship from Sillicon Valley business
                consultants. My service is an investment to your growth, and I
                hope you seize the opportunity today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
