import React from 'react';
import ReactDOM from 'react-dom';
import AppLayout from './oldApp';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppLayout />, div);
});
