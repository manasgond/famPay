import { all, fork } from 'redux-saga/effects';
import * as homeSagas from 'containers/App/store/saga';

export default function* sagas() {
  yield all([...Object.values(homeSagas)].map(fork));
}