import * as React from 'react';

class Editor extends React.Component {
  public render() {
    return (
      <div className="Editor" contentEditable={true}/>
    );
  }
}

export default Editor;
