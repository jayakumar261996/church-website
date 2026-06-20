import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Events() {
  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFE9";
    return () => { document.body.style.backgroundColor = ""; };
  }, []);
  const events = [
    {
      image: "/img/event1.svg",
      title: "CRUSADE",
      description: "Join us for powerful evangelistic gatherings.",
    },
    {
      image: "/img/event2.svg",
      title: "WORSHIP NIGHT",
      description: "An evening of praise and worship.",
    },
    {
      image: "/img/event3.svg",
      title: "CONFERENCE",
      description: "Annual leadership and spiritual growth conference.",
    },
  ];

  return (
    <section className="page-events p-8">
       <div className="flex items-center my-8 px-0">
          <div className="line flex-1" />
          <img
            src="/img/cross.svg"
            alt="Gold Divider"
            style={{ width: "84px", height: "84px" }}
          />
          <h1 className="section-heading-alt-2-title whitespace-nowrap px-4">Events</h1>
          <img
            src="/img/cross.svg"
            alt="Gold Divider"
            style={{ width: "84px", height: "84px" }}
          />
          <div className="line flex-1" />
        </div>

      <div className="events-grid" style={{ marginTop: "40px" }}>
        {events.map((event, index) => (
          <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="event-card">
              <img src={event.image} alt={event.title} />
            </div>
            <Link to="#" className="event-btn" style={{ marginTop: "25px" }}>Watch Now</Link>
          </div>
        ))}
      </div>


       <div className="flex items-center my-8 px-0" style={{ marginTop: "60px" }}>
           <div className="line flex-1" />
          <img
            src="/img/cross.svg"
            alt="Gold Divider"
            style={{ width: "84px", height: "84px" }}
          />
          <h1 className="section-heading-alt-2-title whitespace-nowrap px-4">Up Coming Events</h1>
          <img
            src="/img/cross.svg"
            alt="Gold Divider"
            style={{ width: "84px", height: "84px" }}
          />
           <div className="line flex-1" />
        </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "40px" }}>
        <div className="upcoming-event-card">
          <img src="/img/event1.svg" alt="Upcoming Event" />
        </div>
        <Link to="#" className="event-btn" style={{ marginTop: "25px" }}>Watch Now</Link>
        <div style={{ width: "1140px", minHeight: "513px", marginTop: "40px", textAlign: "center", lineHeight: "1.8", marginBottom : "20px"}}>
          <p style={{ fontSize: "18px"}}>HALLELUJAH!!</p>
          <p>We are delighted to share this blessed Good News that the anointed Man of God, Apostle Dr. Ankur Yoseph Narula, and Woman of God, Pastor Sonia Yoseph Narula will be coming to Pathankot on 11 June 2026 with the life-changing Gospel of Lord Jesus Christ.</p>
          <p>These powerful and grace-filled gatherings will be filled with the mighty presence of the Living God. As the Word of God is preached under the anointing of the Holy Spirit, many lives will experience divine healing, restoration, deliverance, peace, and freedom in Christ. Every chain of darkness shall be broken, hearts will be renewed, and many testimonies will arise through the power of Jesus Christ.</p>
          <p>This is not just a meeting, but a divine encounter with the Lord. You and your family are warmly invited to come with faith and expectation to witness the miraculous move and overflowing glory of God in Pathankot.</p>
          <p>Don't miss this opportunity—bring your family, friends, relatives, and loved ones. Because when Jesus enters your life, everything changes for the better.</p>
          <p style={{ fontSize: "18px"}}>HALLELUJAH!!</p>
          <div style={{ marginTop: "20px", marginBottom: "10px"}}>
            <p>Day: Thursday</p>
            <p>Date: 11 June, 2026</p>
            <p>Time: 6 PM to 10 PM</p>
            <p>Venue: Growth Center, Village Chacheli, Industrial Area, Near Pepsi Plant (Sujanpur), District Pathankot</p>
          </div>
          <p style={{ marginTop: "10px"}}>By:- Church Media Team</p>
        </div>
      </div>

    </section>
  )
}
