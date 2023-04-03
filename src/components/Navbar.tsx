import { observable, action } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

@observer
export class Navbar extends React.Component {
    @observable navbarOpen:boolean = false;

    @action handleTogglerClick = () => {
        this.navbarOpen = !this.navbarOpen;
        console.log(this.navbarOpen);
    }

    @action handleThemeSwitcherClick = () => {
        console.log("theme switcher");
    }

    render():JSX.Element {
        const togglerClass = this.navbarOpen ? "navbar__open" : "";
        return (
            <nav className={`navbar ${togglerClass}`}>
                <Link className="navbar--brand" to={"/"}>Jan Sůra Design</Link>
                <button 
                    className={`btn navbar--toggler ${togglerClass}`} 
                    type="button"
                    onClick={this.handleTogglerClick}
                >Toggler</button>
                <ul className="navbar--nav">
                    <li className="navbar--nav--item"><NavLink to={"/"}>Home</NavLink></li>
                    <li className="navbar--nav--item"><NavLink to={"/blog"}>Blog</NavLink></li>
               </ul>
               <button className="btn navbar--theme--switcher" type="button" onClick={this.handleThemeSwitcherClick}>
                    theme switcher
               </button>
            </nav>
        );
    }
}