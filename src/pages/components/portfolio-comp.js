import { Component } from "react";
import PostPortComponent from "./post-portfolio-comp";

class Portfolio extends Component {


    render() {
        const myArray = ['Hardik', 'Pranav', 'Malay'];
        return (
            <section>
                <header className="major">
                    <h2>My Portfolio</h2>
                </header>
                <div className="row">
                    <PostPortComponent
                        title="Hardik"
                        image="https://picsum.photos/id/1/300/200"
                        alternate=""
                    />
                    <PostPortComponent
                        title="Pranav"
                        image="https://picsum.photos/id/2/300/200"
                    />
                    <PostPortComponent
                        title="Malay"
                        image="https://picsum.photos/id/3/300/200"
                    />
                </div>
            </section>
        )
    }
}

export default Portfolio