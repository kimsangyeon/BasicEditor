import * as React from 'react';
import consts from '../../../ts/consts';
import MouseEventHandler from '../../../ts/Handler/MouseEventHandler';

const ACTION_NAME = consts.ACTION_NAME;

interface Props {
    underline: boolean
};

class Underline extends React.Component {
    public props: Props;
       
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const mouseEventHandler = new MouseEventHandler();
        const {underline} = this.props;
        const className = underline ? "be-icon-container active-container" : "be-icon-container";

        return (
            <div className={className} data-name={ACTION_NAME.UNDERLINE} onMouseDown={mouseEventHandler.onMouseDownIcon}>
                <div className="be-icon">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M190 515 c0 -201 3 -216 57 -267 39 -37 73 -48 153 -48 80 0 114 11
                                153 48 54 51 57 66 57 267 l0 185 -55 0 -55 0 0 -155 c0 -184 -9 -216 -64
                                -235 -27 -9 -44 -9 -71 0 -57 19 -65 46 -65 230 l0 160 -55 0 -55 0 0 -185z
                                m80 6 c0 -148 1 -160 23 -192 46 -69 162 -73 211 -6 19 26 21 45 24 193 l3
                                164 31 0 30 0 -4 -168 c-3 -154 -5 -170 -27 -205 -32 -51 -85 -77 -161 -77
                                -76 0 -129 26 -161 77 -22 35 -24 51 -27 205 l-4 168 31 0 31 0 0 -159z"/>
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Underline;