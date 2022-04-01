import React, { useContext, useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
import { jewelryContext } from "../../contexts/jewelryContext";

const ProductsList = () => {
  const { getJewelry, jewelry } = useContext(jewelryContext);
  // const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getJewelry();
  }, []);

  useEffect(() => {
    getJewelry();
  }, []);
  return (
    <div>
      <p>list chika</p>
    </div>
  );
};

export default ProductsList;
