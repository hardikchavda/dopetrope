import { Component } from "react";
import { Link, NavLink } from "react-router-dom"
import { MobileMenu } from "./mobileMenu";
class Header extends Component {


    style = ({ isActive }) => ({
        color: isActive ? 'red' : 'black'
    })

    constructor() {
        super()
        this.state = {
            width: window.innerWidth
        }
        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    handleWindowResize = () => {
        this.setState({ width: window.innerWidth });
    };
    componentDidMount = () => {
        window.addEventListener("resize", this.handleWindowResize);
    };
    componentWillUnmount = () => {
        window.removeEventListener("resize", this.handleWindowResize);
    };
    render() {
        const breakpoint = 980;
        if (this.state.width < breakpoint) {
            return (
                <>
                    <section id="header" >
                        <h1><Link to="/">Dopetrope</Link></h1>
                        <MobileMenu />
                    </section >
                </>
            )
        }
        else {
            return (
                <section id="header" >
                    <h1><Link to="/">Dopetrope</Link></h1>

                    <nav id="nav">
                        <ul>
                            <li><NavLink to="/" style={this.style} >Home</NavLink></li>
                            <li><NavLink to="/about" style={this.style} >About</NavLink></li>
                            <li><NavLink to="/contact" style={this.style} >Contact</NavLink></li>
                        </ul>
                    </nav>
                </section >
            )
        }
    }
}

export default Header