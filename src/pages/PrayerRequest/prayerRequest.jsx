import PrayerRequestForm from "./prayerRequestForm";


export default function PrayerRequest() {
  return (
    <section className="page-ministries p-8">
      {/* <h1>Ministries</h1> */}
      <div className="ministries-image my-8">
        <img src="/img/prayerRequest.svg" alt="Ministries" className="w-full h-auto" />
      </div>
      <section className="page-events"  style={{ padding: '0.5rem 2rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="section-heading">
            <div className="gold-divider gold-divider-top">
              <img
  src="/img/cross.svg"
  alt="Gold Divider"
  className="gold-divider-image"
  style={{ width: "84px", height: "84px" }}
/>
              <h1 className="hero-title">How can we pray for You?</h1>
              {/* <span className="gold-cross">✝</span> */}
             <img
  src="/img/cross.svg"
  alt="Gold Divider"
  className="gold-divider-image"
  style={{ width: "84px", height: "84px" }}
/>
            </div>
          </div>
         <div style={{ width: "1140px", maxWidth: "100%", margin: "0.5rem auto 3rem", padding: "0" }}>
  <PrayerRequestForm />
</div>
     
      
    </section>
    
    </section>
  )
}
