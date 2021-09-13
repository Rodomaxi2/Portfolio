import { Box, Center, Grid } from "@chakra-ui/react";
import ProjectCard from "./projectCard";
import dataProjects from "../data/info.json";

const Projects = () => (
	<div className="row">
		<div className="col-md-12">
			<h2 className="text-center text-light">Projects</h2>
		</div>
		<div className="col-md-4">
			<div className="card">
				<iframe
					height="300"
					scrolling="no"
					title="Drum machine"
					src="https://codepen.io/rodomaxi/embed/preview/WNORGjX?default-tab=result&theme-id=dark"
					frameBorder="no"
					loading="lazy"
					allowtransparency="true"
					allowFullScreen="true"
				>
					See the Pen{" "}
					<a
						href="https://codepen.io/rodomaxi/pen/WNORGjX"
						target="_blank"
						rel="noreferrer"
					>
						Drum machine
					</a>{" "}
					by Rodolfo Maximo (<a href="https://codepen.io/rodomaxi">@rodomaxi</a>) on{" "}
					<a href="https://codepen.io">CodePen</a>.
				</iframe>
				<div className="card-body">
					<h3 className="text-center">Drum Machine</h3>
					<p>You can make music with your keyboard!!</p>
				</div>
			</div>
		</div>
	</div>
);

export default Projects;
