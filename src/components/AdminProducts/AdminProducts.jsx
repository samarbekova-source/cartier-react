import { Avatar, List } from "antd";
import React, { useContext, useEffect } from "react";
import { jewelryContext } from "../../contexts/jewelryContext";
import VirtualList from "rc-virtual-list";
import { Link } from "react-router-dom";

const AdminProducts = () => {
  const { jewelry, getJewelry, deleteJewelry } = useContext(jewelryContext);
  useEffect(() => {
    getJewelry();
  }, []);
  console.log(jewelry);
  return (
    <List>
      <VirtualList data={jewelry} itemHeight={47} itemKey="email">
        {(item) => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Avatar src={item.image1} />}
              title={
                <a href="#">
                  {item.model},{item.decription}
                </a>
              }
            />
            <a onClick={() => deleteJewelry(item.id)}>Delete</a>
            <Link to={`/edit/${item.id}`} style={{ margin: "auto 20px" }}>
              Edit
            </Link>
            <Link to={`/products/${item.id}`}>Details</Link>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};

export default AdminProducts;
