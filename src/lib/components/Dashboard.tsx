import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { IPost } from '../../types';
import { sortAndDeduplicateDiagnostics } from 'typescript';

const Dashboard = () => {
	const posts = useSelector((s: { posts: IPost[] }) => s.posts);
	console.log('posts', posts);
sortAndDeduplicateDiagnostics
		<div>
			{posts?.map((post) => {
				return (
					<Box key={post.id}>
						<Heading>{post.title}</Heading>
					</Box>
				);
			})}
		</div>
	);
};

export default Dashboard;
