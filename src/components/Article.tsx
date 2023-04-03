import React from "react";
import { Link } from "react-router-dom";

interface Props {
    title:string;
    excerpt?:string;
    slug:string;
}

export class Article extends React.Component<Props> {
  render() {
    return (
        <article>
            <h2>{this.props.title}</h2>
            <div dangerouslySetInnerHTML={{__html: `${this.props.excerpt}`}} />
            {/* <Link to={this.props.slug}>Celý příspěvek</Link> */}
            <Link to={`${this.props.slug}`}>Celý příspěvek</Link>
        </article>
    );
  }
}