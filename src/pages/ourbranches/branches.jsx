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

export default function OurBranches() {
  return (
    <section className="page-ministries p-8">
     
       <div className="ministries-image my-8">
        <img
          src="/img/branches.svg"
          alt="Ministries"
          className="w-full h-auto"
        />
      </div>
       <section className="banner-section">
        <div className="banner-content">
          <div className="banner-rule" />
          <p className="banner-text">Head Branch Punjab Khambra </p>
          <div className="banner-rule" />
        </div>
      </section>

       <div className="ministries-image my-8">
        <img
          src="/img/map.png"
          alt="Ministries"
          className="w-full h-auto radius-xl"
        />
      </div>

      <section className="banner-section">
        <div className="banner-content">
          <div className="banner-rule" />
          <p className="banner-text">ANM NATIONAL BRANCHES</p>
          <div className="banner-rule" />
        </div>
      </section>



    </section>
  );
}