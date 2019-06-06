import * as React from 'react';
import consts from '../../../ts/consts';
import MouseEventHandler from '../../../ts/Handler/MouseEventHandler';

const ACTION_NAME = consts.ACTION_NAME;

class Redo extends React.Component {

    public render() {
        const mouseEventHandler = new MouseEventHandler();
        return (
            <div className="be-icon-container" data-name={ACTION_NAME.REDO} onMouseDown={mouseEventHandler.onMouseDownIcon}>
                <div className="be-icon">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M490 652 l0 -72 -107 0 c-123 0 -166 -15 -220 -71 -44 -47 -63 -98
                                -63 -171 0 -74 23 -129 71 -175 50 -47 97 -63 184 -63 l75 0 0 80 0 80 -40 0
                                c-58 0 -108 23 -116 54 -18 72 28 106 146 106 l70 0 0 -72 0 -73 112 113 113
                                112 -113 112 -112 113 0 -73z m97 -229 l-77 -78 0 48 0 47 -109 0 c-104 0
                                -109 -1 -135 -26 -36 -37 -36 -100 0 -143 23 -28 31 -31 85 -31 l59 0 0 -61 0
                                -62 -62 7 c-83 9 -145 42 -183 95 -27 39 -30 50 -30 121 0 71 3 82 30 121 48
                                68 102 90 235 97 l110 5 0 46 0 46 77 -78 78 -77 -78 -77z"/>
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Redo;