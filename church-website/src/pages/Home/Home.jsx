import { useState } from "react"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"

const NAV_LINKS = ["Home", "About", "Ministries", "Events", "Gallery", "Give"]

const SOCIAL_PLATFORMS = [
  { name: "Face book", icon: "f", color: "#1877F2", bg: "#E8F0FE" },
  { name: "Instagram", icon: "📷", color: "#E1306C", bg: "#FCE4EC" },
  { name: "YouTube", icon: "▶", color: "#FF0000", bg: "#FFEBEE" },
  { name: "X - Twitter", icon: "𝕏", color: "#000000", bg: "#F5F5F5" },
]

const WEEKLY_SERVICES = [
  "Sunday Morning Service\n10:30 AM – 3:30 PM (IST)",
  "Sunday Morning Service\n10:30 AM – 3:30 PM (IST)",
  "Sunday Morning Service\n10:30 AM – 3:30 PM (IST)",
  "Sunday Morning Service\n10:30 AM – 3:30 PM (IST)",
]

const DAILY_PRAYERS = [
  "Sunday Morning Service\n10:30 AM – 3:30 PM (IST)",
  "Sunday Morning Service\n10:30 AM – 3:30 PM (IST)",
  "Sunday Morning Service\n10:30 AM – 3:30 PM (IST)",
  "Sunday Morning Service\n10:30 AM – 3:30 PM (IST)",
]

const FOOTER_LINKS = {
  Pages: [
    "Branches",
    "Prayer Request",
    "Prayer House",
    "Prayer Mountain",
    "Sunday School",
    "Bible College",
    "Sophia College",
  ],
  Links: ["Privacy Policy", "Terms an Conditions"],
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header />
      <div className="page-shell">
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="section">
            <div className="hero-text fade-in">
              <h1 className="hero-title">
                Welcome to Ankur Narula Ministries<br />
                <span className="hero-highlight">Jesus Christ's Power in Signs and Wonders</span>
              </h1>
              <p className="hero-copy">
                Experience the power of Jesus Christ through signs, wonders, and faith. We believe in the living Word of God and in His mighty works among those who believe.
              </p>
            </div>

            {/* Hero Banner */}
            <div className="hero-banner">
              <div className="hero-banner-inner">
                <div className="hero-banner-figure">200+</div>
                <div className="hero-banner-label">ANM CHURCHES</div>
                <div className="hero-banner-subtitle">AND GROWING</div>
              </div>
              <div className="hero-banner-side">
                <div className="hero-banner-side-card">
                  <div className="hero-banner-side-text">Pastor & Family</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAN OF GOD SECTION */}
        <section className="section section-white">
          <div className="section">
            <div className="section-heading">
              <p>The church of signs and wonders</p>
              <div className="gold-divider">
                <span className="gold-cross">✝</span>
                <h2>Man Of God</h2>
                <span className="gold-cross">✝</span>
              </div>
            </div>

            {/* Photo Gallery Row */}
            <div className="grid-4">
              {[
                { bg: "linear-gradient(135deg, #8B4513, #A0522D)", label: "Preaching" },
                { bg: "linear-gradient(135deg, #1a3a6b, #2d5aa0)", label: "Ministry" },
                { bg: "linear-gradient(135deg, #4a0e8f, #7b2fbe)", label: "Worship" },
                { bg: "linear-gradient(135deg, #c41e3a, #e63950)", label: "Prayer" },
              ].map((item, i) => (
                <div key={i} className="photo-grid-item" style={{ background: item.bg }}>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Apostle Info */}
            <div className="section-copy section-copy-center">
              <h3 className="section-heading-title">Apostle Dr. Ankur Yoseph Narula</h3>
              <p className="section-caption">Founder & Senior Pastor</p>
              <p>
                Apostle Dr. Ankur Yoseph Narula is the Founder and Overseer of The Church of Signs and Wonders Ankur Narula Ministries, which is one of the fastest-growing churches in India.
              </p>
              <button className="btn-gold btn-small">Know More</button>
            </div>
          </div>
        </section>

        {/* PRAYER / OFFERINGS ROW */}
        <section className="section section-light">
          <div className="section">
            <div className="grid-3">
              {[
                { label: "Prayer Request", bg: "linear-gradient(135deg, #2c1a0e, #5c3317)", btnStyle: "filled" },
                { label: "Offerings", bg: "linear-gradient(135deg, #1a0e2c, #3d1a6e)", btnStyle: "outline" },
                { label: "Zoom Lay Hand", bg: "linear-gradient(135deg, #0e1a2c, #1a3a6b)", btnStyle: "outline" },
              ].map((item, i) => (
                <div key={i} className="card" style={{ background: item.bg }}>
                  <div className="card-overlay" />
                  <div className="card-inner">
                    {item.btnStyle === "filled"
                      ? <button className="btn-gold btn-small">{item.label}</button>
                      : <button className="btn-outline btn-outline-small">{item.label}</button>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LIVE PRAYER & WORSHIP SCHEDULE */}
        <section className="section section-white">
          <div className="section">
            <h2 className="section-title">Live Prayer & Worship Schedule</h2>
            <div className="gold-divider"><div className="gold-line" /></div>

            {/* Hero Image */}
            <div className="sermon-feature">
              <div className="sermon-feature-copy">
                <div className="sermon-feature-emoji">🙏</div>
                <div className="sermon-feature-label">Live Worship</div>
              </div>
              <div className="sermon-feature-overlay" />
            </div>

            {/* Schedule Cards */}
            <div className="grid-2">
              {/* Weekly Services */}
              <div className="card card-dark">
                <div className="badge badge-gold">Weekly Services</div>
                <div className="grid-2 schedule-grid">
                  {WEEKLY_SERVICES.map((s, i) => (
                    <div key={i} className="schedule-item schedule-item--dark">
                      {s.split("\n").map((line, j) => <div key={j} className={j === 0 ? 'schedule-heading' : 'schedule-copy'}>{line}</div>)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Prayer */}
              <div className="card card-light">
                <div className="badge badge-dark">Daily Prayer Programs</div>
                <div className="grid-2 schedule-grid">
                  {DAILY_PRAYERS.map((s, i) => (
                    <div key={i} className="schedule-item schedule-item--light">
                      {s.split("\n").map((line, j) => <div key={j} className={j === 0 ? 'schedule-heading' : 'schedule-copy'}>{line}</div>)}
                    </div>
                  ))}
                </div>
                <div className="schedule-action">
                  <button className="btn-live">Join the Live Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOCIAL MEDIA SECTION */}
        <section className="section section-light">
          <div className="section">
            <div className="section-heading">
              <h2 className="section-title">Our Social Media Platforms</h2>
              <p className="section-copy">Be a Part of Our Family</p>
            </div>
            <div className="grid-4 social-platforms-grid">
              {SOCIAL_PLATFORMS.map((p) => (
                <div key={p.name} className="cta-card" style={{ background: p.bg, border: `1px solid ${p.color}22`, '--social-color': p.color }}>
                  <div className="social-icon">{p.icon}</div>
                  <div className="social-label">{p.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WATCH LATEST SERMONS */}
        <section className="section section-dark">
          <div className="section">
            <h2 className="section-title section-title-light">Watch Our Latest Sermons</h2>
            <div className="gold-divider"><div className="gold-line" /></div>

            {/* Featured Sermon */}
            <div className="sermon-feature sermon-feature-dark">
              <div className="sermon-feature-panel">
                <span>🙏</span>
              </div>
              <div className="sermon-feature-copy sermon-feature-copy-right">
                <div className="sermon-feature-text">WORSHIP THE</div>
                <div className="sermon-feature-heading">GLORIOUS</div>
                <div className="sermon-feature-heading">KING</div>
                <div className="sermon-feature-subtext">ANKUR NARULA MINISTRIES</div>
                <div className="sermon-feature-caption">MORNING WORSHIP</div>
              </div>
            </div>

            {/* Sermon Grid */}
            <div className="sermon-grid">
              {Array(3).fill(null).map((_, i) => (
                <div key={i} className="sermon-card sermon-card-dark">
                  <div className="sermon-card-banner">
                    <div className="sermon-card-badge">THURSDAY</div>
                  </div>
                  <div className="sermon-card-body">
                    <p className="sermon-card-copy">PRAYER MOUNTAIN SPECIAL PRAYER FOR SUPERNATURAL RESTORATION</p>
                    <button className="sermon-card-button">LIVE (7-01-2026)</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="sermon-grid">
              {Array(3).fill(null).map((_, i) => (
                <div key={i} className="sermon-card sermon-card-dark">
                  <div className="sermon-card-banner sermon-card-banner-alt">
                    <span className="sermon-card-emoji">✝</span>
                  </div>
                  <div className="sermon-card-body">
                    <p className="sermon-card-copy">PRAYER MOUNTAIN SPECIAL PRAYER FOR SUPERNATURAL RESTORATION</p>
                    <button className="sermon-card-button">LIVE (7-01-2026)</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  )
}
