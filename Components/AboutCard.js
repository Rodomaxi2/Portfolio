import { Box, Flex, Heading, Image } from "@chakra-ui/react";

const AboutCard = () => (
	<Box bg="#6C5B7B" padding="20px">
		<Flex>
			<Box>
				<Image src="profile_picture.jpg" alt="Rodolfo Maximo" boxSize="400px" />
			</Box>
			<Box textColor="white" padding="1%">
				<Heading as="h1" size="2xl">
					Rodolfo Maximo
				</Heading>
				<Heading as="h2" size="xl">
					Computer Science Student
				</Heading>
				<Heading as="h3" size="lg">
					Hi, I am a student who loves to learn about technology, I have worked in
					different areas, from programming a robot on the Arduino platform, creating
					desktop application in C# and developing a small web scraping algorithm,
					currently I am focusing on web development with technologies like React and
					Next.JS, in my free time I like to enjoy video games and books.
				</Heading>
			</Box>
		</Flex>
	</Box>
);

export default AboutCard;
