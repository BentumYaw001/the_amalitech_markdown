import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import { Navbar } from "./components/Navbar";
function App() {
  const [markdown, setMarkdown] = useState("# Markdown Editor");
  return (
    <body>
      <span>
        <Navbar />
      </span>
      <main className="w-full h-screen grid grid-cols-1  sm:grid-cols-2 bg-gray-800 text-gray-300">
        <Editor markdown={markdown} setMarkdown={setMarkdown} />
        <Preview markdown={markdown} />
      </main>
    </body>
  );
}

export default App;
