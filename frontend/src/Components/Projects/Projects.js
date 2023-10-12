import React, { useEffect, useState } from "react";

const Projects = ({ user }) => {
  const [projects, setProjects] = useState([]);

  console.log(user);

  const getAllProjects = async () => {
    const response = await fetch(
      "http://abcd.staticstorm.coderush.tech/api/projects",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          accessToken: localStorage.getItem("access-token"),
        }),
      },
    );
    const json = await response.json();
    console.log(json);
    setProjects(json);
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  const deleteProject = async (project) => {
    const shouldI = window.confirm(`Are you sure to delete ${project.name}?`);
    if (shouldI) {
      const response = await fetch(
        "http://abcd.staticstorm.coderush.tech/api/deploy/deleteconf",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ projectId: project._id }),
        },
      );
      const json = await response.json();
      console.log(json);
      deleteFromDb(project);
    }
  };

  const restartNginx = async () => {
    const response = await fetch(
      "http://abcd.staticstorm.coderush.tech/api/deploy/reloadnginx",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    const json = await response.json();
    if (json.success) {
      window.location.href = "/dashboard";
    } else {
      window.alert("Internal Server Error!");
    }
  };

  const deleteFromDb = async (project) => {
    const response = await fetch(
      "http://abcd.staticstorm.coderush.tech/api/deploy/deleteproject",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ projectId: project._id }),
      },
    );
    const json = await response.json();
    console.log(json);
    restartNginx();
  };

  return (
    <div className="w-[90%] m-auto">
      <div className="w-full flex flex-col items-center justify-center">
        <div class="w-full mt-5 mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
          {projects &&
            projects.map((project) => {
              return (
                <div key={project._id}>
                  <div className="rounded-2 columns-2 py-5">
                    <h5 class="mt-2 text-xl font-bold tracking-tight text-white">
                      {" "}
                      {project.name}.staticstorm.coderush.tech
                    </h5>
                    <div class="float-right">
                      <a
                        href={`http://${project.name}.staticstorm.coderush.tech`}
                        target="_blank"
                        type="button"
                        class="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 cursor-pointer"
                      >
                        Visit
                      </a>
                      <button
                        type="button"
                        className="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-red-600 hover:bg-red-700 focus:ring-red-900"
                        onClick={() => deleteProject(project)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <hr class="h-px border-0 bg-gray-700"></hr>
                </div>
              );
            })}
          {/* <div className="rounded-2 columns-2">
            <h5 class="mt-2 text-xl font-bold tracking-tight text-white">
              {" "}
              devarshishimpi/StaticStorm
            </h5>
            <div class="float-right">
              <button
                type="button"
                class="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
              >
                Visit
              </button>
              <button
                type="button"
                className="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-red-600 hover:bg-red-700 focus:ring-red-900"
              >
                Delete
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
