export interface CreatePost {
	title: string;
	body: string;
}
export interface EditPost {
	title: string;
	body: string;
}

export interface IPost {
	id: string;
	title: string;
	body: string;
	userId: string;
}
