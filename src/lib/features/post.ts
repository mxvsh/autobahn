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
			console.log('index', index);
		},
	},
});

export const { setPosts, updatePost } = postSlice.actions;
export default postSlice.reducer;
