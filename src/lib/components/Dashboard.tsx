import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { IPost } from '../../types';
import Article from './Article';

const Dashboard = () => {
	const posts = useSelector((s: { post: { posts: IPost[] } }) => s.post);

	return (
		<Stack spacing={4}>
			{posts?.posts.map((post, idx) => {
				return <Article key={idx} post={post} />;
			})}
		</Stack>
	);
};

export default Dashboard;
