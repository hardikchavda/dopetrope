import Portfolio from "./components/portfolio-comp"

function About() {

	return (
		<section id="main">
			<div className="container">

				{/* <!-- Content --> */}
				<article className="box post">
					<a href="https://google.com" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
					<header>
						<h2>About</h2>
						<p>Welcome to my blog.</p>
					</header>

					<Portfolio />
					<section>
						<header>
							<h3>Something else</h3>
						</header>
					</section>
					<section>
						<header>
							<h3>So in conclusion ...</h3>
						</header>
						<p>
							
						</p>
					</section>
				</article>

			</div>
		</section>
	)
}

export default About