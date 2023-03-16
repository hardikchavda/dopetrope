import { Component } from "react";

class PostPortComponent extends Component {
    render() {
        return (
            <div className="col-4 col-6-medium col-12-small">
                <section className="box">
                    <a href={this.props.link} className="image featured"><img src={this.props.image} alt="" /></a>
                    <header>
                        <h3>{this.props.title}</h3>
                    </header>
                    <p>{this.props.description}</p>
                    <footer>
                        <ul className="actions">
                            <li><a href={this.props.link} className="button alt">Find out more</a></li>
                        </ul>
                    </footer>
                </section>
            </div>
        )
    }
}
export default PostPortComponent