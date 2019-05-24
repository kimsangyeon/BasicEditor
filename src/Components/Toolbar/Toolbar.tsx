import * as React from 'react';
import Bold from './Icons/Bold';
import Italic from './Icons/Italic';
import Underline from './Icons/Underline';

class Toolbar extends React.Component {
    public render() {
        return (
            <div id="be-toolbar" className="Toolbar">
                <Bold /><Italic/><Underline/>
            </div>
        );
    }
}

export default Toolbar;
