import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Test from "./component/Test";
import Product from "./component/Product";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-[#14110E]">
      <Header />
      <Test />
      <Product title="product" />
    </div>
  );
}

export default App;
