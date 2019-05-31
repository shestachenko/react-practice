import * as React from 'react';
import {connect} from 'react-redux';
import './style.css';
import ContactForm from '../../components/contact-form';
import {RootStoreInterface} from '../../../../interfaces/root-store.interface';
import {fetchContact, updateContact} from '../../actions/contact.action'

class ContactUpdate extends React.Component<any> {
  public componentDidMount() {
    const {fetchContact, match: {params: {id}}} = this.props;

    fetchContact(id);
  }

  public render() {
  const { contact, updateContact, history } = this.props;

    return (
      <div>
        <button onClick={history.goBack}>Back</button>
        <ContactForm onSubmit={updateContact.bind(this)} initialValues={contact} />
      </div>
    );
  }
}

export default connect(({addressBook: {contact}}: RootStoreInterface) =>
  ({
    contact: contact.data
  }),
  {fetchContact, updateContact}
)(ContactUpdate);
