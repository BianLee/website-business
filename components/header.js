import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Header() {
  return (
    <>
      <section className="bg-gradient-to-bl from-violet-300 via-pink-500 to-neutral-100">
        <div className="mx-auto lg:max-w-5xl sm:max-w-4xl md:max-w-6xl max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          {/* Build & Grow Your Listener Base */}
          <h2
            className="text-center text-5xl font-bold text-white tracking-tight sm:text-6xl"
            style={{ lineHeight: "3.5rem" }}
          >
            <div className="inline-block mb-2">
              <div
                class="text-white inline-block text-[55px] lg:text-7xl sm:text-[55px]"
                style={{ lineHeight: "3.7rem" }}
              >
                Build Empires on the Web
              </div>
            </div>
            {/* <div class="text-orange-400 inline-block">AllegroStudio</div> */}
          </h2>
          <div className="mb-0 sm:mb-0 md:mb-3 lg:mb-5 sm:mt-5 lg:mt-3 mt-5">
            <div className="text-center  inline-block sm:text-xl lg:text-xl text-white tracking-tight sm:text-lg sm:mt-3 lg:mt-5">
              At affordable price tag, I&apos;ll build you a blazingly-fast,
              mobile-friendly website with: brilliant design, intuitive UI,
              simple CMS (with Google Sheets API) and effective SEO — bundled
              with customized logos and banners.
            </div>
          </div>
          <center>
            <Link
              class="mt-4 ml-2 inline-block text-white rounded border border-white px-12 py-3 text-sm font-medium text-white"
              href="https://docs.google.com/forms/d/e/1FAIpQLSelAFDU0FMLFmmSFTc_eMNC_z9mtD51O4qA5UI_nXWXg2sO4Q/viewform?usp=sf_link"
              target="_blank"
            >
              Fill Out Form
            </Link>
          </center>
        </div>
      </section>
    </>
  );
}
