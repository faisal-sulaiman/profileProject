import React, { useRef, useState } from "react";
import "./Newbar.css";
import logo from "./../../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faArrowRight,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Newbar = () => {
  const [menu, setMenu] = useState("Home");
  const menuRef = useRef();
  const opnMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="newbar">
      <img className="img" src={logo} alt="logo "></img>
      <FontAwesomeIcon
        onClick={opnMenu}
        className="nev-mob-open"
        icon={faBars}
      />
      <FontAwesomeIcon
        onClick={closeMenu}
        className="nev-mob-close"
        icon={faXmark}
      />
      <ul ref={menuRef} className="nav-manu">
        <li>
          <AnchorLink className="anchor-link" href="#Home">
            <p onClick={() => setMenu("Home")}>Home</p>
          </AnchorLink>
          {menu === "Home" ? <FontAwesomeIcon icon={faArrowRight} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#About_me">
            <p onClick={() => setMenu("About me")}>About</p>
          </AnchorLink>
          {menu === "About me" ? (
            <FontAwesomeIcon icon={faArrowRight} />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Services">
            <p onClick={() => setMenu("Services")}>Services</p>
          </AnchorLink>
          {menu === "Services" ? (
            <FontAwesomeIcon icon={faArrowRight} />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Mywork">
            <p onClick={() => setMenu("Portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "Portfolio" ? (
            <FontAwesomeIcon icon={faArrowRight} />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Contact">
            <p onClick={() => setMenu("Contact")}>Contact</p>
          </AnchorLink>
          {menu === "Contact" ? <FontAwesomeIcon icon={faArrowRight} /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#Contact">
          Connect with me{" "}
        </AnchorLink>
      </div>
    </div>
  );
};

export default Newbar;
