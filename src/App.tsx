import React, { useEffect, useState } from 'react';
import { Box, HStack } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { setPosts } from './lib/features/post';

import { findPosts } from './lib/api';
import Sidebar from './lib/components/Sidebar';
import Dashboard from './lib/components/Dashboard';
import CreatePostForm from './lib/components/Form';

function App() {
	const dispatch = useDispatch();
	const [active, setActive] = useState('dashboard');

	const fetchPosts = async () => {
		const posts = await findPosts();
		dispatch(setPosts(posts));
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<HStack maxW='2xl' m='auto' alignItems={'flex-start'} py={6} spacing={6}>
			<Sidebar onChange={setActive} active={active} />
			<Box w='full'>
				{active === 'dashboard' ? <Dashboard /> : <CreatePostForm />}
			</Box>
		</HStack>
	);
}

export default App;
