import React, { useMemo, useCallback, useState } from 'react';
import { Editor, Transforms, createEditor, Text } from 'slate';
import { Slate, Editable, withReact, useSlate } from 'slate-react';
import { withHistory } from 'slate-history';
import uuid from 'uuid';

import Element from 'components/books/details/notes/Element';
import Leaf from 'components/books/details/notes/Leaf';

import IconButton from 'components/elements/textEditor/IconButton';

// Next Steps:
// 3. Work out logic for full screen ability
// 4. Create full screen

const styles = {
  editorContainer: {
    padding: 20,
    boxShadow: '0 1px 10px rgba(0,0,0,0.2)',
    borderRadius: 10
  },
  buttonsContainer: {
    borderBottom: '2px solid #fce8df',
    paddingBottom: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  writingContainer: {
    padding: 10,
    background: 'rgba(252, 232, 223, 0.15)',
    borderRadius: '0 0 5px 5px',
    boxShadow: '0 0 5px rgba(0,0,0,0.2) inset',
    maxHeight: 450,
    overflowY: 'auto'
  }
};

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

  const [listState, setListState] = useState({
    format: 'bulleted-list',
    label: 'list'
  });

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
      <IconButton
        active={isMarkActive(editor, format)}
        onMouseDown={event => {
          event.preventDefault();
          toggleMark(editor, format);
        }}
      >
        <div>{label}</div>
      </IconButton>
    );
  };

  const BlockButton = ({ format, label }) => {
    const editor = useSlate();

    return (
      <IconButton
        active={isBlockActive(editor, format)}
        onClick={event => {
          event.preventDefault();
          toggleBlock(editor, format);
        }}
      >
        {label}
      </IconButton>
    );
  };

  const BlockSelect = ({ options }) => {
    const editor = useSlate();

    const toRender = [];
    options.forEach(option => {
      toRender.push(
        <option value={option.format} name={option.label} key={uuid.v4()}>
          {option.label}
        </option>
      );
    });

    return (
      <select
        value={listState.format}
        onChange={e => {
          setListState({
            label: e.currentTarget.name,
            format: e.currentTarget.value
          });
          toggleBlock(editor, e.currentTarget.value);
        }}
      >
        {toRender}
      </select>
    );
  };

  return (
    <div style={styles.editorContainer}>
      <Slate
        editor={editor}
        value={value}
        onChange={value => changevalue(value)}
      >
        <div style={styles.buttonsContainer}>
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
          <button>[]</button>
        </div>
        <Editable
          style={styles.writingContainer}
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
    </div>
  );
};

export default MarkdownEditor;
