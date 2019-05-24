import * as React from 'react';
import Bold from './Icons/Bold';
import Italic from './Icons/Italic';

class Toolbar extends React.Component {
    public render() {
        return (
            <div id="be-toolbar" className="Toolbar">
                <Bold /><Italic/>
            </div>
        );
    }
}

export default Toolbar;
