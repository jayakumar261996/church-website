const books = [
  {
    id: 1,
    title: "Abhishikth Geeton Ki Mala, Hindi Book,",
    category: "Book",
    originalPrice: "₹250.00",
    salePrice: "₹199.00",
    rating: 3,
    image: "/img/store2.svg",
  },
  {
    id: 2,
    title: "Sanatan Parameswar Kaun Hai Hindi Religious",
    category: "Book",
    originalPrice: "₹250.00",
    salePrice: "₹199.00",
    rating: 4,
    image: "/img/store-1.svg",
  },
];



export default function Prayer() {
  return (
    <section className="page-ministries p-8">
     
      <div className="section-heading">
            <div className="gold-divider gold-divider-top">
              <img
  src="/img/cross.svg"
  alt="Gold Divider"
  className="gold-divider-image"
  style={{ width: "84px", height: "84px" }}
/>
              <h1 className="hero-title">PRAYER MOUNTAIN</h1>
              {/* <span className="gold-cross">✝</span> */}
             <img
  src="/img/cross.svg"
  alt="Gold Divider"
  className="gold-divider-image"
  style={{ width: "84px", height: "84px" }}
/>
            </div>

          </div>
           <div className="section-copy-center">
   Ankur Narula Ministries (The Church of Signs and Wonders) is the biggest and fastest growing church ministry in Punjab, India. Apostle Ankur Yoseph Narula is the Senior Pastor and Overseer in The Church of Signs and Wonders. The Church has become a channel of Salvation for India. Every Thursday and Sunday, our live services are broadcasted to millions around the globe through Anugrah TV, and the church is always filled more than capacity with overflows of people sitting outside the church on the roads and the empty plots. The church has become the biggest congregation of more than 300,000 people attending weekly services in The Church of Signs and Wonders.
          </div>
       <section className="banner-section">
        <div className="banner-content">
          <div className="banner-rule" />
          <p className="banner-text">SCENES OF PRAYER MOUNTAIN</p>
          <div className="banner-rule" />
        </div>
      </section>

       <div className="ministries-image my-8">
        <img
          src="/img/map.png"
          alt="Ministries"
          className="w-full h-auto radius-xl"
        />
      </div>

      <section className="banner-section">
        <div className="banner-content">
          <div className="banner-rule" />
          <p className="banner-text">What is Prayer Mountain?</p>
          <div className="banner-rule" />
          
        </div>
         <div className="section-copy-center">
   Ankur Narula Ministries (The Church of Signs and Wonders) is the biggest and fastest growing church ministry in Punjab, India. Apostle Ankur Yoseph Narula is the Senior Pastor and Overseer in The Church of Signs and Wonders. The Church has become a channel of Salvation for India. Every Thursday and Sunday, our live services are broadcasted to millions around the globe through Anugrah TV, and the church is always filled more than capacity with overflows of people sitting outside the church on the roads and the empty plots. The church has become the biggest congregation of more than 300,000 people attending weekly services in The Church of Signs and Wonders.
          </div>
        

      </section>

       <section className="banner-section">
        <div className="banner-content">
          <div className="banner-rule" />
          <p className="banner-text">What is Prayer Mountain?</p>
          <div className="banner-rule" />
          
        </div>
         <div className="section-copy-center">
   Ankur Narula Ministries (The Church of Signs and Wonders) is the biggest and fastest growing church ministry in Punjab, India. Apostle Ankur Yoseph Narula is the Senior Pastor and Overseer in The Church of Signs and Wonders. The Church has become a channel of Salvation for India. Every Thursday and Sunday, our live services are broadcasted to millions around the globe through Anugrah TV, and the church is always filled more than capacity with overflows of people sitting outside the church on the roads and the empty plots. The church has become the biggest congregation of more than 300,000 people attending weekly services in The Church of Signs and Wonders.
          </div>
        

      </section>

       <section className="banner-section">
        <div className="banner-content">
          <div className="banner-rule" />
          <p className="banner-text">TESTIMONIES FOR GODS GLORY</p>
          <div className="banner-rule" />
          
        </div>
         

      </section>



       <section className="banner-section">
        <div className="banner-content">
          <div className="banner-rule" />
          <p className="banner-text">JOIN US IN PRAYERS</p>
          <div className="banner-rule" />
          
        </div>
         

      </section>





    </section>
  );
}