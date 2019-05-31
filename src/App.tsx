import * as React from 'react';
import Editor from './Components/Editor/Editor';
import Toolbar from './Components/Toolbar/Toolbar';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <Toolbar />
                <Editor/>
            </div>
        );
    }
}

export default App;
