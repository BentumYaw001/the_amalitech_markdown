import React, { useState } from "react";

export const Navbar = () => {
  const [documentName, setDocumentName] = useState("welcome.md");
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(documentName);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempName(e.target.value);
  };

  const handleSave = () => {
    // Append ".md" as an extension
    const newName = tempName + ".md";
    setDocumentName(newName);
    setIsEditing(false);
  };

  return (
    <>
      <nav className="bg-gray-800 p-1 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex justify-center font-semibold px-2 text-white">
            <button>
              <img
                src="/src/assets/icon-menu.svg"
                className="px-3"
                alt="Menu Icon"
              />
            </button>
            MARKDOWN
          </div>
          <span className="border-l border-white mx-4 h-10" />

          <div className="flex flex-row justify-center ml-5">
            <img
              src="/src/assets/icon-document.svg"
              alt="Document Icon"
              className="h-8 w-5 my-auto"
            />
            <div className="text-gray-400 text-lg font-semibold items-center ml-5 flex-col justify-center">
              <p>Document Name</p>
              {isEditing ? (
                <div className="flex items-center">
                  <input
                    type="text"
                    value={tempName}
                    onChange={handleInputChange}
                    onBlur={handleSave}
                    autoFocus
                    className="bg-transparent text-white focus:outline-none  focus:border-b border-white caret-customRed"
                  />
                </div>
              ) : (
                <p
                  className="text-white cursor-pointer"
                  onClick={() => setIsEditing(true)}
                >
                  {documentName}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <button>
            <p className="mr-2">
              <img src="/src/assets/icon-delete.svg" alt="Delete Icon" />
            </p>
          </button>

          <button className="ml-2 items-center text-white flex flex-row bg-customRed p-2 rounded-sm mr-4">
            <img
              src="/src/assets/icon-save.svg"
              className="mr-2"
              alt="Save Icon"
            />
            Save Changes
          </button>
        </div>
      </nav>
    </>
  );
};
