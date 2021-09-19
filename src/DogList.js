import React, { Component } from "react";
import { Link } from "react-router-dom";

class DogList extends Component {
  render() {
    return (
      <div className="DogList container">
        {this.props.dogs.map((d) => (
          <div className="card w-25">
            <img className="card-img-top" src={d.src} />
            <div className="card-body">
              <h6 className="card-title">Name: {d.name}</h6>
              <p className="card-text">Age: {d.age} years old</p>
              <Link to={`/dogs/${d.name}`} className="btn btn-info">
                More Info
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default DogList;
