function Cart({ cart, removeFromCart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "10px 0",
                padding: "10px",
                border: "1px solid #ddd",
              }}
            >
              <span>{item.name}</span>

              <span>₹{item.price}</span>

              <button
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
