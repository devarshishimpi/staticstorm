import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchGitHubStars } from "../../../utils/github";

const StarUsMobile = () => {
  const [stars, setStars] = useState(0);

  useEffect(() => {
    async function fetchStars() {
      const stars = await fetchGitHubStars();
      setStars(stars);
    }
    fetchStars();
  }, []);

  return (
    <div className="mr-4">
      <Link href="https://github.com/devarshishimpi/staticstorm" passHref>
        <span
          className="inline-flex items-center rounded-md justify-center !leading-none text-center whitespace-nowrap transition-[colors, opacity] duration-200 outline-none uppercase font-medium h-10 px-4 text-xs bg-transparent text-white border border-gray-5 hover:bg-gray-4 hover:border-gray-4 group pl-3 cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 26 26"
            className="mr-2 h-[20px] w-[20px]"
          >
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M13 .324c-7.15 0-13 5.85-13 13 0 5.769 3.737 10.644 8.856 12.35.65.082.894-.244.894-.65V22.83c-3.656.813-4.388-1.706-4.388-1.706-.568-1.462-1.462-1.868-1.462-1.868-1.219-.813.081-.813.081-.813 1.3.081 2.032 1.3 2.032 1.3 1.137 1.95 3.006 1.381 3.818 1.056a2.805 2.805 0 0 1 .813-1.706c-2.925-.325-5.931-1.462-5.931-6.419 0-1.381.487-2.6 1.3-3.494-.163-.325-.57-1.625.162-3.412 0 0 1.056-.325 3.575 1.3 1.056-.325 2.113-.406 3.25-.406s2.194.162 3.25.406c2.519-1.706 3.575-1.381 3.575-1.381.731 1.787.244 3.087.163 3.412.812.894 1.3 2.031 1.3 3.494 0 4.956-3.007 6.094-5.932 6.419.488.406.894 1.218.894 2.437v3.575c0 .325.244.732.894.65C22.263 23.968 26 19.093 26 13.324c0-7.15-5.85-13-13-13Z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="mt-0.5">Star us</span>
          <span
            className="flex items-center before:mx-2 before:h-[18px] before:w-px before:bg-gray-4 before:transition-colors before:duration-200 group-hover:before:bg-gray-5 mt-0.5"
            aria-label={`${stars} stars on Github`}
          >
            {stars}
          </span>
        </span>
      </Link>
    </div>
  );
};

export default StarUsMobile;
