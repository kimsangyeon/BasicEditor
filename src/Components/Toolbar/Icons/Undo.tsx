import * as React from 'react';
import consts from '../../../ts/consts';
import MouseEventHandler from '../../../ts/Handler/MouseEventHandler';

const ACTION_NAME = consts.ACTION_NAME;

class Undo extends React.Component {
    
    public render() {
        const mouseEventHandler = new MouseEventHandler();
        return (
            <div className="be-icon-container" data-name={ACTION_NAME.UNDO} onMouseDown={mouseEventHandler.onMouseDownIcon}>
                <div className="be-icon">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M195 610 l-110 -110 113 -113 112 -112 0 73 0 72 70 0 c118 0 164
                                -34 146 -106 -8 -31 -58 -54 -116 -54 l-40 0 0 -80 0 -80 75 0 c87 0 134 16
                                184 63 48 46 71 101 71 175 0 73 -19 124 -63 171 -54 56 -97 71 -219 71 l-107
                                0 -3 70 -3 70 -110 -110z m206 -52 c131 -7 186 -29 234 -97 27 -39 30 -50 30
                                -121 0 -71 -3 -82 -30 -121 -38 -53 -100 -86 -182 -95 l-63 -7 0 62 0 61 59 0
                                c54 0 62 3 85 31 36 43 36 106 0 143 -26 25 -31 26 -135 26 l-109 0 0 -47 0
                                -48 -77 77 -78 78 75 75 75 76 3 -44 3 -44 110 -5z"/>
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Undo;