import consts from '../consts';

/**
 * The method handler corresponding to the action name.
 */
const ACTION_NAME = consts.ACTION_NAME;
const ActionHandler = {
    [ACTION_NAME.BOLD]: (): void => {
        document.execCommand('bold');
    },
    [ACTION_NAME.ITALIC]: (): void => {
        document.execCommand('italic');
    },
    [ACTION_NAME.STRIKE_THROUGH]: (): void => {
        document.execCommand('strikeThrough');
    },
    [ACTION_NAME.UNDERLINE]: (): void => {
        document.execCommand('underline');
    },
    [ACTION_NAME.UNDO]: (): void => {
        document.execCommand('undo');
    },
    [ACTION_NAME.REDO]: (): void => {
        document.execCommand('redo');
    }
}

export default ActionHandler;