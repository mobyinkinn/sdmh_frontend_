// // "use client";

// // import dynamic from "next/dynamic";
// // import { useRef } from "react";

// // // Dynamically import JoditEditor
// // const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

// // const Jodit = ({ content, setContent }) => {
// //   const editor = useRef(null);

// //   const config = {
// //     readonly: false,
// //     placeholder: "Start typing...",
// //     language: "en", // Set default language
// //   };

// //   return (
// //     <JoditEditor
// //       ref={editor}
// //       value={content}
// //       config={config}
// //       tabIndex={1} // TabIndex of textarea
// //       onBlur={(newContent) => setContent(newContent)} // Update content onBlur
// //       onChange={(newContent) => {}}
// //     />
// //   );
// // };

// // export default Jodit;

// "use client";

// import dynamic from "next/dynamic";
// import { useRef } from "react";

// // Dynamically import JoditEditor
// const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

// const Jodit = ({ content, setContent }) => {
//   const editor = useRef(null);

//   const config = {
//     readonly: false,
//     placeholder: "Start typing...",
//     language: "en", // Set default language
//   };

//   return (
//     <div
//       style={{
//         maxHeight: "300px",
//         overflowY: "auto",
//         border: "1px solid #ccc",
//         borderRadius: "4px",
//       }}
//     >
//       <JoditEditor
//         ref={editor}
//         value={content}
//         config={config}
//         tabIndex={1} // TabIndex of textarea
//         onBlur={(newContent) => setContent(newContent)} // Update content onBlur
//         onChange={(newContent) => {}}
//       />
//     </div>
//   );
// };

// export default Jodit;

// import React, { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

// // Custom font sizes
// const customFontSizes = [
//   "8px",
//   "10px",
//   "12px",
//   "14px",
//   "16px",
//   "18px",
//   "20px",
//   "24px",
//   "28px",
//   "32px",
//   "36px",
// ];

// // Custom font size module
// const Size = ReactQuill.Quill.import("attributors/style/size");
// Size.whitelist = customFontSizes; // Define the allowed font sizes
// ReactQuill.Quill.register(Size, true);

// const Jodit = ({ content, setContent }) => {
//   const handleChange = (value) => {
//     setContent(value);
//   };

//   const modules = {
//     toolbar: [
//       // Add custom font size dropdown
//       [{ font: [] }, { size: customFontSizes }],

//       // Bold, italic, underline, strikethrough
//       ["bold", "italic", "underline", "strike"],

//       // Text color and background color
//       [{ color: [] }, { background: [] }],

//       // Alignment
//       [{ align: [] }],

//       // List options
//       [{ list: "ordered" }, { list: "bullet" }],

//       // Indent and outdent
//       [{ indent: "-1" }, { indent: "+1" }],

//       // Add links, images, and videos
//       ["link", "image", "video"],

//       // Clear formatting
//       ["clean"],
//     ],
//   };

//   const formats = [
//     "font",
//     "size", // Include size in formats
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "color",
//     "background",
//     "align",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//     "image",
//     "video",
//   ];

//   return (
//     <div
//       style={{
//         maxHeight: "300px",
//         overflowY: "auto",
//         border: "1px solid #ccc",
//         borderRadius: "4px",
//       }}
//     >
//       <style>
//         {`
//           .ql-editor {
//             min-height: 200px; 
//           }

//           /* Custom CSS for font size dropdown labels */
//           .ql-snow .ql-picker.ql-size .ql-picker-label[data-value]::before,
//           .ql-snow .ql-picker.ql-size .ql-picker-item[data-value]::before {
//             content: attr(data-value);
//           }

//           /* Ensure all labels appear in the same font size */
//           .ql-snow .ql-picker.ql-size .ql-picker-label,
//           .ql-snow .ql-picker.ql-size .ql-picker-item {
//             font-size: 14px; /* Set a uniform font size for all labels */
//           }
//         `}
//       </style>
//       <ReactQuill
//         theme="snow" // You can switch to 'bubble' if preferred
//         value={content}
//         onChange={handleChange}
//         modules={modules}
//         formats={formats}
//         placeholder="Start typing..."
//       />
//     </div>
//   );
// };

// export default Jodit;


// "use client"; // Ensures this component runs only on the client

// import React, { useState, useEffect } from "react";
// import dynamic from "next/dynamic";
// import "react-quill/dist/quill.snow.css";

// // Dynamically import ReactQuill without SSR
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

// const customFontSizes = [
//   "8px",
//   "10px",
//   "12px",
//   "14px",
//   "16px",
//   "18px",
//   "20px",
//   "24px",
//   "28px",
//   "32px",
//   "36px",
// ];

// const Jodit = ({ content, setContent }) => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);

//     // Wait for ReactQuill to be available before modifying Quill
//     if (typeof window !== "undefined") {
//       import("react-quill")
//         .then((ReactQuill) => {
//           const Quill = ReactQuill.default.Quill;
//           if (Quill) {
//             const Size = Quill.import("attributors/style/size");
//             Size.whitelist = customFontSizes;
//             Quill.register(Size, true);
//           }
//         })
//         .catch((err) => console.error("Failed to load Quill:", err));
//     }
//   }, []);

//   const handleChange = (value) => {
//     setContent(value);
//   };

//   const modules = {
//     toolbar: [
//       [{ font: [] }, { size: customFontSizes }],
//       ["bold", "italic", "underline", "strike"],
//       [{ color: [] }, { background: [] }],
//       [{ align: [] }],
//       [{ list: "ordered" }, { list: "bullet" }],
//       [{ indent: "-1" }, { indent: "+1" }],
//       ["link", "image", "video"],
//       ["clean"],
//     ],
//   };

//   const formats = [
//     "font",
//     "size",
//     "bold",
//     "italic",
//     "underline",
//     "strike",
//     "color",
//     "background",
//     "align",
//     "list",
//     "bullet",
//     "indent",
//     "link",
//     "image",
//     "video",
//   ];

//   if (!mounted) return null; // Prevent rendering on SSR

//   return (
//     <div
//       style={{
//         maxHeight: "300px",
//         overflowY: "auto",
//         border: "1px solid #ccc",
//         borderRadius: "4px",
//       }}
//     >
//       <style>
//         {`
//           .ql-editor {
//             min-height: 200px;
//           }
//           .ql-snow .ql-picker.ql-size .ql-picker-label[data-value]::before,
//           .ql-snow .ql-picker.ql-size .ql-picker-item[data-value]::before {
//             content: attr(data-value);
//           }
//           .ql-snow .ql-picker.ql-size .ql-picker-label,
//           .ql-snow .ql-picker.ql-size .ql-picker-item {
//             font-size: 14px;
//           }
//         `}
//       </style>
//       <ReactQuill
//         theme="snow"
//         value={content}
//         onChange={handleChange}
//         modules={modules}
//         formats={formats}
//         placeholder="Start typing..."
//       />
//     </div>
//   );
// };

// export default Jodit;


"use client"; // Ensures this component runs only on the client

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// Dynamically import ReactQuill without SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const customFontSizes = [
  "8px",
  "10px",
  "12px",
  "14px",
  "16px",
  "18px",
  "20px",
  "24px",
  "28px",
  "32px",
  "36px",
];

const Jodit = ({ content, setContent }) => {
  const [mounted, setMounted] = useState(false);
  const [isHtmlMode, setIsHtmlMode] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Wait for ReactQuill to be available before modifying Quill
    if (typeof window !== "undefined") {
      import("react-quill")
        .then((ReactQuill) => {
          const Quill = ReactQuill.default.Quill;
          if (Quill) {
            const Size = Quill.import("attributors/style/size");
            Size.whitelist = customFontSizes;
            Quill.register(Size, true);
          }
        })
        .catch((err) => console.error("Failed to load Quill:", err));
    }
  }, []);

  const handleChange = (value) => {
    setContent(value);
  };

  const toggleHtmlMode = () => {
    setIsHtmlMode((prev) => !prev);
  };

  const modules = {
    toolbar: [
      [{ font: [] }, { size: customFontSizes }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "align",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  if (!mounted) return null; // Prevent rendering on SSR

  return (
    <div
      style={{
        maxHeight: "400px",
        overflowY: "auto",
        border: "1px solid #ccc",
        borderRadius: "4px",
        padding: "10px",
      }}
    >
      <style>
        {`
          .ql-editor {
            min-height: 200px;
          }
          .ql-snow .ql-picker.ql-size .ql-picker-label[data-value]::before,
          .ql-snow .ql-picker.ql-size .ql-picker-item[data-value]::before {
            content: attr(data-value);
          }
          .ql-snow .ql-picker.ql-size .ql-picker-label,
          .ql-snow .ql-picker.ql-size .ql-picker-item {
            font-size: 14px;
          }
          .toggle-btn {
            margin-bottom: 10px;
            padding: 6px 12px;
            border: none;
            background: #007bff;
            color: white;
            cursor: pointer;
            border-radius: 4px;
          }
          .toggle-btn:hover {
            background: #0056b3;
          }
          textarea {
            width: 100%;
            min-height: 200px;
            font-family: monospace;
            font-size: 14px;
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 4px;
          }
        `}
      </style>
      <button className="toggle-btn" onClick={toggleHtmlMode}>
        {isHtmlMode ? "Switch to Editor" : "Edit as HTML"}
      </button>
      {isHtmlMode ? (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      ) : (
        <ReactQuill
          theme="snow"
          value={content}
          onChange={handleChange}
          modules={modules}
          formats={formats}
          placeholder="Start typing..."
        />
      )}
    </div>
  );
};

export default Jodit;
