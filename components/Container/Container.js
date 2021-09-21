import PropTypes from "prop-types";
import { Box, Center, Container as Conta } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Container = ({ children }) => (
	<Box bg="#2A363B">
		<Navbar />
		<Center>
			<Conta paddingTop="48px" w="80%" maxW="100%" maxH="100%">
				{children}
			</Conta>
		</Center>
		<Footer />
	</Box>
);

Container.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Container;
