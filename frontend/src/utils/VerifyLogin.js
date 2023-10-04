import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const VerifyLogin = () => {
  const navigate = useNavigate();

  const login = async () => {
    const response = await fetch(
      "http://api.staticstorm.repocraft.com/api/auth",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken }),
      },
    );

    const json = await response.json();
    if (json.success) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const accessToken = searchParams.get("access_token");
  if (!accessToken) {
    navigate("/login");
  } else {
    login();
    localStorage.setItem("access-token", accessToken);
  }

  return <div>VerifyLogin</div>;
};

export default VerifyLogin;
