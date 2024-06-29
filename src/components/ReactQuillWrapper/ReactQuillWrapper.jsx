'use client'
import { useMemo } from "react";
import dynamic from "next/dynamic";

export function ReactQuillWrapper(props) {
	const ReactQuill = useMemo(
		() => dynamic(() => import("react-quill"), {ssr: false}),
		[],
	);
	ReactQuill.register("modules/imageResize", ImageResize);
	// Quill.register("modules/imageResize", ImageResize);

	const handleChange = (value) => {
		props.form.setValue("content", value);
	};
	const modules = {
		toolbar: [
			["bold", "italic", "underline", "strike"], // toggled buttons
			["blockquote", "code-block"],

			[{header: 1}, {header: 2}], // custom button values
			[{list: "ordered"}, {list: "bullet"}],
			[{script: "sub"}, {script: "super"}], // superscript/subscript
			[{indent: "-1"}, {indent: "+1"}], // outdent/indent
			[{direction: "rtl"}], // text direction

			[{size: ["small", false, "large", "huge"]}], // custom dropdown
			[{header: [1, 2, 3, 4, 5, 6, false]}],

			[{color: []}, {background: []}], // dropdown with defaults from theme
			[{font: []}],
			[{align: []}],
			["link", "image"],

			["clean"], // remove formatting button
		],
		clipboard: {
			// toggle to add extra line breaks when pasting HTML:
			matchVisual: false,
		},
		imageResize: {
			parchment: Quill.import("parchment"),
			modules: ["Resize", "DisplaySize"],
		},
	};

	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
		"video",
		"color",
		"code-block",
		"align",
		"formula",
	];

	return (
		<div>
			<ReactQuill
				className="w-3/4 mt-4 mx-auto text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700"
				theme="snow"
				modules={modules}
				formats={formats}
				onChange={handleChange}
				value={props.form.getValues("content")}
			/>
		</div>
	);
}

export default ReactQuillWrapper;