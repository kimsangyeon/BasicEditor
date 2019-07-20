import ACTION from './ActionHandler';
import SelectionHandler from './SelectionHandler';

class MouseEventHandler {
    private selectionHandler: SelectionHandler;
    constructor() {
        this.selectionHandler = new SelectionHandler();
    }

    /**
     * Mouse on Down Event & Execute the action
     * @param {any} e
     */
    public onMouseDownIcon = (e: any): void => {
        const actionName = e.currentTarget.dataset.name;
        this.selectionHandler.saveSelectionRange();

        if (actionName) {
            e.preventDefault();
            e.stopPropagation();
            ACTION[actionName].apply(this);
        }

        const range = this.selectionHandler.getSelectionRange();
        this.selectionHandler.restoreSelectionRange(range);
    }
}

export default MouseEventHandler;