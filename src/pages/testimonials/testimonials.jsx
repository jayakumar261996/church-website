import { useEffect } from "react";

export default function Testimonials() {
//   useEffect(() => {
//     const layout = document.querySelector(".app-layout");
//     if (layout) {
//       layout.style.background =
//         "linear-gradient(to bottom, #FFFFE9 0, #FFFFE9 436.671875px, transparent 436.671875px)";
//     }
//     return () => {
//       if (layout) {
//         layout.style.background = "";
//       }
//     };
//   }, []);

  return (
    <section className="page-ministries p-8">

      <section className="branches-banner-section">
        <div className="branches-banner-content">
          <div className="line"></div>
          <p className="banner-text">Wonderful Testimonies</p>
          <div className="line"></div>
        </div>
      </section>

      <p style={{
        fontFamily: "Poppins",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0%",
        textAlign: "center",
        color: "#666",
        margin: "16px 0 32px"
      }}>
        Jesus Christ: The Same Forever · Meet Jehovah Rapha, Our Healer · Undeniable Evidence of His Power
      </p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{
          width: "100%",
          maxWidth: "900px",
          borderRadius: "20px",
          overflow: "hidden",
          marginBottom: "32px"
        }}>
          <img
            src="/img/testimonial-1.jpg"
            alt="Testimony"
            style={{ width: "850px", height: "593px", display: "block" }}
          />
        </div>
        <p style={{
          fontFamily: "Poppins",
          fontWeight: 500,
          fontSize: "20px",
          lineHeight: "32px",
          letterSpacing: "0%",
          textAlign: "center",
          color: "#003471",
          maxWidth: "900px",
          margin: "0 0 16px"
        }}>
          TB का रोग, RIGHT LUNG में पानी था, इन्हें सांस लेने में बहुत दिक्कत रहती थी, ज्यादातर यह BED पर रहती थी परमेश्वर की दासी द्वारा अभिषिक्त प्रार्थना ग्रहण करने से मिली बड़ी चंगाई
        </p>
        <p style={{
          fontFamily: "Poppins",
          fontWeight: 500,
          marginBottom: "64px",
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "0%",
          textAlign: "center",
          color: "#003471",
          maxWidth: "700px",
          margin: 0
        }}>
          DUE TO TB AND FLUID IN THE RIGHT LUNG, SHE HAD DIFFICULTY IN BREATHING AND REMAINED BEDRIDDEN. AFTER RECEIVING ANOINTED PRAYER BY WOMAN OF GOD, SHE GOT REMARKABLE HEALING.
        </p>
      </div>

    </section>
  );
}
