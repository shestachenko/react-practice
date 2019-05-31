import * as React from 'react';
import {connect} from 'react-redux';
import './style.css';
import ContactGrid from './components/contact-grid';
import {fetchContacts, deleteContacts} from "../../actions/contacts.action";
import {RootStoreInterface} from "../../../../interfaces/root-store.interface";
import {ContactInterface} from "../../interfaces/contact.interface";

class ContactManager extends React.Component<any> {
  public selectedContacts: ContactInterface[];

  public componentDidMount() {
    this.props.fetchContacts();
  }

  public addContact(): void {
    this.props.history.push('/address-book/create');
  }

  public editContact(id: number): void {
    this.props.history.push(`/address-book/update/${id}`);
  }

  public updateSelected(contacts: ContactInterface[]): void {
    this.selectedContacts = contacts;
  }

  public deleteContacts(): void {
      this.props.deleteContacts(this.selectedContacts);
  }

  public render() {
  const { contacts, isLoading } = this.props;

    return (
      <div>
        <ContactGrid
          list={contacts}
          isLoading={isLoading}
          clickRow={this.editContact.bind(this)}
          selectRow={this.updateSelected.bind(this)}
        />
        <button onClick={this.deleteContacts.bind(this)}>Delete contact(s)</button>
        <button onClick={this.addContact.bind(this)}>Add contact</button>
      </div>
    );
  }
}

export default connect(
  ({addressBook: {contacts}}: RootStoreInterface) => ({
    contacts: contacts.data,
    isLoading: contacts.isLoading,
  }),
  {fetchContacts, deleteContacts}
)(ContactManager);
