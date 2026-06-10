
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
{/* Hero Section */} <section className="give-hero"> <div className="give-hero-content"> <h1 className="give-title">
Give your Tithe & Offerings to the Lord </h1>


      <p className="give-verse">
        The Bible says, 'Give, and it shall be given unto you' (Luke 6:38).
        In God's Kingdom, giving is a seed that brings a multiplied harvest.
      </p>

      <p className="give-description">
        At Ankur Narula Ministries, your tithes, offerings, and seeds are
        used for God's kingdom—spreading the Gospel, building the house of
        God, restoring broken families, and helping the poor, widows, and
        orphans through charity and compassion.
      </p>
    </div>
  </section>

  {/* QR Code Section */}
  <section className="give-qr-section">
    <h2 className="give-section-title">
      Scan QR Code For Tithes & Offerings
    </h2>

    <div className="give-qr-grid">
      {qrCodes.map((qr, index) => (
        <div key={index} className="give-qr-card">
          <img
            src={qr.image}
            alt={qr.name}
            className="give-qr-image"
          />
        </div>
      ))}
    </div>
  </section>

  {/* Bank Details Section */}
  <section className="give-banks-section">
    <div className="give-banks-divider">
      <div className="give-banks-line"></div>
      <h2 className="give-banks-title">
        YOU CAN SEND OFFERING THROUGH WITH ALL THESE BANKS
      </h2>
      <div className="give-banks-line"></div>
    </div>

    <div className="give-banks-grid">
      {bankDetails.map((bank, index) => (
        <div key={index} className="give-bank-card">
          <div
            className="give-bank-logo"
            style={{ color: bank.logoColor }}
          >
            {bank.name === 'ICICI Bank' && (
              <span className="bank-logo-icici">
                <span className="icici-i">i</span>ICICI Bank
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
              <span className="bank-logo-hdfc">{bank.logo}</span>
            )}
          </div>

          <div className="give-bank-details">
            <div className="give-bank-row">
              <span className="give-bank-label">A/C HOLDER NAME</span>
              <span className="give-bank-value">
                {bank.holderName}
              </span>
            </div>

            <div className="give-bank-row">
              <span className="give-bank-label">ACCOUNT NO :</span>
              <span className="give-bank-value account">
                {bank.accountNo}
              </span>
            </div>

            <div className="give-bank-row">
              <span className="give-bank-label">IFSC:</span>
              <span className="give-bank-value">{bank.ifsc}</span>
            </div>

            <div className="give-bank-row">
              <span className="give-bank-label">BRANCH:</span>
              <span className="give-bank-value">{bank.branch}</span>
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
