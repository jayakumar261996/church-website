export default function ZoomLayHand() {
  return (
    
    <section className="page-ministries p-8" style={{ backgroundColor: '#fff' }}>
      <div className="ministries-image my-8">
        <img src="/img/zoomlayhand.svg" alt="Ministries" className="w-full h-auto" />
      </div>
      <section className="page-events p-8" style={{ backgroundColor: '#fff' }}>
        <div className="section-heading">
          <div className="gold-divider gold-divider-top">
            <img src="/img/cross.svg" alt="Gold Divider" className="gold-divider-image" style={{ width: "84px", height: "84px" }} />
            <h1 className="hero-title">Zoom Lay Hand</h1>
            <img src="/img/cross.svg" alt="Gold Divider" className="gold-divider-image" style={{ width: "84px", height: "84px" }} />
          </div>
        </div>

        {/* ── Registration Form ── */}
        <div style={{ width: "560px", margin: "2rem auto 3rem", padding: "0" }}>

          {/* First Name + Gender */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>First Name</label>
              <input type="text" style={{ width: "100%", boxSizing: "border-box", height: "40px", border: "1px solid #ccc", borderRadius: "4px", padding: "0 10px", fontSize: "14px" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Gender</label>
              <select style={{ width: "100%", boxSizing: "border-box", height: "40px", border: "1px solid #ccc", borderRadius: "4px", padding: "0 10px", fontSize: "14px", background: "#fff" }}>
                <option value=""></option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Age + Nationality */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Age</label>
              <input type="text" style={{ width: "100%", boxSizing: "border-box", height: "40px", border: "1px solid #ccc", borderRadius: "4px", padding: "0 10px", fontSize: "14px" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Nationality</label>
              <input type="text" style={{ width: "100%", boxSizing: "border-box", height: "40px", border: "1px solid #ccc", borderRadius: "4px", padding: "0 10px", fontSize: "14px" }} />
            </div>
          </div>

          {/* Profession + Email */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Profession</label>
              <input type="text" style={{ width: "100%", boxSizing: "border-box", height: "40px", border: "1px solid #ccc", borderRadius: "4px", padding: "0 10px", fontSize: "14px" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Email</label>
              <input type="email" style={{ width: "100%", boxSizing: "border-box", height: "40px", border: "1px solid #ccc", borderRadius: "4px", padding: "0 10px", fontSize: "14px" }} />
            </div>
          </div>

          {/* Phone */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Phone</label>
            <input type="tel" style={{ width: "100%", boxSizing: "border-box", height: "40px", border: "1px solid #ccc", borderRadius: "4px", padding: "0 10px", fontSize: "14px" }} />
          </div>

          {/* Emergency Contact */}
          <h2 style={{ textAlign: "center", fontSize: "16px", fontWeight: "500", color: "#333", margin: "2rem 0 1rem" }}>Emergency Contact Optional</h2>

          {/* Relative Name + Phone */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Relative's name</label>
              <input type="text" style={{ width: "100%", boxSizing: "border-box", height: "40px", border: "1px solid #ccc", borderRadius: "4px", padding: "0 10px", fontSize: "14px" }} />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Relatives Phone Number</label>
              <input type="tel" style={{ width: "100%", boxSizing: "border-box", height: "40px", border: "1px solid #ccc", borderRadius: "4px", padding: "0 10px", fontSize: "14px" }} />
            </div>
          </div>

          {/* Relative Email */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Relative's Email</label>
            <input type="email" style={{ width: "100%", boxSizing: "border-box", height: "40px", border: "1px solid #ccc", borderRadius: "4px", padding: "0 10px", fontSize: "14px" }} />
          </div>

          {/* Health Situation */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Health Situation &amp; Any Sickness Or Medical Condition</label>
            <textarea rows={4} style={{ width: "100%", boxSizing: "border-box", height: "74px", border: "1px solid #ccc", borderRadius: "4px", padding: "8px 10px", fontSize: "14px", resize: "vertical" }} />
          </div>

          {/* Address */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Address</label>
            <textarea rows={4} style={{ width: "100%", boxSizing: "border-box", height: "74px", border: "1px solid #ccc", borderRadius: "4px", padding: "8px 10px", fontSize: "14px", resize: "vertical" }} />
          </div>

          {/* Nature of problem */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Nature of the problem</label>
            <textarea rows={4} style={{ width: "100%", boxSizing: "border-box", height: "74px", border: "1px solid #ccc", borderRadius: "4px", padding: "8px 10px", fontSize: "14px", resize: "vertical" }} />
          </div>

          {/* How long */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>How long has this been going on?</label>
            <input type="text" style={{ width: "100%", boxSizing: "border-box", height: "40px", border: "1px solid #ccc", borderRadius: "4px", padding: "0 10px", fontSize: "14px" }} />
          </div>

          {/* Effect on daily life */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Effect on daily life</label>
            <input type="text" style={{ width: "100%", boxSizing: "border-box", height: "40px", border: "1px solid #ccc", borderRadius: "4px", padding: "0 10px", fontSize: "14px" }} />
          </div>

          {/* Hospitalized + Medical devices */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Ever hospitalized?</label>
              <select style={{ width: "100%", boxSizing: "border-box", height: "40px", border: "1px solid #ccc", borderRadius: "4px", padding: "0 10px", fontSize: "14px", background: "#fff" }}>
                <option value=""></option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div>
              <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Using any medical devices?</label>
              <select style={{ width: "100%", boxSizing: "border-box", height: "40px", border: "1px solid #ccc", borderRadius: "4px", padding: "0 10px", fontSize: "14px", background: "#fff" }}>
                <option value=""></option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>

          {/* Zoom availability */}
          <div style={{ marginBottom: "16px" }}>
            <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Zoom availability (time zones / preferred windows)</label>
            <input type="text" style={{ width: "100%", boxSizing: "border-box", height: "40px", border: "1px solid #ccc", borderRadius: "4px", padding: "0 10px", fontSize: "14px" }} />
          </div>

          {/* Additional Comments */}
          <div style={{ marginBottom: "24px" }}>
            <label style={{ display: "block", fontSize: "13px", color: "#555", marginBottom: "4px" }}>Additional Comments</label>
            <textarea rows={4} style={{ width: "100%", boxSizing: "border-box", height: "74px", border: "1px solid #ccc", borderRadius: "4px", padding: "8px 10px", fontSize: "14px", resize: "vertical" }} />
          </div>

          {/* Submit */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <button style={{ background: "#c9a227", color: "#fff", border: "none", borderRadius: "6px", padding: "12px 60px", fontSize: "15px", fontWeight: "600", cursor: "pointer", letterSpacing: "0.3px" }}>
              Submit
            </button>
          </div>

        </div>
      </section>
    </section>
    
  )
}