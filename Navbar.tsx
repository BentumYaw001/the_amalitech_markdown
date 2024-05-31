import React from "react";

export const Navbar = () => {
  const [isOn, setIsOn] = React.useState(false);

  return (
    <>
      <nav className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-white text-lg font-semibold">
            Document Name
          </span>
          <button className="ml-4 text-white">Save Changes</button>
          <input
            type="checkbox"
            checked={isOn}
            onClick={(e) => setIsOn(e.target.val)}
          />
          <br />
          <button onClick={() => setIsOn((prevState) => !prevState)}>
            Toggle
          </button>
        </div>
      </nav>
    </>
  );
};
