import { Button, InputNumber, List } from "antd";
import React, { useContext, useEffect } from "react";
import { cartContext } from "../../contexts/cartContext";

const Cart = () => {
  const { getCart, cart, deleteFromCart, changeProductCount } =
    useContext(cartContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="container">
      <List
        itemLayout="horizontal"
        dataSource={cart.jewelry}
        footer={<h2>Total: {cart.totalPrice}$</h2>}
        renderItem={(item) => (
          <List.Item
            extra={<img src={item.item.image1} alt="img" width={272} />}
          >
            <List.Item.Meta
              title={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h4>{item.item.model}</h4>
                  </div>
                  <h3>{"$" + item.item.price}</h3>
                </div>
              }
              description={
                <>
                  <div>{item.item.description}</div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "40%",
                      marginTop: "20px",
                    }}
                  >
                    <div>
                      <h4>Quantity</h4>
                      <Button
                        onClick={() =>
                          changeProductCount(item.count - 1, item.item.id)
                        }
                      >
                        -
                      </Button>
                      <InputNumber disabled value={item.count} />
                      <Button
                        onClick={() =>
                          changeProductCount(item.count + 1, item.item.id)
                        }
                      >
                        +
                      </Button>
                    </div>

                    <div>
                      <h4>SubPrice</h4>
                      <h3>{"$" + item.subPrice}</h3>
                    </div>
                  </div>
                  <Button onClick={() => deleteFromCart(item.item.id)}>
                    Delete from cart
                  </Button>
                </>
              }
            />
          </List.Item>
        )}
      />
      ,
    </div>
  );
};
export default Cart;
