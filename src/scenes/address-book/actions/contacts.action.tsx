import axios from 'axios';
import {ContactInterface} from '../interfaces/contact.interface';
import {ThunkAction} from 'redux-thunk';
import {RootStoreInterface} from '../../../interfaces/root-store.interface';
import {Action} from 'redux';

export enum AddressBookContactsActionTypes {
  FetchContacts = '[AddressBook] Fetch Contacts',
  ContactsFetched = '[AddressBook] Contacts Fetched',
  DeleteContacts = '[AddressBook] Delete Contacts',
}

export function fetchContacts(): ThunkAction<void, RootStoreInterface, null, Action> {
  return (dispatch: any): void => {
    dispatch({type: AddressBookContactsActionTypes.FetchContacts});

    axios.get('http://localhost:3001/api/contacts')
      .then(response => dispatch({type: AddressBookContactsActionTypes.ContactsFetched, payload: response.data}));
  }
}

export function deleteContacts(contacts: ContactInterface[]): ThunkAction<void, RootStoreInterface, null, Action> {
  return (dispatch: any): void => {
    dispatch({type: AddressBookContactsActionTypes.DeleteContacts});

    axios.all([
      contacts.map((contact: ContactInterface) => axios.delete(`http://localhost:3001/api/contacts/${contact.id}`))
    ]).then(() => dispatch(fetchContacts()));
  }
}
