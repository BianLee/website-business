import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Footer() {
  return (
    <>
      <hr></hr>
      <br />
      <br />
      <br />
      <section className="">
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 bg-white bg-gradient-to-br from-violet-500 via-sky-500 to-violet-300 ">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-normal text-white sm:text-4xl">
              Build with us at Empireweb.space
            </h2>
          </div>
          <div class="text-white"></div>
        </div>
      </section>
    </>
  );
}
