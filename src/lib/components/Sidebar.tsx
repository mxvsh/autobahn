import React from 'react';
import { Box, Stack, Text } from '@chakra-ui/react';

type Props = {
	active: string;
	onChange: (key: string) => void;
};

const Items = [
	{
		key: 'dashboard',
		title: 'Dashboard',
	},
	{
		key: 'add-post',
		title: 'Add Post',
	},
];

const Sidebar: React.FC<Props> = ({ onChange, active }) => {
	return (
		<Stack>
			{Items.map((item, idx) => {
				const isActive = item.key === active;

				return (
					<Box
						key={idx}
						py={1}
						px={4}
						rounded='lg'
						cursor={'pointer'}
						userSelect='none'
						onClick={() => onChange(item.key)}
						bg={isActive ? 'gray.200' : ''}
					>
						<Text>{item.title}</Text>
					</Box>
				);
			})}
		</Stack>
	);
};

export default Sidebar;
