import PrayerRequestForm from "./prayerRequestForm";


export default function PrayerRequest() {
  return (
    <section className="page-ministries p-8">
      {/* <h1>Ministries</h1> */}
      <div className="ministries-image my-8">
        <img src="/img/prayerRequest.svg" alt="Ministries" className="w-full h-auto" />
      </div>
      <section className="page-events"  style={{ padding: '2rem' }}>
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
         <div style={{ width: "560px", margin: "2rem auto 3rem", padding: "0" }}>
  <PrayerRequestForm />
</div>
     
      
    </section>
    
    </section>
  )
}
