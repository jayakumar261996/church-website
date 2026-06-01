import { Globe, Link2, Video, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section">
        <div className="footer-divider">
          <div className="footer-line" />
          <div className="footer-cross">✝</div>
          <div className="footer-line" />
        </div>

        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <img
                src="/logo.png"
                alt="Ankur Narula Ministries"
                className="footer-logo"
              />
              <h2 className="footer-heading">Ankur Narula Ministries</h2>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Contact Us</h3>
              <p className="footer-text">info@ankurnarula.org</p>
              <p className="footer-text">Phone: 0181-520-7777</p>
              <h3 className="footer-heading">Links</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Privacy Policy</a>
                <a href="#" className="footer-link">Terms and Conditions</a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Pages</h3>
              <div className="footer-links">
                <a href="#" className="footer-link">Branches</a>
                <a href="#" className="footer-link">Prayer Request</a>
                <a href="#" className="footer-link">Give</a>
                <a href="#" className="footer-link">Prayer Mountain</a>
                <a href="#" className="footer-link">Prayer House</a>
                <a href="#" className="footer-link">Sunday School</a>
                <a href="#" className="footer-link">Bible College</a>
                <a href="#" className="footer-link">Sophia College</a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Social Media Platforms</h3>
              <div className="footer-socials">
                <a href="#" className="social-button social-button--gradient">
                  <Globe size={20} />
                </a>
                <a href="#" className="social-button social-button--blue">
                  <Link2 size={20} />
                </a>
                <a href="#" className="social-button social-button--red">
                  <Video size={20} />
                </a>
                <a href="#" className="social-button social-button--sky">
                  <MessageCircle size={20} />
                </a>
              </div>
              <h3 className="footer-heading">Locate Us</h3>
              <div className="footer-map">
                <img
                  src="/map.png"
                  alt="Location Map"
                  className="footer-map-image"
                />
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms and Conditions</a>
            </div>
            <div className="footer-bottom-note">
              © 2026 Ankur Narula Ministries. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}