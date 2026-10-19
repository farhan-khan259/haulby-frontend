import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import heroImage from "../../Assets/Pictures/APPROVED HAULBY Cinematic Transport Scene — Clean for editable text.png";
import logoImage from "../../Assets/Pictures/APPROVED HAULBY Landscape Logo — transparent artwork.jpg";
import servicesImage from "../../Assets/Pictures/services.png";
import transportersImage from "../../Assets/Pictures/transporters.png";
import businessImage from "../../Assets/Pictures/business.png";
import trustImage from "../../Assets/Pictures/trust.png";
import ctaImage from "../../Assets/Pictures/cta.png";

const services = [
  [
    "truck",
    "Vehicle Transport",
    "Cars, motorcycles, vans and vehicle collections.",
  ],
  [
    "box",
    "Parcels & Couriers",
    "Same-day and scheduled delivery for personal and trade consignments.",
  ],
  [
    "home",
    "Furniture & Home Moves",
    "Single items, bulky goods and complete moves.",
  ],
  [
    "pallet",
    "Pallets & Road Freight",
    "Pallets, part loads, full loads and commercial freight services.",
  ],
  [
    "plant",
    "Plant & Machinery",
    "Equipment and machinery transport with the right vehicle.",
  ],
  [
    "route",
    "More Transport Services",
    "Explore all the categories available across HAULBY.",
  ],
];

const faqs = [
  [
    "Is it free to post a request?",
    "Yes. Customers can submit a transport request and compare quotations without paying to post.",
  ],
  [
    "Who will transport my goods?",
    "The independent operator you select is responsible for performing the agreed transport service.",
  ],
  [
    "Can businesses use HAULBY?",
    "Yes. Businesses can request repeat logistics, pallet, fleet, machinery and general transport support.",
  ],
  [
    "What types of transport can I request?",
    "Vehicles, parcels, pallets, furniture, removals, freight, plant and other supported categories.",
  ],
];

function Icon({ name = "route" }) {
  const paths = {
    truck: (
      <>
        <path d="M3 7h10v9H3zM13 10h4l3 3v3h-7z" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </>
    ),
    box: (
      <>
        <path d="m4 7 8-4 8 4-8 4z" />
        <path d="M4 7v10l8 4 8-4V7M12 11v10" />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    pallet: (
      <>
        <path d="M4 5h16v11H4zM8 5v11M16 5v11M3 20h18M6 16v4M18 16v4" />
      </>
    ),
    plant: (
      <>
        <path d="M5 17h12l3-4-5-5H9L5 12z" />
        <circle cx="8" cy="18" r="2" />
        <circle cx="16" cy="18" r="2" />
        <path d="m9 8 2-4 6 2-2 2" />
      </>
    ),
    shield: <path d="M12 3 4 6v5c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6z" />,
    star: (
      <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.4l6.1-.9z" />
    ),
    layers: (
      <>
        <path d="m12 3-9 5 9 5 9-5z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20c0-4 2-6 6-6s6 2 6 6M16 5c3 0 4 2 4 4s-1 4-4 4M17 14c3 .4 4 2.4 4 6" />
      </>
    ),
    route: (
      <>
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 6h5a3 3 0 0 1 0 6H9a3 3 0 0 0 0 6h8" />
      </>
    ),
  };
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] || paths.route}
    </svg>
  );
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Haulby home">
      <img src={logoImage} alt="HAULBY — Your transport. Sorted." />
    </a>
  );
}

function Button({ children, secondary = false, href = "#quote" }) {
  return (
    <a className={`button ${secondary ? "button-outline" : ""}`} href={href}>
      {children}
      <span>→</span>
    </a>
  );
}

function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <div className={`section-heading ${light ? "light" : ""}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main id="top">
      <header className="site-header">
        <div className="container nav-wrap">
          <Logo />
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <nav className={menuOpen ? "open" : ""}>
            <Link to="/find-transport">Find Transport</Link>
            <Link to="/services">Services</Link>
            <a href="#steps">How It Works</a>
            <a href="#business">For Businesses</a>
            <a href="#work">For Transporters</a>
            <a href="#login">Log In</a>
            <a href="#register" className="nav-register">
              Register
            </a>
          </nav>
        </div>
      </header>

      <section
        className="hero"
        style={{ backgroundImage: `url("${heroImage}")` }}
      >
        <div className="container hero-content">
          <span className="eyebrow">ANYTHING. ANYWHERE. NATIONWIDE.</span>
          <h1>
            The UK's Nationwide <em>Transport Marketplace</em>
          </h1>
          <p>
            From local deliveries to specialist transport, HAULBY works to get
            every suitable UK transport job covered through independent
            operators.
          </p>
          <div className="button-row">
            <Button>Get Quotes</Button>
            <Button secondary href="#work">
              Find Work
            </Button>
          </div>
          <div className="hero-points">
            <span>
              <Icon name="truck" />
              Road Freight
            </span>
            <span>
              <Icon name="box" />
              Parcels &amp; Pallets
            </span>
            <span>
              <Icon name="plant" />
              Vehicle Transport
            </span>
            <span>
              <Icon name="home" />
              Home Moves
            </span>
            <span>
              <Icon name="plant" />
              Plant &amp; Machinery
            </span>
          </div>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container trust-grid">
          <div>
            <Icon name="users" />
            <span>
              <strong>Nationwide coverage</strong>Across the UK
            </span>
          </div>
          <div>
            <Icon name="shield" />
            <span>
              <strong>Operator checks</strong>Clear verification standards
            </span>
          </div>
          <div>
            <Icon name="star" />
            <span>
              <strong>Compare quotes</strong>Choose the right offer
            </span>
          </div>
          <div>
            <Icon name="layers" />
            <span>
              <strong>All transport types</strong>One connected platform
            </span>
          </div>
        </div>
      </section>

      <section className="section quote-section" id="quote">
        <div className="container">
          <SectionTitle
            eyebrow="GET STARTED WITH HAULBY"
            title="Tell us what you need moved."
            text="A few details are all you need to begin comparing quotes from transport providers."
          />
          <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
            <label>
              Collection postcode
              <input
                placeholder="e.g. PE11 4TA"
                aria-label="Collection postcode"
              />
            </label>
            <label>
              Delivery postcode
              <input placeholder="e.g. M1 1AE" aria-label="Delivery postcode" />
            </label>
            <label>
              Transport type
              <select aria-label="Transport type">
                <option>Select a category</option>
                {services.map((s) => (
                  <option key={s[1]}>{s[1]}</option>
                ))}
              </select>
            </label>
            <button type="submit">
              Get Transport Quotes <span>→</span>
            </button>
          </form>
          <p className="form-note">
            Free to post a transport request&nbsp;&nbsp; • &nbsp;&nbsp;Compare
            independent quotes&nbsp;&nbsp; • &nbsp;&nbsp;Choose who carries your
            goods
          </p>
        </div>
      </section>

      <section
        className="section services-section"
        id="services"
        style={{ "--section-image": `url("${servicesImage}")` }}
      >
        <div className="container">
          <SectionTitle
            light
            eyebrow="ONE MARKETPLACE • EVERY MAJOR TRANSPORT CATEGORY"
            title="What do you need transporting?"
            text="From one parcel to specialist vehicle movements, tell us what is going and get matched to operators."
          />
          <div className="service-grid">
            {services.map(([icon, title, text]) => (
              <article className="service-card" key={title}>
                <span className="icon-box">
                  <Icon name={icon} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href="#quote">
                  Explore service <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section steps-section" id="steps">
        <div className="container">
          <SectionTitle
            eyebrow="SIMPLE FROM START TO FINISH"
            title="From request to delivery in 3 steps."
          />
          <div className="steps-grid">
            {[
              [
                "01",
                "Post your transport request",
                "Tell us what you are moving, where it needs collecting and when.",
              ],
              [
                "02",
                "Compare quotes from operators",
                "Review offers, service details and provider information.",
              ],
              [
                "03",
                "Book and stay informed",
                "Confirm the transport and follow its progress through your account.",
              ],
            ].map(([n, t, p]) => (
              <article className="step-card" key={n}>
                <strong>{n}</strong>
                <h3>{t}</h3>
                <p>{p}</p>
                <span className="arrow">→</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section work-section"
        id="work"
        style={{ backgroundImage: `url("${transportersImage}")` }}
      >
        <div className="container work-layout">
          <div>
            <SectionTitle
              light
              eyebrow="FOR OWNER DRIVERS & FLEET OPERATORS"
              title="Find work that fits your vehicle and your route."
              text="Discover available transport jobs, quote for suitable loads and manage bookings from one professional workspace."
            />
            <ul className="ticks">
              <li>Relevant load alerts</li>
              <li>Return-load opportunities</li>
              <li>Quotes and booking management</li>
              <li>Vehicle and fleet profiles</li>
            </ul>
            <Button href="#register">Find Transport Work</Button>
          </div>
          <div className="work-panel">
            <span>AVAILABLE TRANSPORT JOBS</span>
            <small>Example marketplace interface</small>
            {[
              [
                "Vehicle Transport",
                "Peterborough → Birmingham",
                "Car transporter • Collection flexible",
              ],
              [
                "Courier Delivery",
                "Lincoln → Nottingham",
                "3.5t van • Same-day option",
              ],
              [
                "Furniture Transport",
                "Manchester → Leeds",
                "Luton van • Two-person lift",
              ],
            ].map(([type, route, detail]) => (
              <article key={route}>
                <em>{type}</em>
                <strong>{route}</strong>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="business-section"
        id="business"
        style={{ "--business-image": `url("${businessImage}")` }}
      >
        <div className="container business-layout">
          <div className="business-copy">
            <SectionTitle
              eyebrow="BUILT FOR UK BUSINESSES"
              title="Make everyday transport easier to manage."
              text="Whether you move vehicles, sell furniture or ship pallets regularly, HAULBY gives your team a central place to request quotes and manage transport activity."
            />
            <ul className="check-list">
              <li>
                <b>Saved transport templates</b>
                <span>Repeat common jobs faster without starting again.</span>
              </li>
              <li>
                <b>Multiple users and locations</b>
                <span>Keep teams, collections and deliveries organised.</span>
              </li>
              <li>
                <b>Booking history and documents</b>
                <span>Review previous jobs and important records.</span>
              </li>
            </ul>
          </div>
          <div className="dashboard-card">
            <div className="dash-head">
              <span>MY TRANSPORT OVERVIEW</span>
              <b>Overview of your ongoing activity</b>
            </div>
            <div className="stats">
              <div>
                <strong>12</strong>
                <span>Open requests</span>
              </div>
              <div>
                <strong>28</strong>
                <span>Quotes received</span>
              </div>
              <div>
                <strong>9</strong>
                <span>Booked transport</span>
              </div>
            </div>
            <div className="dash-table">
              <span>RECENT SHIPMENTS</span>
              <p>
                <b>Car collection</b>
                <small>Booked</small>
              </p>
              <p>
                <b>3 pallets</b>
                <small>Quotes</small>
              </p>
              <p>
                <b>Furniture</b>
                <small>In progress</small>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section info-section"
        style={{ "--section-image": `url("${trustImage}")` }}
      >
        <div className="container">
          <SectionTitle
            light
            eyebrow="TRANSPORT WITH MORE CONFIDENCE"
            title="The information you need to choose well."
            text="HAULBY is the booking marketplace. Independent transport providers carry out the work, under their agreed terms."
          />
          <div className="info-grid">
            {[
              [
                "shield",
                "Operator onboarding",
                "Relevant checks and document requirements for service categories.",
              ],
              [
                "star",
                "Real booking reviews",
                "Feedback linked to genuine completed transport bookings.",
              ],
              [
                "layers",
                "Clear quote details",
                "Compare what is included before confirming your choice.",
              ],
              [
                "users",
                "Support and reporting",
                "Access help, report problems and keep a record of your booking.",
              ],
            ].map(([i, t, p]) => (
              <article key={t}>
                <Icon name={i} />
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <SectionTitle
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Questions before you get moving?"
          />
          <div className="accordion">
            {faqs.map(([q, a], i) => (
              <article className={openFaq === i ? "active" : ""} key={q}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span>
                    <b>{q}</b>
                    <small>{a}</small>
                  </span>
                  <i>{openFaq === i ? "−" : "+"}</i>
                </button>
                {openFaq === i && <p>{a}</p>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section arrange-section">
        <div className="container">
          <SectionTitle
            eyebrow="A MARKETPLACE FOR EVERYDAY LOADS"
            title="What can you arrange through HAULBY?"
            text="Different jobs need different equipment. Select the service that best describes your goods so operators can assess the journey."
          />
          <div className="arrange-grid">
            {[
              [
                "Vehicle collections and transport",
                "Arrange UK car, motorcycle and van collection, including private purchases.",
                "Explore Vehicle Transport",
              ],
              [
                "Parcels, furniture and deliveries",
                "Request parcel deliveries, bulky-item collections or furniture transport.",
                "Explore Courier Services",
              ],
              [
                "Freight, pallets and equipment",
                "Describe pallets, part loads, machinery or commercial freight.",
                "View Freight Services",
              ],
            ].map(([t, p, l]) => (
              <article key={t}>
                <h3>{t}</h3>
                <p>{p}</p>
                <a href="#services">
                  {l} <span>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section included-section">
        <div className="container">
          <SectionTitle
            light
            eyebrow="COMPARE TRANSPORT QUOTES"
            title="Know what is included before you book"
            text="A useful quote tells you more than the headline price. Review the proposed service and practical arrangements before choosing an operator."
          />
          <div className="included-grid">
            {[
              [
                "Check the transport arrangements",
                "Confirm collection and delivery addresses, timing, loading access, vehicle suitability and assistance.",
              ],
              [
                "Review terms and protection",
                "Look at the operator’s terms, cancellation rules, exclusions and the protection relevant to your goods.",
              ],
              [
                "Prepare for collection",
                "Present the vehicle or goods in the agreed condition and share access or loading details.",
              ],
            ].map(([t, p]) => (
              <article key={t}>
                <span></span>
                <h3>{t}</h3>
                <p>{p}</p>
                <a href="#quote">Read HAULBY Guide →</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container">
          <SectionTitle
            eyebrow="PRACTICAL QUESTIONS"
            title="About using the HAULBY marketplace"
          />
          <div className="about-grid">
            {[
              [
                "Is HAULBY a transport company?",
                "No. HAULBY is a marketplace connecting customers with independent transport operators who perform the agreed work.",
              ],
              [
                "Do I need to choose the vehicle?",
                "Describe your goods, dimensions and loading needs. Operators can assess whether their vehicle and equipment are suitable.",
              ],
              [
                "Can businesses arrange deliveries?",
                "Yes. Businesses can manage transport requests and booking records, including repeat or multi-location movement.",
              ],
              [
                "Will every request receive quotes?",
                "No job or route can guarantee a quote. HAULBY works to expose each request to suitable operators.",
              ],
            ].map(([t, p]) => (
              <article key={t}>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="final-cta"
        style={{ backgroundImage: `url("${ctaImage}")` }}
      >
        <div className="container">
          <SectionTitle
            light
            eyebrow=""
            title="Ready to move something?"
            text="Get transport quotes, or join the operators finding opportunities on HAULBY."
          />
          <div className="button-row">
            <Button>Get Transport Quotes</Button>
            <Button secondary href="#work">
              Find Work
            </Button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-intro">
          <span>ONE PLATFORM. THE WHOLE JOURNEY.</span>
          <h2>Connecting transport. Creating opportunity.</h2>
        </div>
        <div className="container footer-top">
          <div className="footer-brand">
            <Logo />
            <p>
              HAULBY connects customers and businesses with independent
              transport providers across the UK.
            </p>
            <a href="#top">haulby.co.uk</a>
          </div>
          {[
            [
              "FIND TRANSPORT",
              [
                "Get Quotes",
                "Vehicle Transport",
                "Parcels & Couriers",
                "Home Moves",
                "Pallets & Freight",
                "Plant & Machinery",
              ],
            ],
            [
              "FOR TRANSPORTERS",
              [
                "Find Work",
                "Membership Plans",
                "Operator Requirements",
                "Dashboard Opportunities",
                "Transporter Login",
              ],
            ],
            [
              "COMPANY",
              [
                "How It Works",
                "For Businesses",
                "About HAULBY",
                "Trust & Safety",
                "Help Centre",
              ],
            ],
            [
              "HELP & LEGAL",
              [
                "Contact Us",
                "Privacy Policy",
                "Cookie Policy",
                "Terms of Use",
                "Transporter Agreement",
                "Complaints Procedure",
              ],
            ],
          ].map(([h, links]) => (
            <div className="footer-col" key={h}>
              <h3>{h}</h3>
              {links.map((x) => (
                <a href="#top" key={x}>
                  {x}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="container footer-links">
          <span>
            <b>UK-WIDE COVERAGE</b>A marketplace for journeys across Britain
          </span>
          <span>
            <b>BUILT FOR TRANSPORTERS</b>Vehicle, courier and freight
            opportunities
          </span>
          <span>
            <b>TRANSPORT CHOICE</b>Compare independent transport providers
          </span>
        </div>
        <div className="container copyright">
          <span>© 2026 HAULBY. All rights reserved.</span>
          <span>
            HAULBY is a marketplace. Transport is provided by independent
            operators.
          </span>
          <a href="#top">Accessibility</a>
        </div>
      </footer>
    </main>
  );
}

export default Homepage;
