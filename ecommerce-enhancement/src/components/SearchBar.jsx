function SearchBar({ search, setSearch }) {
  return (
    <div style={{ textAlign: "center", margin: "20px 0" }}>
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      />
    </div>
  );
}

export default SearchBar;
