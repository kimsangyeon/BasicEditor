import * as React from 'react';
import consts from '../../../ts/consts';
import MouseEventHandler from '../../../ts/Handler/MouseEventHandler';

const ACTION_NAME = consts.ACTION_NAME;

interface Props {
    strikeThrough: boolean
};

class StrikeThrough extends React.Component {
    public props: Props;
       
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const mouseEventHandler = new MouseEventHandler();
        const {strikeThrough} = this.props;
        const className = strikeThrough ? "be-icon-container active-container" : "be-icon-container";

        return (
            <div className={className} data-name={ACTION_NAME.STRIKE_THROUGH} onMouseDown={mouseEventHandler.onMouseDownIcon}>
                <div className="be-icon">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M170 630 l0 -50 85 0 85 0 0 -85 0 -85 -75 0 c-43 0 -75 -4 -75 -10
                                0 -6 77 -10 210 -10 133 0 210 4 210 10 0 6 -32 10 -75 10 l-75 0 0 85 0 85
                                85 0 85 0 0 50 0 50 -230 0 -230 0 0 -50z m440 0 l0 -30 -85 0 -85 0 0 -95 0
                                -95 -40 0 -40 0 0 95 0 95 -85 0 -85 0 0 30 0 30 210 0 210 0 0 -30z"/>
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

export default StrikeThrough;