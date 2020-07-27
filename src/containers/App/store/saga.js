// saga can come here if required/* eslint-disable no-plusplus */
import { put, takeLatest } from 'redux-saga/effects';
import HomeApi from 'services/homeApi';
import { saveHomeApiData, actions } from './actions';

function* fetchHomeData() {
  try {
    const { data } = yield HomeApi.getHomeData();
    yield put(saveHomeApiData(data));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('something went wrong');
  }
}

export default function* createTagRequestWatcher() {
  yield takeLatest(actions.GET_APP_HOME_DATA, fetchHomeData);
}
