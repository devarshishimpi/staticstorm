'use client'
import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import { useNavigate } from "react-router-dom";
import Projects from "@/Components/Projects/Projects";
import { useRouter } from "next/router";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  const navigate = useRouter;

  const validateAccessToken = async () => {
    const response = await fetch("https://api.github.com/user", {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("access-token")}`,
      },
    });
    const json = await response.json();
    if (!json.id) {
      localStorage.removeItem("access-token");
      navigate("/login");
    } else {
      setUser(json);
    }
  };



  return (
    <div className="flex items-center justify-center">
        <title>StaticStorm | Dashboard</title>
        <meta name="description" content="" />
  <Projects user={user} />
    </div>
  );
};

export default Dashboard;