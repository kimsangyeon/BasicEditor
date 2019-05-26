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

        this.__toggleIcon__(e);
    }

    /**
     * Mouse on Up Event
     * save Selection Range
     * @param {any} e
     */
    public onMouseUp = (e: any) => {
        this.selectionHanlder.saveSelectionRange();
    }

    /**
     * Toggle Icon background
     * @param {any} e
     */
    private __toggleIcon__(e: any) {
        const elTarget = e.currentTarget;
        const classList = elTarget.className.split(" ")
        if (classList.indexOf("on") > -1) {
            elTarget.className = classList.reduce((result: string, cl: string) => {
                if (cl === "on") {
                    return result;
                }
                return result = result.length > 0 ? result += " " + cl : result = cl;
            }, "");
        } else {
            elTarget.className += " on";
        }
    }
}

export default MouseEventHandler;