import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Banners() {
  return (
    <>
      <hr></hr>
      <section class="bg-gray-50">
        <div class="mx-auto max-w-5xl px-4 sm:px-6  lg:px-8 pt-10 py-10">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-normal text-gray-900 sm:text-4xl text-left md:text-center sm:text-left lg:text-center">
              Get banners with Standard or Startup tier
            </h2>
            <div class="mx-auto text-left md:text-center sm:text-left lg:text-center">
              <p class="mt-4 text-lg text-gray-800">
                Great banners are essential for branding.{" "}
                <span class="bg-sky-100">
                  With Standard or Startup tier, you&apos;ll also receive
                  customized banner(s)
                </span>
                , fit for profiles on Twitter and LinkedIn. Here&apos;s an
                example:
              </p>
            </div>
          </div>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="bannerOne.png"
                alt=""
              />
            </div>
          </div>
          <div class="mx-auto text-left">
            <p class="mt-4 text-md text-gray-800">
              An actual banner to promote my debut album release. It is also my
              current{" "}
              <a
                href="https://twitter.com/bostonlobster99"
                target="_blank"
                style={{ color: "blue" }}
              >
                Twitter
              </a>{" "}
              banner .
            </p>
          </div>
        </div>
        <br />
      </section>
    </>
  );
}
