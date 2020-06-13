const BASE_URL = "https://quran.kemenag.go.id/index.php/api/";

const QURAN_LIST_URL = `${BASE_URL}v1/surat`;
const QURAN_DETAIL_URL = (surahId, jmlAyat) => `${BASE_URL}v1/ayatweb/${surahId}/0/0/${jmlAyat}`;

export { QURAN_LIST_URL, QURAN_DETAIL_URL };
