"use client";
import { useEffect, useState } from "react";
import NewDeploy from "@/Components/NewDeploy/NewDeploy";
import { useRouter } from "next/router";

const NewProject = () => {
  const [nextPage, setNextPage] = useState(2);
  const [projects, setProjects] = useState([]);

  const navigate = useRouter;

  const getProjectsFirstTime = async () => {
    const response = await fetch(`https://api.github.com/user/repos?page=1`, {
      method: "GET",
      headers: {
        Authorization: `Token ${localStorage.getItem("access-token")}`,
      },
    });
    const json = await response.json();
    // console.log(json);
    setProjects(json);
  };

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
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("access-token")) {
      navigate("/login");
    } else {
      validateAccessToken();
      getProjectsFirstTime();
    }
  }, []);

  const getNextProjects = async () => {
    const response = await fetch(
      `https://api.github.com/user/repos?page=${nextPage}`,
      {
        method: "GET",
        headers: {
          Authorization: `Token ${localStorage.getItem("access-token")}`,
        },
      },
    );
    const json = await response.json();
    console.log(json);
    setNextPage((page) => page + 1);
    setProjects(json);
  };

  const getPreviousProjects = async () => {
    const response = await fetch(
      `https://api.github.com/user/repos?page=${nextPage - 2}`,
      {
        method: "GET",
        headers: {
          Authorization: `Token ${localStorage.getItem("access-token")}`,
        },
      },
    );
    const json = await response.json();
    console.log(json);
    setNextPage((page) => page - 1);
    setProjects(json);
  };

  return (
    <>
      <title>StaticStorm | New Project</title>
      <meta name="description" content="" />
      <NewDeploy
        getNextProjects={getNextProjects}
        getPreviousProjects={getPreviousProjects}
        projects={projects}
        nextPage={nextPage}
      />
    </>
  );
};

export default NewProject;
