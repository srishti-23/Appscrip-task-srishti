"use client";
import React, { useState } from "react";
import "./header.css";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";
import { SlHandbag } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and close icons

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="nav">
        <div className="nav-text">
          <span>Lorem ipsum, dolor</span>
          <span>Lorem ipsum, dolor</span>
          <span>Lorem ipsum, dolor</span>
        </div>
      </div>

      <div className="logo">
        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </div>
        <Image
          className="logo-img"
          src="/assets/Logo.png"
          alt="Logo"
          width={40}
          height={40}
          priority
        />
        <h4 className="logo-text">LOGO</h4>

        <div className="logo-icons">
          <IoSearchOutline size={25} />
          <IoIosHeartEmpty size={25} />
          <SlHandbag size={25} />
          <CiUser size={25} className="user-icon" /> {/* User icon */}
          <div className="dropdown">
            {" "}
            {/* Dropdown container */}
            <h4>Eng</h4>
            <RiArrowDropDownLine size={25} color="grey" />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <ul className={`list ${isMenuOpen ? "list-open" : ""}`}>
        <li className="list-text">SHOP</li>
        <li className="list-text">SKILLS</li>
        <li className="list-text">STORIES</li>
        <li className="list-text">ABOUT</li>
        <li className="list-text">CONTACT US</li>
      </ul>
    </header>
  );
};

export default Header;
