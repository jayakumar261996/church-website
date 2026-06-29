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



export default function SofiaCollege() {
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
              <h1 className="hero-title">Sophia College</h1>
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
 Welcome to Sunday School, a place where the Word of God is taught with simplicity, love, and truth, helping hearts of all ages
experience the presence of God in a personal way. Here, children, youth, and believers grow together in faith as the Scriptures
come alive through teaching, stories, and fellowship.
          </div>

           <div className="section-copy-center-bold" style={{ fontWeight: "400" }}>
Empowering the next generation to walk in faith, truth, and the power of God.
          </div>



       <section className="branches-banner-section">
        <div className="branches-banner-content">
          <div className="branches-line"></div>
          <p className="banner-text">SCENES OF SOPHIA COLLEGE</p>
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
          <p className="banner-text">What is Sunday School?</p>
          <div className="branches-line"></div>
          
        </div>
         <div className="prayer-desc">
    Sunday School is a dedicated time of learning and spiritual growth where children, youth, and adults are taught the Word of God in a simple and meaningful way. It is designed to help believers understand Bible stories, Christian values, and the love of Jesus Christ in a way that is easy to apply in daily life. Through teaching, activities, and fellowship, Sunday School builds a strong foundation of faith from an early age.
          </div>

      </section>

       <section className="branches-banner-section">
        <div className="branches-banner-content">
          <div className="branches-line"></div>
          <p className="banner-text">Purpose & vision</p>
          <div className="branches-line"></div>
          
        </div>
        <div className="prayer-desc">
       The purpose of Sunday School is to nurture spiritual growth through Bible-based teaching, helping individuals develop a personal relationship with God. It focuses on building strong moral values, prayer life, and understanding of Scripture in a practical and engaging way.
Our vision is to raise a generation rooted in God’s Word, filled with the knowledge of Jesus Christ, and guided by the Holy Spirit. We aim to prepare children and believers of all ages to live out their faith boldly, grow in godly character, and become light in their families, schools, and communities
          </div>
        

      </section>

    </section>
  );
}