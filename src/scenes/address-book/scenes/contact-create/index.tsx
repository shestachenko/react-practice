import * as React from 'react';
import {connect} from 'react-redux';
import './style.css';
import ContactForm from '../../components/contact-form';
import {RootStoreInterface} from '../../../../interfaces/root-store.interface';
import {createContact} from '../../actions/contact.action'

class ContactCreate extends React.Component<any> {
  public render() {
  const { createContact, history } = this.props;

    return (
      <div>
        <button onClick={history.goBack}>Back</button>
        <ContactForm onSubmit={createContact.bind(this)} />
      </div>
    );
  }
}

export default connect(({addressBook: {contact}}: RootStoreInterface) =>
  ({
    contact: contact
  }),
  {createContact}
)(ContactCreate);
