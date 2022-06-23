import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './lib/store';
import App from './App';

test('renders learn react link', () => {
	render(
		<Provider store={store}>
			<App />
		</Provider>
	);
	const linkElement = screen.getByText(/Dashboard/i);
	expect(linkElement).toBeInTheDocument();
});
