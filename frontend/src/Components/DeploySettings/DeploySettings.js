import React, { useState } from "react";

const DeploySettings = ({ id }) => {
  const [subDomain, setSubDomain] = useState(null);
  const [isAvailable, setIsAvailable] = useState(null);
  const [isAvailabilityAvailable, setIsAvailabilityAvailable] = useState(false);
  const [frameworkPreset, setFrameworkPreset] = useState(1);
  const [rootDirectory, setRootDirectory] = useState(null);
  const [packageManager, setPackageManager] = useState(1);

  const checkIsAvailable = async () => {
    // TO-DO
    return true;
  };

  const deploy = async () => {
    const ia = await checkIsAvailable();
    if (ia) {
      const response = await fetch(
        "http://staticstorm.repocraft.com/api/deploy",
        {
          mode: 'cors',
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("access-token")}`,
          },
          body: JSON.stringify({
            frameworkPreset,
            rootDirectory,
            subDomain,
            packageManager,
            accessToken: localStorage.getItem("access-token"),
            githubRepoId: id,
          }),
        },
      );
      const json = await response.json();
      if (json.success) {
        window.location.href = `/deploying/${json.projectId}`;
      } else if (response.status === 401) {
        window.alert(json.error);
      } else {
        window.alert("Failed");
      }
    }
  };

  return (
    <div className="w-[90%]">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="mt-12 w-full">
          <div className="w-full">
            <div className="mt-5 mx-auto p-4 bg-gray-900 border border-gray-800 rounded-lg shadow">
              <div className="mt-5 mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
                <h5 className="mb-6 text-2xl font-bold tracking-tight text-white">
                  Project Name
                </h5>
                <div>
                  <h5 className="mb-6 text-lg tracking-tight text-white">
                    The same will be your subdomain ( i.e.{" "}
                    <strong>{!subDomain ? "hello-world" : subDomain}</strong>
                    .staticstorm.repocraft.com )
                  </h5>
                  <input
                    style={{ marginBottom: 10 }}
                    value={subDomain}
                    onChange={(e) => setSubDomain(e.target.value)}
                    placeholder="hello-world"
                    type="text"
                    id="default-input"
                    className="mt-5 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  />

                  {isAvailabilityAvailable && (
                    <div>
                      {!isAvailable && (
                        <small className="text-red-500">
                          ❌ This domain is unavailable
                        </small>
                      )}
                      {isAvailable && (
                        <small className="text-green-500">
                          ✅ This domain is available
                        </small>
                      )}
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-5 mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
                <h5 className="mb-6 text-2xl font-bold tracking-tight text-white">
                  Frawork Preset
                </h5>
                <select
                  value={frameworkPreset}
                  onChange={(e) => setFrameworkPreset(parseInt(e.target.value))}
                  id="default"
                  className="border mb-6 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value={1} selected>
                    Create React App
                  </option>
                  <option value={2}>Vanilla.js</option>
                </select>
              </div>
              <div className="mt-5 mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
                <h5 className="mb-6 text-2xl font-bold tracking-tight text-white">
                  Root Directory
                </h5>
                <div>
                  <input
                    value={rootDirectory}
                    onChange={(e) => setRootDirectory(e.target.value)}
                    placeholder="./"
                    type="text"
                    id="default-input"
                    className="mt-5 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="mt-5 mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
                <h5 className="mb-6 text-2xl font-bold tracking-tight text-white">
                  Select Package Manager
                </h5>
                <select
                  value={packageManager}
                  onChange={(e) => setPackageManager(parseInt(e.target.value))}
                  id="default"
                  className="border mb-6 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value={1} selected>
                    NPM
                  </option>
                  <option value={2}>Yarn</option>
                </select>
              </div>
              <div className="mt-5 mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
                <button
                  onClick={deploy}
                  type="button"
                  className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
                >
                  Deploy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploySettings;
