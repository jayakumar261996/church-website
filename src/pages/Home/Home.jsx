import React from "react";
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"

export default function ChurchLandingPage() {
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
          

          <div className="hero-banner">
            <img src="/img/1.svg" alt="" />
          </div>
        </section>

        <section className="gallery container">
          <div className="section-title">
            <div className="line"></div>
            <h3>The church of signs and wonders</h3>
            <div className="line"></div>
          </div>

          <div className="gold-sub">✞ Man Of God ✞</div>

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

            <p>
              Apostle Dr. Ankur Yoseph Narula is the founder and overseer of the
              church and ministry.
            </p>

            <button className="btn">Know More</button>
          </div>
        </section>

        <section className="cards container">
          <div className="cards-grid">
            <div className="card">
              <img src="/img/1.svg" />
              <button>Prayer Request</button>
            </div>

            <div className="card">
              <img src="/img/1.svg" />
              <button>Offerings</button>
            </div>

            <div className="card">
              <img src="/img/1.svg" />
              <button>Zoom Lay Hand</button>
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
            <img src="/img/1.svg" />
          </div>

          <div className="schedule-grid">
            <div className="schedule-box">
              <h5>Weekly Services</h5>
              <p>Sunday Morning Service</p>
              <p>10:30 AM - 2:30 PM</p>
            </div>

            <div className="schedule-box">
              <h5>Daily Prayer Programs</h5>
              <p>Sunday Morning Service</p>
              <p>10:30 AM - 2:30 PM</p>

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
            <div className="social-card">Facebook</div>
            <div className="social-card">Instagram</div>
            <div className="social-card">YouTube</div>
            <div className="social-card">X - Twitter</div>
          </div>
        </section>

        <section className="sermon">
          <div className="container">
            <h3 className="sermon-title">
              Watch Our Latest Sermons
            </h3>

            <div className="sermon-banner">
              <img src="/img/1.svg" />
            </div>
          </div>
        </section>

        <section className="events container">
          <div className="events-grid">
            {[1,2,1,1,1,2].map((item)=>(
              <div className="event-card" key={item}>
                <img src={`/img/${item}.svg`} alt={`Event ${item}`} />
                <div className="event-content">
                  <h4>Prayer Mountain Special Prayer</h4>
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