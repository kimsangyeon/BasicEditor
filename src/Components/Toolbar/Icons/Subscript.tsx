import * as React from 'react';

interface Props {
    bold: boolean
};

class Subscript extends React.Component { 
    public props: Props;
       
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <div></div>
        );
    }
}

export default Subscript;