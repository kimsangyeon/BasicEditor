import ACTION from './ActionHandler';
import SelectionHandler from './SelectionHandler';

class MouseEventHandler {
    private selectionHanlder: SelectionHandler;
    constructor() {
        this.selectionHanlder = new SelectionHandler();
        window.addEventListener("mouseup", this.onMouseUp);
    }

    /**
     * Mouse on Down Event & Execute the action
     * @param {any} e
     */
    public onMouseDownIcon = (e: any) => {
        const actionName = e.currentTarget.dataset.name;
        const range = this.selectionHanlder.getSelectionRange();

        this.selectionHanlder.restoreSelectionRange(range);

        if (actionName) {
            e.preventDefault();
            e.stopPropagation();
            ACTION[actionName].apply(this);
        }
    }

    /**
     * Mouse on Up Event
     * save Selection Range
     * @param {any} e
     */
    public onMouseUp = (e: any) => {
        this.selectionHanlder.saveSelectionRange();
    }
}

export default MouseEventHandler;