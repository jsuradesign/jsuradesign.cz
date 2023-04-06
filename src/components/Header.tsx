import React from "react";
import {NavLink} from "react-router-dom";

export class Header extends React.Component {
    render():JSX.Element {
        return (
            <header>
                <div className="container">
                    Header
                    <nav>
                        <ul>
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about">About</NavLink>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
