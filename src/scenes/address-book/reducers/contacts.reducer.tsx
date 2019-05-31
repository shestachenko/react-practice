import {ContactInterface} from '../interfaces/contact.interface';
import {AddressBookContactsActionTypes} from '../actions/contacts.action';

export interface ContactsState {
  data: ContactInterface[];
  isLoading: boolean;
}

export const initialState: ContactsState = {
  data: [],
  isLoading: false,
};

export default (
  state = initialState,
  action: any,
): ContactsState => {
  switch (action.type) {
    case AddressBookContactsActionTypes.FetchContacts:
      return {
        ...state,
        isLoading: true,
      };

    case AddressBookContactsActionTypes.ContactsFetched:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
