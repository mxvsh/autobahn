import {
	Box,
	Button,
	ButtonGroup,
	Heading,
	HStack,
	Spacer,
	Text,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Input,
	Textarea,
	Stack,
	FormControl,
	FormLabel,
	useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { EditPost, IPost } from '../../types';
import * as Api from '../api';
import { updatePost, removePost } from '../features/post';

const Article: React.FC<{ post: IPost }> = ({ post }) => {
	const toast = useToast();
	const form = useForm<EditPost>({
		defaultValues: post,
	});
	const modal = useDisclosure();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState('');

	const onEditSubmit = async (data: EditPost) => {
		setLoading('edit');

		try {
			const newPost = await Api.updatePost(post.id, data);
			dispatch(updatePost({ whereId: post.id, data: newPost }));
			toast({
				title: 'Success',
				description: 'Post updated successfully',
				status: 'success',
			});
			modal.onClose();
		} catch (e) {
			toast({
				title: 'Error',
				description: 'Something went wrong',
				status: 'error',
			});
		}

		setLoading('');
	};

	const onDelete = async () => {
		setLoading('delete');

		try {
			await Api.deletePost(post.id);
			dispatch(removePost(post.id));
			toast({
				title: 'Success',
				description: 'Post deleted successfully',
				status: 'success',
			});
		} catch (e) {
			toast({
				title: 'Error',
				description: 'Something went wrong',
				status: 'error',
			});
		}

		setLoading('');
	};

	return (
		<>
			<Box>
				<HStack alignItems={'flex-start'}>
					<Box>
						<Heading size='sm'>{post.title}</Heading>
						<Text color='gray.400'>{post.body}</Text>
					</Box>
					<Spacer />
					<ButtonGroup size='sm'>
						<Button onClick={modal.onOpen}>Edit</Button>
						<Button
							colorScheme={'red'}
							variant='outline'
							onClick={onDelete}
							isLoading={loading === 'delete'}
						>
							Delete
						</Button>
					</ButtonGroup>
				</HStack>
			</Box>

			<Modal isOpen={modal.isOpen} onClose={modal.onClose}>
				<ModalOverlay />
				<form onSubmit={form.handleSubmit(onEditSubmit)}>
					<ModalContent>
						<ModalHeader>Edit Post</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<Stack>
								<FormControl>
									<FormLabel>Title</FormLabel>
									<Input
										{...form.register('title')}
										placeholder='Enter title'
									/>
								</FormControl>

								<FormControl>
									<FormLabel>Body</FormLabel>
									<Textarea
										{...form.register('body')}
										placeholder='Enter body'
									/>
								</FormControl>
							</Stack>
						</ModalBody>

						<ModalFooter>
							<Button
								colorScheme={'blue'}
								type='submit'
								isLoading={loading === 'edit'}
								mr={2}
							>
								Save
							</Button>
							<Button variant={'outline'}>Cancel</Button>
						</ModalFooter>
					</ModalContent>
				</form>
			</Modal>
		</>
	);
};

export default Article;
