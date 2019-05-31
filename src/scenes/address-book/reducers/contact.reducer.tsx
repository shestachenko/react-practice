import {ContactInterface} from '../interfaces/contact.interface';
import {AddressBookContactActionTypes} from '../actions/contact.action';

export interface ContactState {
  data: ContactInterface;
  isLoading: boolean;
}

export const initialState: ContactState = {
  data: null,
  isLoading: false,
};

export default (
  state = initialState,
  action: any,
): ContactState => {
  switch (action.type) {
    case AddressBookContactActionTypes.FetchContact:
      return {
        ...state,
        isLoading: true,
      };

    case AddressBookContactActionTypes.ContactFetched:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case AddressBookContactActionTypes.UpdateContact:
      return {
        ...state,
        isLoading: true,
      };

    case AddressBookContactActionTypes.ContactUpdated:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
