import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import SignUpMobile from "./SignUpMobile.js";
import StarUsMobile from "./StarUsMobile.js";

const MobileNav = ({ mobileMenuOpen, setMobileMenuOpen, navigation }) => {
  return (
    <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <Dialog.Panel
        focus="true"
        className="fixed inset-0 z-10 overflow-y-auto bg-black px-6 py-6 lg:hidden"
      >
        <div className="flex h-9 items-center justify-between">
          <div className="flex">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Repocraft</span>
              <Image
                width={30}
                height={30}
                layout="fit"
                className="h-8"
                src="https://cdn.staticstorm.repocraft.com/staticstormlogo.png"
                alt="repocraftlogo"
              />
            </Link>
          </div>
          <div className="flex">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="color h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="x-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-300 hover:bg-gray-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="pt-2 pb-2">
              <StarUsMobile />
            </div>
            <div className="py-6">
              <SignUpMobile />
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default MobileNav;
