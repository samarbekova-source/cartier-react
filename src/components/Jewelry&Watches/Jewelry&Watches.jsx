import React from "react";
import { Card } from "antd";
import { myCollection } from "./ProductsDb";
import { Carousel } from "antd";

const { Meta } = Card;

const contentStyle = {
  height: "540px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const JewelryAndWatches = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100%",
        margin: "40px auto",
      }}
    >
      {myCollection.map((item) => (
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
                <h4>{item.brand}</h4>
              </>
            }
            description={
              <>
                <h3>{item.model}</h3>
              </>
            }
          />
        </Card>
      ))}
    </div>
  );
};

export default JewelryAndWatches;
