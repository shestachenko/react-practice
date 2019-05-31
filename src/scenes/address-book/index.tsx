import * as React from 'react';
import './style.css';
import ContactManager from './scenes/contact-manager';
import ContactCreate from './scenes/contact-create';
import ContactUpdate from './scenes/contact-update';
import {Route} from 'react-router-dom';

class AddressBook extends React.Component<any> {
  public render() {
    return (
      <div className={'container'}>
        <h1 className='App-title'>Address Book</h1>
        <div>
          <Route exact path='/address-book' component={ContactManager} />
          <Route path='/address-book/create' component={ContactCreate} />
          <Route path='/address-book/update/:id' component={ContactUpdate} />
        </div>
      </div>
    );
  }
}

export default AddressBook;
