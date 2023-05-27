import React from "react";
import "../fonts/satoshi.css";
import Link from "next/link";
import "../app/globals.css";

export default function Contact() {
  return (
    <>
      <hr />
      <section class="bg-gray-50">
        <br />
        <div class="mx-auto max-w-5xl px-4 sm:px-6  lg:px-8  pt-10 py-10">
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="text-3xl font-normal text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
          <br />
          <br />
          <div class="space-y-4">
            <details class="group rounded-lg bg-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 class="font-medium">
                  Can I request additional edits after the initial transaction
                  is complete?
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
                If it is a simple enough task, such as updating text or
                pictures, I&apos;m happy to do that for you anytime, for all
                tier levels. Standard tier does come with regular monthly
                updates, where I update whatever changes that has been
                requested. If you are looking to run a website that needs
                constant updates with new content (such as blog for example), we
                could discuss an alternate plan where you pay subscription-based
                monthly fees (instead of one-time payment), for me to regularly
                update it all the time.
              </p>
            </details>
            <details class="group rounded-lg bg-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 class="font-medium">
                  Is the pricing negotiable? Can I pick and choose specific
                  features for you to implement?
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
                Yes, I am very flexible and we can always negotiate regarding
                the features of the site, as well as pricing. Please feel free
                to email me at bianlee2004@gmail.com.
              </p>
            </details>
            <details class="group rounded-lg bg-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 class="font-medium">How does custom domain name work?</h2>

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
                If you have a custom domain name that you wish to use for the
                website, I will hook it up for you. This process requires making
                DNS records (don&apos;t worry if you are unfamiliar with it) and
                connecting the webserver to the domain name server. This is done
                on your domain&apos;s registrar, on the DNS panel. Assuming that
                you do not want me to directly access the registrar (with your
                credentials), we could hop on a 10-min phone call and I will
                instruct you on what to do on your DNS panel. Please note that
                the domain name must be registered under your name, hence the
                reason why it&apos;s a separate purchase from my service. If you
                don&apos;t have (or don&apos;t want) a custom domain, it will be
                hosted on Vercel and the site URL will end in .vercel.app.
              </p>
            </details>

            <details class="group rounded-lg bg-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
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
                I&apos;m currently a college student double majoring in computer
                science and economics. I&apos;ve built countless many websites,
                both static and dynamic, using various technologies and stacks:
                <a
                  href="https://mentalheal.tech"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  {" "}
                  mentalheal.tech
                </a>
                ,
                <a
                  href="https://opensourcecollage.com"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  {" "}
                  opensourcecollage.com
                </a>
                ,
                <a
                  href="https://nhscyber.club"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  {" "}
                  nhscyber.club
                </a>
                ,{" "}
                <a
                  href="https://interstem.us"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  {" "}
                  interstem.us
                </a>{" "}
                and a whole lot more (most of which I can&apos;t share due to
                client confidentiality). Some software related accomplishments I
                have: Building a site for a 501(c)(3) nonprofit that received
                200k+ site traffic, placing in a local business competition with
                a full-stack app and winning mentorship from Sillicon Valley
                business consultants, and placing third at a regional
                cybersecurity competition and winning $2k. Besides school and
                freelance work, I&apos;ve done internships; one at a startup,
                and another at local state government agency. Here is my{" "}
                <a
                  href="https://www.linkedin.com/in/bianlee/"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  LinkedIn
                </a>
                .
              </p>
            </details>
            <details class="group rounded-lg bg-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 class="font-medium">Why are you freelancing?</h2>

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
                First, I am trying to raise capital that I can allocate towards
                my startup. Since VCs are out of reach as of now, this is one of
                the &quot;hustles&quot; I do to make money. Second, I constantly
                improve my dev skills simply from writing lots of code and
                completing many projects. This work isn&apos;t just
                &quot;labor&quot;, it&apos;s an opportunity to put my dev skills
                to test through completing practical work for real clients.
                Finally, I get to help many businesses / people through my
                (clients are generally very satisfied with my work).
              </p>
            </details>
            <details class="group rounded-lg bg-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 class="font-medium">How does payment work?</h2>

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
                I ask that all my clients pay 20% upfront. Once the work is
                complete and you are happy with the site, you pay the rest. For
                the payment method, Zelle or Venmo works.
              </p>
            </details>
            <details class="group rounded-lg bg-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 class="font-medium">
                  What&apos;s special about the Startup Tier?
                </h2>

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
                Startup Tier goes beyond website creation, also including
                product-building / management aspect to it. This solution is
                ideal for founders at an ideation stage, who wish to ship out a
                working prototype quickly. Working with the assumption that more
                code will be written later on, I aim to provide strong
                foundations of an app that utilizes various techniques such as
                dynamic components, server-side rendering, code-splitting, etc.
                The goal is for clients (founders) to focus on core features of
                their business, while leaving me to build the bare-bones. At
                request, additional features could be implemented: This includes
                but not limit to Firebase authentication, database integration
                with MongoDB, simple CMS using Google Sheets API, A/B testing,
                Google analytics, etc. I also work more closely with the
                founder(s) to build a strong brand.
              </p>
            </details>
            <details class="group rounded-lg bg-gray-200 p-6 [&_summary::-webkit-details-marker]:hidden">
              <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
                <h2 class="font-medium">
                  Can I hire you for bigger projects / employment?
                </h2>

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
                Yes, absolutely. I actively follow the startup space and would
                love to join one as a SWE. My internship at Vestr.io, a social
                finance startup, has given me some insight into the process of
                series funding, team-building, and rolling out products.
                I&apos;m quite interested in customer acquisition, as well as
                raising capital. If you are a startup founder in need of an
                engineer, you should consider hiring me.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
