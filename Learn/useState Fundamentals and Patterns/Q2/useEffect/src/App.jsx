import "./App.css";
import Product from "./Components/Product";
import { useState } from "react";

function App() {
  const [cat, setCat] = useState("");
  return (
    <>
      <select name="" id="" onChange={(e) => setCat(e.target.value)}>
        <option value="">--</option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <Product cat={cat}/>
    </>
  );
}

export default App;
