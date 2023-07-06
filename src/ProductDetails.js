import React, { useContext } from "react";
import { myContext } from "./Context";

export default function ProductDetails(props) {
  const { buyProduct } = useContext(myContext);
  const { id, name, description, price, large, small, medium } = props.data;
  return (
    <div className="item">
      <div>{name}</div>
      <div>{description}</div>
      <div>{price}</div>
      <div>
        <button onClick={() => buyProduct(id, "large", large)}>
          Buy Large
        </button>
        <span className="quantity">{large}</span>
      </div>
      <div>
        <button onClick={() => buyProduct(id, "medium", medium)}>
          Buy Medium
        </button>
        <span className="quantity">{medium}</span>
      </div>
      <div>
        <button onClick={() => buyProduct(id, "small", small)}>
          Buy Small
        </button>
        <span className="quantity">{small}</span>
      </div>
    </div>
  );
}
