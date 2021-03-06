/* eslint-disable react/no-array-index-key */
import { Box, Center, Grid, Text, VStack } from "@chakra-ui/react";
import ProjectCard from "../ProjectCard/ProjectCard";
import dataProjects from "../../data/info.json";

const Projects = () => (
	<VStack bg="#C06C84" w="100%" id="projects" padding="1%">
		<Box>
			<Center>
				<Text color="white" fontSize="35px">
					Projects
				</Text>
			</Center>
		</Box>

		<Center w="90%">
			<Grid
				templateColumns={[
					"repeat(1,1fr)",
					"repeat(2,1fr)",
					"repeat(3,1fr)",
					"repeat(3,1fr)",
				]}
				templateRows="repeat(auto,1fr)"
				columnGap={10}
				rowGap={10}
				w="100%"
			>
				{dataProjects &&
					dataProjects.map((item, idx) => (
						<ProjectCard item={item} index={idx} key={`PojectCard-${idx}`} />
					))}
			</Grid>
		</Center>
	</VStack>
);

export default Projects;
