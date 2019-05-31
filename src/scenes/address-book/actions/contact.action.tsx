import axios from 'axios';
import {ContactInterface} from '../interfaces/contact.interface';
import {history} from '../../../history';
import {ThunkAction} from 'redux-thunk';
import {RootStoreInterface} from '../../../interfaces/root-store.interface';
import {Action} from 'redux';

export enum AddressBookContactActionTypes {
  FetchContact = '[AddressBookContact] Fetch Contact',
  ContactFetched = '[AddressBookContact] Contact Fetched',
  CreateContact = '[AddressBookContact] Create Contact',
  ContactCreated = '[AddressBookContact] Contact Created',
  UpdateContact = '[AddressBookContact] Update Contact',
  ContactUpdated = '[AddressBookContact] Contact Updated',
}

export function fetchContact(id: number): ThunkAction<void, RootStoreInterface, null, Action> {
  return (dispatch: any): void => {
    dispatch({type: AddressBookContactActionTypes.FetchContact});

    axios.get(`http://localhost:3001/api/contacts/${id}`)
      .then(response => dispatch({type: AddressBookContactActionTypes.ContactFetched, payload: response.data}));
  }
}

export function createContact(contact: ContactInterface): ThunkAction<void, RootStoreInterface, null, Action> {
  return (dispatch: any): void => {
    dispatch({type: AddressBookContactActionTypes.CreateContact});

    axios.post('http://localhost:3001/api/contacts', contact)
      .then(() => dispatch({type: AddressBookContactActionTypes.ContactCreated}))
      .then(() => history.push('/address-book'));
  }
}

export function updateContact(contact: ContactInterface): ThunkAction<void, RootStoreInterface, null, Action> {
  return (dispatch: any): void => {
    dispatch({type: AddressBookContactActionTypes.UpdateContact});

    axios.put(`http://localhost:3001/api/contacts/${contact.id}`, contact)
      .then(response => dispatch({type: AddressBookContactActionTypes.ContactUpdated, payload: response.data}));
  }
}
