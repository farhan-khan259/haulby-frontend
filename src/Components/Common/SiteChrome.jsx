import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../Assets/Pictures/APPROVED HAULBY Landscape Logo — transparent artwork.jpg";
import "./SiteChrome.css";

export function Brand() {
  return (
    <Link className="chrome-logo" to="/" aria-label="HAULBY home">
      <img src={logoImage} alt="HAULBY — Your transport. Sorted." />
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="chrome-header">
      <div className="chrome-container chrome-nav">
        <Brand />
        <button
          className="chrome-menu"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <i />
          <i />
          <i />
        </button>
        <nav className={open ? "is-open" : ""}>
        <Link to="/">Home</Link>
          <Link to="/find-transport">Find Transport</Link>
          <Link to="/services">Services</Link>
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/for-businesses">For Businesses</Link>
          <Link to="/how-it-works/transporters">For Transporters</Link>
          <Link to="/how-it-works/transporters">Log In</Link>
          <Link className="chrome-register" to="/how-it-works/transporters">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}

const columns = [
  [
    "FIND TRANSPORT",
    [
      ["Get Quotes", "/find-transport"],
      ["Vehicle Transport", "/services/vehicle-transport"],
      ["Parcels & Couriers", "/services/courier-deliveries"],
      ["Home Moves", "/services/house-moves"],
      ["Pallets & Freight", "/services/road-freight"],
      ["Plant & Machinery", "/services/plant-machinery"],
    ],
  ],
  [
    "FOR TRANSPORTERS",
    [
      ["Find Work", "/how-it-works/transporters"],
      ["Membership Plans", "/#work"],
      ["Operator Requirements", "/#work"],
      ["Backload Opportunities", "/#work"],
      ["Transporter Login", "/how-it-works/transporters"],
    ],
  ],
  [
    "COMPANY",
    [
      ["How It Works", "/how-it-works"],
      ["For Businesses", "/for-businesses"],
      ["About HAULBY", "/"],
      ["Trust & Safety", "/"],
      ["Help Centre", "/"],
    ],
  ],
  [
    "HELP & LEGAL",
    [
      ["Contact Us", "/"],
      ["Privacy Policy", "/"],
      ["Cookie Policy", "/"],
      ["Terms of Use", "/"],
      ["Transporter Agreement", "/"],
      ["Complaints Procedure", "/"],
    ],
  ],
];

export function Footer() {
  return (
    <footer className="chrome-footer">
      <div className="chrome-container chrome-intro">
        <span>ONE PLATFORM. THE WHOLE JOURNEY.</span>
        <h2>Connecting transport. Creating opportunity.</h2>
      </div>
      <div className="chrome-container chrome-footer-grid">
        <div className="chrome-brand">
          <Brand />
          <p>
            HAULBY connects customers and businesses with independent transport
            providers across the UK.
          </p>
          <Link to="/">haulby.co.uk</Link>
        </div>
        {columns.map(([title, links]) => (
          <div className="chrome-column" key={title}>
            <h3>{title}</h3>
            {links.map(([label, href]) => (
              <Link to={href} key={label}>
                {label}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className="chrome-container chrome-benefits">
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
      <div className="chrome-container chrome-copy">
        <span>© 2026 HAULBY. All rights reserved.</span>
        <span>
          HAULBY is a marketplace. Transport is provided by independent
          operators.
        </span>
        <Link to="/">Accessibility</Link>
      </div>
    </footer>
  );
}

export function ArrowButton({ children, href = "#quote", outline = false }) {
  return (
    <Link className={`chrome-button ${outline ? "outline" : ""}`} to={href}>
      {children}
      <span>→</span>
    </Link>
  );
}

export function LineIcon({ type = "truck" }) {
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
    route: (
      <>
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 6h5a3 3 0 010 6H9a3 3 0 000 6h8" />
      </>
    ),
    shield: <path d="M12 3 4 6v5c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6z" />,
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[type] || paths.truck}
    </svg>
  );
}
