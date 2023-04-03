import { Logic } from "@root/logic/Logic";
import { observable } from "mobx";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
    logic:Logic;
    // title:string;
    // excerpt?:string;
    // slug:string;
    // data:[];
}

export class ArticleDetail extends React.Component<Props> {
    @observable title = "sdfvbfb";
    @observable excerpt = "";
  render() {
    return (
        <article>
            <h2>{this.title}</h2>
            <div dangerouslySetInnerHTML={{__html: `${this.excerpt}`}} />
            <Link to={"/blog"}>Zpět</Link>
        </article>
    );
  }
}