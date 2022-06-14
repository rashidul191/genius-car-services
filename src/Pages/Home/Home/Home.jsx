import React from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
// import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      {/* <Helmet>
                <title>Home - Genius-Car-Services</title>
            </Helmet> */}

      <PageTitle title="Home"></PageTitle>
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </div>
  );
};

export default Home;
