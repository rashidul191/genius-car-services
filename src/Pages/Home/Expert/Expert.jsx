import React from "react";
import { Link } from "react-router-dom";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="col">
      <div className="card">
        <img src={require(`../../../images/experts/${img}`)} alt="" />
        <div className="card-body">
          <h4>{name}</h4>
          <Link className="btn btn-primary" to="/"> Go Somewhere </Link>
        </div>
      </div>
    </div>
  );
};

export default Expert;
