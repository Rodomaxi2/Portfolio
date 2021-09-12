import Link from "next/link";

const Navbar = () => (
	<nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
		<div className="container">
			<Link href="/">
				<a className="navbar-brand">Welcome to my portfolio</a>
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-left">
					<li className="nav-item">
						<a className="nav-link active" aria-current="page" href="/">
							About
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="/">
							Projects
						</a>
					</li>
					<li className="nav-item">
						<Link href="/contact">
							<a className="nav-link">Contact</a>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	</nav>
);
export default Navbar;
