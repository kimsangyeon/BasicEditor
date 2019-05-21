import KeyboardHandler from './Handler/KeyboardHandler';

class BasicEditor {
    protected name: string;
    protected keyBoardHandler: KeyboardHandler;

    constructor(name: string) {
        this.name = name;
        this.keyBoardHandler = new KeyboardHandler(this.name);
    }

    /**
     * return keyBoard Handler
     * @param {KeyboardHandler}
     */
    public getKeyboardHandler() {
        return this.keyBoardHandler;
    }
}

export default BasicEditor;