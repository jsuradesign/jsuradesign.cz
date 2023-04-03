import React from "react";
import { NavLink } from "react-router-dom";

export class Navigation extends React.Component {
    render() {
        return (
            <div>
               <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/blog"}>Blog</NavLink></li>
               </ul>
            </div>
        );
    }
}