import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"

const FOOTER_LINKS = {
  Pages: ["Branches", "Prayer Request", "Give", "Prayer House", "Prayer Mountain", "Sunday School", "Bible College", "Sophia College"],
  Links: ["Privacy Policy", "Terms an Conditions"],
}

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

const STATS = [
  { value: "500,000+", label: "Weekly Attendees" },
  { value: "200+", label: "Branches Worldwide" },
  { value: "2008", label: "Year Established" },
]

const LEADERS = [
  { bg: "linear-gradient(135deg, #8B1a1a, #c0392b)", name: "Leader 1" },
  { bg: "linear-gradient(135deg, #1a3a6b, #2980b9)", name: "Leader 2" },
  { bg: "linear-gradient(135deg, #2d5a1a, #27ae60)", name: "Leader 3" },
]

const CRUSADE_PHOTOS = [
  { bg: "linear-gradient(135deg, #1a0a00, #5c3317)" },
  { bg: "linear-gradient(135deg, #0a0a1a, #1a1a4a)" },
  { bg: "linear-gradient(135deg, #1a0010, #4a0030)" },
  { bg: "linear-gradient(135deg, #001a0a, #004a20)" },
]

const PRESENCE_PHOTOS = [
  { bg: "linear-gradient(135deg, #1a1a2e, #16213e)" },
  { bg: "linear-gradient(135deg, #2d1a00, #6b3d00)" },
  { bg: "linear-gradient(135deg, #0a1a2d, #1a3a5c)" },
  { bg: "linear-gradient(135deg, #1a0a0a, #4a1a1a)" },
  { bg: "linear-gradient(135deg, #0a1a0a, #1a4a1a)" },
  { bg: "linear-gradient(135deg, #1a1a00, #4a4a00)" },
  { bg: "linear-gradient(135deg, #2e1a00, #7a4a00)" },
  { bg: "linear-gradient(135deg, #001a1a, #004a4a)" },
]

export default function AboutPage() {
  return (
    <div className="page-shell">
      {/* ── HEADER ── */}
      <Header />

      {/* ── ABOUT US HERO ── */}
      <section className="hero-section">
        <div className="section">
          <div className="section-heading">
            <div className="gold-divider gold-divider-top">
              <span className="gold-cross">✝</span>
              <h1 className="hero-title">About Us</h1>
              <span className="gold-cross">✝</span>
            </div>
          </div>
          {/* <hr className="gold-hr gold-hr-centered" /> */}

          <p className="section-copy section-copy-center">
            The Church of Signs and Wonders (Ankur Narula Ministries) is a global revival ministry dedicated to spreading the Gospel of Jesus Christ through the power of the Holy Spirit. Founded in 2004 in Punjab, India, the ministry has grown from three members into a worldwide movement bringing healing, deliverance, and transformed lives.
          </p>

          <div className="hero-banner hero-banner-about">
            <img src="/img/gatherings.svg" alt="About Us" />
          </div>
        </div>
      </section>

      {/* ── OUR IDENTITY / VISION & MISSION ── */}
      <section className="section section-white">
        <div className="section">
          <div className="feature-card feature-card-identity">
            <div className="feature-card-overlay" />
            <p className="feature-card-subtitle">Our Identity</p>
            <h2 className="feature-card-title">Our Vision and Our mission</h2>
          </div>

          <div className="vision-grid-wrapper">
            <div className="vision-grid">
              <div>
                <h3 className="vision-title">Our Vision</h3>
                <p className="section-copy">
                  "No one soul made aware!" – The ministry aims to see a global revival of faith, leading people through the transformative power of Jesus Christ, proclaiming the kingdom of God with signs and wonders following, until every nation has heard the Gospel.
                </p>
              </div>
              <div>
                <h3 className="vision-title">Our Mission</h3>
                <p className="section-copy">
                  Spreading the Gospel of Jesus Christ, leading people into a deep relationship with God, and demonstrating His power through healing, deliverance, and transformation — reaching the broken, the lost, and the hopeless with the love of Christ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR LEADERS ── */}
      <section className="section section-white">
        <div className="section">
          <h2 className="section-title">Our Leaders</h2>
          {/* <hr className="gold-hr" /> */}

          <div className="grid-3 leader-grid">
            {LEADERS.map((leader, i) => (
              <div key={i} className="leader-card" style={{ background: leader.bg }}>
                <div className="leader-card-overlay" />
                <div className="leader-card-body">
                  <div className="leader-card-icon">🧑‍💼</div>
                  <div className="leader-card-label">Church Leader</div>
                </div>
                <div className="leader-card-shadow" />
              </div>
            ))}
          </div>

          <div className="section-copy">
            The Church of Signs and Wonders (Ankur Narula Ministries) is a fast-growing revival ministry based in Punjab, India, committed to preaching the Gospel of Jesus Christ through the power of the Holy Spirit. Founded in 2004 with just three members, the ministry has grown by God's grace into a global revival movement where cities gather weekly to worship, receive the Word, and experience healing, deliverance, and transformation.
          </div>
          <div className="section-copy">
            Led by Apostle Dr. Ankur Yoseph Narula and Pastor Sonia Yoseph Narula, the ministry serves millions through church services, live broadcasts, revival crusades, and the establishment of 200+ churches worldwide. With a strong team for compassion, the ministry also supports the needy through charitable initiatives and a 24/7 Prayer Call Center, offering prayer and counsel to people across all backgrounds, and daily encouragement.
          </div>
          <div className="section-copy">
            Ankur Narula Ministries, led by Apostle Dr. Ankur Yoseph Narula, is a powerful Holy Spirit-led movement based in Punjab, India. Known for healing, deliverance, and prophetic ministry, to lead souls to Christ and transform lives. Follow for powerful sermons, live broadcasts, testimonies, and daily encouragement.
          </div>
        </div>
      </section>

      {/* ── MINISTRY STATISTICS ── */}
      <section className="section section-dark">
        <div className="section">
          <div className="section-heading-alt">
            <div className="section-heading-rule" />
            <span className="gold-cross section-heading-cross">✝</span>
            <h2 className="section-heading-alt-title">Ministry Statistics</h2>
            <span className="gold-cross section-heading-cross">✝</span>
            <div className="section-heading-rule" />
          </div>

          <div className="stats-grid">
            {STATS.map((stat, i) => (
              <div key={i} className="stat-card">
                <div className="stat-card-value">{stat.value}</div>
                <div className="stat-card-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE SERVICES SCHEDULE ── */}
      <section className="section section-white">
        <div className="section">
          <h2 className="section-title">Live Services Schedule</h2>
          <hr className="gold-hr" />

          <div className="grid-2 schedule-grid">
            <div className="schedule-card schedule-card-dark">
              <div className="schedule-card-label">Weekly Services</div>
              <div className="schedule-list">
                {WEEKLY_SERVICES.map((s, i) => (
                  <div key={i} className="schedule-item">
                    {s.split("\n").map((line, j) => <div key={j} className={j === 0 ? "schedule-item-title" : "schedule-item-detail"}>{line}</div>)}
                  </div>
                ))}
              </div>
            </div>

            <div className="schedule-card schedule-card-light">
              <div className="schedule-card-label schedule-card-label-inverse">Daily Prayer Programs</div>
              <div className="schedule-list">
                {DAILY_PRAYERS.map((s, i) => (
                  <div key={i} className="schedule-item schedule-item-light">
                    {s.split("\n").map((line, j) => <div key={j} className={j === 0 ? "schedule-item-title" : "schedule-item-detail"}>{line}</div>)}
                  </div>
                ))}
              </div>
              <div className="button-row">
                <button className="btn-live">Join the Live Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAITH RESOURCES ── */}
      <section className="section section-white">
        <div className="section">
          <div className="grid-2 faith-grid">
            <div className="feature-card feature-card-resource">
              <div className="feature-card-overlay" />
              <div className="feature-card-icon">📖</div>
              <div className="feature-card-subtitle feature-card-subtitle-light">HOLY BIBLE</div>
            </div>
            <div className="feature-panel">
              <h2 className="feature-panel-title">Faith Resources</h2>
              <p className="section-copy">
                Explore books, teachings, and spiritual resources that will strengthen your walk with God. Our store offers a wide range of materials to help you grow in faith, deepen your understanding of the Word, and experience breakthrough in every area of life.
              </p>
              <button className="btn-gold">Visit the Store Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CRUSADES BANNER ── */}
      <section className="banner-section">
        <div className="banner-content">
          <div className="banner-rule" />
          <p className="banner-text">The Largest ankur narula ministries Crusades</p>
          <div className="banner-rule" />
        </div>
      </section>

      {/* ── CRUSADE PHOTO GRID ── */}
      <section className="section section-white">
        <div className="section">
          <div className="grid-4 crusade-grid">
            {CRUSADE_PHOTOS.map((photo, i) => (
              <div key={i} className="crusade-card" style={{ background: photo.bg }}>
                <div className="crusade-card-overlay" />
                <div className="crusade-card-icon">✝</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAN OF GOD INTERNATIONAL PRESENCE ── */}
      <section className="section section-white">
        <div className="section">
          <h2 className="section-title section-title-uppercase">MAN OF GOD INTERNATIONAL PRESENCE</h2>
          <div className="grid-4 presence-grid">
            {PRESENCE_PHOTOS.slice(0, 4).map((photo, i) => (
              <div key={i} className="presence-card" style={{ background: photo.bg }}>
                <span className="presence-card-icon">🌍</span>
              </div>
            ))}
          </div>
          <div className="grid-4 presence-grid">
            {PRESENCE_PHOTOS.slice(4).map((photo, i) => (
              <div key={i} className="presence-card" style={{ background: photo.bg }}>
                {i === 3
                  ? <div className="presence-card-badge">
                      <div className="presence-card-badge-title">HONORARY DOCTORATE DEGREE</div>
                      <div className="presence-card-badge-icon">🎓</div>
                    </div>
                  : <span className="presence-card-icon">🌍</span>
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  )
}
