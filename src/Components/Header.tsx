import "./css/Header.css";
import React from "react";

const Header = () => {
  return (
    <div className="container-H">
      <header className=" header">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
          alt="Netflix Logo"
        />

        <nav className="nav">

          <button className="btn-1">Sign in</button>
       </nav>
      </header>
      <div className="p-wrap">
        <p>Unlimited Movies , TV Shows, and more.</p>
        <p>starts at 2,200. Cancel anytime </p>

      </div>
    </div>
  );
};


export default Header;
