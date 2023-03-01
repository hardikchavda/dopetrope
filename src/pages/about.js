import Portfolio from "./components/portfolio-comp"

function About() {

	return (
		<section id="main">
			<div className="container">

				{/* <!-- Content --> */}
				<article className="box post">
					<a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
					<header>
						<h2>About</h2>
						<p>Lorem ipsum dolor sit amet feugiat</p>
					</header>

					<Portfolio />
					<section>
						<header>
							<h3>Something else</h3>
						</header>
						<p>
							Elementum odio duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
							placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
							eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
							elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
							sit amet nullam consequat feugiat dolore tempus.
							Elementum odio duis semper risus et lectus commodo fringilla. Maecenas sagittis convallis justo vel mattis.
							placerat, nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
							eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
							elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor.
						</p>
						<p>
							Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
							eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
							elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
							sit amet nullam consequat feugiat dolore tempus.
						</p>
						
					</section>
					<section>
						<header>
							<h3>So in conclusion ...</h3>
						</header>
						<p>
							Nunc diam iaculis massa, et aliquet nibh leo non nisl vitae porta lobortis, enim neque fringilla nunc,
							eget faucibus lacus sem quis nunc suspendisse nec lectus sit amet augue rutrum vulputate ut ut mi. Aenean
							elementum, mi sit amet porttitor lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
							sit amet nullam consequat feugiat dolore tempus. Elementum odio duis semper risus et lectus commodo fringilla.
							Maecenas sagittis convallis justo vel mattis.
						</p>
					</section>
				</article>

			</div>
		</section>
	)
}

export default About