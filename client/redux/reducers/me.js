import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({});

const studentReducer = handleActions({
  'SUCCESS:GET_ME': (state, { payload }) => fromJS(payload),
}, initialState);

export default studentReducer;
