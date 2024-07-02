import { useState, useEffect } from "react";
import "./App.css";
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  const {data: items, httpConfig, loading, error} = useFetch(url);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  //useEffect(() => {
  //  async function fetchData() {
  //    const response = await fetch(url);
  //    const data = await response.json();
  //    setProducts(data);
  //  }
//
  //  fetchData();
  //}, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const product = {
      name,
      price,
    };
  //  const response = await fetch(url, {
  //    method: "POST",
  //    headers: {
  //      "Content-Type": "application/json",
  //    },
  //    body: JSON.stringify(product),
  //  });
//
  //  const addedProduct = await response.json();
//
  //  setProducts((prevProducts) => [...prevProducts, addedProduct]);

    httpConfig(product, "POST")

    setName("");
    setPrice("");
  }

  const handleRemove = (id) => {
    httpConfig(id, "DELETE")
  }

  return (
    <>
      <div className="App">
        <h1>Lista de Produtos</h1>
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        {!loading && (
          <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              <p>
                <strong>Nome:</strong> {product.name}
              </p>
              <p>
                <strong>Preço:</strong> R$ {product.price}
              </p>

              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
        </ul>
        )}
        

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

            {loading && <input type="submit" disabled value="Aguarde" />}
            {!loading && <input type="submit" value="Criar" />}
            
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
