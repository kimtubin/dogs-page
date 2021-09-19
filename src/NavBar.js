import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">DOGS</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-item nav-link active" to="/">
                Home <span className="sr-only">(current)</span>
              </NavLink>
              {this.props.dogs.map((d) => (
                <NavLink className="nav-link nav-item" to={`/dogs/${d.name}`}>
                  {d.name}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
