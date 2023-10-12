import Link from "next/link";

const SignUp = () => {
  return (
    <div className="mt-2 hidden lg:flex lg:min-w-0 lg:items-center lg:justify-center">
      <Link
        href="/login"
        className="hover:drop-shadow-2xl hover:bg-gray-200 text-black bg-white focus:ring-4 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
      >
        Get started
      </Link>
    </div>
  );
};

export default SignUp;
