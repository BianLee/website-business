import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Logos() {
  return (
    <>
      <section class="bg-white">
        <div class="mx-auto max-w-5xl px-4 sm:px-6  lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-normal text-gray-900 sm:text-4xl">
              Custom-designed logo included
            </h2>
            <div class="mx-auto text-center">
              <p class="mt-4 text-lg text-gray-800">
                On top of being a a higly efficient front-end dev, I also do a
                bit of design.{" "}
                <span class="bg-sky-100">
                  That&apos;s why every tier comes with a customized logo for
                  your organization, business, whatever.
                </span>{" "}
                (Gotta differentiate yourself in any way, y&apos;know?) Below
                are some of my past logo designs:
              </p>
            </div>
          </div>
          <br />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="logoOne.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="logoSix.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="logoThree.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src="logoFour.png"
                alt=""
              />
            </div>
          </div>
          <div class="mx-auto text-left">
            <p class="mt-4 text-md text-gray-800">
              <br />
              1) Logo for a startup I&apos;m building. <br />
              2) The Great State of Florida. <br />
              3) Music theory education app. <br />
              4) An investment firm.
            </p>
          </div>
          <br />
          <br />
          <br />
        </div>
      </section>
    </>
  );
}
