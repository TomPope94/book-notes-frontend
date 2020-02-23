import React, { useMemo, useCallback } from 'react';
import { Editor, Transforms, createEditor, Text } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

import Element from 'components/books/details/notes/Element';
import Leaf from 'components/books/details/notes/Leaf';

const MarkdownEditor = ({ value, changevalue }) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  return (
    <Slate editor={editor} value={value} onChange={value => changevalue(value)}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        onKeyDown={event => {
          if (!event.ctrlKey) {
            return;
          }

          switch (event.key) {
            case '`': {
              event.preventDefault();

              // Checking to see if the type exists already
              const [match] = Editor.nodes(editor, {
                match: n => n.type === 'list-item'
              });

              // Execute the `insertText` method when the event occurs.
              Transforms.setNodes(
                editor,
                { type: match ? 'paragraph' : 'list-item' },
                { match: n => Editor.isBlock(editor, n) }
              );
              break;
            }
            case 'b': {
              event.preventDefault();

              Transforms.setNodes(
                editor,
                { bold: true },
                { match: n => Text.isText(n), split: true }
              );
              break;
            }
          }
        }}
      />
    </Slate>
  );
};

export default MarkdownEditor;
