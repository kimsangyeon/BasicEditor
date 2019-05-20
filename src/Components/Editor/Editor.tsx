import * as React from 'react';

class Editor extends React.Component {
  public render() {
    return (
      <div id="basicEditor" className="Editor" contentEditable={true}/>
    );
  }
}

export default Editor;
