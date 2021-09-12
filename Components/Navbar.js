import { Box, Stack, Link, Flex, Text } from "@chakra-ui/react";
// import Link from "next/link";

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
			alignItems="center"
		>
			<Link href="/" color="white">
				Welcome to my portfolio
			</Link>
			<Stack direction="row" spacing="30">
				<Link href="#projects" color="white">
					Projects
				</Link>
				<Link href="/contact" color="white">
					Contact
				</Link>
			</Stack>
		</Flex>
	</Box>
);
export default Navbar;
