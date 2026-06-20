import { href } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Ministries() {
const ministries = [
  {
    image: "/img/prayer-mountain.png",
    title: "PRAYER MOUNTAIN",
    description: "A peaceful place for prayer, fasting, and spiritual retreat",
    href: "/prayer",
  },
  {
    image: "/img/prayer-house.png",
    title: "PRAYER HOUSE",
    description: "A peaceful place for prayer, fasting, and spiritual retreat",
    href: "/prayer-house",
  },
  {
    image: "/img/bible-college.png",
    title: "BIBLE COLLEGE",
    description: "A peaceful place for prayer, fasting, and spiritual retreat",
    href: "/bible-college",
  },
  {
    image: "/img/sofia-college.png",
    title: "SOFIA COLLEGE",
    description: "A peaceful place for prayer, fasting, and spiritual retreat",
    href: "/sofia-college",
  },
  {
    image: "/img/branches-churches.png",
    title: "BRANCHES CHURCHES",
    description: "A peaceful place for prayer, fasting, and spiritual retreat",
    href: "/our-branches",
  },
  {
    image: "/img/sunday-school.png",
    title: "SUNDAY SCHOOL",
    description: "A peaceful place for prayer, fasting, and spiritual retreat.",
    href: "/sunday-school",
  },
  {
    image: "/img/branches-churches.png",
    title: "MULTIMEDIA COLLEGE",
    description: "A peaceful place for prayer, fasting, and spiritual retreat",
    href: "/multimedia-college",
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
      <div className="flex items-center my-8 px-0">
        <div className="line flex-1" />

        <img
          src="/img/cross.svg"
          alt="Gold Divider"
          style={{ width: "84px", height: "84px" }}
        />

        <h2 className="section-heading-alt-2-title whitespace-nowrap px-4">
          Ministries of Over View
        </h2>

        <img
          src="/img/cross.svg"
          alt="Gold Divider"
          style={{ width: "84px", height: "84px" }}
        />

        <div className="line flex-1" />
      </div>

      {/* Grid Section */}
      <div className="events-grid" style={{ marginTop: "40px", marginBottom: "80px"}}>
  {ministries.map((event, index) => (
    <div className="event-card" key={index}>
      <img src={event.image} alt={event.title} />

      <div className="event-content">
        <h4>{event.title}</h4>

        <p className="event-description">
          {event.description}
        </p>

        <Link to={event.href} className="event-btn">
          Learn More
        </Link>
      </div>
    </div>
  ))}
</div>
       <section className="banner-section">
        <div className="banner-content">
          <div className="branches-line" />
          <p className="banner-text">Our Head Church Jalanader</p>
          <div className="branches-line" />
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
          <div className="branches-line" />
          <p className="banner-text">Live Services</p>
          <div className="branches-line" />
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
          <div className="branches-line" />
          <p className="banner-text">Our Worship Team</p>
          <div className="branches-line" />
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