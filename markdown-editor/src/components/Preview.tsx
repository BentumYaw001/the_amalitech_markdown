import { useEffect, useState } from "react";
import { marked } from "marked";
import dompurify from "dompurify";
// import hljs from 'highlight.js';
import "highlight.js/styles/default.css";
import "highlight.js/styles/tokyo-night-dark.css";

interface PreviewProps {
  markdown: string;
}

// marked.setOptions({
//     highlight: function (code: string, lang: string): string {
//         const language = hljs.getLanguage(lang) ? lang : 'plaintext';
//         return hljs.highlight(code, { language }).value;
//     },
//     langPrefix: 'hljs language-'
// });

// marked.use({
//     async: true,
//     pedantic: false,
//     gfm: true,
//   });

export default function Preview({ markdown }: PreviewProps) {
  const [parsed, setParsed] = useState<string>("");

  useEffect(() => {
    const parseMarkdown = async () => {
      let result: string | Promise<string> = marked.parse(markdown);

      // Ensure result is a string
      if (result instanceof Promise) {
        result = await result;
      }

      setParsed(dompurify.sanitize(result));
    };

    parseMarkdown();
  }, [markdown]);

  return (
    <div>
      <div className="w-full bg-gray-900 p-3 text-gray-400 uppercase tracking-wider flex flex-row justify-between">
        Preview
        <button>
          <img
            src="/src/assets/icon-show-preview.svg"
            className="h-4 justify-center"
          />
        </button>
      </div>
      <div
        className="p-6 prose prose-invert prose-a:text-blue-500 max-h-fit"
        dangerouslySetInnerHTML={{ __html: parsed }}
      />
    </div>
  );
}
