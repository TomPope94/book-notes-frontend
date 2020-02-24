import React, { useMemo, useCallback } from 'react';
import { Editor, Transforms, createEditor, Text } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

import Element from 'components/books/details/notes/Element';
import Leaf from 'components/books/details/notes/Leaf';

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

const CustomEditor = {
  isBoldMarkActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.bold,
      universal: true
    });

    return !!match;
  },

  isCodeBlockActive(editor) {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === 'code'
    });

    return !!match;
  },

  togggleBoldMark(editor) {
    const isActive = CustomEditor.isBoldMarkActive(editor);
    Transforms.setNodes(
      editor,
      {
        bold: isActive ? null : true
      },
      {
        match: n => Text.isText(n),
        split: true
      }
    );
  },

  toggleCodeBlock(editor) {
    const isActive = CustomEditor.isCodeBlockActive(editor);
    Transforms.setNodes(
      editor,
      {
        type: isActive ? null : 'code'
      },
      {
        match: n => Editor.isBlock(editor, n)
      }
    );
  }
};

const MarkdownEditor = ({ value, changevalue }) => {
  const editor = useMemo(() => withReact(createEditor()), []);

  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);

    return marks ? marks[format] === true : false;
  };
  const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format);

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  const isBlockActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
      match: n => n.type === format
    });

    return !!match;
  };

  const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
      match: n => LIST_TYPES.includes(n.type),
      split: true
    });

    Transforms.setNodes(editor, {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format
    });

    if (!isActive && isList) {
      const block = { type: format, children: [] };
      Transforms.wrapNodes(editor, block);
    }
  };

  return (
    <Slate editor={editor} value={value} onChange={value => changevalue(value)}>
      <div>
        <button
          onMouseDown={event => {
            event.preventDefault();
            toggleMark(editor, 'bold');
          }}
        >
          Bold
        </button>
        <button
          onMouseDown={event => {
            event.preventDefault();
            toggleBlock(editor, 'code');
          }}
        >
          Code
        </button>
      </div>
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
              CustomEditor.toggleCodeBlock(editor);
              break;
            }
            case 'b': {
              event.preventDefault();
              toggleMark(editor, 'bold');
              break;
            }
          }
        }}
      />
    </Slate>
  );
};

export default MarkdownEditor;
