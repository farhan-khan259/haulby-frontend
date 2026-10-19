import React from "react";
import { Link } from "react-router-dom";
import { Header, Footer, ArrowButton, LineIcon } from "../Common/SiteChrome";
import hero from "../../Assets/Pictures/APPROVED HAULBY Cinematic Transport Scene — Clean for editable text.png";
import transporters from "../../Assets/Pictures/transporters.png";
import business from "../../Assets/Pictures/business.png";
import cta from "../../Assets/Pictures/cta.png";
import servicesImg from "../../Assets/Pictures/services.png";
import "./ServicesPage.css";
const services = [
  [
    "Vehicle Transport",
    "Cars, motorcycles, vans and pre-booked vehicle collections.",
    "/services/vehicle-transport",
    transporters,
  ],
  [
    "Courier Deliveries",
    "Same-day, scheduled and dedicated UK van deliveries.",
    "/services/courier-deliveries",
    cta,
  ],
  [
    "Parcels & Pallets",
    "Boxed goods, single pallets and trade consignments.",
    "/services/parcels-pallets",
    servicesImg,
  ],
  [
    "Furniture & Home Moves",
    "Bulky-item collections and house removals, each with its own service.",
    "/services/furniture-delivery",
    transporters,
  ],
  [
    "Plant & Machinery",
    "Compact machinery, tools and specialist plant collections.",
    "/services/plant-machinery",
    business,
  ],
  [
    "Road Freight",
    "Light commercial freight, part loads and larger road deliveries.",
    "/services/road-freight",
    cta,
  ],
];
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
            p="Six main service categories. Explore the options, then get quotes from independent transport operators."
          />
          <div className="services-cards">
            {services.map(([t, p, href, img], i) => (
              <article key={t}>
                <div
                  className="services-photo"
                  style={{ backgroundImage: `url("${img}")` }}
                />
                <div>
                  <i>
                    <LineIcon
                      type={i === 3 ? "home" : i === 2 ? "box" : "truck"}
                    />
                  </i>
                  <h3>{t}</h3>
                  <p>{p}</p>
                  <ul>
                    <li>UK-wide requests</li>
                    <li>Independent operator quotes</li>
                    <li>Clear booking details</li>
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
          <div style={{ backgroundImage: `url("${transporters}")` }} />
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
