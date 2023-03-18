import axios from "axios";
import { Component } from "react";
import { useParams } from "react-router-dom";
import PostDetailComponent from "./components/post-detail-comp"

class PostDetail extends Component {
    state = {
        posts: []
    };
    componentDidMount() {
        let { id } = this.props.params;
        axios.get(`https://hardikchavda.in/wp-json/wp/v2/posts/${id}?&_embed`)
            .then(data => this.setState({ posts: data.data }))
    }

    componentDidUpdate() {
        window.scrollTo(0, 0)
    }
    render() {
        const post = this.state.posts
        const postItems = <PostDetailComponent
            title={post.title ? post.title.rendered : 'Loading...'}
            description={post.content ? post.content.rendered : 'Loading'}
            image={post && post._embedded && post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : ''}
            category={post && post._embedded && post._embedded['wp:term'] ? post._embedded['wp:term'][0][0].name : ""}
        />
        return (

            <section id="main" >
                {postItems}
            </section>

        )
    }
}

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
export default withParams(PostDetail)