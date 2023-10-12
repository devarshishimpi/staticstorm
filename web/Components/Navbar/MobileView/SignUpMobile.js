import Link from "next/link";

const SignUpMobile = () => {
  return (
    <div className="lg:min-w-0 lg:items-center lg:justify-center">
      <Link
        href="/soon"
        className="hover:drop-shadow-2xl hover:bg-gray-200 text-black bg-white focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
      >
        Get Started
      </Link>
    </div>
  );
};

export default SignUpMobile;
