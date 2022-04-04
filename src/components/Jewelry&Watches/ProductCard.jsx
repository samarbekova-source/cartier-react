import React, { useContext, useState } from "react";
import { Button, Card, Carousel } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { cartContext } from "../../contexts/cartContext";

const { Meta } = Card;

const contentStyle = {
  height: "540px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const ProductCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
  return (
    // new one
    <Card
      hoverable
      style={{ width: "400px", margin: "5px ", border: "none" }}
      cover={
        <Carousel autoplay>
          <div>
            <img
              style={contentStyle}
              height="100%"
              alt="example"
              src={item.image1}
            />
          </div>
          <div>
            <img style={contentStyle} src={item.image2} />
          </div>
          <div>
            <img style={contentStyle} src={item.image1} />
          </div>
          <div>
            <img style={contentStyle} src={item.image2} />
          </div>
          <div>
            <img style={contentStyle} src={item.image1} />
          </div>
        </Carousel>
      }
    >
      <Meta
        style={{ textAlign: "center", color: "rgb(221, 212, 212);" }}
        title={
          <>
            <h4>{item.model}</h4>
          </>
        }
        description={
          <>
            <h3>{"$" + item.price}</h3>
          </>
        }
      />

      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <HeartOutlined style={{ margin: "10px", fontSize: "25px" }} />
        <ShoppingOutlined
          onClick={() => {
            addProductToCart(item);
            setCheckItem(checkItemInCart(item.id));
          }}
          style={{
            margin: "10px",
            fontSize: "25px",
            color: checkItem ? "red" : "black",
          }}
        />
        {/* <Button style={{ margin: "10px", width: "150px" }}>Add to cart</Button> */}
        <Link key="ellipsis" to={`/products/${item.id}`}>
          <EllipsisOutlined style={{ fontSize: "25px", color: "black" }} />{" "}
        </Link>
        
      </div>
    </Card>
  );
};

export default ProductCard;
