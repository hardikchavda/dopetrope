import { Component } from "react";

class PostDetailComponent extends Component {
    render() {        
        console.log("Detail");
        const regex = /(<([^>]+)>)/ig;
        return (
            <div className="container">

                <article className="box post">
                    <a href="/" className="image featured">
                        <img src={this.props.image} alt="" style={{ height: '300px', width: '300px' }} />
                    </a>
                    <header>
                        <h2>{this.props.title} </h2>
                        <p>{this.props.category}</p>
                    </header>
                    <p>

                        {this.props.description.replace(regex, '')}
                    </p>
                </article>

            </div>
        );
    }
}
export default PostDetailComponent