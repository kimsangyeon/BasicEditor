import KeyboardHandler from './Handler/KeyboardHandler';

class Editor {
    protected name: string;
    protected keyBoardHandler: KeyboardHandler;

    constructor() {
        this.keyBoardHandler = new KeyboardHandler(this.name);
    }

    public init(name: string) {
        this.name = name;
    }
}

export default Editor;