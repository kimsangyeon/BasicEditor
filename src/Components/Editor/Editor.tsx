import * as React from 'react';
import BasicEditor from '../../js/BasicEditor';

class Editor extends React.Component {
    public editor: BasicEditor;
    constructor(props: Readonly<{}>) {
        super(props);
        this.editor = new BasicEditor('basicEditor');
    }

    public render() {
        const keyboradHandler = this.editor.getKeyboardHandler();
        return (
        <div id="basicEditor" className="Editor" contentEditable={true} onKeyDown={keyboradHandler.onKeydown}/>
        );
    }
}

export default Editor;
