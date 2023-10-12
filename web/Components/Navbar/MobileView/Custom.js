import React from "react";
import Link from "next/link";

const Custom = ({ href, text, buttonclassName, arrowclassName }) => {
  return (
    <Link href={href} className={buttonclassName}>
      {text}
      <span className={arrowclassName} aria-hidden="true">
        &rarr;
      </span>
    </Link>
  );
};

export default Custom;
