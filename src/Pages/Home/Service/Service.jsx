import React from "react";
import { useNavigate } from "react-router-dom";

const Service = (props) => {
  const { name, price, img, description, id } = props.service;

  const navigate = useNavigate()
  const navigateToServiceDetail = (id) =>{
    navigate(`/service/${id}`);
    console.log(id)

  }
  return (
    <div className="col">
      <div className="card">
        <img src={img} alt="" />
       <div className="card-body">
       <h3>{name}</h3>
        <h6 className="m-0">
          Price: $ <span className="text-warning">{price}</span>
        </h6>
        <p>{description}</p>
        <button className="btn btn-success" onClick={()=> navigateToServiceDetail(id)}>Book: {name}</button>
       </div>
      </div>
    </div>
  );
};

export default Service;
