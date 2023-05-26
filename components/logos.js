import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Logos() {
  return (
    <>
      <section class="bg-white">
        <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10 py-10">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-normal text-gray-900 sm:text-4xl">
              Custom-designed logo is a cherry on top
            </h2>
            <div class="mx-auto text-center">
              <p class="mt-4 text-lg text-gray-800">
                On top of being a dev, I also sometimes design. (Mostly to prove
                a point that <i>anyone</i> can design).{" "}
                <span class="bg-sky-100">
                  Along with the site, you&apos;ll also receive a logo that you
                  could use for yourself, or your business.
                </span>{" "}
                (Gotta differentiate yourself in any way, y&apos;know?). Below
                are some of my work:
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
              2) The Free State of Florida! <br />
              3) For a music theory education app I&apos;m building <br />
              4) A &quot;random&quot; logo with my first initial. Investment
              firm type logo
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
