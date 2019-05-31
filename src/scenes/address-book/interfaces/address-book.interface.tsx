import {ContactsState} from '../reducers/contacts.reducer';
import {ContactState} from '../reducers/contact.reducer';

export interface AddressBookInterface {
  contacts: ContactsState,
  contact: ContactState;
}
