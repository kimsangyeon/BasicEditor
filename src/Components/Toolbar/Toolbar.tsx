import * as React from 'react';
import Bold from './Icons/Bold';
import Italic from './Icons/Italic';
import Redo from './Icons/Redo';
import StrikeThrough from './Icons/StrikeThrough';
import Underline from './Icons/Underline';
import Undo from './Icons/Undo';

class Toolbar extends React.Component {
    public render() {
        return (
            <div id="be-toolbar" className="Toolbar">
                <Bold /><Italic/><Underline/><StrikeThrough/><Undo/><Redo/>
            </div>
        );
    }
}

export default Toolbar;
