import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Communications() {
  return (
    <>
      <section className=" pt-10 py-10 bg-gray-50">
        <div class="mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8 bg-white bg-gradient-to-bl from-violet-100 via-cyan-200 to-neutral-100">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-normal text-gray-900 sm:text-4xl">
              Communications
            </h2>
          </div>
          <div class="text-white">
            <div class="mx-auto max-w-4xl text-center">
              <p class="mt-4 text-lg text-gray-800">
                My two{" "}
                <u>
                  preferred methods of communication with clients are Email and
                  Discord
                </u>
                : Once you submit the Google Form, I&apos;ll send you an email
                confirming that I have received your request for a website. If
                you left any questions on the form, I&apos;ll also answer them.
                Once I begin working on your site, we can communicate via
                Discord and I could send you progress update and get your
                feedback. You could also email me for general inquiries.
                <br />
                <br />
                Email: <u>bianlee2004@gmail.com</u>, Discord:
                <u>bostonlobstergang#6098</u>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
