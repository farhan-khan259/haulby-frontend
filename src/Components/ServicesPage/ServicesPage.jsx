import React from "react";
import { Link } from "react-router-dom";
import { Header, Footer, ArrowButton, LineIcon } from "../Common/SiteChrome";
import hero from "../../Assets/Pictures/APPROVED HAULBY Cinematic Transport Scene — Clean for editable text.png";
import vehicleImage from "../../Assets/Pictures/HAULBY Visual Asset 01 _ 1376×768 _ KEEP SOURCE.png";
import courierImage from "../../Assets/Pictures/HAULBY Visual Asset 02 _ 1376×768 _ KEEP SOURCE.png";
import parcelsImage from "../../Assets/Pictures/HAULBY Visual Asset 03 _ 1376×768 _ KEEP SOURCE.png";
import furnitureImage from "../../Assets/Pictures/HAULBY Visual Asset 04 _ 1376×768 _ KEEP SOURCE.png";
import machineryImage from "../../Assets/Pictures/HAULBY Visual Asset 05 _ 1376×768 _ KEEP SOURCE.png";
import freightImage from "../../Assets/Pictures/HAULBY Visual Asset 13 _ 1376×768 _ KEEP SOURCE.png";
import carImage from "../../Assets/Pictures/HAULBY Visual Asset 06 _ 1376×768 _ KEEP SOURCE.png";
import motorcycleImage from "../../Assets/Pictures/HAULBY Visual Asset 07 _ 1376×768 _ KEEP SOURCE.png";
import vanImage from "../../Assets/Pictures/HAULBY Visual Asset 08 _ 1376×768 _ KEEP SOURCE.png";
import recoveryImage from "../../Assets/Pictures/HAULBY Visual Asset 09 _ 1376×768 _ KEEP SOURCE.png";
import sameDayImage from "../../Assets/Pictures/HAULBY Visual Asset 10 _ 1376×768 _ KEEP SOURCE.png";
import palletImage from "../../Assets/Pictures/HAULBY Visual Asset 11 _ 1376×768 _ KEEP SOURCE.png";
import partLoadImage from "../../Assets/Pictures/HAULBY Visual Asset 12 _ 1376×768 _ KEEP SOURCE.png";
import houseMoveImage from "../../Assets/Pictures/HAULBY Visual Asset 14 _ 1376×768 _ KEEP SOURCE.png";
import officeImage from "../../Assets/Pictures/HAULBY Visual Asset 15 _ 1376×768 _ KEEP SOURCE.png";
import boatImage from "../../Assets/Pictures/HAULBY Visual Asset 16 _ 1376×768 _ KEEP SOURCE.png";
import driverImage from "../../Assets/Pictures/HAULBY Visual Asset 01 _ 1376×768 _ KEEP SOURCE.png";
import "./ServicesPage.css";
const services = [
  [
    "Vehicle Transport",
    "Cars, motorcycles, vans and pre-booked vehicle collections.",
    "/services/vehicle-transport",
    vehicleImage,
    ["Car & van transport", "Motorcycle transport", "Vehicle recovery", "Auction collections"],
    "truck",
  ],
  [
    "Courier Deliveries",
    "Same-day, scheduled and dedicated UK van deliveries.",
    "/services/courier-deliveries",
    courierImage,
    ["Same-day couriers", "Scheduled van deliveries", "Business multi-drop", "Dedicated van jobs"],
    "box",
  ],
  [
    "Parcels & Pallets",
    "Boxed goods, single pallets and trade consignments.",
    "/services/parcels-pallets",
    parcelsImage,
    ["Boxes & parcels", "Single pallets", "Multi-pallet loads", "Business consignments"],
    "truck",
  ],
  [
    "Furniture & Home Moves",
    "Bulky-item collections and house removals, each with its own service.",
    "/services/furniture-delivery",
    furnitureImage,
    ["Furniture collections", "Single-item transport", "Home Moves →", "Office removals"],
    "home",
  ],
  [
    "Plant & Machinery",
    "Compact machinery, tools and specialist plant collections.",
    "/services/plant-machinery",
    machineryImage,
    ["Mini excavators", "Equipment collections", "Garden machinery", "Suitable plant trailers"],
    "route",
  ],
  [
    "Road Freight",
    "Light commercial freight, part loads and larger road deliveries.",
    "/services/road-freight",
    freightImage,
    ["Light freight", "Part loads", "Palletised freight", "Rigid & artic loads"],
    "route",
  ],
];
const additionalServices = [
  [
    "Car Transport",
    "Independent transport options for private purchases, auctions and planned vehicle moves.",
    "/services/car-transport",
    carImage,
    ["Private car transport", "Auction collections", "Non-running cars", "Dealer and trade cars"],
    "truck",
  ],
  [
    "Motorcycle Transport",
    "Specialist motorcycle and scooter collection services with suitable loading arrangements.",
    "/services/motorcycle-transport",
    motorcycleImage,
    ["Motorcycle collections", "Scooter delivery", "Non-running motorbikes", "Dealer motorcycles"],
    "route",
  ],
  [
    "Van Transport",
    "Commercial van and minibus transport for purchases, collections and fleet movements.",
    "/services/van-transport",
    vanImage,
    ["Small van collections", "High-roof vans", "Non-running vans", "Fleet movements"],
    "truck",
  ],
  [
    "Vehicle Recovery",
    "Planned vehicle recovery and collection moves with appropriate transport equipment.",
    "/services/vehicle-recovery",
    recoveryImage,
    ["Pre-booked recovery", "Garage transfers", "Non-running vehicles", "Damaged vehicles"],
    "truck",
  ],
  [
    "Same-Day Courier",
    "Urgent courier collections and dedicated van transport where suitable operators have capacity.",
    "/services/same-day-courier",
    sameDayImage,
    ["Urgent documents", "Same-day collections", "Dedicated courier", "Emergency deliveries"],
    "box",
  ],
  [
    "Pallet Delivery",
    "Single and multi-pallet transport for warehouse, trade and business consignments.",
    "/services/pallet-delivery",
    palletImage,
    ["Single pallets", "Multi-pallet delivery", "Warehouse pallets", "Tail-lift requests"],
    "box",
  ],
  [
    "Part Loads & Backloads",
    "Flexible freight options for consignments sharing available vehicle capacity.",
    "/services/part-loads-backloads",
    partLoadImage,
    ["Part-load freight", "Return-load opportunities", "Mixed goods", "Regular part loads"],
    "route",
  ],
  [
    "House Moves",
    "Flexible removal services for homes, flats, students and smaller moves.",
    "/services/house-moves",
    houseMoveImage,
    ["House removals", "Flat moves", "Packing help", "Student moves"],
    "home",
  ],
  [
    "Office Removals",
    "Planned business relocations for furniture, equipment and workplace contents.",
    "/services/office-removals",
    officeImage,
    ["Small offices", "IT equipment", "Business furniture", "Multi-site moves"],
    "home",
  ],
  [
    "Boat & Trailer Transport",
    "Transport enquiries for small boats and trailers with suitable towing and loading equipment.",
    "/services/boat-trailer-transport",
    boatImage,
    ["Small boats", "Trailer repositioning", "Marina collections", "Specialist towing"],
    "route",
  ],
];
const allServices = [...services, ...additionalServices];
const Head = ({ k, t, p, light = false }) => (
  <div className={`services-head ${light ? "light" : ""}`}>
    <span>{k}</span>
    <h2>{t}</h2>
    {p && <p>{p}</p>}
  </div>
);
export default function ServicesPage() {
  return (
    <main className="services-page">
      <Header />
      <section
        className="services-hero"
        style={{ backgroundImage: `url("${hero}")` }}
      >
        <div className="services-shell">
          <span className="services-hero-eyebrow">
            ANYTHING. ANYWHERE. NATIONWIDE.
          </span>
          <h1>
            Every Move.<em>One Marketplace.</em>
          </h1>
          <p>
            From everyday deliveries to specialist transport, HAULBY connects
            your job with independent UK transport operators.
          </p>
          <div>
            <ArrowButton href="#all-services">Browse Services</ArrowButton>
            <ArrowButton outline href="/find-transport">
              Get Quotes
            </ArrowButton>
          </div>
          <small>Cars • Vans • Parcels • Pallets • Furniture • Machinery</small>
        </div>
      </section>
      <section className="services-picker">
        <div className="services-shell">
          <b>START WITH WHAT YOU NEED MOVED</b>
          <h2>Find the right transport category</h2>
          <div>
            {services.map(([t, , href]) => (
              <Link to={href} key={t}>
                {t}
                <span>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="services-list" id="all-services">
        <div className="services-shell">
          <Head
            k="OUR TRANSPORT SERVICES"
            t="Find the right way to move it."
            p="Explore all available transport services, then get quotes from independent transport operators."
          />
          <div className="services-cards">
            {allServices.map(([t, p, href, img, bullets, icon]) => (
              <article key={t}>
                <div
                  className="services-photo"
                  style={{ backgroundImage: `url("${img}")` }}
                />
                <div>
                  <div className="services-card-title">
                    <i><LineIcon type={icon} /></i>
                    <h3>{t}</h3>
                  </div>
                  <p>{p}</p>
                  <ul>
                    {bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                  <Link to={href}>Explore {t} →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="services-popular">
        <div className="services-shell">
          <Head
            light
            k="POPULAR TRANSPORT REQUESTS"
            t="More ways to get things moving"
            p="Find the category that matches your job, or start with a quote request and provide the details."
          />
          <div>
            {[
              "Car Recovery",
              "Auction Vehicle Collection",
              "Motorcycle Transport",
              "Furniture Delivery",
              "Pallet Collections",
              "Small Plant Transport",
              "Marketplace Items",
              "Part Loads & Backloads",
            ].map((x) => (
              <span key={x}>
                ↗ {x}
                <small>Explore transport options</small>
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="services-steps">
        <div className="services-shell">
          <Head
            k="HOW TO BOOK"
            t="From your request to a booked transporter."
          />
          <div>
            {[
              ["01", "Choose a transport service"],
              ["02", "Compare operator quotes"],
              ["03", "Confirm your booking"],
            ].map(([n, t]) => (
              <article key={n}>
                <strong>{n}</strong>
                <h3>{t}</h3>
                <p>
                  Provide clear details, review relevant offers and choose the
                  suitable operator.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="services-driver">
        <div className="services-shell">
          <div>
            <Head
              light
              k="DRIVE WITH HAULBY"
              t="Have a van or recovery truck?"
              p="Join the marketplace to find suitable work, quote for available jobs and make better use of your journeys."
            />
            <ArrowButton href="/#work">
              Explore Transporter Membership
            </ArrowButton>
          </div>
          <div style={{ backgroundImage: `url("${driverImage}")` }} />
        </div>
      </section>
      <section className="services-choices">
        <div className="services-shell">
          <Head
            k="CHOOSING A TRANSPORT SERVICE"
            t="Which category fits your transport request?"
          />
          <div>
            {services.slice(0, 3).map(([t, p, href]) => (
              <article key={t}>
                <h3>{t}</h3>
                <p>{p}</p>
                <Link to={href}>View Service →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="services-dark">
        <div className="services-shell">
          <Head
            light
            k="UNDERSTANDING TRANSPORT QUOTES"
            t="What can affect the price of a journey?"
          />
          <div>
            {[
              "Journey and route flexibility",
              "Goods and loading requirements",
              "Timing and service expectations",
            ].map((t) => (
              <article key={t}>
                <i />
                <h3>{t}</h3>
                <p>
                  Accurate route, item, access and timing details help operators
                  provide a relevant quote.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="services-questions">
        <div className="services-shell">
          <Head
            k="PRACTICAL QUESTIONS"
            t="Transport services: important questions"
          />
          <div>
            {[
              "Which transport service should I choose?",
              "Can I send more than one item?",
              "Can businesses arrange freight or deliveries?",
              "Why can quotations be different?",
            ].map((q) => (
              <article key={q}>
                <h3>{q}</h3>
                <p>
                  Describe the goods, route, dimensions and access so operators
                  can assess the request.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="services-cta">
        <div className="services-shell">
          <Head
            light
            k=""
            t="Ready to get moving?"
            p="Request transport quotes or find new jobs as an independent operator."
          />
          <div>
            <ArrowButton href="/find-transport">
              Get Transport Quotes
            </ArrowButton>
            <ArrowButton outline href="/#work">
              Find Work
            </ArrowButton>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
