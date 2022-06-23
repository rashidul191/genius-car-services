import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="App bg-info py-5 text-white mt-4">
      <h6>
        {" "}
        <small>
          copyright &copy; {year}
          <span className="text-dark"> Rashidul</span>
        </small>
      </h6>
    </footer>
  );
};

export default Footer;
