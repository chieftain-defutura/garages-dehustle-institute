import React from "react";
import Logo from "../../assets/logo/logo.svg";
import Button from "../Button";
import "../Header/Header.scss";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="mx pad">
        <div className="header">
          <div>
            <img src={Logo} alt="" />
          </div>
          <Button children={"Download Browture"} variant={"primary"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
