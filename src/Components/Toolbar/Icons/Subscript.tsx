import * as React from 'react';
import consts from '../../../ts/consts';
import MouseEventHandler from '../../../ts/Handler/MouseEventHandler';

const ACTION_NAME = consts.ACTION_NAME;

interface Props {
    subscript: boolean
};

class Subscript extends React.Component { 
    public props: Props;
       
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const mouseEventHandler = new MouseEventHandler();
        const {subscript} = this.props;
        const className = subscript ? "be-icon-container active-container" : "be-icon-container";

        return (
            <div className={className} data-name={ACTION_NAME.SUBSCRIPT} onMouseDown={mouseEventHandler.onMouseDownIcon}>
                <div className="be-icon">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M70 630 c0 -6 33 -60 74 -122 l75 -111 -80 -118 -79 -119 70 0 70 0
                                42 65 c24 35 45 65 48 65 3 0 24 -30 48 -65 l42 -65 71 0 c53 0 68 3 63 13 -4
                                6 -38 58 -76 114 -37 56 -68 105 -68 109 0 4 32 53 70 110 96 141 95 134 16
                                134 l-67 0 -47 -74 -47 -74 -47 74 -47 74 -66 0 c-37 0 -65 -4 -65 -10z m166
                                -105 c30 -47 57 -85 60 -85 2 0 29 38 59 85 49 76 58 85 85 85 l31 0 -70 -104
                                c-39 -57 -71 -106 -71 -110 0 -4 32 -54 70 -111 l70 -105 -32 0 c-30 0 -38 8
                                -86 80 -28 44 -57 80 -62 80 -5 0 -34 -36 -62 -80 -45 -67 -57 -80 -80 -80
                                -16 0 -28 2 -28 5 0 3 29 49 65 103 36 53 65 103 65 110 0 7 -26 52 -58 100
                                -32 48 -62 93 -66 100 -5 8 2 12 24 12 27 0 36 -9 86 -85z"/>
                            <path d="M587 362 c-10 -10 -17 -28 -17 -40 0 -29 36 -29 59 0 19 23 41 18 41
                                -10 0 -10 -22 -40 -50 -67 -27 -27 -50 -57 -50 -67 0 -16 10 -18 80 -18 73 0
                                80 2 80 20 0 17 -7 20 -41 20 l-42 0 42 45 c46 50 54 91 23 118 -26 24 -104
                                23 -125 -1z"/>
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Subscript;