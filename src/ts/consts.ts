interface ActionName {
    BOLD: string,
    ITALIC: string,
    STRIKE_THROUGH: string,
    UNDERLINE: string
};

interface Consts {
    [key: string]: ActionName
};

const consts: Consts = {
    ACTION_NAME: {
        BOLD: "bold",
        ITALIC: "italic",
        STRIKE_THROUGH: "strikeThrough",
        UNDERLINE: "underline"
    }
};

export default consts;