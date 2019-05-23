import consts from '../consts';

/**
 * The method handler corresponding to the action name.
 */
const ACTION_NAME = consts.ACTION_NAME;
const ActionHandler = {
    [ACTION_NAME.BOLD]: () => {
        document.execCommand('bold');
    },
    [ACTION_NAME.ITALIC]: () => {
        document.execCommand('italic');
    },
    [ACTION_NAME.STRIKE_THROUGH]: () => {
        document.execCommand('strikeThrough');
    },
    [ACTION_NAME.UNDERLINE]: () => {
        document.execCommand('underline');
    }
}

export default ActionHandler;