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
        const mouseEventHandler: MouseEventHandler = new MouseEventHandler();
        const {strikeThrough}: Props = this.props;
        const className: string = strikeThrough ? "be-icon-container active-container" : "be-icon-container";

        return (
            <div className={className} data-name={ACTION_NAME.STRIKE_THROUGH} onMouseDown={mouseEventHandler.onMouseDownIcon}>
                <div className="be-icon">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 80.000000 80.000000" preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(10.000000,10.000000) scale(0.120000,0.120000)" fill="#000000" stroke="none">
                            <path d="M420,85V0H25v85h155v115H35v55h145v190h85V255h145v-55H265V85H420z 	
                                M250,430h-55V255h55V430z M395,215v25H50v-25H395z
                                M250,70v130h-55V70H40V15h365v55H250z"/>
                        </g>
                    </svg>
                </div>
            </div>
        );
    }
}

export default StrikeThrough;