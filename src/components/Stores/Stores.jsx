import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const Stores = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "40px",
        fontWeight: "bolder",
      }}
    >
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SOd6Q5vG5hgC1xvoyFwimf1Twk3qKU9umHjMIQA5UIWad4TIaAJcdk3PQMZ7VDkgB1U&usqp=CAU"
          />
        }
      >
        <Meta title="CARTIER in LONDON" />
      </Card>

      <Card
        hoverable
        // style={{ width: 240 }}
        cover={
          <img
            style={{ height: 260, width: 200, objectFit: "cover" }}
            alt="example"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ334XTx9LVmm1mxBfW6bcTgRlXaHBqq4nNMQ&usqp=CAU"
          />
        }
      >
        <Meta title="CARTIER in PARIS" />
      </Card>

      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzypwZp6DjR1MtifYgKKp5bMyC_lVuSnf6fFnHC3aqA84pYeLtxW81qZuT3VX-3ox2Hm0&usqp=CAU"
          />
        }
      >
        <Meta title="CARTIER in ROME" />
      </Card>

      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQur587o1sQZRwqBteCiNnHz2FRiWwTo_DQmw&usqp=CAU"
          />
        }
      >
        <Meta title="CARTIER in NYC" />
      </Card>

      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9SOd6Q5vG5hgC1xvoyFwimf1Twk3qKU9umHjMIQA5UIWad4TIaAJcdk3PQMZ7VDkgB1U&usqp=CAU"
          />
        }
      >
        <Meta title="CARTIER in BERLIN" />
      </Card>
    </div>
  );
};

export default Stores;
