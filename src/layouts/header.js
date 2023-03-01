import { Component } from "react";
import { Link, NavLink } from "react-router-dom"

class Header extends Component {

    style = ({ isActive }) => ({
        color: isActive ? 'red' : 'black'
    })

    render() {
        return (
            <section id="header" >
                <h1><Link to="/">Dopetrope</Link></h1>
                <nav id="nav">
                    <ul>
                        <li><NavLink to="/" style={this.style} >Home</NavLink></li>
                        <li><NavLink to="/about" style={this.style} >About</NavLink></li>
                        <li><NavLink to="/contact" style={this.style} >Contact</NavLink></li>
                    </ul>

                    {/* <li>
                        <a href="#">Dropdown</a>
                        <ul>
                            <li><a href="#">Lorem ipsum dolor</a></li>
                            <li><a href="#">Magna phasellus</a></li>
                            <li><a href="#">Etiam dolore nisl</a></li>
                            <li>
                                <a href="#">Phasellus consequat</a>
                                <ul>
                                    <li><a href="#">Magna phasellus</a></li>
                                    <li><a href="#">Etiam dolore nisl</a></li>
                                    <li><a href="#">Veroeros feugiat</a></li>
                                    <li><a href="#">Nisl sed aliquam</a></li>
                                    <li><a href="#">Dolore adipiscing</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Veroeros feugiat</a></li>
                        </ul>
                    </li> */}
                </nav>


                
            </section >
        )
    }

}

export default Header