export default function Contact() {
  return (
    <section className="page-contact">
      <div className="contact-container">

        <div className="contact-top">
          <div className="contact-image">
            <img
              src="/images/contact.jpg"
              alt="Contact"
            />
          </div>

          <div className="contact-form-wrapper">
            <h1 className="contact-title">
              We Love To Hear
              <br />
              From You.
            </h1>

            <p className="contact-subtitle">
              Stay Connected With Us
            </p>

            <form className="contact-form">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />

              <div className="phone-row">
                <select>
                  <option>IND</option>
                </select>

                <input
                  type="text"
                  placeholder="+91 (000) 000-0000"
                />
              </div>

              <input
                type="email"
                placeholder="Enter Your Email"
              />

              <textarea
                rows="5"
                placeholder="Type here..."
              />

              <button type="submit">
                Submit Now
              </button>
            </form>
          </div>
        </div>

        <div className="section-divider">
          <span />
          <h2>Contact Information</h2>
          <span />
        </div>

        <p className="section-description">
          Send Us Your Prayer Request Believing for God's
          Urgent Intervention and Miracles.
        </p>

        <div className="contact-info-card">
          <div className="info-item">
            <h4>General inquiries & prayer</h4>
            <p>info@ankurnarula.org</p>
            <p>Prayer@ankurnarula.org</p>
          </div>

          <div className="info-item">
            <h4>Hospital prayer line</h4>
            <p>anmhospitalprayerline@gmail.com</p>
          </div>

          <div className="info-item">
            <h4>Emergency prayers</h4>
            <p>anmemergencyprayer@gmail.com</p>
          </div>

          <div className="info-item">
            <h4>Phone & Address</h4>
            <p>0181 520 7777</p>
          </div>
        </div>

        <div className="section-divider">
          <span />
          <h2>Address</h2>
          <span />
        </div>

        <p className="contact-address">
          Ankur Narula Ministries, Village Khambra,
          Nakodar Rd, Near T.V Tower,
          Jalandhar, Punjab - 144026
        </p>
      </div>
    </section>
  )
}