import { CALL_API, Schemas } from 'api';

export const FILES_REQUEST = 'FILES_REQUEST';
export const FILES_SUCCESS = 'FILES_SUCCESS';
export const FILES_FAILURE = 'FILES_FAILURE';

function fetchFiles(filesystem, path, nextPageUrl) {
    return {
        filesystem,
        path,
        [CALL_API]: {
            types: [ FILES_REQUEST, FILES_SUCCESS, FILES_FAILURE ],
            endpoint: nextPageUrl,
            schema: Schemas.FILESYSTEM_ARRAY
        }
    };
}

export function loadFiles(filesystem, path, nextPage) {
    return (dispatch, getState) => {
        const {
            nextPageUrl = `files/${filesystem}/${path}`,
            pageCount = 0
            } = getState().pagination.files[filesystem] || {};

        if (pageCount > 0 && !nextPage) {
            return null;
        }

        return dispatch(fetchFiles(filesystem, path, nextPageUrl));
    };
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Resets the currently visible error message.
export function resetErrorMessage() {
    return {
        type: RESET_ERROR_MESSAGE
    };
}
