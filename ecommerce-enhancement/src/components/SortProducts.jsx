function SortProducts({ sortOrder, setSortOrder }) {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        style={{
          padding: "10px",
          width: "220px",
          borderRadius: "5px",
        }}
      >
        <option value="default">Sort by Price</option>
        <option value="lowToHigh">Price: Low to High</option>
        <option value="highToLow">Price: High to Low</option>
      </select>
    </div>
  );
}

export default SortProducts;
