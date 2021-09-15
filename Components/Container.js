import { Box, Center, Container as Conta } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Container = ({ children }) => (
	<Box bg="#2A363B">
		<Navbar />
		<Center>
			<Conta paddingTop="48px" w="80%" maxW="100%">
				{children}
			</Conta>
		</Center>
	</Box>
);

export default Container;
