import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header, Footer, ArrowButton, LineIcon } from "../Common/SiteChrome";
import hero from "../../Assets/Pictures/APPROVED HAULBY Cinematic Transport Scene — Clean for editable text.png";
import "./FindTransport.css";
const cats = [
  ["Vehicle Transport", "Cars, vans, motorcycles", "truck"],
  ["Courier Deliveries", "Parcels and urgent vans", "box"],
  ["Parcels & Pallets", "Packages and pallet loads", "box"],
  ["Furniture & Home Moves", "Bulky items and removals", "home"],
  ["Plant & Machinery", "Equipment and small plant", "truck"],
  ["Other Transport", "Specialist or unusual items", "route"],
];
const Head = ({ k, t, p, light = false }) => (
  <div className={`find-head ${light ? "light" : ""}`}>
    <span>{k}</span>
    <h2>{t}</h2>
    {p && <p>{p}</p>}
  </div>
);
export default function FindTransport() {
  const [selected, setSelected] = useState(0);
  return (
    <main className="find-page">
      <Header />
      <section
        className="find-hero"
        style={{ backgroundImage: `url("${hero}")` }}
      >
        <div className="find-shell">
          <small>HOME / FIND TRANSPORT</small>
          <h1>
            Find Transport.<em>Your way.</em>
          </h1>
          <p>
            Tell HAULBY what needs moving. We’ll work to find a suitable
            transporter across the UK.
          </p>
          <ArrowButton href="#request">Start Your Transport Quote</ArrowButton>
          <b>Vehicles • Deliveries • Furniture • Freight • Machinery</b>
        </div>
      </section>
      <section className="find-request" id="request">
        <div className="find-shell">
          <Head
            k="START A TRANSPORT REQUEST"
            t="What do you need moving?"
            p="Select the closest category. Your next steps collect the full journey, item and access details."
          />
          <b>1 / SELECT YOUR TRANSPORT CATEGORY</b>
          <div className="find-categories">
            {cats.map(([t, p, i], n) => (
              <button
                className={selected === n ? "active" : ""}
                onClick={() => setSelected(n)}
                key={t}
              >
                <i>
                  <LineIcon type={i} />
                </i>
                <span>
                  <strong>{t}</strong>
                  <small>{p}</small>
                </span>
              </button>
            ))}
          </div>
          <b>2 / YOUR JOURNEY</b>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>
              Collection postcode
              <input placeholder="e.g. PE11 4TA" />
            </label>
            <label>
              Delivery postcode
              <input placeholder="e.g. M1 1AE" />
            </label>
            <button>Continue To Transport Quote →</button>
          </form>
          <p className="find-note">
            <LineIcon type="shield" /> Tell us what needs moving. HAULBY works
            to find a suitable operator across the UK.
          </p>
        </div>
      </section>
      <section className="find-steps">
        <div className="find-shell">
          <Head
            k="HOW IT WORKS"
            t="From your request to the right transporter."
            p="One clear request makes it easier for relevant operators to decide whether they can carry your goods."
          />
          <div>
            {[
              ["01", "Tell us what needs moving"],
              ["02", "Review available quotations"],
              ["03", "Choose and arrange transport"],
            ].map(([n, t]) => (
              <article key={n}>
                <strong>{n}</strong>
                <h3>{t}</h3>
                <p>
                  Provide route, item, access and timing details, then compare
                  suitable offers.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="find-services">
        <div className="find-shell">
          <Head
            k="A CATEGORY FOR YOUR LOAD"
            t="Find a service that fits your transport job."
            p="The information operators need depends on whether you’re moving a vehicle, sending goods or arranging lifting assistance."
          />
          <div>
            {[
              ["Car and motorcycle collections", "Vehicle Transport"],
              ["Courier and parcel deliveries", "Courier Deliveries"],
              ["Furniture, home moves and freight", "All Transport Services"],
            ].map(([t, l]) => (
              <article key={t}>
                <i />
                <h3>{t}</h3>
                <p>
                  Describe the goods, condition, dimensions, route and any
                  specialist handling needs.
                </p>
                <Link to="/services">{l} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="find-dark">
        <div className="find-shell">
          <Head
            light
            k="UNDERSTANDING TRANSPORT QUOTES"
            t="What affects the price of transport?"
            p="Quotes reflect the work required for the specific journey and what the operator includes."
          />
          <div>
            {[
              [
                "Distance, route and dates",
                "Journey mileage, collection windows and flexibility can affect offers.",
              ],
              [
                "Size, weight and loading",
                "Payload, equipment, dimensions and site access can change the service needed.",
              ],
              [
                "Service and booking terms",
                "Compare loading help, inclusions, cancellation terms and relevant insurance details.",
              ],
            ].map(([t, p]) => (
              <article key={t}>
                <LineIcon type="route" />
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="find-prepare">
        <div className="find-shell">
          <Head
            k="BEFORE YOU START"
            t="What information should you prepare?"
            p="The full quote wizard asks for the information relevant to your chosen transport category."
          />
          <div>
            {[
              "Collection and delivery",
              "Items or vehicle details",
              "Handling requirements",
              "Photographs if helpful",
            ].map((x) => (
              <span key={x}>
                ✓ <b>{x}</b>
                <small>
                  Clear, accurate details help operators assess the request.
                </small>
              </span>
            ))}
          </div>
        </div>
      </section>
      <section className="find-faq">
        <div className="find-shell">
          <Head k="COMMON QUESTIONS" t="Questions before you request quotes" />
          <div>
            {[
              "Does HAULBY transport the goods itself?",
              "Can I compare more than one transport quote?",
              "Can I request UK-wide collections?",
              "What happens after I submit my transport request?",
            ].map((q) => (
              <article key={q}>
                <h3>{q}</h3>
                <p>
                  No. HAULBY is a marketplace. Independent operators provide the
                  agreed transport service.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="find-cta">
        <div className="find-shell">
          <Head
            light
            k="READY WHEN YOU ARE"
            t="Ready to find transport?"
            p="Tell us about your load and journey to start comparing suitable transport offers."
          />
          <div>
            <ArrowButton href="#request">
              Start Your Transport Quote
            </ArrowButton>
            <ArrowButton outline href="/services">
              Browse All Services
            </ArrowButton>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
