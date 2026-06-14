const books = [
  {
    id: 1,
    title: "Abhishikth Geeton Ki Mala, Hindi Book,",
    category: "Book",
    originalPrice: "₹250.00",
    salePrice: "₹199.00",
    rating: 3,
    image: "/img/store2.svg",
  },
  {
    id: 2,
    title: "Sanatan Parameswar Kaun Hai Hindi Religious",
    category: "Book",
    originalPrice: "₹250.00",
    salePrice: "₹199.00",
    rating: 4,
    image: "/img/store-1.svg",
  },
];

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} style={{ color: "#EFBF04", fontSize: "20px" }}>
          {star <= rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default function StorePage() {
  return (
    <section className="page-ministries p-8">
     

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "2rem",
        maxWidth: "900px",
        margin: "2rem auto",
        padding: "0 1rem",
      }}>
        {books.map((book) => (
          <div key={book.id} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <img
              src={book.image}
              alt={book.title}
              style={{ width: "100%", maxHeight: "340px", objectFit: "contain", marginBottom: "1rem" }}
            />
            <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#1b2d50", marginBottom: "4px" }}>
              {book.title}
            </h3>
            <p style={{ fontSize: "14px", color: "#555", marginBottom: "6px" }}>{book.category}</p>
            <p style={{ fontSize: "14px", marginBottom: "8px" }}>
              <span style={{ textDecoration: "line-through", color: "#999", marginRight: "6px" }}>
                {book.originalPrice}
              </span>
              <span style={{ color: "#1b2d50", fontWeight: "600" }}>{book.salePrice}</span>
            </p>
            <StarRating rating={book.rating} />
            <button style={{
              marginTop: "1rem",
              background: "#EFBF04",
              color: "#0B0C1C",
              border: "none",
              borderRadius: "6px",
              width: "138px",
              height: "44px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer",
              marginBottom: "8rem",
            }}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}