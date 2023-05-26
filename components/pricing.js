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

            <p class="text-gray-800 text-md mt-4">
              *10% discount applied on all tiers if paid in Ethereum!!
            </p>
          </div>

          <div class="sm:mt-8">
            <dl class="grid grid-cols-1 gap-4 sm:grid-cols-4">
              <div class="rounded-lg border border-gray-300 px-4 py-8 text-center bg-white  hover:bg-pink-100">
                <div class="order-last text-2xl font-medium text-gray-800">
                  Basic - $90
                </div>
                <div class="text-gray-600 mt-4">
                  • Landing page (1 page)
                  <br /> • Custom business logo
                  <br /> • Route to custom domain
                  <br /> • SEO optimization
                  <br /> • Delivered within 3 days
                </div>
              </div>

              <div class="rounded-lg border border-gray-300 px-4 py-8 text-center bg-white  hover:bg-pink-100">
                <div class="order-last text-2xl font-medium text-gray-800">
                  Personal - $140
                </div>
                <div class="text-gray-600 mt-4">
                  • Landing page
                  <br /> • 2 to 5 pages
                  <br /> • Custom business logo
                  <br /> • Route to custom domain
                  <br /> • SEO optimization
                  <br /> • Delivered within 3 days
                </div>
              </div>

              <div class="rounded-lg border border-gray-300 px-4 py-8 text-center bg-white hover:bg-pink-100">
                <div class="order-last text-2xl font-medium text-gray-800">
                  ★ Standard - $190
                </div>
                <div class="text-gray-600 mt-4">
                  {" "}
                  • Landing Page
                  <br /> • 5 to 10 pages
                  <br /> • Custom business logo
                  <br /> • Route to custom domain
                  <br /> • SEO optimization
                  <br /> • Monthly updates on the site
                  <br /> • Delivered within 5 days
                </div>
              </div>

              <div class="rounded-lg border border-gray-300 px-4 py-8 text-center bg-white  hover:bg-pink-100">
                <div class="order-last text-2xl font-medium text-gray-800">
                  Startup - $500~
                </div>
                <div class="text-gray-600 mt-4">
                  {" "}
                  • Landing Page
                  <br /> • 10+ pages
                  <br /> • Custom business logo
                  <br /> • Custom business banner
                  <br /> • Route to custom domain
                  <br /> • SEO optimization
                  <br /> • Authentication (Login)
                  <br /> • Business copywriting
                  <br /> • Dynamic components
                  <br /> • Database implementation
                  <br /> • Codebase shared to client on GitHub
                  <br /> • General business consulting / advice
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
