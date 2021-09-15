import { Box, HStack, Heading, Image, Text, Flex } from "@chakra-ui/react";

const AboutCard = () => (
	<Box bg="#6C5B7B" padding="20px" w="100%">
		<Flex>
			<Box>
				<Image
					src="profile_picture.jpg"
					alt="Rodolfo Maximo"
					w="2000px"
					objectFit="cover"
				/>
			</Box>
			<Box textColor="white" padding="1%">
				<Heading as="h1" fontSize={["xl", "2xl", "3xl"]}>
					Rodolfo Maximo
				</Heading>
				<Text as="i" fontSize={["sm", "md", "lg"]}>
					Computer Science Student
				</Text>
				<Text fontSize={["lg", "xl", "2xl"]}>
					Hi, I am a student who loves to learn about technology, I have worked in
					different areas, from programming a robot on the Arduino platform, creating
					desktop application in C# and developing a small web scraping algorithm,
					currently I am focusing on web development with technologies like React and
					Next.JS, in my free time I like to enjoy video games and books.
				</Text>
			</Box>
		</Flex>
	</Box>
);

export default AboutCard;
