// import React, { useEffect, useState } from "react";
import useServices from "../../../hook/useServices";
import Service from "../Service/Service";

const Services = () => {
  const [services] = useServices();

  /*
   const [services, setServices] = useState([]);
  useEffect(() => {
    // fetch("services.json")
    fetch("https://tranquil-cliffs-63024.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
   */

  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-4 text-info">Our Services</h2>
      <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 g-3">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
