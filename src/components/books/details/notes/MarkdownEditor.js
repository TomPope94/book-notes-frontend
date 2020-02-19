// Import React dependencies.
import React, { useEffect, useMemo, useState } from 'react';
// Import the Slate editor factory.
import { createEditor } from 'slate';

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';

const MarkdownEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  // Add the initial value when setting up our state.
  const [value, setValue] = useState([
    {
      type: 'paragraph',
      children: [{ text: 'A line of text in a paragraph.' }]
    }
  ]);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={value => {
        setValue(value);
      }}
    >
      <Editable />
    </Slate>
  );
};

export default MarkdownEditor;
