import React, { useState } from 'react';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  tasklists: true,
  strikethrough: true
});

const MarkdownEditor = () => {
  const [value, setValue] = useState('**Hello world!!!**');
  const [selectedTab, setSelectedTab] = React.useState(true);

  const handleTabChange = () => {
    setSelectedTab(!selectedTab);
  };
  return (
    <div className="container">
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab ? 'write' : 'preview'}
        onTabChange={() => handleTabChange()}
        generateMarkdownPreview={markdown =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
    </div>
  );
};

export default MarkdownEditor;
