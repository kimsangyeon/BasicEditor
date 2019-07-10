import * as React from 'react';
import { GithubPicker } from 'react-color';
import consts from '../../../ts/consts';
import MouseEventHandler from '../../../ts/Handler/MouseEventHandler';

const ACTION_NAME = consts.ACTION_NAME;


class FontColor extends React.Component {
    public state = {
        displayColorPicker: false,
        mouseEventHandler: new MouseEventHandler()
    };
    public handleClick = () => {
        this.setState({ displayColorPicker: !this.state.displayColorPicker })
    };
    
    public handleClose = () => {
        this.setState({ displayColorPicker: false })
    };

    public handleChange = (color: any) => {
        document.execCommand('foreColor', false, color.hex);
    };

    public render() {
        return (
            <div style={{display: 'inline-block', position: 'relative'}}>
                <div className="be-icon-container" data-name={ACTION_NAME.FONT_COLOR} onMouseDown={this.state.mouseEventHandler.onMouseDownIcon} onClick={this.handleClick}>
                    <div className="be-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="16px" height="16px" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,80.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                                <path d="M532 646 c-31 -30 -68 -56 -82 -58 -18 -2 -26 -10 -28 -28 -2 -16
                                -54 -75 -148 -171 -104 -105 -144 -152 -144 -169 0 -13 -10 -34 -22 -47 l-22
                                -24 32 -31 31 -32 24 22 c13 12 34 22 47 22 17 0 64 40 169 144 96 94 155 146
                                171 148 18 2 26 10 28 28 2 14 28 51 58 82 46 49 54 62 54 96 0 49 -24 72 -74
                                72 -32 0 -46 -8 -94 -54z m126 12 c24 -24 12 -54 -48 -113 -43 -42 -58 -65
                                -54 -77 9 -29 -7 -21 -58 29 -50 50 -60 68 -30 59 12 -4 35 11 77 54 59 60 89
                                72 113 48z m-183 -188 l29 -31 -139 -139 c-107 -107 -146 -140 -165 -140 -14
                                0 -31 -5 -38 -12 -6 -6 -15 -9 -19 -5 -4 4 -1 13 5 19 7 7 12 23 12 37 0 20
                                33 59 137 163 76 76 140 138 143 138 4 0 19 -14 35 -30z"/>
                            </g>
                        </svg>
                    </div>
                </div>
                {
                    this.state.displayColorPicker ?
                    <div style={{position: 'absolute', zIndex: 2}} data-name={ACTION_NAME.FONT_COLOR} onMouseDown={this.state.mouseEventHandler.onMouseDownIcon} >
                        <div style={{position: 'fixed', top: 0, right: 0, bottom: 0, left: 0}} onClick={this.handleClose}/>
                        <GithubPicker onChange={this.handleChange}/>
                    </div> : null
                }
                
            </div>
        );
    }
}

export default FontColor;