import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Contact() {
  return (
    <>
      <section class="bg-white">
        <div class="mx-auto max-w-5xl px-4 sm:px-6  lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <br />
          <br />
          <div class="space-y-4">
            <details
              class="group rounded-lg bg-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden"
              open
            >
              <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 class="font-medium">
                  Are there any other service tiers besides the ones listed
                  above?
                </h2>

                <span class="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 h-5 w-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-gray-700">
                Yes, I am very flexible with my work and we can always
                negotiate, regarding both the site design / structure, as well
                as pricing. Please feel free to email me at
                bianlee2004@gmail.com.
              </p>
            </details>

            <details class="group rounded-lg bg-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 class="font-medium">What are your qualifications?</h2>

                <span class="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-gray-700">
                I&apos;m currently a college student studying computer science.
                I&apos;ve built countless many websites and here are some
                examples:
                <a href="https://allegrostudio.tech" target="_blank">
                  {" "}
                  allegrostudio.tech
                </a>
                ,{" "}
                <a href="https://nhscyber.club" target="_blank">
                  {" "}
                  nhscyber.club
                </a>
                ,{" "}
                <a href="https://interstem.us" target="_blank">
                  {" "}
                  interstem.us
                </a>{" "}
                and many more (most of which I can&apos;t share for client
                confidentiality). Besides school and freelance work, I&apos;ve
                held internships; one at a startup, and another at local state
                government agency.
              </p>
            </details>
            <details class="group rounded-lg bg-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 class="font-medium">Why do you freelance?</h2>

                <span class="relative h-5 w-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="absolute inset-0 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p class="mt-4 leading-relaxed text-gray-700">
                3 birds with one stone: First, I enjoy the side cash. Second, I
                get to continue improving my dev skills through the work. And
                third, I help many businesses / people through my skills (people
                are generally very satisfactory of my work).
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
