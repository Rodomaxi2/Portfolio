import { Box } from "@chakra-ui/layout";
import Navbar from "./Navbar";

const Container = ({ children }) => (
	<Box>
		<Navbar />
		<main className="container py-5">{children}</main>
	</Box>
);

export default Container;
