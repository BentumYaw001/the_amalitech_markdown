interface Editorprops {
  markdown: string;
  setMarkdown: (markdown: string) => void;
}

export default function Editor({ markdown, setMarkdown }: Editorprops) {
  return (
    <div className="border-r-2 border-gray-600">
      <div className="w-full bg-gray-900 p-3 text-gray-400 uppercase tracking-wider flex flex-row justify-between ">
        Markdown
        <button>
          <img
            src="/src/assets/icon-hide-preview.svg"
            className="h-4 justify-center"
          />
        </button>
      </div>
      <textarea
        className="w-full h-sreen bg-gray-800 outline-none p-6 "
        onChange={(e) => setMarkdown(e.target.value)}
      >
        {markdown}
      </textarea>
    </div>
  );
}
