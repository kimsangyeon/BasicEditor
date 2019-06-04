class Toolbar {
    protected bold: boolean;
    protected italic: boolean;
    protected strikethrough: boolean;
    protected underline: boolean;
    
    constructor() {
       this.bold = false;
       this.italic = false;
       this.strikethrough = false;
       this.underline = false;

       this.__init__();
    }
    
    /**
     * Toolbar init method
     * add Event selection change
     */
    private __init__(): void {
        document.addEventListener('selectionchange', (e) => {
            
        });
    }
}

export default Toolbar;