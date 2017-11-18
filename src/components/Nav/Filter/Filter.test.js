import React from 'react';
import ReactDOM from 'react-dom';
import Filter from './Filter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Filter />, div);
});
