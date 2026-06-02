export default function Give() {
  const bankDetails = [
    {
      name: 'Axis Bank',
      logo: 'AXIS BANK',
      logoColor: '#961013',
      holderName: 'ANKUR NARULA MINISTRY SOCIETY',
      accountNo: '924010075067074',
      ifsc: 'UTIB0004459',
      branch: 'JALANDHAR'
    },
    {
      name: 'HDFC Bank',
      logo: 'HDFC BANK',
      logoColor: '#004C8F',
      holderName: 'ANKUR NARULA MINISTRY SOCIETY',
      accountNo: '59130000000116',
      ifsc: 'HDFC0000341',
      branch: 'JALANDHAR'
    },
    {
      name: 'ICICI Bank',
      logo: 'ICICI Bank',
      logoColor: '#C41E3A',
      holderName: 'ANKUR NARULA MINISTRY SOCIETY',
      accountNo: '24680500116',
      ifsc: 'ICIC0002468',
      branch: 'JALANDHAR'
    }
  ];

  const qrCodes = [
    {
      name: 'ICICI Bank',
      subtitle: 'Ankur Narula Ministry Society',
      logoColor: '#C41E3A',
      paymentIcons: ['UPI', 'Paytm', 'PhonePe', 'GPay', 'BHIM']
    },
    {
      name: 'Axis Bank',
      logoColor: '#961013',
      paymentIcons: ['UPI', 'Paytm', 'PhonePe', 'GPay', 'BHIM']
    },
    {
      name: 'HDFC Bank',
      subtitle: 'ANKUR NARULA MINISTRY SOCIETY',
      logoColor: '#004C8F',
      paymentIcons: ['UPI', 'Paytm', 'PhonePe', 'GPay', 'BHIM']
    },
    {
      name: 'G Pay',
      subtitle: 'accepted here',
      subtitle2: 'Ankur Narula Ministry Society',
      logoColor: '#4285F4',
      isGPay: true,
      paymentIcons: ['UPI', 'Paytm', 'PhonePe', 'GPay', 'BHIM']
    }
  ];

  return (
    <div className="give-page">
      {/* Hero Section */}
      <section className="give-hero">
        <div className="give-hero-content">
          <h1 className="give-title">Give your Tithe & Offerings to the Lord</h1>
          <p className="give-verse">
            The Bible says, 'Give, and it shall be given unto you' (Luke 6:38). In God's
            Kingdom, giving is a seed that brings a multiplied harvest.
          </p>
          <p className="give-description">
            At Ankur Narula Ministries, your tithes, offerings, and seeds are used for
            God's kingdom— spreading the Gospel, building the house of God,
            restoring broken families, and helping the poor, widows, and orphans
            through charity and compassion.
          </p>
        </div>
      </section>

      {/* QR Code Section */}
      <section className="give-qr-section">
        <h2 className="give-section-title">Scan QR Code For Tithes & Offerings</h2>
        <div className="give-qr-grid">
          {qrCodes.map((qr, index) => (
            <div key={index} className="give-qr-card">
              <div className="give-qr-phone-frame">
                <div className="give-qr-phone-notch"></div>
                <div className="give-qr-content">
                  <div className="give-qr-bank-header">
                    {qr.isGPay ? (
                      <div className="give-qr-gpay-logo">
                        <span className="gpay-g">G</span>
                        <span className="gpay-text">Pay</span>
                        <span className="gpay-accepted">{qr.subtitle}</span>
                        {qr.subtitle2 && <span className="gpay-society">{qr.subtitle2}</span>}
                      </div>
                    ) : (
                      <>
                        <div 
                          className="give-qr-bank-logo"
                          style={{ color: qr.logoColor }}
                        >
                          {qr.name === 'ICICI Bank' && (
                            <span className="bank-logo-icici">
                              <span className="icici-i">i</span>ICICI Bank
                            </span>
                          )}
                          {qr.name === 'Axis Bank' && (
                            <span className="bank-logo-axis">
                              <span className="axis-icon">A</span>XIS BANK
                            </span>
                          )}
                          {qr.name === 'HDFC Bank' && (
                            <span className="bank-logo-hdfc">HDFC BANK</span>
                          )}
                        </div>
                        {qr.subtitle && (
                          <p className="give-qr-subtitle">{qr.subtitle}</p>
                        )}
                      </>
                    )}
                  </div>
                  <div className="give-qr-code">
                    <div className="qr-placeholder">
                      <div className="qr-pattern"></div>
                    </div>
                  </div>
                  <div className="give-qr-payment-icons">
                    {qr.paymentIcons.map((icon, i) => (
                      <span key={i} className={`payment-icon ${icon.toLowerCase()}`}>
                        {icon === 'UPI' && 'UPI'}
                        {icon === 'Paytm' && 'Paytm'}
                        {icon === 'PhonePe' && 'PhonePe'}
                        {icon === 'GPay' && 'GPay'}
                        {icon === 'BHIM' && 'BHIM'}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bank Details Section */}
      <section className="give-banks-section">
        <div className="give-banks-divider">
          <div className="give-banks-line"></div>
          <h2 className="give-banks-title">YOU CAN SEND OFFERING THROUGH WITH All This BANKS</h2>
          <div className="give-banks-line"></div>
        </div>
        <div className="give-banks-grid">
          {bankDetails.map((bank, index) => (
            <div key={index} className="give-bank-card">
              <div className="give-bank-logo" style={{ color: bank.logoColor }}>
                {bank.name === 'ICICI Bank' && (
                  <span className="bank-logo-icici">
                    <span className="icici-i">i</span>ICICI Bank
                  </span>
                )}
                {bank.name === 'Axis Bank' && (
                  <span className="bank-logo-axis">
                    <span className="axis-icon">A</span>XIS BANK
                  </span>
                )}
                {bank.name === 'HDFC Bank' && (
                  <span className="bank-logo-hdfc">{bank.logo}</span>
                )}
              </div>
              <div className="give-bank-details">
                <div className="give-bank-row">
                  <span className="give-bank-label">A/C HOLDER NAME</span>
                  <span className="give-bank-value">{bank.holderName}</span>
                </div>
                <div className="give-bank-row">
                  <span className="give-bank-label">ACCOUNT NO :</span>
                  <span className="give-bank-value account">{bank.accountNo}</span>
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

      {/* Footer Spacer */}
      <div className="give-footer-spacer"></div>
    </div>
  );
}
