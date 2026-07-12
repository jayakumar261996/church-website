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



export default function Multimedia() {
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
              <h1 className="hero-title">Multimedia Institute</h1>
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
          <p className="banner-text">SCENES OF MULTIMEDIA INSTITUTE</p>
           <div className="branches-line"></div>
        </div>
      </section>

      <div className="overflow-hidden" style={{ display: "flex", flexDirection: "column", gap: "40px", padding: "32px 0" }}>
        {[
          ["https://res.cloudinary.com/duyytaxgd/image/upload/v1783389046/multimedia-1_bmuxlt.jpg", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389044/multimedia-2_wzvjw1.jpg", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389044/multimedia-3_pdrhgn.jpg", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389044/multimedia-4_pnlpwg.jpg", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389044/multimedia-2_wzvjw1.jpg"],
          ["https://res.cloudinary.com/duyytaxgd/image/upload/v1783389046/multimedia-1_bmuxlt.jpg", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389046/multimedia-7_ujz6ym.jpg", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389046/multimedia-1_bmuxlt.jpg", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389044/multimedia-2_wzvjw1.jpg", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389046/multimedia-7_ujz6ym.jpg"]
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
                alt="Multimedia Institute"
                className="h-56 w-[22%] flex-shrink-0 rounded-md object-cover snap-start"
              />
            ))}
          </div>
        ))}
      </div>

      <div style={{
        width: "100%",
        maxWidth: "1140px",
        minHeight: "238px",
        borderRadius: "40px",
        background: "#122F4A",
        margin: "80px auto 44px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 60px",
        boxSizing: "border-box",
        opacity: 1
      }}>
        <div style={{ display: "flex", alignItems: "center", width: "100%", marginBottom: "16px" }}>
          <div className="branches-line" style={{ margin: 0 }} />
          <p className="banner-text" style={{ margin: "0 30px", whiteSpace: "nowrap" }}>What is Multimedia Institute?</p>
          <div className="branches-line" style={{ margin: 0 }} />
        </div>
        <p style={{
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "1.6",
          color: "#ffffff",
          margin: 0,
          maxWidth: "900px"
        }}>
          Sunday School is a dedicated time of learning and spiritual growth where children, youth, and adults are taught the Word of God in a simple and meaningful way. It is designed to help believers understand Bible stories, Christian values, and the love of Jesus Christ in a way that is easy to apply in daily life. Through teaching, activities, and fellowship, Sunday School builds a strong foundation of faith from an early age.
        </p>
      </div>

      <div style={{
        width: "100%",
        maxWidth: "1140px",
        minHeight: "238px",
        borderRadius: "40px",
        background: "#122F4A",
        margin: "0 auto 44px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px 60px",
        boxSizing: "border-box",
        opacity: 1
      }}>
        <div style={{ display: "flex", alignItems: "center", width: "100%", marginBottom: "16px" }}>
          <div className="branches-line" style={{ margin: 0 }} />
          <p className="banner-text" style={{ margin: "0 30px", whiteSpace: "nowrap" }}>Purpose & Vision</p>
          <div className="branches-line" style={{ margin: 0 }} />
        </div>
        <p style={{
          textAlign: "center",
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "1.6",
          color: "#ffffff",
          margin: 0,
          maxWidth: "900px"
        }}>
          The purpose of Sunday School is to nurture spiritual growth through Bible-based teaching, helping individuals develop a personal relationship with God. It focuses on building strong moral values, prayer life, and understanding of Scripture in a practical and engaging way.
          Our vision is to raise a generation rooted in God's Word, filled with the knowledge of Jesus Christ, and guided by the Holy Spirit. We aim to prepare children and believers of all ages to live out their faith boldly, grow in godly character, and become light in their families, schools, and communities.
        </p>
      </div>

    </section>
  );
}