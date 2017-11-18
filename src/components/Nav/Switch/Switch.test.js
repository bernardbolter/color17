import React from 'react';
import ReactDOM from 'react-dom';
import Switch from './Switch';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Switch />, div);
});
