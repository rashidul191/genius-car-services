import React from "react";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "Will Smith", img: "expert-1.jpg" },
  { id: 2, name: "Chris Rock", img: "expert-2.jpg" },
  { id: 3, name: "Dwayne Rock", img: "expert-3.jpg" },
  { id: 4, name: "Messy Vai", img: "expert-4.jpg" },
  { id: 5, name: "Ronaldo Bor", img: "expert-5.jpg" },
  { id: 6, name: "Stachy Jhonson", img: "expert-6.png" }
];

const Experts = () => {
  
  return (
    <div className="container mt-5">
      <h2 className="text-center text-info mb-4">Our Expert Team Members</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {
              experts.map((expert) => <Expert
               key ={expert.id}
                expert={expert}
                ></Expert>)
          }
      </div>
    </div>
  );
};

export default Experts;
