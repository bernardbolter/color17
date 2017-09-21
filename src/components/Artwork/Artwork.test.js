import React from 'react';
import ReactDOM from 'react-dom';
import Artwork from './Artwork';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Artwork />, div);
});
