import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="App bg-info py-5 text-white mt-4">
      <h6>
        {" "}
        <small>copyright &copy; {year} <a target="_blank" href="https://github.com/rashidul191">Rashidul </a> </small>
      </h6>
    </footer>
  );
};

export default Footer;
