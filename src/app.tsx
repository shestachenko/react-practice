import * as React from 'react';
import './app.css';
import {Redirect, Route, Switch} from 'react-router-dom';
import AddressBook from './scenes/address-book';


class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <main>
          <Switch>
            <Redirect exact from='/' to='address-book' />
            <Route path='/address-book' component={AddressBook} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
