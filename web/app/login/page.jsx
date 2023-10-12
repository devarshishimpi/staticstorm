'use client'
import { useEffect } from "react";
import GitLogin from "@/Components/GitLogin/GitLogin";
import { useRouter } from "next/router";

const Login = () => {
  const navigate = useRouter;

  useEffect(() => {
    if (localStorage.getItem("access-token")) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <>
        <title>StaticStorm | Login</title>
        <meta name="description" content="" />
      <GitLogin />
    </>
  );
};

export default Login;