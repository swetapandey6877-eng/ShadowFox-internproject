function Hero() {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0d6efd, #6610f2)",
        color: "white",
        textAlign: "center",
        padding: "60px 20px",
        borderRadius: "15px",
        margin: "20px",
      }}
    >
      <h1 style={{ fontSize: "40px", marginBottom: "15px" }}>
        Welcome to ShopEase 🛍️
      </h1>

      <p style={{ fontSize: "18px", marginBottom: "20px" }}>
        Find the best products at the best prices.
      </p>

      <button
        style={{
          background: "white",
          color: "#0d6efd",
          border: "none",
          padding: "12px 25px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        Shop Now
      </button>
    </div>
  );
}

export default Hero;
