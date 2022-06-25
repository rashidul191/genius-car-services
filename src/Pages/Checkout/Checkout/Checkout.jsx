import axios from "axios";
import React from "react";
// import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import useServiceDetails from "../../../hook/useServiceDetails";
import Loading from "../../Shared/Loading/Loading";

const Checkout = () => {
  const [user, loading] = useAuthState(auth);
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);

  /* 
  const [user, setUser] = useState({
    name: "Akbar Teh Great",
    email: "akbar@gmail.com",
    address: "Tajmohol Road Md.put",
    zipCode: "1216",
    phone: "01712345678",
  });
  
  const handleAddressChange = (event)=>{
    const {address, ...rest} = user;
    const newAddress = event.target.value;
    const newUser = {newAddress, ...rest};
    setUser(newUser)

  }
   */

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      name: user.displayName,
      email: user.email,
      serviceName: service.name,
      serviceId: serviceId,
      address: event.target.address.value,
      zipCode: event.target.zipCode.value,
    };

    axios.post("https://tranquil-cliffs-63024.herokuapp.com/order", order).then((res) => {
      const { data } = res;
      console.log(data);
      if (data.insertedId) {
        toast("Your Order is booked !!!");
        event.target.reset();
      }
    });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container text-center my-3 w-50 mx-auto">
      <h2 className="text-info">Please Order</h2>
      <h4>Product Name: {service?.name}</h4>
      <p>Product Id: {serviceId}</p>

      <form
        onSubmit={handlePlaceOrder}
        className="border border-2 border-info p-5"
      >
        <input
          className="w-100 mb-2"
          type="text"
          value={user?.displayName}
          name="name"
          placeholder="name"
          readOnly
          disabled
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          value={user?.email}
          name="email"
          placeholder="email"
          readOnly
          disabled
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          value={service?.name}
          name="server"
          readOnly
          placeholder="service"
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          autoCapitalize="off"
          placeholder="address"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="number"
          value={user?.zipCode}
          name="zipCode"
          placeholder="zip code"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="number"
          value={user?.phone}
          name="phone"
          placeholder="phone"
          required
        />
        <br />
        <input
          className="btn btn-primary w-50"
          type="submit"
          value="Place Order"
        />
      </form>
    </div>
  );
};

export default Checkout;
