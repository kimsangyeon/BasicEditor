import consts from '../consts';
import ACTION from './ActionHandler';

const ACTION_NAME = consts.ACTION_NAME;

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
        const actionName = this.__getActionName__(e);

        if (actionName) {
            e.preventDefault();
            e.stopPropagation();
            ACTION[actionName].apply(this);
        }
    }

    /**
     * Returns the name of the action corresponding to the event
     * @param {any} e
     * @return {string}
     */
    private __getActionName__(e: any): string {
        const isCtrl: boolean = e.ctrlKey;
        const isMeta: boolean = e.metaKey;
        const keyCode: number = e.keyCode;
        let actionName: string = "";

        if ((isCtrl || isMeta)) {
            if(keyCode === 66) {
                actionName = ACTION_NAME.BOLD;
            } else if (keyCode === 229) {
                actionName = ACTION_NAME.ITALIC;
            } else if (keyCode === 85) {
                actionName = ACTION_NAME.UNDERLINE;
            } else if (keyCode === 83) {
                actionName = ACTION_NAME.STRIKE_THROUGH;
            }
        }

        return actionName;
    }
}

export default KeyboardHandler;