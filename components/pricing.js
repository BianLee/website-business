import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Pricing() {
  return (
    <>
      <section class="bg-gray-50">
        <div class="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 md:py-12 lg:px-8  ">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-normal text-gray-900 sm:text-4xl ">
              Services & Pricing
            </h2>
          </div>

          <div class="mt-8">
            <dl class="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <div class="rounded-lg border border-gray-300 px-4 py-8 text-center bg-white  hover:bg-pink-50">
                <div class="order-last text-2xl font-medium text-center text-gray-800">
                  Basic - $70
                </div>
                <div class="text-gray-600 mt-4 text-left px-4">
                  • Landing page (1 page)
                  <br /> • 1 custom logo
                  <br /> • Route to custom domain
                  <br /> • SEO optimization
                  <br /> • Codebase shared via GitHub
                  <br /> • Delivered within 3 days
                </div>
              </div>

              <div class="rounded-lg border border-gray-300 px-4 py-8 text-center bg-white  hover:bg-pink-50">
                <div class="order-last text-2xl font-medium text-center text-gray-800">
                  Personal - $140
                </div>
                <div class="text-gray-600 mt-4 text-left px-4">
                  • Landing page
                  <br /> • 2 to 5 pages
                  <br /> • 1 custom logo
                  <br /> • Route to custom domain
                  <br /> • SEO optimization
                  <br /> • Codebase shared via GitHub
                  <br /> • Delivered within 3 days
                </div>
              </div>

              <div class="rounded-lg border border-gray-300 px-4 py-8 text-center bg-white hover:bg-pink-50">
                <div class="order-last text-2xl text-center font-medium text-gray-800">
                  ★ Standard - $200
                </div>
                <div class="text-gray-600 mt-4 text-left px-4">
                  {" "}
                  • Landing Page
                  <br /> • 5 to 10 pages
                  <br /> • 1 custom logo
                  <br /> • 1 custom banner
                  <br /> • Route to custom domain
                  <br /> • SEO optimization
                  <br /> • CMS with Google Sheets
                  <br /> • Monthly updates on the site
                  <br /> • Codebase shared via GitHub
                  <br /> • Delivered within 7 days
                </div>
              </div>

              <div class="rounded-lg border border-gray-300 px-4 py-8 text-center bg-white  hover:bg-pink-50">
                <div class="order-last text-2xl font-medium text-gray-800 text-center">
                  Startup - $450~
                </div>
                <div class="text-gray-600 mt-4 text-left px-4">
                  {" "}
                  • Landing Page
                  <br /> • 10+ pages
                  <br /> • 1 custom logo
                  <br /> • 2 custom banners
                  <br /> • Route to custom domain
                  <br /> • SEO optimization
                  <br /> • A/B Testing
                  <br /> • Authentication (Login)
                  <br /> • CMS with Google Sheets
                  <br /> • Business copywriting
                  <br /> • Shoutout / promo on social media
                  <br /> • Codebase shared via GitHub
                  <br /> • Equivalent UI mockup on Figma
                  <br /> • Business consulting / advice
                  <br /> • Varying deadline
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
