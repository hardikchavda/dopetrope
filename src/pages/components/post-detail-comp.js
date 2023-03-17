import { Component } from "react";

class PostDetailComponent extends Component {
    render() {
        return (
            <div className="container">

                <article className="box post">
                    <a href="/" className="image featured">
                        <img src={this.props.image} alt="" />
                    </a>
                    <header>
                        <h2>{this.props.title} </h2>
                        <p>{this.props.category}</p>
                    </header>
                    <p>
                        {this.props.description}
                    </p>
                </article>

            </div>
        );
    }
}
export default PostDetailComponent