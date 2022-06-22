import { CreatePost } from '../types';

const baseUrl = ` https://jsonplaceholder.typicode.com`;

export const findPosts = async () => {
	const response = await fetch(`${baseUrl}/posts`);
	return await response.json();
};

export const createPost = async (data: CreatePost) => {
	const response = await fetch(`${baseUrl}/posts`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return await response.json();
};

export const updatePost = () => {};

export const deletePost = () => {};
