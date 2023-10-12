import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import React from "react";

const Hamburger = ({ dark, setMobileMenuOpen }) => {
  const handleOnClick = () => {
    setMobileMenuOpen(true);
  };

  return (
    <div className="flex lg:hidden">
      <button
        type="button"
        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
        onClick={handleOnClick}
      >
        <span className="sr-only">Open main menu</span>
        <Bars3CenterLeftIcon className="h-8 w-8" aria-hidden="true" />
      </button>
    </div>
  );
};

export default Hamburger;
