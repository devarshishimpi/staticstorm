import React from "react";

const DeploySettings = () => {

  return (
    <div className="w-[90%]">
        <div className="flex flex-col items-center justify-center w-full">
        <div class="mt-12 w-full">
    <div className="w-full">
      <div class="mt-5 mx-auto p-4 bg-gray-900 border border-gray-800 rounded-lg shadow">
      <div class="mt-5 mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
            <h5 class="mb-6 text-2xl font-bold tracking-tight text-white">Project Name</h5>
            <div>
                <h5 class="mb-6 text-lg tracking-tight text-white">The same will be your subdomain ( i.e. projectname.staticstorm.coderush.tech )</h5>
                <input placeholder="hello-world" type="text" id="default-input" class="mt-5 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
            </div>
        </div>
        <div class="mt-5 mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
            
            <h5 class="mb-6 text-2xl font-bold tracking-tight text-white">Frawork Preset</h5>
                <select id="default" class="border mb-6 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                <option selected>Create React App</option>
                <option>Vanilla.js</option>
                </select>
        </div>
        <div class="mt-5 mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
            <h5 class="mb-6 text-2xl font-bold tracking-tight text-white">Root Directory</h5>
            <div>
                <input placeholder="./" type="text" id="default-input" class="mt-5 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" />
            </div>
        </div>
        <div class="mt-5 mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
            
            <h5 class="mb-6 text-2xl font-bold tracking-tight text-white">Select Package Manager</h5>
                <select id="default" class="border mb-6 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500">
                <option selected>NPM</option>
                <option>Yarn</option>
                </select>
        </div>
        <div class="mt-5 mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
                <button type="button" class="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">Deploy Now</button>
        </div>

      </div>
      
    </div>
    </div>
        </div>
    </div>
  );
};

export default DeploySettings;
