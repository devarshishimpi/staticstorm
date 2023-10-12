"use client";
import Link from "next/link";

const ComingSoon = () => {
  return (
    <>
      <section className="h-screen flex items-center justify-center">
        <p className="w-5/6 text-white lg:text-6xl text-4xl text-center">
          We are currrently migrating from our deprecated version! Support us
          here on {""}
          <Link
            className="text-blue-400"
            href="https://github.com/devarshishimpi/staticstorm"
          >
            Github
          </Link>
          .
        </p>
      </section>
    </>
  );
};

export default ComingSoon;
