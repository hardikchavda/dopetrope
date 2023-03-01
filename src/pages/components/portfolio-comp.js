import { Component } from "react";
import PostPortComponent from "./post-portfolio-comp";

class Portfolio extends Component {

    state = {
        posts: []
    };

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts?_page=1")
            .then(res => res.json())
            .then(data => this.setState({ posts: data }));
    }

    render() {
        const postItems = this.state.posts.map(post => (
            <PostPortComponent
                key={post.id}
                title={post.title}
                image={`https://picsum.photos/id/${post.id}/300/200`}
                description={post.body}
            />
        ));
        return (
            <section>
                <header className="major">
                    <h2>My Portfolio</h2>
                </header>
                <div className="row">
                    {postItems}
                </div>

            </section>
        )
    }
}

export default Portfolio