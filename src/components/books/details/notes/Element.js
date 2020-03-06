import React from 'react';

const styles = {
  title: {
    fontWeight: 200,
    color: '#216e82'
  }
};

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>;
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>;
    case 'heading-one':
      return (
        <h1 style={styles.title} {...attributes}>
          {children}
        </h1>
      );
    case 'heading-two':
      return (
        <h2 style={styles.title} {...attributes}>
          {children}
        </h2>
      );
    case 'heading-three':
      return (
        <h3 style={styles.title} {...attributes}>
          {children}
        </h3>
      );
    case 'heading-four':
      return (
        <h4 style={styles.title} {...attributes}>
          {children}
        </h4>
      );
    case 'heading-five':
      return (
        <h5 style={styles.title} {...attributes}>
          {children}
        </h5>
      );
    case 'heading-six':
      return (
        <h6 style={styles.title} {...attributes}>
          {children}
        </h6>
      );
    case 'list-item':
      return <li {...attributes}>{children}</li>;
    case 'code':
      return (
        <pre {...attributes}>
          <code>{children}</code>
        </pre>
      );
    default:
      return <p {...attributes}>{children}</p>;
  }
};

export default Element;
