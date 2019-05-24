import * as React from 'react';
import consts from '../../../ts/consts';
import MouseEventHandler from '../../../ts/Handler/MouseEventHandler';

const ACTION_NAME = consts.ACTION_NAME;

class Bold extends React.Component {
    public render() {
        const mouseEventHandler = new MouseEventHandler();
        return (
            <div className="be-icon-container" data-name={ACTION_NAME.BOLD} onMouseDown={mouseEventHandler.onMouseDownIcon}>
                <div className="be-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="16px" height="16px" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M160 400 l0 -280 173 0 c146 0 178 3 213 19 105 48 125 188 36 261 -20 16 -31 30 -24 30 22 0 52 63 52 108 0 58 -23 98 -70 122 -35 18 -59 20 -210 20 l-170 0 0 -280z m357 237 c42 -22 63 -54 63 -97 0 -45 -23 -78 -66 -96 -42 -18 -44 -40 -5 -47 83 -17 124 -110 79 -177 -40 -60 -82 -73 -250 -78 l-148 -4 0 262 0 263 148 -5 c110 -4 155 -9 179 -21z" />
                            <path d="M300 516 l0 -76 70 0 c57 0 74 4 90 20 25 25 26 71 1 101 -16 19 -30 24 -90 27 l-71 4 0 -76z" />
                            <path d="M300 295 l0 -87 76 4 c69 3 79 6 100 31 29 34 31 76 5 108 -17 21 -30 24 -100 27 l-81 4 0 -87z" />
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Bold;