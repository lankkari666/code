import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getCurrentDate } from './utils';

function App() {
	const appDiv = React.createElement(
		'div',
		{ className: 'App' },
		React.createElement(
			'header',
			{ className: 'App-header' },
			React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			React.createElement(
				'p',
				null,
				'Edit ',
				React.createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			React.createElement(
				'a',
				{ href: '#', className: 'App-link' },
				getCurrentDate(),
			),
		),
	);

	return appDiv;
}

export default App;
