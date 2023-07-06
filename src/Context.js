import { nanoid } from "@ant-design/pro-components";
import React, { createContext, useState } from "react";

const myContext = createContext();

function AllDataContext(props) {
  const [formdata, setFormdata] = useState({
    name: "",
    description: "",
    price: "",
    large: "",
    medium: "",
    small: "",
  });
  function handleFormdata(event) {
    setFormdata((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }
  const [products, setProducts] = useState([]);
  function addProduct() {
    setProducts((prev) => [...prev, { ...formdata, id: nanoid() }]);
  }
  function buyProduct(id, str, value) {
    setProducts((prev) =>
      prev.map((obj) => {
        if (obj.id === id) {
          return { ...obj, [str]: obj[str] > 0 ? obj[str] - 1 : obj[str] };
        } else {
          return obj;
        }
      })
    );
    addToCart(id, str, value);
  }
  const [cartitems, setCartitems] = useState([]);
  function addToCart(id, str, value) {
    if (value > 0) {
      const currentItem = products.find((obj) => obj.id === id);
      console.log(currentItem);
      const temp = {
        id: currentItem.id,
        name: currentItem.name,
        price: currentItem.price,
        size: str,
      };
      setCartitems((prev) => [...prev, temp]);
    }
  }
  return (
    <myContext.Provider
      value={{
        formdata,
        products,
        addProduct,
        handleFormdata,
        buyProduct,
        cartitems,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
}
export { myContext, AllDataContext };
