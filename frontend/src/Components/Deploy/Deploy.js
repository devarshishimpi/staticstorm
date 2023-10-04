import React, { useEffect, useState } from "react";

const Deploy = ({ id }) => {
  const [cloningLogs, setCloningLogs] = useState(null);
  const [installLogs, setInstallLogs] = useState(null);
  const [buildLogs, setBuildLogs] = useState(null);
  console.log(id);

  const clone = async () => {
    const accessToken = localStorage.getItem("access-token");
    const response = await fetch(
      "http://staticstorm.repocraft.com/api/deploy/clone",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken, projectId: id }),
      },
    );
    const json = await response.json();
    setCloningLogs(json.message);
  };

  const install = async () => {
    const accessToken = localStorage.getItem("access-token");
    const response = await fetch(
      "http://staticstorm.repocraft.com/api/deploy/install",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken, projectId: id }),
      },
    );
    const json = await response.json();
    setInstallLogs(json);
  };

  const build = async () => {
    const accessToken = localStorage.getItem("access-token");
    const response = await fetch(
      "http://staticstorm.repocraft.com/api/deploy/build",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken, projectId: id }),
      },
    );
    const json = await response.json();
    setBuildLogs(json);
  };

  const copyBuild = async () => {
    const accessToken = localStorage.getItem("access-token");
    const response = await fetch(
      "http://staticstorm.repocraft.com/api/deploy/copybuild",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken, projectId: id }),
      },
    );
    const json = await response.json();
    // console.log(json);
  };

  const nginxConf = async () => {
    const accessToken = localStorage.getItem("access-token");
    const response = await fetch(
      "http://staticstorm.repocraft.com/api/deploy/nginxconf",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken, projectId: id }),
      },
    );
    const json = await response.json();
    console.log(json);
  };

  const configureWebhook = async () => {
    const accessToken = localStorage.getItem("access-token");
    const response = await fetch(
      "http://staticstorm.repocraft.com/api/deploy/configurewebhook",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ accessToken, projectId: id }),
      },
    );
    const json = await response.json();
    console.log(json);
  };

  const reloadNginx = async () => {
    const response = await fetch(
      "http://staticstorm.repocraft.com/api/deploy/reloadnginx",
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
    }
  };

  useEffect(() => {
    const allThings = async () => {
      await clone();
      await install();
      await build();
      await copyBuild();
      await nginxConf();
      await configureWebhook();
      await reloadNginx();
    };
    allThings();
  }, []);

  return (
    <div className="w-[90%]">
      <div className="mt-12">
        <div className="columns-2">
          <div className="mx-auto p-4 bg-gray-900 border border-gray-900 rounded-lg shadow">
            <div className="block p-3 border rounded-lg shadow  bg-gray-800 border-gray-800">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Status
              </h5>
              <p className="font-normal text-gray-400">🟢 Deploying</p>
            </div>
            <div className="mt-3 block p-3 border rounded-lg shadow  bg-gray-800 border-gray-800">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Environment
              </h5>
              <p className="font-normal text-gray-400">Production</p>
            </div>
          </div>
          <div className="mx-auto p-4 bg-gray-900 border border-gray-900 rounded-lg shadow">
            <div className="block p-3 border rounded-lg shadow  bg-gray-800 border-gray-800">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Duration
              </h5>
              <p className="font-normal text-gray-400">1m</p>
            </div>
            <div className="mt-3 block p-5 border rounded-lg shadow  bg-gray-800 border-gray-800">
              <button
                type="button"
                className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
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
          </div>
        </div>
        <div className="mt-5 max-w-screen-xl mx-auto p-4 bg-gray-900 border border-gray-800 rounded-lg shadow">
          <div className=" max-w-screen-xl mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Cloning <small>{!cloningLogs && "(Processing...)"}</small>
            </h5>
            <p className="font-mono text-gray-300">
              {cloningLogs &&
                cloningLogs.split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {cloningLogs === "Repository cloned successfully"
                      ? `🟢 ${line}`
                      : `🔴 Failed to clone repository`}
                    <br />
                  </React.Fragment>
                ))}
            </p>
          </div>
          <div className="mt-5 max-w-screen-xl mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Installing Dependencies{" "}
              <small>{!installLogs && "(Processing...)"}</small>
            </h5>
            <p className="font-mono text-gray-300">
              {installLogs && (
                <React.Fragment>
                  {installLogs.logs}
                  <br /> <br />
                  {installLogs.message === "Dependencies installed successfully"
                    ? `🟢 ${installLogs.message}`
                    : `🔴 Failed to install dependencies`}
                  <br />
                </React.Fragment>
              )}
            </p>
          </div>
          <div className="mt-5 max-w-screen-xl mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Building <small>{!buildLogs && "(Processing...)"}</small>
            </h5>
            <p className="font-mono text-gray-300">
              {buildLogs && (
                <React.Fragment>
                  {buildLogs.logs}
                  <br /> <br />
                  {buildLogs.message === "Build successful"
                    ? `🟢 ${buildLogs.message}`
                    : `🔴 Failed to build`}
                  <br />
                </React.Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deploy;
