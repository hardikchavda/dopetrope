import { Component } from "react";
import { NavLink } from "react-router-dom";
export class MobileMenu extends Component {
    render() {
        return (
            <div className="menu" tabIndex="1">
                <div className="list">
                    <span><NavLink to="/">Home</NavLink></span>
                    <span><NavLink to="/about">About</NavLink></span>
                    <span><NavLink to="/contact">Contact</NavLink></span>
                </div>
                <div className="mnbtn"></div>
            </div>
        );
    }

}