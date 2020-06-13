import { combineReducers } from 'redux';
import { QuranList } from './QuranListReducer';
import { QuranDetail } from './QuranDetailReducer';

export default combineReducers({
    quranList: QuranList,
    quranDetail: QuranDetail
})
