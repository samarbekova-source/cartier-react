import React, { useContext, useEffect } from "react";
import "./Header.css";

import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import {
  HeartOutlined,
  LogoutOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { cartContext } from "../../contexts/cartContext";
import { Badge, Button } from "antd";
import { authContext } from "../../contexts/authContext";
import { favoritesContext } from "../../contexts/favoritesContext";

const Header = () => {
  const { getCart, cartLength } = useContext(cartContext);
  const { currentUser, handleLogOut } = useContext(authContext);
  const { favoriteLength } = useContext(favoritesContext);
  const navigate = useNavigate();
  useEffect(() => {
    getCart();
  }, []);
  return (
    <>
      <div className="container"></div>
      <div className="header">
        <div className="a-tags">
          <a
            style={{ textDecoration: "none", color: "grey" }}
            href="#contact-us"
          >
            CONTACT US
          </a>

          <a
            style={{ textDecoration: "none", color: "grey" }}
            href="https://www.cartier.com/en-us/services.html"
          >
            SERVICES
          </a>
        </div>

        <div className="logo-image">
          <Link to="/">
            <img
              width="180px"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Cartier_logo.svg/1024px-Cartier_logo.svg.png"
              alt="cartier logo"
            />
          </Link>
        </div>
        <div
          className="icons"
          style={{
            width: "200px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <Link to="favorites">
            <Badge count={+favoriteLength}>
              <HeartOutlined
                style={{ fontSize: "25px", color: "grey", paddingLeft: "15px" }}
              />
            </Badge>
          </Link>

          <Link to="/cart">
            <Badge count={+cartLength}>
              <ShoppingOutlined
                style={{
                  fontSize: "25px",
                  color: "grey",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              />
            </Badge>
          </Link>
          {currentUser ? (
            <span style={{ display: "flex", flexDirection: "column-reverse" }}>
              <h4
                style={{ fontWeight: "bold", marginTop: "10px", color: "grey" }}
              >
                {" "}
                {currentUser}
              </h4>
              <LogoutOutlined
                onClick={handleLogOut}
                style={{ fontSize: "25px", color: "grey", marginTop: "-27px" }}
              />
            </span>
          ) : (
            <UserOutlined
              onClick={() => navigate("/auth")}
              style={{ fontSize: "25px", color: "grey" }}
            />
          )}
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
