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

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Jodit = ({ content, setContent }) => {
  const handleChange = (value) => {
    setContent(value);
  };

  const modules = {
    toolbar: [
      // Add font size and header options
      [{ font: [] }, { size: [] }],

      // Bold, italic, underline, strikethrough
      ["bold", "italic", "underline", "strike"],

      // Text color and background color
      [{ color: [] }, { background: [] }],

      // Alignment
      [{ align: [] }],

      // List options
      [{ list: "ordered" }, { list: "bullet" }],

      // Indent and outdent
      [{ indent: "-1" }, { indent: "+1" }],

      // Add links, images, and videos
      ["link", "image", "video"],

      // Clear formatting
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

  return (
    <div
      style={{
        maxHeight: "300px",
        overflowY: "auto",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      <style>
        {`
          .ql-editor {
            min-height: 200px; 
          }
        `}
      </style>
      <ReactQuill
        theme="snow" // You can switch to 'bubble' if preferred
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder="Start typing..."
      />
    </div>
  );
};

export default Jodit;
