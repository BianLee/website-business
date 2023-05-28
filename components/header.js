import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Header() {
  return (
    <>
      {" "}
      <section className="bg-gradient-to-bl from-violet-300 via-pink-500 to-neutral-100">
        <div class="px-4 text-white -mb-10 pt-5 mr-5 sm:invisible lg:visible invisible">
          <p class="text-right text-md font-medium">
            <Link href="https://twitter.com/empirewebspace" target="_blank">
              Twitter
            </Link>
            <Link
              href="https://www.instagram.com/empirewebspace/"
              target="_blank"
            >
              <span class="ml-6">Instagram</span>
            </Link>
            <Link href="https://discord.gg/J2HMe5S7Gf" target="_blank">
              <span class="ml-6">Discord</span>
            </Link>
          </p>
        </div>
        <div className="mx-auto lg:max-w-5xl sm:max-w-4xl md:max-w-6xl max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          {/* Build & Grow Your Listener Base */}
          <h2
            className="text-center text-5xl font-bold text-white tracking-tight sm:text-6xl"
            style={{ lineHeight: "3.5rem" }}
          >
            <div className="inline-block mb-2">
              <div
                class="text-white inline-bl ock text-[55px] lg:text-7xl sm:text-[55px]"
                style={{ lineHeight: "3.7rem" }}
              >
                Build Empires on the Web
              </div>
            </div>
            {/* <div class="text-orange-400 inline-block">AllegroStudio</div> */}
          </h2>
          <div className="mb-0 sm:mb-0 md:mb-3 lg:mb-5 sm:mt-5 lg:mt-3 mt-5">
            <div className="text-center  inline-block sm:text-xl lg:text-xl text-white tracking-tight sm:text-lg sm:mt-3 lg:mt-5">
              For affordable price, we&apos;ll build you a blazingly-fast,
              mobile-friendly website with: brilliant design, intuitive UI,
              simple CMS (Sheets API) and effective SEO — bundled with
              customized logos & banners.
            </div>
          </div>
          <center>
            <Link
              class="mt-4 ml-2 bg-pink-600 inline-block text-white rounded px-12 py-3 text-sm font-medium text-white"
              href="/about"
            >
              About
            </Link>
            <Link
              class="mt-4 ml-2 inline-block hover:bg-pink-300 text-white rounded border border-white px-12 py-3 text-sm font-medium text-white"
              href="https://docs.google.com/forms/d/e/1FAIpQLSelAFDU0FMLFmmSFTc_eMNC_z9mtD51O4qA5UI_nXWXg2sO4Q/viewform?usp=sf_link"
              target="_blank"
            >
              Hire Us →
            </Link>
          </center>
        </div>{" "}
      </section>
    </>
  );
}
