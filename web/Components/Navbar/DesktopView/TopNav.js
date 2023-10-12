"use client";
import { useState, useEffect } from "react";
import Image from "next/image.js";
import Link from "next/link.js";
import SignUp from "./SignUp.js";
import Hamburger from "../MobileView/Hamburger.js";
import DesktopMenu from "./DesktopMenu.js";
import MobileNav from "../MobileView/MobileNav.js";
import StarUs from "./StarUs.js";
import LoadingBar from "react-top-loading-bar";

// import imageSrc from "@/public/image/RepoCraft.png";

const TopNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Community", href: "/soon" },
    { name: "Documentation", href: "/soon" },
  ];

  // loading animation
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Simulate loading for demonstration purposes

  const startLoading = () => {
    setIsLoading(true);
    let interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 0;
        }
        return prevProgress + 10;
      });
    }, 150);
  };

  useEffect(() => {
    // Simulate a delay before starting loading animation (you can replace this with your actual loading logic)
    const delay = setTimeout(() => {
      startLoading();
      clearTimeout(delay);
    }, 10); // Delay for 1 second
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingBar
          color="#1D4ED8" // You can customize the color
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
      )}
      <div className="bg-black absolute w-full py-5 px-6 lg:px-8">
        <div>
          {/* desktop nav */}
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div
              className="flex w-[9em] items-center justify-between lg:min-w-0 "
              aria-label="Global"
            >
              <Link href="/" className="-m-1.5 p-1.5">
                {/* <span className="sr-only">Repocraft</span> */}
                {/* <img
									className="h-8"
									src="https://cdn.staticstorm.repocraft.com/staticstormlogo.png"
									alt="repocraftlogo"
								/> */}
                <Image
                  src="https://cdn.staticstorm.repocraft.com/staticstormlogo.png"
                  width={30}
                  height={30}
                  layout="fit"
                  alt="repocraftlogo"
                />
              </Link>
              {/* theme toggle button commented for now, implementing only light mode */}
              {/* <Theme /> */}
            </div>
            {/* hamburger button */}
            <Hamburger setMobileMenuOpen={setMobileMenuOpen} />
            {/* top nav desktop menu */}
            <DesktopMenu navigation={navigation} />
            {/* sign up button */}
            <StarUs />
            <SignUp />
          </nav>
          {/* mobile nav */}
          <MobileNav
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            navigation={navigation}
          />
        </div>
      </div>
    </>
  );
};

export default TopNav;
