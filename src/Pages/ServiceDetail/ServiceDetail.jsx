import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetails from "../../hook/useServiceDetails";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);

  return (
    <div className="container">
      <h2>You are about to book: {service?.name}</h2>
      <div className="text-center">
        <Link to={`/checkout/${serviceId}`}>
          <button className="btn btn-primary my-5">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
