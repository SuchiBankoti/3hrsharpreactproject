import React, { useContext } from "react";
import { myContext } from "./Context";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";

export default function Products() {
  const { products } = useContext(myContext);

  return (
    <div>
      <h1>Products</h1>
      <ul className="productsdisplay">
        {products.map((obj, i) => (
          <li key={i}>
            <ProductDetails data={obj} />
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <Cart />
    </div>
  );
}
