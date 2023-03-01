import Portfolio from "./components/portfolio-comp"

function Home() {

    return (
        <section id="main">
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <section id="banner">
                            <header>
                                <h2>Howdy. This is Dopetrope.</h2>
                                <p>A responsive template by HTML5 UP</p>
                            </header>
                        </section>


                        <section id="intro" className="container">
                            <div className="row">
                                <div className="col-4 col-12-medium">
                                    <section className="first">
                                        <i className="icon solid featured fa-cog"></i>
                                        <header>
                                            <h2>Ipsum consequat</h2>
                                        </header>
                                        <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                    </section>
                                </div>
                                <div className="col-4 col-12-medium">
                                    <section className="middle">
                                        <i className="icon solid featured alt fa-bolt"></i>
                                        <header>
                                            <h2>Magna etiam dolor</h2>
                                        </header>
                                        <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                    </section>
                                </div>
                                <div className="col-4 col-12-medium">
                                    <section className="last">
                                        <i className="icon solid featured alt2 fa-star"></i>
                                        <header>
                                            <h2>Tempus adipiscing</h2>
                                        </header>
                                        <p>Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et magna tempus.</p>
                                    </section>
                                </div>
                            </div>
                            <footer>
                                <ul className="actions">
                                    <li><a href="#" className="button large">Get Started</a></li>
                                    <li><a href="#" className="button alt large">Learn More</a></li>
                                </ul>
                            </footer>
                        </section>

                        <Portfolio />

                    </div>
                    <div className="col-12">


                        <section>
                            <header className="major">
                                <h2>The Blog</h2>
                            </header>
                            <div className="row">
                                <div className="col-6 col-12-small">
                                    <section className="box">
                                        <a href="#" className="image featured"><img src="images/pic08.jpg" alt="" /></a>
                                        <header>
                                            <h3>Magna tempus consequat</h3>
                                            <p>Posted 45 minutes ago</p>
                                        </header>
                                        <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
                                        <footer>
                                            <ul className="actions">
                                                <li><a href="#" className="button icon solid fa-file-alt">Continue Reading</a></li>
                                                <li><a href="#" className="button alt icon solid fa-comment">33 comments</a></li>
                                            </ul>
                                        </footer>
                                    </section>
                                </div>
                                <div className="col-6 col-12-small">
                                    <section className="box">
                                        <a href="#" className="image featured"><img src="images/pic09.jpg" alt="" /></a>
                                        <header>
                                            <h3>Aptent veroeros aliquam</h3>
                                            <p>Posted 45 minutes ago</p>
                                        </header>
                                        <p>Lorem ipsum dolor sit amet sit veroeros sed et blandit consequat sed veroeros lorem et blandit adipiscing feugiat phasellus tempus hendrerit, tortor vitae mattis tempor, sapien sem feugiat sapien, id suscipit magna felis nec elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos lorem ipsum dolor sit amet.</p>
                                        <footer>
                                            <ul className="actions">
                                                <li><a href="#" className="button icon solid fa-file-alt">Continue Reading</a></li>
                                                <li><a href="#" className="button alt icon solid fa-comment">33 comments</a></li>
                                            </ul>
                                        </footer>
                                    </section>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home