import { useState } from "react";

export default () => {
  const [menuState, setMenuState] = useState(false);

  // Replace javascript:void(0) path with our path
  const navigation = [
    { title: "Home", path: "javascript:void(0)" },
    { title: "Series", path: "javascript:void(0)" },
    { title: "Film", path: "javascript:void(0)" },
    { title: "Latest", path: "javascript:void(0)" },
  ];
  // flex items-center space-x-8 py-3  m-auto  w-[90%]
  return (
    <nav className="bg-slate-600">
      <div className=" sm:flex sm:w-[90%] sm:m-[auto] md:h-14 xl:w-[85%] 2xl:h-20">
        <div className="flex-none lg:flex-initial">
          <a href="#">
            <img className="sm:w-[45px] sm:p-1 md:p-0 md:mt-2 2xl:w-[65px]"
              src="https://icon-library.com/images/hd-icon-png/hd-icon-png-5.jpg"
              width={60}
              alt="video navbar logo"
            />
          </a>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div
            className={`bg-red absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
              menuState ? "" : "hidden"
            }`}
          >
            <ul className="  md:ml-6 mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-white  hover:text-zinc-400 text-lg">
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <form className="flex sm:h-[30px] md:h-[40px] items-center space-x-2 border rounded-md p-2 bg-slate-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-5 flex-none text-black md:h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className= "sm:w-16  sm:text-sm lg:w-32 lg:text-lg  bg-slate-400  outline-none appearance-none placeholder-black text-black "
                type="text"
                placeholder="Search"
              />
            </form>

            <button
              className="outline-none text-black block lg:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
