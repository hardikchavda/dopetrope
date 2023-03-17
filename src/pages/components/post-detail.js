import axios from "axios";
import { Component } from "react";
import PostDetailComponent from "./post-detail-comp";

class PostDetail extends Component {
    state = {
        posts: []
    };
    componentDidMount = async () => {

        console.log(this.props.match.params.id);
        await axios.get(`https://hardikchavda.in/wp-json/wp/v2/posts/991`)
            .then(data => this.setState({ posts: data.data }))
    }
    render() {
        const postItems = <PostDetailComponent
            title={this.state.posts.title ? this.state.posts.title.rendered : 'Loading...'}
            description={this.state.posts.content ? this.state.posts.content.rendered : 'Loading'}
        // image={this.state.posts && this.state.posts._embed && this.state.posts._embed['wp:featuredmedia'] ? this.state.posts._embed['wp:featuredmedia'][0].source_url : this.state.posts._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url}
        // category={this.state.posts._embedded['wp:term'][1][0].name}
        />

        return (

            <section id="main" >
                {postItems}
            </section>

        )
    }
}
export default PostDetail