import React, { useState } from "react";
import Spinner from "./Spinner";
import useFetch from "./services/useFetch";
import { useParams } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import { Link } from "react-router-dom";

export default function Products() {
  const [color, setColor] = useState("");
  const { category } = useParams();

  const { data: products, loading, error } = useFetch(
    "products?category=" + category
  );

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <Link to={`/${category}/${p.id}`}>
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <h2>${p.price}</h2>
        </Link>
      </div>
    );
  }

  const filteredProducts = color
    ? products.filter((p) => p.skus.find((s) => s.color === String(color)))
    : products;

  if (error) throw error;
  if (loading) return <Spinner />;
  if (products.length === 0) return <PageNotFound />;

  return (
    <>
      <section id="filters">
        <label htmlFor="color">Filter by colors:</label>{" "}
        <select
          id="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value="">All colors</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Green">Green</option>
        </select>
        {color && <h2>Found {filteredProducts.length} items</h2>}
      </section>
      <section id="products">{filteredProducts.map(renderProduct)}</section>
    </>
  );
}
