export const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center ">
          <div className="flex justify-center font-semibold p-2 text-white">
            MARKDOWN |
          </div>
          <span className=" text-gray-400 text-lg font-semibold justify-center items-center ml-10">
            Document Name
            <br />
            <p>welcome.md</p>
          </span>
        </div>
      </nav>
    </>
  );
};
