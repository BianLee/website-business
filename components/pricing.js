import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Pricing() {
  return (
    <>
      <section class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
              Service Tiers & Pricing
            </h2>
          </div>

          <div class="mt-8 sm:mt-12">
            <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div class="rounded-lg border border-gray-300 px-4 py-8 text-center">
                <div class="order-last text-2xl font-medium text-gray-800">
                  Personal - $120
                </div>
                <div class="text-gray-600 mt-4">
                  • Landing Page
                  <br /> • 3 to 5 Pages
                  <br /> • Delivered within 2 days
                </div>
              </div>

              <div class="rounded-lg border border-gray-300 px-4 py-8 text-center">
                <div class="order-last text-2xl font-medium text-gray-800">
                  Standard - $150
                </div>
                <div class="text-gray-600 mt-4">
                  {" "}
                  • Landing Page
                  <br /> • 10 to 20 Pages
                  <br /> • Custom Domain (puchase separate)
                  <br /> • Monthly updates on the site
                  <br /> • Delivered within 5 days
                </div>
              </div>

              <div class="rounded-lg border border-gray-300 px-4 py-8 text-center">
                <div class="order-last text-2xl font-medium text-gray-800">
                  Premium - $300
                </div>
                <div class="text-gray-600 mt-4">
                  {" "}
                  • Landing Page
                  <br /> • Custom business logo
                  <br /> • 10 to 20 Pages
                  <br /> • Authentication (Login)
                  <br /> • SEO optimization
                  <br /> • Content management with database
                  <br /> • Custom Domain (puchase separate)
                  <br /> • Codebase shared to client
                  <br /> • Monthly updates on the site
                  <br /> • Delivered within 7 days
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
