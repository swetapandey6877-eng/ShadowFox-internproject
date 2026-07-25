import { useState } from "react";
import Hero from "../components/Hero";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortProducts from "../components/SortProducts";
import "../styles/Home.css";

function Home({ addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  if (sortOrder === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortOrder === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <Hero />

      <div className="home">
        <h1>Our Products</h1>

        <SearchBar search={search} setSearch={setSearch} />

        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />

        <SortProducts
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
