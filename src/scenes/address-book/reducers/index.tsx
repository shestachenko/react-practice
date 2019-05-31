import { combineReducers } from 'redux';
import contacts from './contacts.reducer';
import contact from './contact.reducer';

export default combineReducers({
  contacts,
  contact,
});