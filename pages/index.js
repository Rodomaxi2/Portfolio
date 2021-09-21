import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Container from "../components/Container";
import AboutCard from "../components/AboutCard";
import Projects from "../components/Projects";

const Index = () => (
	<Container>
		<Head>
			<title>My portfolio</title>
		</Head>
		<Box className="about">
			<AboutCard />
		</Box>
		<Projects />
	</Container>
);

export default Index;
