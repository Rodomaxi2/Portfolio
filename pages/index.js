import { Box, Center } from "@chakra-ui/react";
import Head from "next/head";
import Container from "../Components/Container";
import AboutCard from "../Components/AboutCard";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";

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
