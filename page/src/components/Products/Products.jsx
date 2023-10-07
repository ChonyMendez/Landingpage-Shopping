import { useContext, useState, useEffect } from "react";
import { DataContext } from "../Context/DataContext";
import axios from "axios";

import "./Products.css";

const Products = () => {
  const [data, setData] = useState([]);
  const { buyProducts } = useContext(DataContext);

  useEffect(() => {
    axios("data.json").then((res) => setData(res.data));
  }, []);

    return (
        <div className="product-card-container">
            {data.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.img} alt={`img.${product.name}.card`} />
                    <h3>{product.name}</h3>
                    <h4>${product.price}</h4>
                    <button onClick={() => buyProducts(product)}>Agrega al 🛒</button>
                </div>
            ))}
        </div>
    );
};

export default Products;
