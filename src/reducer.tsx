import { combineReducers } from 'redux';
import addressBook from './scenes/address-book/reducers';
import {reducer as reduxFormReducer} from 'redux-form';

export default combineReducers({
  form: reduxFormReducer,
  addressBook,
});
