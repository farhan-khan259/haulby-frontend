import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../Assets/Pictures/HAULBY-logo-transparent.png";
import "./BusinessPortalLayout.css";

const nav = [
  ["Dashboard", "/business/dashboard"],
  ["Requests & Jobs", "/business/requests"],
  ["Bookings", "/business/bookings"],
  ["Quotes", "/business/approvals"],
  ["Messages", "/business/team"],
  ["Account & Settings", "/business/settings"],
];
const read = () => {
  try {
    return JSON.parse(localStorage.getItem("haulbyBusinessPortal") || "{}");
  } catch {
    return {};
  }
};

export function BusinessInput({ id, placeholder, type = "text" }) {
  const [value, setValue] = useState(() => read()[id] || "");
  const change = (e) => {
    setValue(e.target.value);
    localStorage.setItem(
      "haulbyBusinessPortal",
      JSON.stringify({ ...read(), [id]: e.target.value }),
    );
  };
  return (
    <input
      className="bp-input"
      type={type}
      value={value}
      onChange={change}
      placeholder={placeholder}
    />
  );
}

function Brand() {
  return (
    <Link className="bp-logo" to="/">
      <img src={logo} alt="HAULBY — Your transport. Sorted." />
    </Link>
  );
}
function Side({ open, close, active }) {
  return (
    <>
      <aside className={`bp-side ${open ? "open" : ""}`}>
        <button className="bp-close" onClick={close}>
          ×
        </button>
        <Brand />
        <strong>Business shipper portal</strong>
        <nav>
          {nav.map(([x, p]) => (
            <Link
              className={active === x ? "active" : ""}
              onClick={close}
              to={p}
              key={x}
            >
              {x}
            </Link>
          ))}
        </nav>
      </aside>
      {open && (
        <button
          className="bp-overlay"
          onClick={close}
          aria-label="Close menu"
        />
      )}
    </>
  );
}
function Header({ open, toggle }) {
  return (
    <header className="bp-header">
      <Brand />
      <b>BUSINESS SHIPPER PORTAL</b>
      <button
        className={`bp-menu ${open ? "open" : ""}`}
        onClick={toggle}
        aria-label="Toggle navigation"
      >
        <i />
        <i />
        <i />
      </button>
    </header>
  );
}

function Tracking() {
  return (
    <section className="bp-extra">
      <small>HAULBY LIVE DELIVERY VISIBILITY</small>
      <h2>Active shipment status</h2>
      <p>
        Monitor authorised in-progress customer deliveries; filter by state and
        follow exceptions.
      </p>
      <div className="bp-track">
        <div className="bp-map">
          <b>EXAMPLE MAP / LOCATION FROM API</b>
          <i>↗</i>
        </div>
        <div>
          <b>TRACKING STATUS&nbsp; • &nbsp;API REQUIRED</b>
          <p>
            Last GPS update: —<br />
            Vehicle position: —<br />
            Estimated arrival: —<br />
            Position accuracy: —
          </p>
        </div>
      </div>
    </section>
  );
}
function InvoicePromo({ detail = false }) {
  const go = useNavigate();
  return (
    <section className="bp-extra">
      <small>NEW: HAULBY OPERATOR CONTROLS</small>
      <h2>
        {detail
          ? "Bill your customer — if your business is supplier"
          : "Optional invoices to your own clients"}
      </h2>
      <p>
        Create a client invoice linked to a completed or agreed service. Check
        charges, supplier identity and issue date first.
      </p>
      <div className="bp-extra-actions">
        <button onClick={() => go("/business/invoices/new")}>
          {detail ? "Draft invoice from booking" : "My client invoices"} →
        </button>
        <button onClick={() => go("/business/invoices")}>
          Client invoice register →
        </button>
      </div>
    </section>
  );
}

export function BusinessShell({ children, active = "Dashboard" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bp-page">
      <Side open={open} close={() => setOpen(false)} active={active} />
      <Header open={open} toggle={() => setOpen(!open)} />
      {children}
    </div>
  );
}

export default function BusinessPortalLayout({
  title,
  description,
  cards = ["Details", "Updates", "Next action"],
  type = "detail",
  section = "DETAIL/STATUS VIEW",
  contentTitle = "Request information",
  active = "Dashboard",
  next = "/business/dashboard",
  button = "Continue",
  extras,
}) {
  const { pathname } = useLocation(),
    go = useNavigate();
  const [query, setQuery] = useState("");
  const fields =
    type === "settings"
      ? ["Name / details", "Applicable permissions", "Document or preference"]
      : [
          "Current status / authorised data",
          "Next action / supporting details",
        ];
  return (
    <BusinessShell active={active}>
      <main className="bp-main">
        <h1>{title}</h1>
        <p className="bp-desc">{description}</p>
        <nav className="bp-tabs">
          <Link to="/business/dashboard">OVERVIEW</Link>
          <Link to="/business/reports">ACTIVITY</Link>
          <Link to="/business/settings">SETTINGS</Link>
        </nav>
        <section className="bp-stats">
          {cards.map((x, i) => (
            <article className={i === 1 ? "mint" : ""} key={x}>
              <b>{x}</b>
              <span>
                {cards[0] === "Requests" ? "—" : "No live data loaded"}
              </span>
            </article>
          ))}
        </section>
        <section className="bp-card">
          <small>
            {type === "search"
              ? "DATA LIST/SEARCH"
              : type === "settings"
                ? "SETTINGS/MANAGEMENT"
                : section}
          </small>
          <h2>
            {type === "search"
              ? "Search and filter records"
              : type === "settings"
                ? "Manage your settings"
                : contentTitle}
          </h2>
          <p>{description}</p>
          <div className="bp-fields">
            {type === "search" ? (
              <>
                <input
                  className="bp-input"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by reference, name or status..."
                />
                <div>
                  {query &&
                  !"no live records connected".includes(query.toLowerCase())
                    ? "No matching records"
                    : "—  No live records connected"}
                </div>
                <div>— No live records connected</div>
              </>
            ) : (
              fields.map((x, i) => (
                <BusinessInput
                  key={x}
                  id={`${pathname}-${i}`}
                  placeholder={x}
                />
              ))
            )}
          </div>
        </section>
        <section className="bp-action">
          <button onClick={() => go(next)}>{button} →</button>
        </section>
        {extras === "booking" && (
          <>
            <InvoicePromo />
            <Tracking />
          </>
        )}
        {extras === "booking-detail" && (
          <>
            <InvoicePromo detail />
            <Tracking />
          </>
        )}
      </main>
    </BusinessShell>
  );
}
