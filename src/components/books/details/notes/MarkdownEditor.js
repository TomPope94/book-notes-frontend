import React, { useEffect, useMemo, useCallback } from 'react';
import { createEditor, Editor, Transforms } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

import Element from 'components/books/details/notes/Element';
import Leaf from 'components/books/details/notes/Leaf';

const MarkdownEditor = ({ value, changevalue }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  return (
    <Slate
      editor={editor}
      value={value}
      onChange={value => {
        changevalue(value);
      }}
    >
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        placeholder="Enter some rich text..."
        spellCheck
        autoFocus
      />
    </Slate>
  );
};

export default MarkdownEditor;
