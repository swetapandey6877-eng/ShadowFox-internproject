function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 5px 12px rgba(0,0,0,0.1)",
        padding: "15px",
        position: "relative",
        transition: "0.3s",
      }}
    >
      {/* Wishlist */}
      <span
        style={{
          position: "absolute",
          top: "12px",
          right: "12px",
          fontSize: "22px",
          cursor: "pointer",
        }}
      >
        🤍
      </span>

      {/* Discount */}
      <span
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          background: "red",
          color: "white",
          padding: "4px 8px",
          borderRadius: "5px",
          fontSize: "12px",
        }}
      >
        20% OFF
      </span>

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <h3>{product.name}</h3>

      <h2 style={{ color: "#0d6efd" }}>
        ₹{product.price}
      </h2>

      <p>{product.category}</p>

      <p style={{ color: "orange" }}>
        ⭐⭐⭐⭐☆
      </p>

      <button
        onClick={() => addToCart(product)}
        style={{
          width: "100%",
          padding: "10px",
          background: "#0d6efd",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        🛒 Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
