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
        this._onProgress()
        window.scrollTo(0, 0)
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
    _onProgress = () => <img src="https://media.emailonacid.com/wp-content/uploads/2019/03/2019-GifsInEmail.gif" alt=""/>
}

function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}
export default withParams(PostDetail)