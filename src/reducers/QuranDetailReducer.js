import {
    FETCHING_QURAN_DETAIL_REQUEST,
    FETCHING_QURAN_DETAIL_SUCCESS,
    FETCHING_QURAN_DETAIL_FAILURE,
} from '../utils/ActionTypes';

const initialState = {
    actionStatus: '',
    data: {},
    error: false,
    errorMessage: '',
    loading: false,
    refreshing: false,
};

const QuranDetail = (state = initialState, { payload, type, error }) => {
    switch (type) {
        case FETCHING_QURAN_DETAIL_REQUEST:
            return {
                ...state,
                actionStatus: FETCHING_QURAN_DETAIL_REQUEST,
                error: false,
                errorMessage: '',
                loading: true,
                refreshing: true,
            };
        case FETCHING_QURAN_DETAIL_SUCCESS:
            return {
                ...state,
                actionStatus: FETCHING_QURAN_DETAIL_SUCCESS,
                data: payload,
                error: false,
                loading: false,
                refreshing: false,
            };
        case FETCHING_QURAN_DETAIL_FAILURE:
            return {
                ...state,
                actionStatus: FETCHING_QURAN_DETAIL_FAILURE,
                error: true,
                errorMessage: error,
                loading: false,
                refreshing: false,
            };
        default:
            return state;
    }
};

export { QuranDetail };
