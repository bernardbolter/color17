import React from 'react';
import ReactDOM from 'react-dom';
import ArtworkList from './ArtworkList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArtworkList />, div);
});
