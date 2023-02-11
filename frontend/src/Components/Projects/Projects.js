import React from "react";

const Projects = () => {

  return (
    <div className="w-[90%] m-auto">
        <div className="w-full flex flex-col items-center justify-center">
                <div className="w-full mt-5 mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
                <div className="rounded-2 columns-2">
                <h5 className="mt-2 text-xl font-bold tracking-tight text-white"> devarshishimpi/devcode</h5>
                <div className="float-right">
                    <button type="button" className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">Visit</button>
                    <button type="button" className="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-red-600 hover:bg-red-700 focus:ring-red-900">Delete</button>
                </div>
                </div>
                <hr className="h-px my-8 border-0 bg-gray-700"></hr>
                <div className="rounded-2 columns-2">
                <h5 className="mt-2 text-xl font-bold tracking-tight text-white"> devarshishimpi/devcode</h5>
                <div className="float-right">
                    <button type="button" className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800">Visit</button>
                    <button type="button" className="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-red-600 hover:bg-red-700 focus:ring-red-900">Delete</button>
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Projects;
