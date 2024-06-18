import { useState, useEffect } from "react";
import "./App.css";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);
    }

    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const addedProduct = await response.json();

    setProducts((prevProducts) => [...prevProducts, addedProduct]);

    setName("");
    setPrice("");
  };

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <p>
                <strong>Nome:</strong> {product.name}
              </p>
              <p>
                <strong>Preço:</strong> R$ {product.price}
              </p>
              <p>
                <strong>Descrição:</strong> {product.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="addProduct">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label>
              Preço:
              <input
                type="number"
                value={price}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>

            <input type="submit" value="Criar" />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
