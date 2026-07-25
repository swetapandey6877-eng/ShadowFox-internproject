function Navbar({ cart }) {
  return (
    <nav
      style={{
        background: "#0d6efd",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >
      <h2>🛍 ShopEase</h2>

      <div style={{ display: "flex", gap: "25px" }}>
        <span>Home</span>
        <span>Products</span>
        <span>🛒 Cart ({cart.length})</span>
      </div>
    </nav>
  );
}

export default Navbar;
