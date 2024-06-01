export const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-2 flex items-center justify-between">
        <div className="flex items-center ">
          <div className="flex justify-center font-semibold px-2 text-white">
            <img src="\src\assets\icon-menu.svg" className="px-4" />
            MARKDOWN |
          </div>
          <div className="flex-row flex justify-center ml-10">
            <img src="\src\assets\icon-document.svg" />
            <div className=" text-gray-400 text-lg font-semibold  items-center ml-4 flex-col justify-center">
              <p>Document Name</p>
              <p>welcome.md</p>
            </div>
          </div>
          <span className=" flex flex-row">
            <p>
              <img src="\src\assets\icon-delete.svg" />
            </p>
            <button className="ml-3 border-r-0 justify-between text-justify text-white flex flex-row">
              <img src="\src\assets\icon-save.svg" />
              Save Changes
            </button>
          </span>
        </div>
      </nav>
    </>
  );
};
