/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from '../assets/tiddertt.png'
import userlogo from '../assets/user.svg'
import { CSSTransition } from "react-transition-group";
import SearchBar from "./SearchBar";

export default function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <a href="../"><img src={logo} className="Logo" alt="logo" /></a>
       <nav className="Nav">
          <img src={userlogo} className="userLogo" alt="logo" />   
          <a href="/register"> <button>Sign up</button> </a>
          <a href="/login"> <button>Log in</button> </a>
        </nav>
       </header>
  );
}
 