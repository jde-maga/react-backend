import { takeEvery } from 'redux-saga/effects';

import { fetchLogin } from './actions/me';

const yielder = function* yielder() {
  yield takeEvery('LOGIN_REQUESTED', fetchLogin);
};

export default yielder;
