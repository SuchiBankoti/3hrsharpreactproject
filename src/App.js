import "./App.css";
import AddProduct from "./AddProduct";
import Products from "./Products";
import { useContext } from "react";
import { myContext } from "./Context";

function App() {
  const { cartitems } = useContext(myContext);
  return (
    <div className="App">
      <div className="cartlogo">
        <div>Cart-{cartitems.length}</div>
      </div>
      <div className="productForm">
        <AddProduct />
      </div>
      <div className="productsTable">
        <Products />
      </div>
    </div>
  );
}

export default App;
