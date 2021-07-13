import React from "react";

import './header.css'

const Header = (props) => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-sm-12 heading-container">
          <h1 className="heading-title">{props.pageTitle}</h1>
          <div className="underline"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;