const AboutCard = () => (
	<header className="row">
		<div className="col-md-12">
			<div className="card card-body bg-secondary text-light">
				<div className="row">
					<div className="col-md-4">
						<img src="profile_picture.jpg" alt="Rodolfo Maximo" className="img-fluid" />
					</div>
					<div className="col-md-8">
						<h1>Roldolfo Maximo</h1>
						<h3>Computer Science Student</h3>
						<h4>
							Hi, I am a student who loves to learn about technology, I have worked in
							different areas, from programming a robot on the Arduino platform,
							creating desktop application in C# and developing a small web scraping
							algorithm, currently I am focusing on web development with technologies
							like React and Next.JS, in my free time I like to enjoy video games and
							books.
						</h4>
					</div>
				</div>
			</div>
		</div>
	</header>
);

export default AboutCard;
