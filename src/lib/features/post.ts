import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../../types';

interface PostState {
	posts: IPost[];
}

const initialState: PostState = {
	posts: [],
};

export const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		// set the array
		setPosts: (state, action: PayloadAction<IPost[]>) => {
			action.payload.map((p) => state.posts.push(p));
		},

		// insert a new post
		insertPost: (state, action: PayloadAction<IPost>) => {
			state.posts.unshift(action.payload);
		},

		// update specific post from the array
		updatePost: (
			state,
			action: PayloadAction<{
				whereId: string;
				data: IPost;
			}>
		) => {
			const index = state.posts.findIndex(
				(p) => p.id === action.payload.whereId
			);

			state.posts[index] = action.payload.data;
		},

		// remove specific post from the array
		removePost: (state, action: PayloadAction<string>) => {
			state.posts = state.posts.filter((p) => p.id !== action.payload);
		},
	},
});

export const { setPosts, updatePost, insertPost, removePost } =
	postSlice.actions;
export default postSlice.reducer;
