import { Flex, Center, GridItem, VStack, Text, Link, Stack, Button, Image } from "@chakra-ui/react";

import PropTypes from "prop-types";

const ProjectCard = ({ item, index }) => {
	const hola = "hola";
	return (
		<GridItem key={index} w="100%" bg="#6C5B7B" padding="10px" rounded="5px">
			<Center>
				<Flex>
					<VStack>
						<Center>
							<Link href={item.link} target="_blank">
								<Image src={item.image} h="150px" w="300px" objectFit="fill" />
							</Link>
						</Center>
						<Text textColor="white" fontSize="22px">
							{item.title}
						</Text>
						<Text textColor="white">{item.description}</Text>
					</VStack>
				</Flex>
			</Center>
		</GridItem>
	);
};

ProjectCard.propTypes = {
	item: PropTypes.objectOf(PropTypes.any),
	index: PropTypes.number,
};

ProjectCard.defaulProps = {
	item: {},
	index: 0,
};

export default ProjectCard;
