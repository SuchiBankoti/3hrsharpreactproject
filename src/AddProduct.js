import React, { useContext } from "react";
import { myContext } from "./Context";

export default function AddProduct() {
  const { formdata, addProduct, handleFormdata } = useContext(myContext);
  return (
    <div>
      <form>
        <label>
          Shoe
          <input
            name="name"
            type="text"
            value={formdata.name}
            onChange={handleFormdata}
          />
        </label>
        <label>
          About
          <input
            name="description"
            type="text"
            value={formdata.description}
            onChange={handleFormdata}
          />
        </label>
        <label>
          Price
          <input
            name="price"
            type="number"
            value={formdata.price}
            onChange={handleFormdata}
          />
        </label>
        <label>
          L
          <input
            name="large"
            type="number"
            value={formdata.large}
            onChange={handleFormdata}
          />
        </label>
        <label>
          M
          <input
            name="medium"
            type="number"
            value={formdata.medium}
            onChange={handleFormdata}
          />
        </label>
        <label>
          S
          <input
            name="small"
            type="number"
            value={formdata.small}
            onChange={handleFormdata}
          />
        </label>
      </form>
      <button onClick={addProduct}>Add Shoe</button>
    </div>
  );
}
