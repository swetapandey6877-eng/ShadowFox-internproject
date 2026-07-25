import { useState } from "react";

function Checkout() {
  const [orderPlaced, setOrderPlaced] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setOrderPlaced(true);
  }

  if (orderPlaced) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h2>🎉 Order Placed Successfully!</h2>
        <p>Thank you for shopping with ShopEase.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>Checkout</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "400px",
        }}
      >
        <input type="text" placeholder="Full Name" required />

        <input type="tel" placeholder="Phone Number" required />

        <textarea
          placeholder="Address"
          rows="4"
          required
        ></textarea>

        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#0d6efd",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
