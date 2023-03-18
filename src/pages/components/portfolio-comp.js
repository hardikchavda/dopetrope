import axios from "axios";
import { Component } from "react";
import PostPortComponent from "./post-portfolio-comp";

class Portfolio extends Component {

    state = {
        posts: []
    };

    componentDidMount() {        
        axios.get('https://hardikchavda.in/wp-json/wp/v2/posts?per_page=9&_embed')
            // .then(res => res.data)
            .then(data => this.setState({ posts: data.data }))
    }

    componentDidUpdate(){
        window.scrollTo(0, 0)

    }

    render() {
        const postItems = this.state.posts.map(post => (
            <PostPortComponent
                key={post.id}
                id={post.id}
                title={post.title.rendered}
                image={post && post._embed && post._embed['wp:featuredmedia'] ? post._embed['wp:featuredmedia'][0].source_url : post._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}
                category={post._embedded['wp:term'][0][0].name}
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