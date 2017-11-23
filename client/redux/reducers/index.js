import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import me from './me';
import data from './data';

export default combineReducers({
  form: formReducer,
  me,
  data,
});
