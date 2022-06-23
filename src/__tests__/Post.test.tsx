import { render, screen } from '@testing-library/react';
import Dashboard from '../lib/components/Dashboard';
import { findPosts } from '../lib/api';
import { Provider } from 'react-redux';
import { store } from '../lib/store';

describe('post', () => {
	it('should return array of posts', async () => {
		const posts = await findPosts();
		expect(posts).toBeInstanceOf(Array);
	});

	it('should be displayed', async () => {
		render(
			<Provider store={store}>
				<Dashboard posts={[{ id: '2', title: 'A title', body: 'body' }]} />
			</Provider>
		);

		expect(screen.getByText('A title')).toBeTruthy();
	});
});
