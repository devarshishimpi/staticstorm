import Link from "next/link";

const NewDeploy = ({
  getNextProjects,
  getPreviousProjects,
  projects,
  nextPage,
}) => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center">
        <div className="mt-12 w-[90%]">
          <div className="mt-5 mx-auto p-4 bg-gray-900 border border-gray-800 rounded-lg shadow">
            <div className="mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
              <div className="columns-2 flex justify-center">
                <h5 className="mb-8 text-2xl font-bold tracking-tight text-white">
                  Deploy from Github
                </h5>
                {/* <div>
                <button type="button" className="float-right text-white bg-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-500 hover:bg-[#050708]/30 mr-2 mb-2">
                    <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                    Grant Access to Github
                </button>
            </div> */}
              </div>
              <br></br>
              {projects.map((project) => {
                return (
                  <div>
                    <div className="rounded-2 columns-2">
                      <h5 className="mt-4 text-xl font-bold tracking-tight text-white">
                        {project.full_name}
                      </h5>
                      <div className="float-right">
                        <Link
                          to={`/selectconfig/${project.id}`}
                          type="button"
                          className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
                        >
                          Deploy
                        </Link>
                      </div>
                    </div>
                    <hr className="h-px my-8 border-0 bg-gray-700" />
                  </div>
                );
              })}
              <div className="flex row justify-between mt-16">
                <button
                  onClick={getPreviousProjects}
                  type="button"
                  disabled={nextPage <= 2}
                  className={`text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-black ${
                    nextPage <= 2 && "opacity-40"
                  } hover:bg-[#202020] focus:outline-none focus:ring-black`}
                >
                  Previous
                </button>
                <button
                  onClick={getNextProjects}
                  type="button"
                  disabled={projects.length < 30}
                  className={`text-white ${
                    projects.length < 30 && "opacity-40"
                  } focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-black hover:bg-[#202020] focus:outline-none focus:ring-black`}
                >
                  Next
                </button>
              </div>
            </div>

            <div className="mt-5 mx-auto p-6 bg-gray-800 border border-gray-800 rounded-lg shadow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Deploy from URL
              </h5>
              <div className="columns-2">
                <div>
                  <input
                    placeholder="https://github.com/bytemakers/devcode"
                    type="text"
                    id="default-input"
                    className="mt-5 text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="float-right">
                  <Link
                    to={`/selectconfig/1`}
                    type="button"
                    className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
                  >
                    Deploy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewDeploy;
