import { QURAN_LIST_URL } from '../utils/ApiUrl';
import { Constants } from '../utils/Constants';
import axios from 'axios';
import {
    FETCHING_QURAN_LIST_REQUEST,
    FETCHING_QURAN_LIST_SUCCESS,
    FETCHING_QURAN_LIST_FAILURE
} from '../utils/ActionTypes';


export const fetchingQuranListRequest = () => ({ type: FETCHING_QURAN_LIST_REQUEST });

export const fetchingQuranListSuccess = (json) => ({
    type: FETCHING_QURAN_LIST_SUCCESS,
    payload: json
});

export const fetchingQuranListFailure = (error) => ({
    type: FETCHING_QURAN_LIST_FAILURE,
    error: error
});

export const fetchingQuran = () => {
    return async dispatch => {
        dispatch(fetchingQuranListRequest());
        try {
            let response = await axios.get(QURAN_LIST_URL);
            if (response?.status === Constants.RESPONSE_CODE.SUCCESS) {
                dispatch(fetchingQuranListSuccess(response.data.data));
            } else {
                dispatch(fetchingQuranListFailure("Request Surah gagal. MohonPeriksa kembali koneksi internet Anda"));
            }
        } catch (error) {
            dispatch(fetchingQuranListFailure("Request Surah gagal. MohonPeriksa kembali koneksi internet Anda"));
        }
    }
}
