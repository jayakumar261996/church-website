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



export default function BibleCollege() {
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
              <h1 className="hero-title">BIBLE COLLEGE</h1>
              {/* <span className="gold-cross">✝</span> */}
             <img
  src="/img/cross.svg"
  alt="Gold Divider"
  className="gold-divider-image"
  style={{ width: "62px", height: "62px" }}
/>
            </div>

          </div>
         <div className="section-copy-center" style={{ marginTop: "-30px" }}>
 Welcome to a place where the Word of God comes alive and transforms lives from within. Here, you will be grounded in truth, 
strengthened in faith, and equipped with spiritual wisdom to walk in God’s purpose. Through dedicated teaching, 
revelation, and guidance, you will grow deeper in your relationship with Christ and discover the power of His Word working in
your life. This is more than learning—it is a journey of becoming who God has called you to be.
          </div>

           <div className="section-copy-center-bold" style={{ fontWeight: "400" }}>
Equipping believers with the Word of God to walk in truth, power, and purpose.
          </div>



       <section className="branches-banner-section">
        <div className="branches-banner-content">
          <div className="branches-line"></div>
          <p className="banner-text">SCENES OF BIBLE COLLEGE</p>
           <div className="branches-line"></div>
        </div>
      </section>

       <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "16px",
        margin: "2rem 0",
        overflow: "hidden",
        maxHeight: "456px"
      }}>
        <img src="/img/prayer-mountain-1.jpg" alt="Prayer Mountain" style={{ width: "367px", height: "220px", objectFit: "cover", borderRadius: "8px", flexShrink: 0 }} />
        <img src="/img/prayer-mountain-2.jpg" alt="Prayer Mountain" style={{ width: "367px", height: "220px", objectFit: "cover", borderRadius: "8px", flexShrink: 0 }} />
        <img src="/img/prayer-mountain-3.jpg" alt="Prayer Mountain" style={{ width: "367px", height: "220px", objectFit: "cover", borderRadius: "8px", flexShrink: 0 }} />
        <img src="/img/prayer-mountain-4.jpg" alt="Prayer Mountain" style={{ width: "367px", height: "220px", objectFit: "cover", borderRadius: "8px", flexShrink: 0 }} />
        <img src="/img/prayer-mountain-5.jpg" alt="Prayer Mountain" style={{ width: "367px", height: "220px", objectFit: "cover", borderRadius: "8px", flexShrink: 0 }} />
        <img src="/img/prayer-mountain-6.jpg" alt="Prayer Mountain" style={{ width: "367px", height: "220px", objectFit: "cover", borderRadius: "8px", flexShrink: 0 }} />
        <img src="/img/prayer-mountain-7.jpg" alt="Prayer Mountain" style={{ width: "367px", height: "220px", objectFit: "cover", borderRadius: "8px", flexShrink: 0 }} />
        <img src="/img/prayer-mountain-8.jpg" alt="Prayer Mountain" style={{ width: "367px", height: "220px", objectFit: "cover", borderRadius: "8px", flexShrink: 0 }} />
        <img src="/img/prayer-mountain-9.jpg" alt="Prayer Mountain" style={{ width: "367px", height: "220px", objectFit: "cover", borderRadius: "8px", flexShrink: 0 }} />
        <img src="/img/prayer-mountain-10.jpg" alt="Prayer Mountain" style={{ width: "367px", height: "220px", objectFit: "cover", borderRadius: "8px", flexShrink: 0 }} />
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

    </section>
  );
}