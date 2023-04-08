import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
    ssr: false,
});
import "react-quill/dist/quill.snow.css";

// Define font sizes
const fontSizes = ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72"];

type Props = {
    setValue: any;
};

const Editor = ({ setValue }: Props) => {
    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            ["image"],
            ["clean"],
        ],
    };

    const handleChange = (value: string) => {
        // setContent(value);
        setValue("description", value);
        console.log(value);
    };

    return (
        <ReactQuill
            theme="snow"
            modules={modules}
            placeholder={"Viết ở đây..."}
            onChange={handleChange}
            className="text-editor"
        />
    );
};

export default Editor;
