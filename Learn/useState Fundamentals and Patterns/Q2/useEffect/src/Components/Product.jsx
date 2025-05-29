import React, { useEffect, useState } from "react";

const Product = ({ cat }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Fetch Product", cat);
      setProduct(["clothing", "household"]);
    }, 1000);
    return () => clearInterval(interval);
  }, [cat]);

  return (
    <>
      <div>Product</div>
      {product.map((i) => (
        <p key={i}>{i}</p>
      ))}
    </>
  );
};

export default Product;
