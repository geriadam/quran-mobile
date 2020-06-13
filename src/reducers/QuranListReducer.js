import {
    FETCHING_QURAN_LIST_REQUEST,
    FETCHING_QURAN_LIST_SUCCESS,
    FETCHING_QURAN_LIST_FAILURE,
} from '../utils/ActionTypes';

const initialState = {
    actionStatus: '',
    data: [],
    error: false,
    errorMessage: '',
    loading: false,
    refreshing: false,
};

const QuranList = (state = initialState, { payload, type, error }) => {
    switch (type) {
        case FETCHING_QURAN_LIST_REQUEST:
            return {
                ...state,
                actionStatus: FETCHING_QURAN_LIST_REQUEST,
                error: false,
                errorMessage: '',
                loading: true,
                refreshing: true,
            };
        case FETCHING_QURAN_LIST_SUCCESS:
            return {
                ...state,
                actionStatus: FETCHING_QURAN_LIST_SUCCESS,
                data: payload,
                error: false,
                loading: false,
                refreshing: false,
            };
        case FETCHING_QURAN_LIST_FAILURE:
            return {
                ...state,
                actionStatus: FETCHING_QURAN_LIST_FAILURE,
                error: true,
                errorMessage: error,
                loading: false,
                refreshing: false,
            };
        default:
            return state;
    }
};

export { QuranList };
