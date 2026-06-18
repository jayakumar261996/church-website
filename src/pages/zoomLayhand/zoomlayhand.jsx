export default function ZoomLayHand() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="page-ministries p-8" style={{ backgroundColor: '#fff' }}>
      <div className="ministries-image" style={{ marginBottom: '0.5rem' }}>
        <img src="/img/zoomlayhand.svg" alt="Ministries" className="w-full h-auto" />
      </div>
      <section className="page-events" style={{ padding: '0.5rem 2rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fff' }}>
        <div className="section-heading">
          <div className="gold-divider gold-divider-top">
            <img src="/img/cross.svg" alt="Gold Divider" className="gold-divider-image" style={{ width: "84px", height: "84px" }} />
            <h1 className="hero-title" style={{ marginTop: '0.5rem' }}>Zoom Lay Hand</h1>
            <img src="/img/cross.svg" alt="Gold Divider" className="gold-divider-image" style={{ width: "84px", height: "84px" }} />
          </div>
        </div>

        <div style={{ width: "1140px", maxWidth: "100%", margin: "0 auto 3rem", padding: "0" }}>
          <form className="prayer-form" onSubmit={handleSubmit}>

            <div className="form-row">
              <div className="form-field">
                <label>First Name</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label>Gender</label>
                <select>
                  <option value="">Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Age</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label>Nationality</label>
                <input type="text" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Profession</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label>Email</label>
                <input type="email" />
              </div>
            </div>

            <div className="form-field">
              <label>Phone</label>
              <input type="tel" />
            </div>

            <div className="form-field">
              <label>Address</label>
              <textarea rows={5} />
            </div>

            <h2 style={{ textAlign: "center", fontSize: "24px", fontWeight: "600", color: "#344054", margin: "1rem 0" }}>Emergency Contact Optional</h2>

            <div className="form-row">
              <div className="form-field">
                <label>Relative's Name</label>
                <input type="text" />
              </div>
              <div className="form-field">
                <label>Relative's Phone Number</label>
                <input type="tel" />
              </div>
            </div>

            <div className="form-field">
              <label>Relative's Email</label>
              <input type="email" />
            </div>

            <div className="form-field">
              <label>Health Situation &amp; Any Sickness Or Medical Condition</label>
              <textarea rows={5} />
            </div>

            <div className="form-field">
              <label>Nature of the Problem</label>
              <textarea rows={5} />
            </div>

            <div className="form-field">
              <label>How Long Has This Been Going On?</label>
              <input type="text" />
            </div>

            <div className="form-field">
              <label>Effect on Daily Life</label>
              <input type="text" />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Ever Hospitalized?</label>
                <select>
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="form-field">
                <label>Using Any Medical Devices?</label>
                <select>
                  <option value="">Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label>Zoom Availability (Time Zones / Preferred Windows)</label>
              <input type="text" />
            </div>

            <div className="form-field">
              <label>Additional Comments</label>
              <textarea rows={5} />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </section>
  );
}
