import React, { useContext } from "react";
import { myContext } from "./Context";

export default function Cart() {
  const { cartitems } = useContext(myContext);
  function bundleItemsWithCounts(arr) {
    const counts = {};

    for (let item of arr) {
      counts[item] = (counts[item] || 0) + 1;
    }

    const bundledItems = [];
    for (let item in counts) {
      bundledItems.push([item, counts[item]]);
    }

    return bundledItems;
  }
  const newarr = cartitems.map((obj) => `${obj.name}-${obj.size}-${obj.price}`);
  const result = bundleItemsWithCounts(newarr);

  return (
    <div className="cartItems">
      <ul>
        {result.map((arr, i) => {
          return (
            <li key={i}>
              {arr[0]}-X-{arr[1]}
            </li>
          );
        })}
      </ul>
      <div className="carttotal">
        Total Amount-
        {cartitems.reduce((sum, obj) => (sum += Number(obj.price)), 0)}
      </div>
    </div>
  );
}
