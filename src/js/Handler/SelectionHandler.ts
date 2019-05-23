class SelectionHandler {
    protected selectionRange: Range | null;
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
     * save selectionRange
     */
    public saveSelectionRange(): void {
        if (window.getSelection) {
            const sel: any = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                this.selectionRange = sel.getRangeAt(0);
            }
        } else if (document.createRange) {
            this.initSelection();
        }
    }
}

export default SelectionHandler;