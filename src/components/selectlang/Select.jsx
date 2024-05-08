import React from "react";

import Close from "../../assets/icons/close.svg";
import "./select.css";

const Select = ({ trigger, setTrigger, toggleLanguage }) => {
  return trigger ? (
    <>
      <div className="lang_close">
        <div className="select_lang">
          <img src={Close} alt="cancel" onClick={() => setTrigger(false)} />
          <h2>
            Select your language for a<br /> more user-friendly browsing
            <br /> journey
          </h2>
          <div className="langs">
            <button onClick={() => toggleLanguage("ta")}>தமிழ்</button>
            <button onClick={() => toggleLanguage("en")}>English</button>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default Select;
