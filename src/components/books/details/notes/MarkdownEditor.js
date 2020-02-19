// Import React dependencies.
import React, { useEffect, useMemo, useState } from 'react';
// Import the Slate editor factory.
import { createEditor } from 'slate';

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from 'slate-react';

const MarkdownEditor = ({ value, changevalue }) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={value => {
        changevalue(value);
      }}
    >
      <Editable />
    </Slate>
  );
};

export default MarkdownEditor;
