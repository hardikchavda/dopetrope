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
        window.scrollTo(0, 0)
        axios.get(`https://hardikchavda.in/wp-json/wp/v2/posts/${id}?&_embed`)
            .then(data => this.setState({ posts: data.data }))
    }
    render() {
        const postItems = <PostDetailComponent
            title={this.state.posts.title ? this.state.posts.title.rendered : 'Loading...'}
            description={this.state.posts.content ? this.state.posts.content.rendered : 'Loading'}
            image={this.state.posts && this.state.posts._embedded && this.state.posts._embedded['wp:featuredmedia'] ? this.state.posts._embedded['wp:featuredmedia'][0].source_url : ''}
            category={this.state.posts && this.state.posts._embedded && this.state.posts._embedded['wp:term'] ? this.state.posts._embedded['wp:term'][0][0].name : ""}
        />
        // console.log(this.state.posts._embedded);
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