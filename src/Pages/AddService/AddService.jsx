import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddService = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const url = `https://tranquil-cliffs-63024.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result) {
          toast("service is added");
        }
      });
  };

  return (
    <div className="w-50 mx-auto my-5">
      <h2 className="text-center text-info">Add services</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-3"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 25 })}
        />

        <input
          className="mb-3"
          type="text"
          placeholder="Photo URL"
          {...register("img")}
        />

        <textarea
          className="mb-3"
          placeholder="Description"
          {...register("description")}
        />
        <input
          className="mb-3"
          placeholder="Price"
          type="number"
          {...register("price")}
        />

        <input
          className="btn btn-success w-25"
          type="submit"
          value="Add Service"
        />
      </form>
    </div>
  );
};

export default AddService;
