import { call, put } from 'redux-saga/effects';

const Api = {};

Api.fetchUser = (action) => {
  console.log('fetchuser', action);
  return true;
};

export function* fetchLogin(action) {
  try {
    const user = yield call(Api.fetchUser, action);
    yield put({ type: 'USER_FETCH_SUCCEEDED', user });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

export default null;
