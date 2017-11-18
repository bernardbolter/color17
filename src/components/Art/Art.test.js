import React from 'react';
import ReactDOM from 'react-dom';
import Art from './Art';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Art />, div);
});
