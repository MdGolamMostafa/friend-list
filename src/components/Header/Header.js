import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className='header'>
        <h1>Friends collection </h1>
      <nav>
        <a href="/childFriends">Child Friends</a>
        <a href="/currentFriends">Current Friends</a>
  <h1>friends:{}</h1>
        
      </nav>
    </div>
  );
};

export default Header;
