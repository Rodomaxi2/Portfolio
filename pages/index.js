import { Box } from "@chakra-ui/layout";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Container from "../Components/Container";
import AboutCard from "../Components/AboutCard";
import Projects from "../Components/Projects";
import Footer from "../Components/Footer";

const Index = () => (
	<Container>
		<Head>
			<title>My portfolio</title>
		</Head>
		<div className="about">
			<AboutCard />
		</div>
		<div className="row">
			<div className="col-md-12">
				<div className="card card-body bg-dark" id="projects">
					<Projects />
				</div>
			</div>
		</div>
		<div>
			<Footer />
		</div>
	</Container>
);

export default Index;
