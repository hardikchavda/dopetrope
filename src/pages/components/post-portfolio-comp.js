import { Component } from "react";
import { NavLink } from "react-router-dom";

class PostPortComponent extends Component {
    render() {
        return (
            <div className="col-4 col-6-medium col-12-small">
                <section className="box">
                    <a href={this.props.id} className="image featured"><img src={this.props.image} alt="" /></a>
                    <header>
                        <h3>{this.props.title}</h3>
                    </header>
                    <p>{this.props.category}</p>
                    <footer>
                        <ul className="actions">
                            {/* <li><a href={this.props.link} className="button alt">Find out more</a></li> */}
                            <li><NavLink to={`/postdetail/${this.props.id}`} className="button alt">Know More</NavLink></li>
                        </ul>
                    </footer>
                </section>
            </div>
        )
    }
}
export default PostPortComponent