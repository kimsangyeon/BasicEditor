import * as React from 'react';
import ToolbarStatus from '../../ts/Toolbar';
import Bold from './Icons/Bold';
import Italic from './Icons/Italic';
import Redo from './Icons/Redo';
import StrikeThrough from './Icons/StrikeThrough';
import Underline from './Icons/Underline';
import Undo from './Icons/Undo';

interface IState {
    bold: boolean
}

class Toolbar extends React.Component {
    public state: IState = {
        bold: false
    }

    private status: ToolbarStatus;

    constructor(props: Readonly<{}>) {
        super(props);
        this.status = new ToolbarStatus(this.onSelectionChange);
    }

    public onSelectionChange = () => {
        this.setState({
            bold: this.status.getBold()
        }); 
    };

    public render() {
        return (
            <div id="be-toolbar" className="Toolbar">
                <Bold bold={this.state.bold}/><Italic/><Underline/><StrikeThrough/><Undo/><Redo/>
            </div>
        );
    }
}

export default Toolbar;
