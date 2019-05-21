class KeyboardHandler {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }

    /**
     * Keyboard keyDown Event & Execute the action
     * @param {any} e
     */
    public onKeydown = (e: any) => {
        const isCtrl: boolean = e.ctrlKey;
        const isMeta: boolean = e.metaKey;
        const keyCode: number = e.keyCode;
        let action: any = null;

        if ((isCtrl || isMeta)) {
            if(keyCode === 66) {
                action = this.__bold__;
            } else if (keyCode === 229) {
                action = this.__italic__;
            } else if (keyCode === 85) {
                action = this.__underline__;
            } else if (keyCode === 83) {
                action = this.__strike__;
            }
        }

        if (action) {
            e.preventDefault();
            e.stopPropagation();
            action.apply();
        }
    }

    /**
     * bold action
     */
    private __bold__() {
        document.execCommand('bold');
    }

    /**
     * italic action
     */
    private __italic__() {
        document.execCommand('italic');
    }

    /**
     * underline action
     */
    private __underline__() {
        document.execCommand('underline');
    }

    /**
     * strike action
     */
    private __strike__() {
        document.execCommand('strikeThrough');
    }
}

export default KeyboardHandler;