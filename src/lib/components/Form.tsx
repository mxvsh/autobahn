import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Stack,
	Textarea,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

type FormValues = {
	title: string;
	body: string;
};

const CreatePostForm = () => {
	const form = useForm<FormValues>();

	const onSubmit = (data: FormValues) => {};

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<Heading>Create Post</Heading>
			<Stack mt={4}>
				<FormControl>
					<FormLabel>Title</FormLabel>
					<Input {...form.register('title')} placeholder='Enter title' />
				</FormControl>

				<FormControl>
					<FormLabel>Body</FormLabel>
					<Textarea {...form.register('body')} placeholder='Enter body' />
				</FormControl>

				<Box>
					<Button type='submit'>Create</Button>
				</Box>
			</Stack>
		</form>
	);
};

export default CreatePostForm;
