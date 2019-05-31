import {FormReducer} from 'redux-form';
import {AddressBookInterface} from '../scenes/address-book/interfaces/address-book.interface';

export interface RootStoreInterface {
  form: FormReducer,
  addressBook: AddressBookInterface,
}
