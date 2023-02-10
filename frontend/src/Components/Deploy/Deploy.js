import React from "react";

const content = `Running build in Cleveland, USA (East) – cle1
Cloning github.com/devarshishimpi/staticstormhackathon (Branch: main, Commit: 80f21eb)
Previous build cache not available
Cloning completed: 375.626ms
Running "vercel build"
Done in 1.00s`;
const domains = `staticstormhackathon-devarshishimpi.vercel.app - Done
staticstormhackathon-git-main-devarshishimpi.vercel.app - Done
staticstormhackathon.vercel.app - Done`;

const Deploy = () => {

  return (
    <div className="w-[90%]">
    <div class="mt-12">
      <div>
      </div>
     <div className="columns-2">
        <div class="mx-auto p-4 bg-gray-900 border border-gray-900 rounded-lg shadow">
        <div class="block p-3 border rounded-lg shadow  bg-gray-800 border-gray-800">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Status</h5>
            <p class="font-normal text-gray-400">🟢Deploying</p>      
        </div>
        <div class="mt-3 block p-3 border rounded-lg shadow  bg-gray-800 border-gray-800">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Environment</h5>
            <p class="font-normal text-gray-400">Production</p>      
        </div>
      </div>
      <div class="mx-auto p-4 bg-gray-900 border border-gray-900 rounded-lg shadow">
        <div class="block p-3 border rounded-lg shadow  bg-gray-800 border-gray-800">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Duration</h5>
            <p class="font-normal text-gray-400">1m</p>      
        </div>
        <div class="mt-3 block p-5 border rounded-lg shadow  bg-gray-800 border-gray-800">
        <button type="button" class="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">Visit</button>
        <button type="button" class="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-red-600 hover:bg-red-700 focus:ring-red-900">Delete</button>
        </div>
      </div>

    </div>
      <div class="mt-5 max-w-screen-xl mx-auto p-4 bg-gray-900 border border-gray-800 rounded-lg shadow">
      <div class=" max-w-screen-xl mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Deploying</h5>
          <p class="font-mono text-gray-300">
            {content.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
        </div>
        <div class="mt-5 max-w-screen-xl mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Assigning Domains</h5>
          <p class="font-mono text-gray-300">
            {domains.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          </div>
      </div>
    </div>
    </div>
  );
};

export default Deploy;
