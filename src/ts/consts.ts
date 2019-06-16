interface ActionName {
    BOLD: string,
    ITALIC: string,
    REDO: string,
    STRIKE_THROUGH: string,
    SUBSCRIPT: string,
    UNDERLINE: string,
    UNDO: string
};

interface Consts {
    [key: string]: ActionName
};

const consts: Consts = {
    ACTION_NAME: {
        BOLD: "bold",
        ITALIC: "italic",
        REDO: "redo",
        STRIKE_THROUGH: "strikeThrough",
        SUBSCRIPT: 'subscript',
        UNDERLINE: "underline",
        UNDO: "undo",
    }
};

export default consts;