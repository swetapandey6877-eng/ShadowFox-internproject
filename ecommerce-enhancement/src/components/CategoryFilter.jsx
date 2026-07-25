function CategoryFilter({ category, setCategory }) {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: "10px",
          width: "200px",
          borderRadius: "5px",
        }}
      >
        <option value="All">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Fashion">Fashion</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
