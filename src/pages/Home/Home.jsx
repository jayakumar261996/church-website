import React from "react";
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import CloudinaryImage from "@/components/common/CloudinaryImage"
import { useNavigate } from "react-router-dom";

export default function ChurchLandingPage() {
  const navigate = useNavigate();

  return (
    <>

      <div className="page">
        <Header />

        <section className="hero container">
          <div className="title-row">
            <div className="line"></div>
            <div>
              <h1 className="hero-title-philosopher">Welcome to Ankur Narula Ministries</h1>
              <h2 className="hero-subtitle-philosopher">The Church Of Signs And Wonders</h2>
            </div>
            <div className="line"></div>
          </div>

          <p>
           Experience the power of Jesus Christ through signs, wonders, and faith We believe in the 
           <br/>
           living Word of God and in His mighty works among those who believe.
          </p>
           <div className="styled-text">
             We believe in the <br />
             living Word of God and in His mighty works among those who believe.  (Mark 16:17)
           </div>
          

          <div className="hero-banner">
            <CloudinaryImage 
              src="hero-img" 
              alt="Hero Banner"
              width={1140}
              className="w-full h-[620px]"
            />
          </div>
        </section>

        <section className="gallery container">
          <div className="section-title">
            <div className="line"></div>
            <h3>The church of signs and wonders</h3>
            <div className="line"></div>
          </div>

          <div className="gold-sub" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <img
              src="/img/cross.svg"
              alt="Gold Divider"
              className="gold-divider-image"
              style={{ width: "47px", height: "47px" }}
            />
            <span>Man Of God</span>
            <img
              src="/img/cross.svg"
              alt="Gold Divider"
              className="gold-divider-image"
              style={{ width: "47px", height: "47px" }}
            />
          </div>

          <div className="gallery-grid">
            <img src="/img/5.svg" />
            <img src="/img/2.svg" />
            <img src="/img/3.svg" />
            <img src="/img/4.svg" />
          </div>

          <div className="pastor-info">
            <h4>Apostle Dr. Ankur Yoseph Narula</h4>
            <div className="designation">
              Founder & Senior Pastor
            </div>

            <p className="pastor-description">
              Apostle Dr. Ankur Yoseph Narula is the Founder and Overseer of The Church of Signs and Wonders 
Ankur Narula Ministries, which is one of the fastest-growing churches in India.
            </p>

            <button className="btn">Know More</button>
          </div>
        </section>

        <section className="cards container">
          <div className="cards-grid">
            <div className="card">
              <img src="/img/prayer-request.svg" />
             <button onClick={() => navigate("/prayer-request")}>
        Prayer Request
      </button>
            </div>

            <div className="card">
              <img src="/img/offering.svg" />
              <button>Offerings</button>
            </div>

            <div className="card">
              <img src="/img/zoomlay.svg" />
              <button onClick={() => navigate("/zoom-lay-hand")}>
        Zoom Lay Hand
      </button>
            </div>
          </div>
        </section>

        <section className="schedule container">
          <div className="section-title">
            <div className="line"></div>
            <h3>Live Prayer & Worship Schedule</h3>
            <div className="line"></div>
          </div>

        <div className="schedule-banner">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="w-full h-auto"
  >
    <source src="https://res.cloudinary.com/duyytaxgd/video/upload/v1782028509/father_preaching_havmua.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

          <div className="schedule-grid">
            <div className="schedule-box">
              <div className="schedule-header">
                <h5>Weekly Services</h5>
                <div className="schedule-dash"></div>
              </div>
              <div style={{display:"flex", justifyContent:"space-between"}}>
                <div>
                  <p>Sunday Morning Service</p>
                  <p>10:30 AM – 2:30 PM (IST)</p>
                </div>
                <div>
                  <p>Sunday Evening Service</p>
                  <p>7:00 PM – 11:00 PM (IST)</p>
                </div>
              </div>
              <div className="schedule-divider"></div>
              <div className="schedule-center">
                <p>Thursday Service</p>
                <p>6:00 PM – 10:00 PM (IST)</p>
              </div>
            </div>

            <div className="schedule-box">
              <div className="schedule-header">
                <h5>Daily Prayer Programs</h5>
                <div className="schedule-dash"></div>
              </div>
               <div style={{display:"flex", justifyContent:"space-between"}}>
                <div>
                  <p> Everyday Manna</p>
                  <p>1:00 PM (Daily)</p>
                </div>
                <div>
                  <p> Prayer Mountain </p>
                  <p>8:00 PM (Daily)</p>
                </div>
              </div>
              <div className="schedule-divider"></div>

              <button className="live-btn">
                Join Live Now
              </button>
            </div>
          </div>
        </section>

        <section className="social container">
          <h3>Our Social Media Platforms</h3>
          <p>Be a Part of Our Family</p>

          <div className="social-grid">
            <div className="social-card facebook">
              <img src="/img/facebook.png" alt="Facebook" className="social-icon" />
              <span>Facebook</span>
            </div>
            <div className="social-card instagram">
              <img src="/img/instagram.png" alt="Instagram" className="social-icon" />
              <span>Instagram</span>
            </div>
            <div className="social-card youtube">
              <img src="/img/youtube.png" alt="YouTube" className="social-icon" />
              <span>YouTube</span>
            </div>
            <div className="social-card twitter">
              <img src="/img/twitter.png" alt="X - Twitter" className="social-icon" />
              <span>X - Twitter</span>
            </div>
          </div>
        </section>

        <section className="sermon">
          <div className="container">
            <h3 className="sermon-title">
              Watch Our Latest Sermons
            </h3>

            <div className="sermon-banner">
              <img src="/img/sermons.svg" />
            </div>
          </div>
        </section>

        <section className="events container">
          <div className="home-events-grid">
            {[
              { id: "event-1", title: "PURE HEART Powerful Message by Apostle Dr.Ankur Yoseph Narula #ankurnarulaministry " },
              { id: "event-2", title: "ALL GLORY to JESUS | MORNING WORSHIP| 22-05-2026 @AnkurNarulaMinistries " },
              { id: "miraculous-testimony_pj7yaq", title: "परमेश्वर के दास और दासी की MIRACULOUS TESTIMONY @AnkurNarulaMinistries " },
              { id: "living-church_b1yh3x", title: "Find a Living Church for You | अपने लिए एक जीवित चर्च खोजें #ankurnarulaministry #canada " },
              { id: "pastors_pigkxu", title: "Pastors Imparted With the Fire of Revival Canada Crusade Day-2 #ankurnarulaministry " },
              { id: "crusade_emlqzb", title: "ANM का आज तक का Canada का Biggest Crusade #ankurnarulaministries #apostleankuryosephnarula " }
            ].map((item)=>(
              <div className="event-card" key={item.id}>
                <CloudinaryImage 
                  src={`${item.id}.png`} 
                  alt={item.title}
                  width={400}
                  className="w-full h-auto"
                />
                <div className="event-content">
                  <h4>{item.title}</h4>
                  <button className="event-btn">
                    Watch Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}