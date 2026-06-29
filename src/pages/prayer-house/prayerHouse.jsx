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



export default function PrayerHouse() {
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
              <h1 className="hero-title">PRAYER HOUSE</h1>
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
 Welcome to a dwelling of divine presence, where every soul finds rest and every prayer rises to heaven. This is not just a
place, but a powerful encounter with the living God, where broken hearts are healed and weary spirits are strengthened.
As you seek Him here, you will discover His love, His peace, and His transforming power working in your life. Come with 
expectation, and leave with a testimony of His goodness.
          </div>

           <div className="section-copy-center-bold" style={{ fontWeight: "400" }}>
Encounter God. Experience Healing. Walk in His Presence.
          </div>



       <section className="branches-banner-section">
        <div className="branches-banner-content">
          <div className="branches-line"></div>
          <p className="banner-text">SCENES OF PRAYER HOUSE</p>
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
          <p className="banner-text">What is Prayer House?</p>
          <div className="branches-line"></div>
          
        </div>
         <div className="prayer-desc">
   Prayer House is a sacred space dedicated to prayer, worship, and spiritual renewal. It is a place where believers gather to seek God’s presence, lift up their needs, and grow deeper in faith. Here, individuals and families can encounter God intimately and experience peace, restoration, and encouragement in their spiritual journey.
          </div>

      </section>

       <section className="branches-banner-section">
        <div className="branches-banner-content">
          <div className="branches-line"></div>
          <p className="banner-text">Purpose & vision</p>
          <div className="branches-line"></div>
          
        </div>
        <div className="prayer-desc">
      The purpose of Prayer House is to provide a peaceful, holy environment where people can come aside from daily distractions and connect with God. Our vision is to build a strong prayer community where lives are transformed, faith is strengthened, and hearts are aligned with God’s will. It is a place where continuous prayer is offered for individuals, families, and the needs of the community.
          </div>
        

      </section>

    </section>
  );
}