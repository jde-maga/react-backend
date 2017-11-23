import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
  exampleGraph: [100, 200, 300],
  exampleTable: [{
    key: '1',
    name: 'User 1',
    age: 42,
    address: 'France',
  }, {
    key: '2',
    name: 'User 2',
    age: 25,
    address: 'Londres',
  }, {
    key: '3',
    name: 'User 3',
    age: 32,
    address: 'Sidney',
  }],
});

const dataReducer = handleActions({
  'SUCCESS:GET_ME': (state, { payload }) => fromJS(payload),
}, initialState);

export default dataReducer;
