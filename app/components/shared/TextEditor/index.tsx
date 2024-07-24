import React, { FC, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
  ClassicEditor,
  Bold,
  Link,
  Italic,
  List,
  Heading,
  Underline,
  Strikethrough,
} from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import "./override.css";

const CKEditor = dynamic(
  () => import("@ckeditor/ckeditor5-react").then((mod) => mod.CKEditor),
  {
    ssr: false,
    loading: () => <p className="font-jost">Loading Editor...</p>,
  }
) as FC<any>;

interface TextEditorProps {
  value?: string;
  onChange: (e: string) => void;
  label?: string;
  fullWidth?: boolean;
}

const TextEditor: FC<TextEditorProps> = ({
  value,
  onChange,
  label,
  fullWidth = false,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className={`${fullWidth ? `w-full` : ``} grid gap-2`}>
      {label && (
        <label className="font-jost font-semibold text-xs uppercase text-white">
          {label}
        </label>
      )}
      <CKEditor
        editor={ClassicEditor}
        config={{
          plugins: [
            Bold,
            Italic,
            Underline,
            Strikethrough,
            List,
            Heading,
            Link,
          ],
          toolbar: {
            items: [
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "|",
              "bulletedList",
              "numberedList",
              "|",
              "heading",
              "|",
              "link",
            ],
            shouldNotGroupWhenFull: false,
            plugins: [Strikethrough],
          },
        }}
        data={value}
        onReady={(editor: any) => {
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event: any, editor: any) => {
          const data = editor.getData();
          onChange(data);
        }}
        onBlur={(event: any, editor: any) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event: any, editor: any) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default TextEditor;
