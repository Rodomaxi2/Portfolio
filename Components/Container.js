import { Box, Center, Container as Conta } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Container = ({ children }) => (
	<Box>
		<Navbar />
		<Center>
			<Conta py="48px" w="80%">
				{children}
			</Conta>
		</Center>
	</Box>
);

export default Container;
