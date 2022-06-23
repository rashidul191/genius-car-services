import React from "react";
import useServices from "../../hook/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      //   console.log(id);
      const url = `http://localhost:5000/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
          console.log(data);
        });
    }
  };
  return (
    <div>
      <h2>Manage your services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h5>
            {service.name}{" "}
            <button onClick={() => handleDelete(service._id)}>X</button>{" "}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
