import React, { useContext } from "react";
import "./Header.css";

import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import {
  HeartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { cartContext } from "../../contexts/cartContext";
import { Badge } from "antd";

const Header = () => {
  const { cartLength } = useContext(cartContext);
  return (
    <>
      <div className="header">
        <div className="a-tags">
          <a style={{ textDecoration: "none", color: "grey" }} href="#">
            CONTACT US
          </a>

          <a style={{ textDecoration: "none", color: "grey" }} href="#">
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
        <div className="icons">
          <HeartOutlined style={{ fontSize: "25px", color: "grey" }} />
          <UserOutlined style={{ fontSize: "25px", color: "grey" }} />
          <Link to="/cart">
            <Badge count={+cartLength}>
              <ShoppingOutlined style={{ fontSize: "25px", color: "grey" }} />
            </Badge>
          </Link>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
