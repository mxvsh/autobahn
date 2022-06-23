import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Input,
	Spacer,
	Stack,
	Text,
	Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { IPost } from '../../types';
import { createPost } from '../api';
import { insertPost } from '../features/post';
import Article from './Article';

type FormValues = {
	title: string;
	body: string;
};

const CreatePostForm = () => {
	const form = useForm<FormValues>();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const [recent, setRecent] = useState<IPost[]>([]);

	const onSubmit = async (data: FormValues) => {
		setLoading(true);

		try {
			const post = await createPost(data);
			setRecent([post, ...recent]);
			dispatch(insertPost(post));
		} catch (e) {}

		setLoading(false);
	};

	return (
		<>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<Stack>
					<FormControl>
						<FormLabel>Title</FormLabel>
						<Input {...form.register('title')} placeholder='Enter title' />
					</FormControl>

					<FormControl>
						<FormLabel>Body</FormLabel>
						<Textarea {...form.register('body')} placeholder='Enter body' />
					</FormControl>

					<Box>
						<Button isLoading={loading} type='submit'>
							Create
						</Button>
					</Box>
				</Stack>
			</form>

			<Heading mt={4}>Recent posts</Heading>
			<Stack spacing={4} mt={4}>
				{recent.length === 0 ? <Text>None.</Text> : null}

				{recent.map((post, idx) => {
					return <Article key={idx} post={post} />;
				})}
			</Stack>
		</>
	);
};

export default CreatePostForm;
