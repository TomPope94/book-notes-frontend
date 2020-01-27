import React, { useState, useMemo } from "react";
import { createEditor, Editor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { withHistory } from "slate-history";

function MarkdownEditor() {
  // debugger;
  const [value] = useState(initialValue);
  const [selection] = useState(null);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const handleChange = value => {
    // debugger;
    Editor.insertText(value);
    // setSelection(selection);
  };

  return (
    <Slate
      editor={editor}
      value={value}
      selection={selection}
      onChange={value => handleChange(value)}
    >
      <Editable placeholder="Enter some plain text..." autoFocus />
    </Slate>
  );
}

const initialValue = [
  {
    children: [{ text: "This is editable plain text, just like a <textarea>!" }]
  }
];

export default MarkdownEditor;
