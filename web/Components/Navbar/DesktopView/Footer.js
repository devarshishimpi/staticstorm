"use client";
import Link from "next/link";
import React from "react";
import StarUs from "./StarUs.js";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black mt-24">
        <div className="mx-auto w-[90%]">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Company
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4 hover:text-gray-100">
                  <Link href="/" className=" hover:underline">
                    About
                  </Link>
                </li>
                <li className="mb-4 hover:text-gray-100">
                  <Link href="/" className="hover:underline">
                    Careers
                  </Link>
                </li>
                <li className="mb-4 hover:text-gray-100">
                  <Link href="/" className="hover:underline">
                    Brand Center
                  </Link>
                </li>
                <li className="mb-4 hover:text-gray-100">
                  <Link href="/" className="hover:underline">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Help center
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4 hover:text-gray-100">
                  <Link href="/" className="hover:underline">
                    Discord Server
                  </Link>
                </li>
                <li className="mb-4 hover:text-gray-100">
                  <Link href="/" className="hover:underline">
                    Twitter
                  </Link>
                </li>
                <li className="mb-4 hover:text-gray-100">
                  <Link href="/" className="hover:underline">
                    Facebook
                  </Link>
                </li>
                <li className="mb-4 hover:text-gray-100">
                  <Link href="/" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-white">
                Legal
              </h2>
              <ul className="text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="https://github.com/repocraft/repocraft/"
                    className="hover:underline"
                  >
                    Licensing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Github
              </h2>
              <StarUs />
            </div>
          </div>
          <div className="px-4 py-6 bg-black md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-300 sm:text-center hover:text-gray-100 font-medium">
              <Link href="/">© 2023 RepoCraft. All Rights Reserved.</Link>
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/repocraft"
                className="text-gray-400 hover:text-gray-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter Page</span>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://github.com/repocraft"
                className="text-gray-400 hover:text-gray-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </Link>
              <Link
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/company/repocraft"
                className="text-gray-400 hover:text-gray-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M21.5 0H2.5C1.12172 0 0 1.12172 0 2.5V21.5C0 22.8783 1.12172 24 2.5 24H21.5C22.8783 24 24 22.8783 24 21.5V2.5C24 1.12172 22.8783 0 21.5 0ZM7.5 19H4.5V9H7.5V19ZM6 8C5.224 8 4.5 7.276 4.5 6.5C4.5 5.724 5.224 5 6 5C6.776 5 7.5 5.724 7.5 6.5C7.5 7.276 6.776 8 6 8ZM20 19H17V14.5C17 13.1193 16.8807 10.7393 14.5 10.7393C12.1013 10.7393 11.5 12.2827 11.5 14V19H8.5V9H11.3V10.5H11.4C11.7753 9.86814 12.573 8.98161 14.3 8.98161C17.1 8.98161 20 11.1193 20 16.2V19Z" />
                </svg>
                <span className="sr-only">Linekdin Page</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
