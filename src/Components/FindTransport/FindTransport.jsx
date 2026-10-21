import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
const Head = ({ k, t, p, light = false, bar = false }) => (
  <div className={`find-head${light ? " light" : ""}${bar ? " has-bar" : ""}`}>
    <span>{k}</span>
    <h2>{t}</h2>
    {p && <p>{p}</p>}
  </div>
);
export default function FindTransport() {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();

  const continueQuote = (event) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    navigate("/quote/new", {
      state: {
        category: cats[selected][0],
        collectionPostcode: values.get("collectionPostcode"),
        deliveryPostcode: values.get("deliveryPostcode"),
      },
    });
  };
  return (
    <main className="find-page">
      <Header />
      <section
        className="find-hero"
        style={{ backgroundImage: `url("${hero}")` }}
      >
        <div className="find-shell">
          <span className="find-hero-eyebrow">
            ANYTHING. ANYWHERE. NATIONWIDE.
          </span>
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
            bar
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
          <form onSubmit={continueQuote}>
            <label>
              Collection postcode
              <input name="collectionPostcode" placeholder="e.g. PE11 4TA" required />
            </label>
            <label>
              Delivery postcode
              <input name="deliveryPostcode" placeholder="e.g. M1 1AE" required />
            </label>
            <button type="submit">Continue To Transport Quote →</button>
          </form>
          <p className="find-note">
            <LineIcon type="shield" /> Tell us what needs moving. HAULBY works
            to find a suitable operator across the UK; transport is confirmed
            once an operator accepts.
          </p>
        </div>
      </section>
      <section className="find-steps">
        <div className="find-shell">
          <Head
            k="THE QUOTATION JOURNEY"
            t="From your request to the right transporter."
            p="One clear request makes it easier for relevant operators to decide whether they can carry your goods."
          />
          <div>
            {[
              ["01", "Tell us what needs moving", "Choose a service and enter route, load, access and timing details."],
              ["02", "Review available quotations", "Compare the price, service scope, operator information and terms."],
              ["03", "Choose and arrange transport", "Select the option that works for you and confirm the agreed booking."],
            ].map(([n, t, p]) => (
              <article key={n}>
                <strong>{n}</strong>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="find-services">
        <div className="find-shell">
          <Head
            bar
            k="A CATEGORY FOR YOUR LOAD"
            t="Find a service that fits your transport job."
            p="Tell us what you’re moving, its dimensions and any access restrictions so an appropriately equipped operator can quote."
          />
          <div>
            {[
              ["Car and motorcycle collections", "Post the make, model, condition, pickup location and any loading restrictions.", "Vehicle Transport", "/services/vehicle-transport"],
              ["Courier and parcel deliveries", "Explain quantities, dimensions, deadlines and whether you need a dedicated van.", "Courier Deliveries", "/services/courier-deliveries"],
              ["Furniture, home moves and freight", "Describe the items, weight, access, carrying help and any specialist vehicle needs.", "All Transport Services", "/services"],
            ].map(([t, p, l, href]) => (
              <article key={t}>
                <i />
                <h3>{t}</h3>
                <p>{p}</p>
                <Link to={href}>{l} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="find-dark">
        <div className="find-shell">
          <Head
            light
            bar
            k="UNDERSTANDING TRANSPORT QUOTES"
            t="What affects the price of transport?"
            p="Quotes reflect the work required for the specific journey and what the operator includes."
          />
          <div>
            {[
              [
                "Distance, routes and dates",
                "Journey mileage, collections, delivery windows and flexibility can affect offers and availability.",
                "route",
              ],
              [
                "Size, weight and loading",
                "Vehicle payload, equipment, item dimensions, stairs or site access can change the service needed.",
                "truck",
              ],
              [
                "Service and booking terms",
                "Compare the operator's loading plan, equipment, service inclusions, cancellation terms and relevant insurance details.",
                "shield",
              ],
            ].map(([t, p, icon]) => (
              <article key={t}>
                <LineIcon type={icon} />
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
              [
                "Collection and delivery",
                "Postcodes, available dates and access information",
              ],
              [
                "Items or vehicle details",
                "What needs moving, including quantity, size and condition",
              ],
              [
                "Handling requirements",
                "Loading assistance, stairs, tail lifts or specialist equipment",
              ],
              [
                "Photographs if helpful",
                "Images of unusual loads or difficult access situations",
              ],
            ].map(([title, text]) => (
              <span key={title}>
                <i aria-hidden="true">✓</i>
                <span>
                  <b>{title}</b>
                  <small>{text}</small>
                </span>
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
              [
                "Does HAULBY transport the goods itself?",
                "No. HAULBY is a marketplace. The independent transport operator you choose carries out the agreed job.",
              ],
              [
                "Can I compare more than one transport quote?",
                "We work to source suitable quotes for your request, widening the search when needed. You choose which offer to accept.",
              ],
              [
                "Can I request UK-wide collections?",
                "Post your journey anywhere in the UK. HAULBY works to match it with suitable operators, including harder-to-cover routes.",
              ],
              [
                "What happens after I submit my transport request?",
                "The request can be reviewed by relevant operators. You can then consider any offers and decide whether to book.",
              ],
            ].map(([question, answer]) => (
              <article key={question}>
                <h3>{question}</h3>
                <p>{answer}</p>
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
