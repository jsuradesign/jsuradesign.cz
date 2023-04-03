import React from "react";
import { Link } from "react-router-dom";

export class NotFound extends React.Component {
  render() {
    return (
      <section>
        <div className="container">
            <h1>Stránka nenalezena</h1>
            <p>Je mi líto, ale požadovaná stránka nebyla nalezena.</p>
            <small>Error code: 404 - Page not found</small>
            <Link className="btn" to={"/"}>Zpět na hlavní stránku</Link>
        </div>
      </section>
    );
  }
}