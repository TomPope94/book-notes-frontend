import React, { useMemo, useCallback } from 'react';
import { Editor, Transforms, createEditor, Text } from 'slate';
import { Slate, Editable, withReact, useSlate } from 'slate-react';
import { withHistory } from 'slate-history';

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
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

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

  const MarkButton = ({ format, label }) => {
    const editor = useSlate();

    return (
      <button
        onMouseDown={event => {
          event.preventDefault();
          toggleMark(editor, format);
        }}
      >
        {label}
      </button>
    );
  };

  const BlockButton = ({ format, label }) => {
    const editor = useSlate();

    return (
      <button
        onMouseDown={event => {
          event.preventDefault();
          toggleBlock(editor, format);
        }}
      >
        {label}
      </button>
    );
  };

  return (
    <Slate editor={editor} value={value} onChange={value => changevalue(value)}>
      <div>
        <MarkButton format="bold" label="Bold" />
        <MarkButton format="italic" label="Italic" />
        <MarkButton format="underline" label="Underline" />
        <MarkButton format="code" label="Code Inline" />
        <BlockButton format="code" label="Code" />
        <BlockButton format="block-quote" label="Quote" />
        <BlockButton format="bulleted-list" label="List" />
        <BlockButton format="numbered-list" label="Num" />
        <BlockButton format="heading-one" label="H1" />
        <BlockButton format="heading-two" label="H2" />
        <BlockButton format="heading-three" label="H3" />
        <BlockButton format="heading-four" label="H4" />
        <BlockButton format="heading-five" label="H5" />
        <BlockButton format="heading-six" label="H6" />
        <BlockButton format="list-item" label="Item" />
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
