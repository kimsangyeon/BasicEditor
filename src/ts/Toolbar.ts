class Toolbar {
    protected bold: boolean;
    protected italic: boolean;
    protected strikeThrough: boolean;
    protected subscript: boolean;
    protected superscript: boolean;
    protected underline: boolean;

    constructor(fn: () => void) {
       this.bold = false;
       this.italic = false;
       this.strikeThrough = false;
       this.subscript = false;
       this.superscript = false;
       this.underline = false;

       this.__init__(fn);
    }

    /**
     * Return bold status
     */
    public getBold(): boolean {
        return this.bold;
    }

    /**
     * Return italic status
     */
    public getItalic(): boolean {
        return this.italic;
    }


    /**
     * Return strikeThrough status
     */
    public getStrike(): boolean {
        return this.strikeThrough;
    }

    /**
     * Return subcript status
     */
    public getSubscript(): boolean {
        return this.subscript;
    }

    /**
     * Return superscript status
     */
    public getSuperscript(): boolean {
        return this.superscript;
    }

    /**
     * Return underline status
     */
    public getUnderline(): boolean {
        return this.underline
    }

    /**
     * Toolbar init method
     * add Event selection change
     */
    private __init__(fn: () => void): void {
        document.addEventListener('selectionchange', (e) => {
            const sel: any = window.getSelection();
            const focusNode: Node = sel.focusNode;
            
            if (focusNode && focusNode.parentElement) {
                this.bold = !!focusNode.parentElement.closest('#basicEditor b');
                this.italic = !!focusNode.parentElement.closest('#basicEditor i');
                this.strikeThrough = !!focusNode.parentElement.closest('#basicEditor strike');
                this.subscript = !!focusNode.parentElement.closest('#basicEditor sub');
                this.superscript = !!focusNode.parentElement.closest('#basicEditor sup');
                this.underline = !!focusNode.parentElement.closest('#basicEditor u');
            }

            fn();
        });
    }
}

export default Toolbar;