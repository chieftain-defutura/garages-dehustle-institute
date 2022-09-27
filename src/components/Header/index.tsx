import React from "react";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import Button from "../Button";
import "../Header/Header.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <div className="mx pad">
        <div className="header">
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <Button children="Download Brochure" variant={"primary"} />
        </div>
      </div>
    </div>
  );
};

export default Header;
