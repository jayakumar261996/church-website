export default function Ministries() {
const ministries = [
  {
    image: "/img/event1.svg",
    title: "PRAYER MOUNTAIN",
    description: "A place of prayer, fasting, and spiritual renewal.",
  },
  {
    image: "/img/event2.svg",
    title: "PRAYER HOUSE",
    description: "Dedicated to intercession and worship services.",
  },
  {
    image: "/img/event3.svg",
    title: "BIBLE COLLEGE",
    description: "Equipping believers through biblical education.",
  },
  {
    image: "/img/event3.svg",
    title: "SOFIA COLLEGE",
    description: "Providing quality education with Christian values.",
  },
  {
    image: "/img/event3.svg",
    title: "BRANCHES CHURCHES",
    description: "Extending the ministry through local congregations.",
  },
  {
    image: "/img/event3.svg",
    title: "SUNDAY SCHOOL",
    description: "Teaching children God's Word in a joyful environment.",
  },
  {
    image: "/img/event3.svg",
    title: "MULTIMEDIA COLLEGE",
    description: "Training students in media and creative technologies.",
  },
];
  return (
    <section className="page-ministries p-8">
      <div className="ministries-image my-8">
        <img
          src="/img/about.svg"
          alt="Ministries"
          className="w-full h-auto"
        />
      </div>

      {/* Heading Section */}
      <div className="flex items-center justify-center gap-4 my-8">
        <div className="section-heading-rule flex-1" />

        <img
          src="/img/cross.svg"
          alt="Gold Divider"
          style={{ width: "84px", height: "84px" }}
        />

        <h2 className="section-heading-alt-2-title whitespace-nowrap">
          Ministries of Over View
        </h2>

        <img
          src="/img/cross.svg"
          alt="Gold Divider"
          style={{ width: "84px", height: "84px" }}
        />

        <div className="section-heading-rule flex-1" />
      </div>

      {/* Grid Section */}
      <div className="events-grid" style={{ marginTop: "40px" }}>
  {ministries.map((event, index) => (
    <div className="event-card" key={index}>
      <img src={event.image} alt={event.title} />

      <div className="event-content">
        <h4>{event.title}</h4>

        <p className="event-description">
          {event.description}
        </p>

        <button className="event-btn">
          Learn More
        </button>
      </div>
    </div>
  ))}
</div>
       <section className="banner-section">
        <div className="banner-content">
          <div className="banner-rule" />
          <p className="banner-text">Our Head Church Jalanader</p>
          <div className="banner-rule" />
        </div>
      </section>
      <div className="ministries-image my-8">
        <img
          src="/img/head-church.svg"
          alt="Ministries"
          className="w-full h-auto"
        />
      </div>
      <div className="section-copy-center">
   Ankur Narula Ministries (The Church of Signs and Wonders) is the biggest and fastest growing church ministry in Punjab, India. Apostle Ankur Yoseph Narula is the Senior Pastor and Overseer in The Church of Signs and Wonders. The Church has become a channel of Salvation for India. Every Thursday and Sunday, our live services are broadcasted to millions around the globe through Anugrah TV, and the church is always filled more than capacity with overflows of people sitting outside the church on the roads and the empty plots. The church has become the biggest congregation of more than 300,000 people attending weekly services in The Church of Signs and Wonders.
          </div>

           <section className="banner-section">
        <div className="banner-content">
          <div className="banner-rule" />
          <p className="banner-text">Live Services</p>
          <div className="banner-rule" />
        </div>
        
      </section>
      <div className="ministries-image my-8">
        <img
          src="/img/head-church.svg"
          alt="Ministries"
          className="w-full h-auto"
        />
      </div>
       <section className="banner-section">
        <div className="banner-content">
          <div className="banner-rule" />
          <p className="banner-text">Our Worship Team</p>
          <div className="banner-rule" />
        </div>

      </section>

       <div className="ministries-image my-8">
        <img
          src="/img/head-church.svg"
          alt="Ministries"
          className="w-full h-auto"
        />
      </div>
        <div className="section-copy-center">
          Our Worship Team leads the church in powerful and spirit-filled praise and worship. With dedication and passion, they help create an atmosphere where everyone can encounter God, express their faith, and grow deeper in their relationship with Christ.
          </div>

    </section>
  );
}