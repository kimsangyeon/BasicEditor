class Toolbar {
    protected bold: boolean;
    protected italic: boolean;
    protected strikethrough: boolean;
    protected underline: boolean;
    
    constructor(fn: () => void) {
       this.bold = false;
       this.italic = false;
       this.strikethrough = false;
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
     * Toolbar init method
     * add Event selection change
     */
    private __init__(fn: () => void): void {
        document.addEventListener('selectionchange', (e) => {
            const sel: any = window.getSelection();
            const focusNode: Node = sel.focusNode;
            
            if (focusNode.parentElement) {
                this.bold = !!focusNode.parentElement.closest('#basicEditor > b');
            }        
            
            fn();
        });
    }
}

export default Toolbar;