import ACTION from './ActionHandler';
import SelectionHandler from './SelectionHandler';

class MouseEventHandler {
    private selectionHanlder: SelectionHandler;
    constructor() {
        this.selectionHanlder = new SelectionHandler();
    }

    /**
     * Mouse on Down Event & Execute the action
     * @param {any} e
     */
    public onMouseDownIcon = (e: any): void => {
        const actionName = e.currentTarget.dataset.name;
        this.selectionHanlder.saveSelectionRange();

        if (actionName) {
            e.preventDefault();
            e.stopPropagation();
            ACTION[actionName].apply(this);
        }

        const range = this.selectionHanlder.getSelectionRange();
        this.selectionHanlder.restoreSelectionRange(range);
    }
}

export default MouseEventHandler;