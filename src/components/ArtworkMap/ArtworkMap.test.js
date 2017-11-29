import React from 'react';
import ReactDOM from 'react-dom';
import ArtworkMap from './ArtworkMap';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ArtworkMap />, div);
});
