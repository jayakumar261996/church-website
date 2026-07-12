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

      <div className="overflow-hidden" style={{ display: "flex", flexDirection: "column", gap: "40px", padding: "32px 0" }}>
        {[
          ["https://res.cloudinary.com/duyytaxgd/image/upload/v1783389727/prayerhouse-1_twqkfv.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389728/prayerhouse-2_enh4lv.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389730/prayerhouse-3_bdeufj.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389728/prayerhouse-4_r0xixr.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389731/prayerhouse-5_izam94.png"],
          ["https://res.cloudinary.com/duyytaxgd/image/upload/v1783389729/prayerhouse-6_oqplfz.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389729/prayerhouse-7_yjaz9v.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389731/prayerhouse-8_eoz771.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389731/prayerhouse-9_sjfkg2.png", "https://res.cloudinary.com/duyytaxgd/image/upload/v1783389731/prayerhouse-5_izam94.png"]
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
                alt="Prayer House"
                className="h-56 w-[22%] flex-shrink-0 rounded-md object-cover snap-start"
              />
            ))}
          </div>
        ))}
      </div>

      <div className="prayer-house-card" style={{
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
          <p className="banner-text" style={{ margin: "0 30px", whiteSpace: "nowrap" }}>What is Prayer House?</p>
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
          Prayer House is a sacred space dedicated to prayer, worship, and spiritual renewal. It is a place where believers gather to seek God's presence, lift up their needs, and grow deeper in faith. Here, individuals and families can encounter God intimately and experience peace, restoration, and encouragement in their spiritual journey.
        </p>
      </div>

      <div className="prayer-house-card" style={{
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
          The purpose of Prayer House is to provide a peaceful, holy environment where people can come aside from daily distractions and connect with God. Our vision is to build a strong prayer community where lives are transformed, faith is strengthened, and hearts are aligned with God's will. It is a place where continuous prayer is offered for individuals, families, and the needs of the community.
        </p>
      </div>

    </section>
  );
}
