import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const NAV_ITEMS = [
    {
      title: "JEWELRY & WATCHES",
      link: "/jewelry&watches",
      id: 1,
    },

    {
      title: "NEWS",
      link: "/news",
      id: 3,
    },
    {
      title: "STORES",
      link: "/stores",
      id: 4,
    },
  ];
  const location = useLocation();
  return (
    <div className="navbar" style={{ textDecoration: "none" }}>
      {NAV_ITEMS.map((item) => (
        <Link
          style={{ textDecoration: "none" }}
          className={
            location.pathname === item.link
              ? "navbar-item-active"
              : "navbar-item"
          }
          key={item.id}
          to={item.link}
        >
          {item.title}
        </Link>
      ))}
      <Link
        style={{ textDecoration: "none" }}
        to="/admin"
        className={
          location.pathname === "/admin" ? "navbar-item-active" : "navbar-item"
        }
      >
        ADMIN
      </Link>
    </div>
  );
};

export default Navbar;
