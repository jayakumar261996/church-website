import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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



export default function Prayer() {
  const navigate = useNavigate();
  useEffect(() => {
    const layout = document.querySelector(".app-layout");
    if (layout) {
      layout.style.background =
        "linear-gradient(to bottom, #FFFFE9 0, #FFFFE9 436.671875px, transparent 436.671875px)";
    }
    return () => {
      if (layout) {
        layout.style.background = "";
      }
    };
  }, []);

  return (
    <section className="page-ministries p-8">
      
      <div className="section-heading">
            <div className="gold-divider gold-divider-top">
              <img
  src="/img/cross.svg"
  alt="Gold Divider"
  className="gold-divider-image"
  style={{ width: "62px", height: "62px" }}
/>
              <h1 className="hero-title">PRAYER MOUNTAIN</h1>
              {/* <span className="gold-cross">✝</span> */}
             <img
  src="/img/cross.svg"
  alt="Gold Divider"
  className="gold-divider-image"
  style={{ width: "62px", height: "62px" }}
/>
            </div>

          </div>
         <div className="section-copy-center" style={{marginTop: "-20px", fontSize: "18px", lineHeight: "1.8"}}>
  The Prayer Mountain is a sacred place dedicated to prayer, meditation, and spiritual renewal. It is where believers gather to
 seek God's presence, intercede for their needs, and grow in faith. Here, individuals can experience deep encounters with 
God and leave spiritually rejuvenated.
          </div>

           <div className="section-copy-center-bold">
 A consecrated place to seek God—daily at 8:00 PM we gather in expectation of His presence.
          </div>



       <section className="branches-banner-section">
        <div className="branches-banner-content">
          <div className="branches-line"></div>
          <p className="banner-text">SCENES OF PRAYER MOUNTAIN</p>
           <div className="branches-line"></div>
        </div>
      </section>

      <div className="overflow-hidden" style={{ display: "flex", flexDirection: "column", gap: "40px", padding: "32px 0" }}>
        {[
          ["https://res.cloudinary.com/duyytaxgd/image/upload/v1783389844/prayer-mountain_si9eqw.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389842/prayermountain-2_bqdzqu.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389842/prayermountain-3_nk78bl.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389845/prayermountain-4_wsq41o.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389844/prayermountain-5_qfycgu.png"],
          ["https://res.cloudinary.com/duyytaxgd/image/upload/v1783389844/prayermountain-6_y6djsq.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389845/prayermountain-7_m5jj1g.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389844/prayermountain-6_y6djsq.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389842/prayermountain-3_nk78bl.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389844/prayermountain-5_qfycgu.png"]
        ].map((row, i) => (
          <div
            key={i}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x px-[10%]
                       [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {row.map((src, j) => (
              <img
                key={j}
                src={src}
                alt="Prayer Mountain"
                className="h-56 w-[22%] flex-shrink-0 rounded-md object-cover snap-start"
              />
            ))}
          </div>
        ))}
      </div>

      <section className="branches-banner-section">
        <div className="branches-banner-content">
          <div className="branches-line"></div>
          <p className="banner-text">What is Prayer Mountain?</p>
          <div className="branches-line"></div>
          
        </div>
         <div className="prayer-desc">
   The Prayer Mountain is a sacred place dedicated to prayer, meditation, and spiritual renewal. It is where believers gather to seek God's presence, intercede for their needs, and grow in faith. Here, individuals can experience deep encounters with God and leave spiritually rejuvenated.
          </div>

      </section>

       <section className="branches-banner-section">
        <div className="branches-banner-content">
          <div className="branches-line"></div>
          <p className="banner-text">Purpose & vision</p>
          <div className="branches-line"></div>
          
        </div>
        <div className="prayer-desc">
 PThe purpose of Prayer Mountain is to provide a quiet, holy space where believers can seek God's direction, receive healing, and find peace in the midst of life's challenges. Our vision is to make it a place where individuals and families connect with God on a deeper level, and where the ministry can pray for the needs of the community.
          </div>
        

      </section>

       <section className="branches-banner-section">
        <div className="branches-banner-content">
          <div className="branches-line"></div>
          <p className="banner-text">TESTIMONIES FOR GODS GLORY</p>
          <div className="branches-line"></div>
          
        </div>
      </section>

      <div style={{ display: "flex", justifyContent: "center", gap: "24px", padding: "24px 16px", flexWrap: "wrap" }}>
        <div className="prayer-testimony-card" style={{
          display: "flex",
          width: "100%",
          maxWidth: "520px",
          height: "259px",
          borderRadius: "20px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #0a1628, #1a2d5a)"
        }}>
          <img
            src="/img/test-1.svg"
            alt="Testimony"
            className="prayer-testimony-img"
            style={{ width: "220px", height: "100%", objectFit: "cover" }}
          />
          <div style={{ padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
            <p style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "22px",
              color: "#fff",
              margin: 0
            }}>
              Randeep was completely healed from paralysis after receiving Lay Hand prayer in the 20 April 2025 Easter Meeting by the grace of God.
            </p>
            <button onClick={() => navigate("/testimonials")} style={{
              width: "fit-content",
              padding: "10px 24px",
              borderRadius: "8px",
              border: "none",
              background: "#EFBF04",
              color: "#0a1628",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "13px",
              cursor: "pointer"
            }}>
              READ FULL TESTIMONY
            </button>
          </div>
        </div>

        <div className="prayer-testimony-card" style={{
          display: "flex",
          width: "100%",
          maxWidth: "520px",
          height: "259px",
          borderRadius: "20px",
          overflow: "hidden",
          background: "linear-gradient(135deg, #0a1628, #1a2d5a)"
        }}>
          <img
            src="/img/test-2.svg"
            alt="Testimony"
            className="prayer-testimony-img"
            style={{ width: "220px", height: "100%", objectFit: "cover" }}
          />
          <div style={{ padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", flex: 1 }}>
            <p style={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "22px",
              color: "#fff",
              margin: 0
            }}>
              Randeep was completely healed from paralysis after receiving Lay Hand prayer in the 20 April 2025 Easter Meeting by the grace of God.
            </p>
            <button onClick={() => navigate("/testimonial-2")} style={{
              width: "fit-content",
              padding: "10px 24px",
              borderRadius: "8px",
              border: "none",
              background: "#EFBF04",
              color: "#0a1628",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "13px",
              cursor: "pointer"
            }}>
              READ FULL TESTIMONY
            </button>
          </div>
        </div>
      </div>



       <section className="branches-banner-section">
        <div className="branches-banner-content">
          <div className="branches-line"></div>
          <p className="banner-text">JOIN US IN PRAYERS</p>
          <div className="branches-line"></div>
          
        </div>
      </section>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", padding: "24px 16px", flexWrap: "wrap" }}>
          <div className="prayer-join-card" style={{
            width: "100%",
            maxWidth: "367px",
            height: "185px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            background: "#DBEAFE",
            padding: "20px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "51px",
                height: "51px",
                borderRadius: "50%",
                background: "#122F4A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <span style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "20px", lineHeight: "100%", letterSpacing: "0%", textAlign: "center", color: "#003370", whiteSpace: "nowrap" }}>
                Time - Every Day at 8 PM
              </span>
            </div>
            <p style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: "16px", lineHeight: "24px", letterSpacing: "0%", textAlign: "center", color: "#08091B", margin: 0, whiteSpace: "pre-line" }}>
              {"Join in Person or Connect with The\nMinistry Broadcast Schedule."}
            </p>
          </div>

          <div className="prayer-join-card" style={{
            width: "100%",
            maxWidth: "367px",
            height: "185px",
            borderRadius: "20px",
            border: "1px solid #ccc",
            background: "#DBEAFE",
            padding: "20px",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: "8px"
          }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "51px",
                height: "51px",
                borderRadius: "50%",
                background: "#122F4A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "20px", lineHeight: "100%", letterSpacing: "0%", textAlign: "center", color: "#003370", whiteSpace: "nowrap" }}>
                LOCATION
              </span>
            </div>
            <p style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: "16px", lineHeight: "24px", letterSpacing: "0%", textAlign: "center", color: "#08091B", margin: 0, whiteSpace: "pre-line"}}>
              {"Prayer Mountain, Ankur Narula \n Ministries, Punjab, India"}
            </p>
          </div>
        </div>





    </section>
  );
}