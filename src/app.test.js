import React from 'react';
import ReactDOM from 'react-dom';
import _App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<_App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
