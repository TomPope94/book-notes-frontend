import React, { useState, useCallback, useMemo } from 'react';
import { Slate, Editable, useSlate, withReact } from 'slate-react';
import { Editor, Range, Point, createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Button, Icon, Toolbar } from 'components/elements/TextToolbar';

const SHORTCUTS = {
  '*': 'list-item',
  '-': 'list-item',
  '+': 'list-item',
  '>': 'block-quote',
  '#': 'heading-one',
  '##': 'heading-two',
  '###': 'heading-three',
  '####': 'heading-four',
  '#####': 'heading-five',
  '######': 'heading-six'
};
const TEXT_FORMATS = ['bold', 'italic', 'underlined', 'code'];
const LIST_FORMATS = ['numbered-list', 'bulleted-list'];
const BLOCK_FORMATS = [
  ...LIST_FORMATS,
  'heading-one',
  'heading-two',
  'block-quote'
];
const FormatButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isFormatActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault();
        editor.exec({ type: 'toggle_format', format });
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  );
};
const isFormatActive = (editor, format) => {
  if (TEXT_FORMATS.includes(format)) {
    const [match] = Editor.nodes(editor, {
      match: { [format]: true },
      mode: 'all'
    });

    return !!match;
  }

  if (BLOCK_FORMATS.includes(format)) {
    const [match] = Editor.nodes(editor, {
      match: { type: format },
      mode: 'all'
    });

    return !!match;
  }

  return false;
};

const MarkdownEditor = () => {
  const [value, setValue] = useState(initialValue);
  const [selection, setSelection] = useState(null);
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = useCallback(props => <Leaf {...props} />, []);
  const editor = useMemo(
    () => withShortcuts(withReact(withHistory(createEditor()))),
    []
  );
  return (
    <Slate
      editor={editor}
      value={value}
      selection={selection}
      onChange={(value, selection) => {
        setValue(value);
        setSelection(selection);
      }}
    >
      <Toolbar>
        <FormatButton format="bold" icon="format_bold" />
        <FormatButton format="italic" icon="format_italic" />
        <FormatButton format="underlined" icon="format_underlined" />
        <FormatButton format="code" icon="code" />
        <FormatButton format="heading-one" icon="looks_one" />
        <FormatButton format="heading-two" icon="looks_two" />
        <FormatButton format="block-quote" icon="format_quote" />
        <FormatButton format="numbered-list" icon="format_list_numbered" />
        <FormatButton format="bulleted-list" icon="format_list_bulleted" />
      </Toolbar>
      <Editable
        renderElement={renderElement}
        placeholder="Write some markdown..."
        renderLeaf={renderLeaf}
        spellCheck
        autoFocus
      />
    </Slate>
  );
};

const withShortcuts = editor => {
  const { exec } = editor;

  editor.exec = command => {
    const { selection } = editor;

    if (
      command.type === 'insert_text' &&
      command.text === ' ' &&
      selection &&
      Range.isCollapsed(selection)
    ) {
      const { anchor } = selection;
      const [block] = Editor.nodes(editor, { match: 'block' });
      const path = block ? block[1] : [];
      const start = Editor.start(editor, path);
      const range = { anchor, focus: start };
      const beforeText = Editor.text(editor, range);
      const type = SHORTCUTS[beforeText];

      if (type) {
        Editor.select(editor, range);
        Editor.delete(editor);
        Editor.setNodes(editor, { type }, { match: 'block' });

        if (type === 'list-item') {
          const list = { type: 'bulleted-list', children: [] };
          Editor.wrapNodes(editor, list, { match: { type: 'list-item' } });
        }

        return;
      }
    }

    if (
      command.type === 'delete_backward' &&
      selection &&
      Range.isCollapsed(selection)
    ) {
      const [match] = Editor.nodes(editor, { match: 'block' });

      if (match) {
        const [block, path] = match;
        const start = Editor.start(editor, path);

        if (
          block.type !== 'paragraph' &&
          Point.equals(selection.anchor, start)
        ) {
          Editor.setNodes(editor, { type: 'paragraph' });

          if (block.type === 'list-item') {
            Editor.unwrapNodes(editor, { match: { type: 'bulleted-list' } });
          }

          return;
        }
      }
    }

    exec(command);
  };

  return editor;
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;
    case 'heading-three':
      return <h3 {...attributes}>{children}</h3>;
    case 'heading-four':
      return <h4 {...attributes}>{children}</h4>;
    case 'heading-five':
      return <h5 {...attributes}>{children}</h5>;
    case 'heading-six':
      return <h6 {...attributes}>{children}</h6>;
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underlined) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
const initialValue = [
  {
    type: 'paragraph',
    children: [
      {
        text:
          'The editor gives you full control over the logic you can add. For example, it\'s fairly common to want to add markdown-like shortcuts to editors. So that, when you start a line with "> " you get a blockquote that looks like this:'
      }
    ]
  },
  {
    type: 'block-quote',
    children: [{ text: 'A wise quote.' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          'Order when you start a line with "## " you get a level-two heading, like this:'
      }
    ]
  },
  {
    type: 'heading-two',
    children: [{ text: 'Try it out!' }]
  },
  {
    type: 'paragraph',
    children: [
      {
        text:
          'Try it out for yourself! Try starting a new line with ">", "-", or "#"s.'
      }
    ]
  }
];

export default MarkdownEditor;