import { QURAN_DETAIL_URL } from '../utils/ApiUrl';
import { Constants } from '../utils/Constants';
import axios from 'axios';
import {
    FETCHING_QURAN_DETAIL_REQUEST,
    FETCHING_QURAN_DETAIL_SUCCESS,
    FETCHING_QURAN_DETAIL_FAILURE,
} from '../utils/ActionTypes';


export const fetchingQuranDetailRequest = () => ({ type: FETCHING_QURAN_DETAIL_REQUEST });

export const fetchingQuranDetailSuccess = (json) => ({
    type: FETCHING_QURAN_DETAIL_SUCCESS,
    payload: json
});

export const fetchingQuranDetailFailure = (error) => ({
    type: FETCHING_QURAN_DETAIL_FAILURE,
    error: error
});

export const fetchingQuranDetail = (surahId, countAyat) => {
    return async dispatch => {
        dispatch(fetchingQuranDetailRequest());
        try {
            let response = await axios.get(QURAN_DETAIL_URL(surahId, countAyat));
            if (response?.status === Constants.RESPONSE_CODE.SUCCESS) {
                dispatch(fetchingQuranDetailSuccess(response.data.data));
            } else {
                dispatch(fetchingQuranDetailFailure("Request Surah gagal. MohonPeriksa kembali koneksi internet Anda"));
            }
        } catch (error) {
            dispatch(fetchingQuranDetailFailure("Request Surah gagal. MohonPeriksa kembali koneksi internet Anda"));
        }
    }
}
