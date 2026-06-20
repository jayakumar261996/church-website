import { useEffect, useState } from "react";

const internationalBranches = [
  { name: "ANM OTTAWA, CANADA CHURCH", description: "West Merivale Plaza, 1489 Merivale Rd, Nepean, ON K2E 5P3\nSunday Meeting Time: 9:30 AM to 1:30 PM (Canada time)" },
  { name: "ANM LONDON CITY, CANADA CHURCH", description: "Prince William Room, 1057 Oxford Street East, London, Ontario ,  N5Y3L2\nSunday Meeting Time: 9:30 AM to 1:30 PM (Canada time)" },
  { name: "ANM CALGARY, CANADA CHURCH", description: "5th Avenue Building, 3016 5 Ave NE, Calgary, AB – T2A 6K4, Canada\nSunday Meeting Time: 7:30 AM to 11:30 AM (Calgary time)" },
  { name: "ANM NOVA SCOTIA, CANADA CHURCH", description: "65 Cromarty Dr, Dartmouth, NS, B3N 0G2 . Hampton Inn and Suites by Hilton Halifax Dartmouth\nSunday Meeting Time: 10:30 AM to 2:00 PM (Nova Scotia time)" },
  { name: "ANM TORONTO, CANADA CHURCH", description: "Eros Convention Center, 2360 Lucknow Dr, Mississauga, ON L5S 1H3\nSunday Meeting Time: 9:30 AM to 1:00 PM (Canada time)" },
  { name: "ANM SURREY, CANADA CHURCH", description: "Bethany Newton United Church, 14853 60 Avenue, Surrey, BC V35 3H8\nSunday Meeting Time: 6:30 AM to 10:30 AM (Surrey time)" },
  { name: "ANM EDMONTON, CANADA CHURCH", description: "987 St Catherine St, Montreal, QC H2X 1Z4\nSunday Meeting Time: 10:00 AM to 1:00 PM (Canada time)" },
  { name: "ANM HALIFAX, CANADA CHURCH", description: "159 Argyle St, Halifax, NS B3J 3B5\nSunday Meeting Time: 10:00 AM to 1:00 PM (Canada time)" },
  { name: "ANM REGINA, CANADA CHURCH", description: "258 Victoria Ave, Regina, SK S4R 3R8\nSunday Meeting Time: 10:00 AM to 1:00 PM (Canada time)" },
  { name: "ANM SASKATOON, CANADA CHURCH", description: "369 21st St E, Saskatoon, SK S7K 0B4\nSunday Meeting Time: 10:00 AM to 1:00 PM (Canada time)" },
  { name: "ANM LONDON, UK CHURCH", description: "10 Downing St, London, SW1A 2AA, UK\nSunday Meeting Time: 10:00 AM to 1:00 PM (UK time)" },
  { name: "ANM BIRMINGHAM, UK CHURCH", description: "150 Corporation St, Birmingham, B2 4BS, UK\nSunday Meeting Time: 10:00 AM to 1:00 PM (UK time)" },
  { name: "ANM MANCHESTER, UK CHURCH", description: "200 Oxford Rd, Manchester, M13 9WQ, UK\nSunday Meeting Time: 10:00 AM to 1:00 PM (UK time)" },
  { name: "ANM LEEDS, UK CHURCH", description: "300 The Headrow, Leeds, LS1 8TN, UK\nSunday Meeting Time: 10:00 AM to 1:00 PM (UK time)" },
  { name: "ANM GLASGOW, UK CHURCH", description: "400 Sauchiehall St, Glasgow, G2 3JD, UK\nSunday Meeting Time: 10:00 AM to 1:00 PM (UK time)" },
  { name: "ANM EDINBURGH, UK CHURCH", description: "500 Princes St, Edinburgh, EH2 2HN, UK\nSunday Meeting Time: 10:00 AM to 1:00 PM (UK time)" },
  { name: "ANM LIVERPOOL, UK CHURCH", description: "600 Bold St, Liverpool, L1 4DJ, UK\nSunday Meeting Time: 10:00 AM to 1:00 PM (UK time)" },
  { name: "ANM BRISTOL, UK CHURCH", description: "700 Park St, Bristol, BS1 5JB, UK\nSunday Meeting Time: 10:00 AM to 1:00 PM (UK time)" },
  { name: "ANM CARDIFF, UK CHURCH", description: "800 St Mary St, Cardiff, CF10 1DQ, UK\nSunday Meeting Time: 10:00 AM to 1:00 PM (UK time)" },
  { name: "ANM BELFAST, UK CHURCH", description: "900 Royal Ave, Belfast, BT1 1LH, UK\nSunday Meeting Time: 10:00 AM to 1:00 PM (UK time)" },
  { name: "ANM NEW YORK, USA CHURCH", description: "123 Broadway, New York, NY 10006, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM LOS ANGELES, USA CHURCH", description: "456 Main St, Los Angeles, CA 90001, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM CHICAGO, USA CHURCH", description: "789 Michigan Ave, Chicago, IL 60611, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM HOUSTON, USA CHURCH", description: "321 Main St, Houston, TX 77002, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM PHOENIX, USA CHURCH", description: "654 Washington St, Phoenix, AZ 85003, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM PHILADELPHIA, USA CHURCH", description: "987 Market St, Philadelphia, PA 19107, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM SAN ANTONIO, USA CHURCH", description: "159 Commerce St, San Antonio, TX 78205, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM SAN DIEGO, USA CHURCH", description: "258 Broadway, San Diego, CA 92101, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM DALLAS, USA CHURCH", description: "369 Elm St, Dallas, TX 75202, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM SAN JOSE, USA CHURCH", description: "480 First St, San Jose, CA 95113, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM AUSTIN, USA CHURCH", description: "500 Congress Ave, Austin, TX 78701, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM JACKSONVILLE, USA CHURCH", description: "600 Bay St, Jacksonville, FL 32202, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM FORT WORTH, USA CHURCH", description: "700 Main St, Fort Worth, TX 76102, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM COLUMBUS, USA CHURCH", description: "800 High St, Columbus, OH 43215, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM CHARLOTTE, USA CHURCH", description: "900 Trade St, Charlotte, NC 28202, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM INDIANAPOLIS, USA CHURCH", description: "100 N Meridian St, Indianapolis, IN 46204, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM SAN FRANCISCO, USA CHURCH", description: "200 Market St, San Francisco, CA 94105, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM SEATTLE, USA CHURCH", description: "300 Pike St, Seattle, WA 98101, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM DENVER, USA CHURCH", description: "400 16th St, Denver, CO 80202, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM WASHINGTON, USA CHURCH", description: "500 Pennsylvania Ave, Washington, DC 20001, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM NASHVILLE, USA CHURCH", description: "600 Broadway, Nashville, TN 37203, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM OKLAHOMA CITY, USA CHURCH", description: "700 N Broadway, Oklahoma City, OK 73102, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM EL PASO, USA CHURCH", description: "800 N Mesa St, El Paso, TX 79902, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM BOSTON, USA CHURCH", description: "900 Washington St, Boston, MA 02111, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM PORTLAND, USA CHURCH", description: "1000 SW Morrison St, Portland, OR 97205, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM LAS VEGAS, USA CHURCH", description: "1100 S Las Vegas Blvd, Las Vegas, NV 89104, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM MEMPHIS, USA CHURCH", description: "1200 Beale St, Memphis, TN 38103, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM LOUISVILLE, USA CHURCH", description: "1300 W Main St, Louisville, KY 40203, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM BALTIMORE, USA CHURCH", description: "1400 N Charles St, Baltimore, MD 21201, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM MILWAUKEE, USA CHURCH", description: "1500 W Wisconsin Ave, Milwaukee, WI 53233, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM ALBUQUERQUE, USA CHURCH", description: "1600 Central Ave SE, Albuquerque, NM 87106, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM TUCSON, USA CHURCH", description: "1700 S 6th Ave, Tucson, AZ 85713, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM FRESNO, USA CHURCH", description: "1800 Fresno St, Fresno, CA 93701, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM SACRAMENTO, USA CHURCH", description: "1900 J St, Sacramento, CA 95814, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM MESA, USA CHURCH", description: "200 N Center St, Mesa, AZ 85201, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM KANSAS CITY, USA CHURCH", description: "2100 Grand Blvd, Kansas City, MO 64108, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM ATLANTA, USA CHURCH", description: "2200 Peachtree Rd NW, Atlanta, GA 30309, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM OMAHA, USA CHURCH", description: "2300 Farnam St, Omaha, NE 68131, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM COLORADO SPRINGS, USA CHURCH", description: "2400 S Cascade Ave, Colorado Springs, CO 80903, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM RALEIGH, USA CHURCH", description: "2500 S Saunders St, Raleigh, NC 27603, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM MIAMI, USA CHURCH", description: "2600 Biscayne Blvd, Miami, FL 33137, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM CLEVELAND, USA CHURCH", description: "2700 Euclid Ave, Cleveland, OH 44115, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM TULSA, USA CHURCH", description: "2800 S Boston Ave, Tulsa, OK 74114, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM OAKLAND, USA CHURCH", description: "2900 Broadway, Oakland, CA 94611, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM MINNEAPOLIS, USA CHURCH", description: "3000 Hennepin Ave, Minneapolis, MN 55408, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM TAMPA, USA CHURCH", description: "3100 N Florida Ave, Tampa, FL 33603, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM NEW ORLEANS, USA CHURCH", description: "3200 Canal St, New Orleans, LA 70119, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM DETROIT, USA CHURCH", description: "3300 Woodward Ave, Detroit, MI 48201, USA\nSunday Meeting Time: 9:00 AM to 12:00 PM (USA time)" },
  { name: "ANM SYDNEY, AUSTRALIA CHURCH", description: "100 George St, Sydney, NSW 2000, Australia\nSunday Meeting Time: 10:00 AM to 1:00 PM (Australia time)" },
  { name: "ANM MELBOURNE, AUSTRALIA CHURCH", description: "200 Collins St, Melbourne, VIC 3000, Australia\nSunday Meeting Time: 10:00 AM to 1:00 PM (Australia time)" },
  { name: "ANM BRISBANE, AUSTRALIA CHURCH", description: "300 Queen St, Brisbane, QLD 4000, Australia\nSunday Meeting Time: 10:00 AM to 1:00 PM (Australia time)" },
  { name: "ANM PERTH, AUSTRALIA CHURCH", description: "400 St Georges Terrace, Perth, WA 6000, Australia\nSunday Meeting Time: 10:00 AM to 1:00 PM (Australia time)" },
  { name: "ANM DUBAI, UAE CHURCH", description: "Sheikh Zayed Rd, Dubai, UAE\nSunday Meeting Time: 10:00 AM to 1:00 PM (UAE time)" },
  { name: "ANM SINGAPORE CHURCH", description: "100 Orchard Rd, Singapore 238842\nSunday Meeting Time: 10:00 AM to 1:00 PM (Singapore time)" },
  { name: "ANM KUALA LUMPUR, MALAYSIA CHURCH", description: "101 Jalan Ampang, Kuala Lumpur, 50450, Malaysia\nSunday Meeting Time: 10:00 AM to 1:00 PM (Malaysia time)" },
];

const nationalBranches = [
  { name: "ANM KHAMBA, PUNJAB CHURCH", description: "Head Branch, Khamba, Punjab, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM JALANDHAR, PUNJAB CHURCH", description: "Model Town, Jalandhar, Punjab 144001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM LUDHIANA, PUNJAB CHURCH", description: "Gill Road, Ludhiana, Punjab 141003, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM AMRITSAR, PUNJAB CHURCH", description: "GT Road, Amritsar, Punjab 143001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM PATHANKOT, PUNJAB CHURCH", description: "Gandhi Nagar, Pathankot, Punjab 145001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM PATIALA, PUNJAB CHURCH", description: "Lehal Colony, Patiala, Punjab 147001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM BATHINDA, PUNJAB CHURCH", description: "Booth Sahib, Bathinda, Punjab 151001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM HOSHIARPUR, PUNJAB CHURCH", description: "Model Town, Hoshiarpur, Punjab 146001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM GURDASPUR, PUNJAB CHURCH", description: "Batala Road, Gurdaspur, Punjab 143521, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM KAPURTHALA, PUNJAB CHURCH", description: "Kapurthala, Punjab 146001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM CHANDIGARH CHURCH", description: "Sector 17, Chandigarh 160017, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM DELHI CHURCH", description: "Rohini, New Delhi, Delhi 110085, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM MUMBAI CHURCH", description: "Andheri East, Mumbai, Maharashtra 400069, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM BENGALURU CHURCH", description: "Whitefield, Bengaluru, Karnataka 560066, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM HYDERABAD CHURCH", description: "Kukatpally, Hyderabad, Telangana 500072, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM CHENNAI CHURCH", description: "Velachery, Chennai, Tamil Nadu 600042, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM KOLKATA CHURCH", description: "Salt Lake, Kolkata, West Bengal 700091, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM AHMEDABAD CHURCH", description: "Satellite Road, Ahmedabad, Gujarat 380015, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM PUNE CHURCH", description: "Kothrud, Pune, Maharashtra 411038, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM JAIPUR CHURCH", description: "Mansarovar, Jaipur, Rajasthan 302020, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM LUCKNOW CHURCH", description: "Gomti Nagar, Lucknow, Uttar Pradesh 226010, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM KANPUR CHURCH", description: "Kidwai Nagar, Kanpur, Uttar Pradesh 208011, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM NAGPUR CHURCH", description: "Dharampeth, Nagpur, Maharashtra 440010, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM INDORE CHURCH", description: "Vijay Nagar, Indore, Madhya Pradesh 452010, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM BHOPAL CHURCH", description: "MP Nagar, Bhopal, Madhya Pradesh 462011, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM CHHATTISGARH CHURCH", description: "Raipur, Chhattisgarh 492001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM HARYANA CHURCH", description: "Gurgaon, Haryana 122001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM HIMACHAL CHURCH", description: "Shimla, Himachal Pradesh 171001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM JAMMU CHURCH", description: "Gandhi Nagar, Jammu, Jammu and Kashmir 180004, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM KASHMIR CHURCH", description: "Lal Chowk, Srinagar, Jammu and Kashmir 190001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM ODISHA CHURCH", description: "Bhubaneswar, Odisha 751001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM BIHAR CHURCH", description: "Patna, Bihar 800001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM JHARKHAND CHURCH", description: "Ranchi, Jharkhand 834001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM NE CHURCH", description: "Shillong, Meghalaya 793001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM KERALA CHURCH", description: "Kochi, Kerala 682011, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM GOA CHURCH", description: "Panaji, Goa 403001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM RAJASTHAN CHURCH", description: "Udaipur, Rajasthan 313001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM UTTARAKHAND CHURCH", description: "Dehradun, Uttarakhand 248001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM ANDHRA CHURCH", description: "Visakhapatnam, Andhra Pradesh 530001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM TELANGANA CHURCH", description: "Warangal, Telangana 506001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM ASSAM CHURCH", description: "Guwahati, Assam 781001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM TRIPURA CHURCH", description: "Agartala, Tripura 799001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM MIZORAM CHURCH", description: "Aizawl, Mizoram 796001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM MANIPUR CHURCH", description: "Imphal, Manipur 795001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM NAGALAND CHURCH", description: "Kohima, Nagaland 797001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM MEGHALAYA CHURCH", description: "Tura, Meghalaya 794001, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM SIKKIM CHURCH", description: "Gangtok, Sikkim 737101, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
  { name: "ANM ARUNACHAL CHURCH", description: "Itanagar, Arunachal Pradesh 791111, India\nSunday Meeting Time: 9:00 AM to 12:30 PM (IST)" },
];

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

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} style={{ color: "#EFBF04", fontSize: "20px" }}>
          {star <= rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

export default function OurBranches() {
  const [search, setSearch] = useState("");
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    const layout = document.querySelector(".app-layout");
    if (layout) {
      layout.style.background =
        "linear-gradient(to bottom, #FFFFE9 0, #FFFFE9 1742px, transparent 1742px)";
    }
    return () => {
      if (layout) {
        layout.style.background = "";
      }
    };
  }, []);

  return (
    <section className="page-ministries p-8">
     
       <div className="ministries-image my-8">
        <img
          src="/img/branches.svg"
          alt="Ministries"
          className="w-full h-auto"
        />
      </div>
       <section className="branches-banner-section">
        <div className="branches-banner-content">
          <div className="branches-line" />
          <p className="banner-text">Head Branch Punjab Khambra </p>
          <div className="branches-line" />
        </div>
      </section>

       <div className="ministries-image my-8">
        <img
          src="/img/map.png"
          alt="Ministries"
          className="w-full h-auto"
          style={{ borderRadius: "30px" }}
        />
      </div>

       <div style={{ textAlign: "center", margin: "2rem 0" }}>
        <p style={{
          fontFamily: "Poppins",
          fontWeight: 400,
          fontSize: "29px",
          lineHeight: "100%",
          letterSpacing: "0%",
          textAlign: "center"
        }}>📍 Here is a location pin to help you find us!</p>
      </div>



      <section className="branches-banner-section">
        <div className="branches-banner-content">
          <div className="branches-line" />
          <p className="banner-text">{isOn ? "ANM INTERNATIONAL BRANCHES" : "ANM NATIONAL BRANCHES"}</p>
          <div className="branches-line" />
        </div>
      </section>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", margin: "1rem 0" }}>
        <div style={{ position: "relative", width: "560px" }}>
          <svg
            style={{ position: "absolute", left: "24px", top: "50%", transform: "translateY(-50%)" }}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#999"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search our churches in all locations..........."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "560px",
              height: "59px",
              borderRadius: "100px",
              border: "1px solid #ccc",
              padding: "0 24px 0 56px",
              fontFamily: "Poppins",
              fontSize: "14px",
              outline: "none"
            }}
          />
        </div>
        <div
          onClick={() => setIsOn(!isOn)}
          style={{
            width: "560px",
            height: "59px",
            borderRadius: "100px",
            border: "1px solid #ccc",
            background: "#122F4A",
            cursor: "pointer",
            position: "relative",
            display: "flex",
            alignItems: "center",
            overflow: "hidden"
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "4px",
              left: isOn ? "calc(50% + 2px)" : "4px",
              width: "calc(50% - 6px)",
              height: "calc(100% - 8px)",
              borderRadius: "100px",
              background: "#EFBF04",
              transition: "left 0.3s"
            }}
          />
          <span style={{
            flex: 1,
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: isOn ? 400 : 600,
            color: isOn ? "#5B718B" : "#5B718B",
            zIndex: 1,
            transition: "color 0.3s"
          }}>National</span>
          <span style={{
            flex: 1,
            textAlign: "center",
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: isOn ? 600 : 400,
            color: isOn ? "#5B718B" : "#5B718B",
            zIndex: 1,
            transition: "color 0.3s"
          }}>International</span>
        </div>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "16px",
        marginBottom: "6rem"
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 367px)",
          gap: "16px"
        }}>
            {(isOn ? internationalBranches : nationalBranches).filter((b) => b.name.toLowerCase().includes(search.toLowerCase()) || b.description.toLowerCase().includes(search.toLowerCase())).map((branch, i) => (
              <div key={i} style={{
                width: "367px",
                height: "195px",
                borderRadius: "20px",
                background: "#DBEAFE",
                padding: "20px",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
                gap: "8px"
              }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
                  <div style={{
                    width: "51px",
                    height: "51px",
                    borderRadius: "50%",
                    background: "#122F4A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <span style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "20px", lineHeight: "100%", letterSpacing: "0%", textAlign: "center", color: "#003370", whiteSpace: "nowrap" }}>
                    {branch.name}
                  </span>
                </div>
                <p style={{ fontFamily: "Poppins", fontWeight: 400, fontSize: "16px", lineHeight: "20px", letterSpacing: "0%", textAlign: "center", color: "#08091B", margin: 0, whiteSpace: "pre-line" }}>
                  {branch.description}
                </p>
              </div>
            ))}
        </div>
      </div>



    </section>
  );
}