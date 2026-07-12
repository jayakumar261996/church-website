
import React from 'react';



export default function Give() {
const bankDetails = [
{
name: 'Axis Bank',
logo: 'AXIS BANK',
logoColor: '#961013',
holderName: 'ANKUR NARULA MINISTRY SOCIETY',
accountNo: '924010075067074',
ifsc: 'UTIB0004459',
branch: 'JALANDHAR',
},
{
name: 'HDFC Bank',
logo: 'HDFC BANK',
logoColor: '#004C8F',
holderName: 'ANKUR NARULA MINISTRY SOCIETY',
accountNo: '59130000000116',
ifsc: 'HDFC0000341',
branch: 'JALANDHAR',
},
{
name: 'ICICI Bank',
logo: 'ICICI Bank',
logoColor: '#C41E3A',
holderName: 'ANKUR NARULA MINISTRY SOCIETY',
accountNo: '24680500116',
ifsc: 'ICIC0002468',
branch: 'JALANDHAR',
},
];

const qrCodes = [
{
name: 'ICICI Bank',
image: '/img/iPhone XR.svg',
},
{
name: 'Axis Bank',
image: '/img/iPhone XR.svg'
},
// {
// name: 'HDFC Bank',
// image: '/images/hdfc-qr.jpg',
// },
// {
// name: 'G Pay',
// image: '/images/gpay-qr.jpg',
// },
];

return ( <div className="give-page">
{/* Hero Section */} <section className="give-hero"> <div className="give-hero-content"> <h1 className="give-title" style={{ marginTop: "-30px" }}>
Give your Tithe & Offerings to the Lord </h1>


      <p className="give-verse" style={{
        width: "747px",
        height: "90px",
        margin: "0 auto",
        fontFamily: "Poppins",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "20px",
        lineHeight: "1.5",
        letterSpacing: "0%",
        textAlign: "center",
        color: "#333333"
      }}>
        The Bible says, 'Give, and it shall be given unto you' (Luke 6:38).
        In God's Kingdom, giving is a seed that brings a multiplied harvest.
      </p>

      <p className="give-description" style={{
        width: "732px",
        height: "150px",
        margin: "0 auto",
        fontFamily: "Poppins",
        fontWeight: 400,
        fontStyle: "normal",
        fontSize: "20px",
        lineHeight: "1.5",
        letterSpacing: "0%",
        textAlign: "center",
        color: "#333333"
      }}>
        At Ankur Narula Ministries, your tithes, offerings, and seeds are
        used for God's kingdom—spreading the Gospel, building the house of
        God, restoring broken families, and helping the poor, widows, and
        orphans through charity and compassion.
      </p>
    </div>
  </section>

  {/* QR Code Section */}
  <section className="give-qr-section" style={{ marginTop: "-60px" }}>
    <h2 className="give-section-title">
      Scan QR Code For Tithes & Offerings
    </h2>

    <div className="give-qr-grid" style={{ marginTop: "-60px" }}>
      {qrCodes.map((qr, index) => (
        <div key={index} className="give-qr-card">
          <img
            src={qr.image}
            alt={qr.name}
            className="give-qr-image"
            style={{ width: '405px', height: '811px', objectFit: 'contain' }}
          />
        </div>
      ))}
    </div>
  </section>

  {/* Bank Details Section */}
  <section className="give-banks-section" style={{ marginTop: "-140px" }}>
    <div className="give-banks-divider">
      <div className="give-banks-line"></div>
      <h2 className="give-banks-title">
        YOU CAN SEND OFFERING THROUGH WITH ALL <br /> THESE BANKS
      </h2>
      <div className="give-banks-line"></div>
    </div>

    <div className="give-banks-grid">
      {bankDetails.map((bank, index) => (
        <div key={index} className="give-bank-card" style={bank.name === 'Axis Bank' ? { borderColor: '#840000' } : bank.name === 'HDFC Bank' ? { borderColor: '#11328A' } : bank.name === 'ICICI Bank' ? { borderColor: '#FC8C06' } : {}}>
          <div
            className="give-bank-logo"
            style={{ color: bank.logoColor }}
          >
            {bank.name === 'ICICI Bank' && (
              <span className="bank-logo-icici">
                <img
                  src="/img/icici.svg"
                  alt="ICICI Bank Logo"
                  className="icici-logo-image"
                />
              </span>
            )}

            {bank.name === 'Axis Bank' && (
              <span className="bank-logo-axis">
                <img
                  src="/img/axisbank.svg"
                  alt="Axis Bank Logo"
                  className="axis-logo-image"
                />
                
              </span>
            )}

            {bank.name === 'HDFC Bank' && (
              <span className="bank-logo-hdfc"></span>
            )}
          </div>

          <div className="give-bank-details">
            <div className="give-bank-row" style={{ flexDirection: "column", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <span className="give-bank-label" style={{ fontFamily: "Poppins", fontWeight: 700, fontSize: "18px", lineHeight: "100%", letterSpacing: "0%", textAlign: "center", color: "#1a2d5a" }}>A/C HOLDER NAME</span>
              <span className="give-bank-value" style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: "16px", lineHeight: "100%", letterSpacing: "0%", textAlign: "center" }}>{bank.holderName}</span>
            </div>

            <div className="give-bank-row" style={{ justifyContent: "center", gap: "6px", marginBottom: "10px" }}>
              <span className="give-bank-label" style={{ color: "#333333", fontSize: "14px", fontWeight: "700" }}>ACCOUNT NO :</span>
              <span className="give-bank-value account" style={{ textAlign: "center" }}>
                {bank.accountNo}
              </span>
            </div>

            <div className="give-bank-row" style={{ justifyContent: "center", gap: "6px", marginBottom: "10px" }}>
              <span className="give-bank-label" style={{ color: "#333333", fontSize: "14px" }}>IFSC:</span>
              <span className="give-bank-value" style={{ textAlign: "center" }}>{bank.ifsc}</span>
            </div>

            <div className="give-bank-row" style={{ justifyContent: "center", gap: "6px", marginBottom: "10px" }}>
              <span className="give-bank-label" style={{ color: "#333333", fontSize: "14px" }}>BRANCH:</span>
              <span className="give-bank-value" style={{ textAlign: "center" }}>{bank.branch}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>

  <div className="give-footer-spacer"></div>
</div>

);
}
