import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), {
    ssr: false,
});

// Define font sizes
const fontSizes = ["8", "9", "10", "11", "12", "14", "16", "18", "20", "22", "24", "26", "28", "36", "48", "72"];

type Props = {
    setValue: any;
    watch: any;
};

const Editor = ({ setValue, watch }: Props) => {
    const modules = {
        toolbar: [
            [{ font: fontSizes }],
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ color: [] }, { background: [] }],
            [{ script: "sub" }, { script: "super" }],
            ["image"],
            ["clean"],
        ],
    };

    const handleChange = (value: string) => {
        setValue("description", value);
    };

    return (
        <ReactQuill
            theme="snow"
            modules={modules}
            placeholder={"Viết ở đây..."}
            onChange={handleChange}
            value={watch("description")}
            className="text-editor"
        />
    );
};

export default Editor;
