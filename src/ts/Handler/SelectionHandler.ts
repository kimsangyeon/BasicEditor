class SelectionHandler {
    protected selectionRange: Range|null;
    constructor() {
        this.initSelection();
    }

    /**
     * init selectionRange
     */
    public initSelection(): void {
        this.selectionRange = document.createRange();
    }

    /**
     * save selection range
     */
    public saveSelectionRange(): void {
        if (window.getSelection) {
            const sel: any = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                this.selectionRange = sel.getRangeAt(0).cloneRange();
            }
        } else if (document.createRange) {
            this.initSelection();
        }
    }

    /**
     * return selection range
     * @returns {Range|null}
     */
    public getSelectionRange(): Range|null {
        return this.selectionRange;
    }

    /**
     * restore selection range
     * @param {Range|null} range 
     */
    public restoreSelectionRange(range: Range|null): void {
        let r: Range|null = range;
        if (!r) {
            r = this.getSelectionRange();
        }
       
        if (r && window.getSelection) {
            const sel: any = window.getSelection();
            sel.addRange(r);
        }
    }
}

export default SelectionHandler;