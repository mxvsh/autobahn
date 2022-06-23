import { CreatePost, EditPost } from '../types';

const baseUrl = ` https://jsonplaceholder.typicode.com`;

export const findPosts = async () => {
	const response = await fetch(`${baseUrl}/posts`);
	return response.json();
};

export const createPost = async (data: CreatePost) => {
	const response = await fetch(`${baseUrl}/posts`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	return response.json();
};

export const updatePost = async (postId: string, data: EditPost) => {
	const response = await fetch(`${baseUrl}/posts/${postId}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});

	return response.json();
};

export const deletePost = async (postId: string) => {
	const response = await fetch(`${baseUrl}/posts/${postId}`, {
		method: 'DELETE',
	});

	return response.json();
};
