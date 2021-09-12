import { Box, Stack, Heading, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

const Navbar = () => (
	<Box>
		<Flex
			direction="row"
			w="100%"
			h="48px"
			pos="fixed"
			top="0"
			bg="#212529"
			justifyContent="space-evenly"
			alignItems="end"
		>
			<Text>
				<Link color="white" href="/">
					Welcome to my portfolio
				</Link>
			</Text>
			<Stack direction="row" textColor="white" spacing="30">
				<Text>Projects</Text>
				<Text>Contact</Text>
			</Stack>
		</Flex>
	</Box>
);
export default Navbar;
