import * as React from 'react';
import consts from '../../../ts/consts';
import MouseEventHandler from '../../../ts/Handler/MouseEventHandler';

const ACTION_NAME = consts.ACTION_NAME;

interface Props {
    italic: boolean
};

class Italic extends React.Component {
    public props: Props;
       
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const mouseEventHandler: MouseEventHandler = new MouseEventHandler();
        const {italic}: Props = this.props;
        const className: string = italic ? "be-icon-container active-container" : "be-icon-container";

        return (
            <div className={className} data-name={ACTION_NAME.ITALIC} onMouseDown={mouseEventHandler.onMouseDownIcon}>
                <div className="be-icon">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M386 608 c-9 -40 -36 -165 -59 -278 l-44 -205 55 -3 c30 -2 56 -1 58
                                1 2 2 29 120 59 263 30 142 57 267 59 277 4 15 -4 17 -54 17 l-58 0 -16 -72z
                                m94 48 c0 -8 -101 -481 -106 -498 -5 -15 -54 -27 -54 -14 0 8 101 481 106 499
                                5 14 54 26 54 13z"/>
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Italic;