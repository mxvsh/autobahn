import { Stack } from '@chakra-ui/react';
import { IPost } from '../../types';
import Article from './Article';

const Dashboard: React.FC<{ posts: IPost[] }> = ({ posts }) => {
	return (
		<Stack spacing={4}>
			{posts.map((post, idx) => {
				return <Article key={idx} post={post} />;
			})}
		</Stack>
	);
};

export default Dashboard;
