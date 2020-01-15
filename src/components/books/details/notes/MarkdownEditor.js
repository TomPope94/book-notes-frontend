import React, { useState, useMemo } from 'react';
import { createEditor, Editor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';

function MarkdownEditor() {
  // debugger;
  const [value, setValue] = useState(initialValue);
  const [selection, setSelection] = useState(null);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  const handleChange = (value, selection) => {
    // debugger;
    Editor.insertText(value);
    // setSelection(selection);
  };

  return (
    <Slate
      editor={editor}
      value={value}
      selection={selection}
      onChange={(value, selection) => handleChange(value, selection)}
    >
      <Editable placeholder="Enter some plain text..." autoFocus />
    </Slate>
  );
}

const initialValue = [
  {
    children: [{ text: 'This is editable plain text, just like a <textarea>!' }]
  }
];

export default MarkdownEditor;
