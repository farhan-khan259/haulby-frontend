import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Assets/Pictures/APPROVED HAULBY Landscape Logo — transparent artwork.jpg";
import "./CustomerPortalLayout.css";

const sidebarLinks = [
  ["Dashboard", "/account/dashboard"],
  ["Requests & Jobs", "/account/requests"],
  ["Quotes", "/account/requests/demo/quotes"],
  ["Messages", "/account/requests/demo/messages"],
  ["Account & Settings", "/account/settings/profile"],
];

const fallbackCards = ["Details", "Updates", "Next action"];

export function PortalBrand() {
  return <Link className="cp-logo" to="/" aria-label="HAULBY home"><img src={logo} alt="HAULBY — Your transport. Sorted." /></Link>;
}

function Sidebar({ active = "Dashboard" }) {
  return <aside className="cp-sidebar">
    <PortalBrand />
    <strong className="cp-portal-name">Customer portal</strong>
    <nav>{sidebarLinks.map(([label, path]) => <Link className={label === active ? "active" : ""} to={path} key={label}>{label}</Link>)}</nav>
  </aside>;
}

function MobileHeader() {
  return <header className="cp-mobile-header"><PortalBrand /><strong>CUSTOMER PORTAL</strong></header>;
}

function TrackingPanel({ heading = "Your booking location", description = "Track driver location during active delivery and view the latest verified update." }) {
  return <section className="cp-extra-card cp-tracking-card">
    <span className="cp-kicker">HAULBY LIVE DELIVERY VISIBILITY</span>
    <h2>{heading}</h2><p>{description}</p>
    <div className="cp-tracking-grid">
      <div className="cp-map" aria-label="Example map placeholder"><small>EXAMPLE MAP / LOCATION FROM API</small><i className="map-dot teal"/><i className="map-dot gold"/><i className="map-arrow">↗</i><i className="map-route"/></div>
      <div className="cp-tracking-status"><strong>TRACKING STATUS&nbsp; • &nbsp;API REQUIRED</strong><p>Last GPS update: —<br/>Vehicle position: —<br/>Estimated arrival: —<br/>Position accuracy: —</p></div>
    </div>
    <div className="cp-milestones">Collected&nbsp; → &nbsp;In transit&nbsp; → &nbsp;Delivered</div>
  </section>;
}

function ProofPanel() {
  return <section className="cp-extra-card cp-proof-card">
    <span className="cp-kicker">DELIVERY EVIDENCE &amp; RECIPIENT SIGNATURE</span>
    <h2>View your proof of delivery</h2>
    <p>Available after a recorded handover. Signed evidence or an authorised no-signature exception is stored against the booking.</p>
    <div className="cp-proof-grid">
      <div><strong>RECIPIENT SIGNATURE</strong><p>— &nbsp;Awaiting a valid signed POD record</p></div>
      <div><strong>RECIPIENT &amp; DELIVERY RECORD</strong><p>Recipient: — &nbsp;&nbsp; Company / role: —<br/>Delivered at: — &nbsp;&nbsp; Photo evidence: —</p></div>
    </div>
    <button type="button">View / download POD PDF <span>→</span></button>
  </section>;
}

function MainContent({ type, section, contentTitle, description, rows }) {
  if (type === "evidence") return <div className="cp-content-card"><span className="cp-kicker">JOB EVIDENCE/DRIVER FLOW</span><h2>Complete work evidence</h2><p>{description}</p><div className="cp-checks">{["Collection completed", "Load secured", "Delivery confirmation"].map(x => <label key={x}><input type="checkbox"/> {x}</label>)}</div></div>;
  if (type === "search") return <div className="cp-content-card"><span className="cp-kicker">DATA LIST/SEARCH</span><h2>Search and filter records</h2><p>{description}</p><div className="cp-content-rows"><input className="cp-search" placeholder="Search by reference, name or status..."/>{[1,2].map(x => <div key={x}>— &nbsp;No live records connected</div>)}</div></div>;
  if (type === "settings") return <div className="cp-content-card"><span className="cp-kicker">SETTINGS/MANAGEMENT</span><h2>Manage your settings</h2><p>{description}</p><div className="cp-content-rows">{["Name / details", "Applicable permissions", "Document or preference"].map(x => <div key={x}>{x}</div>)}</div></div>;
  return <div className="cp-content-card"><span className="cp-kicker">{section}</span><h2>{contentTitle}</h2><p>{description}</p><div className="cp-content-rows">{rows.map(x => <div key={x}>{x}</div>)}</div></div>;
}

export default function CustomerPortalLayout({
  title, description, cards = fallbackCards, cardText = "No live data loaded",
  type = "detail", section = "DETAIL/STATUS VIEW", contentTitle = "Request information",
  rows = ["Current status / authorised data", "Next action / supporting details"], active = "Dashboard",
  nextPath = "/account/dashboard", actionLabel = "Continue", tracking = false, trackingHeading,
}) {
  const navigate = useNavigate();
  const isTrackingPage = tracking;
  return <div className={`cp-page ${isTrackingPage ? "has-tracking" : ""}`}>
    <Sidebar active={active}/><MobileHeader/>
    <main className="cp-main">
      <h1>{title}</h1><p className="cp-description">{description}</p>
      <nav className="cp-mobile-tabs"><span>OVERVIEW</span><span>ACTIVITY</span><span>SETTINGS</span></nav>
      <section className="cp-stat-grid">{cards.map((card, i) => <article className={i === 1 ? "tinted" : ""} key={card}><strong>{card}</strong><span>{cardText}</span></article>)}</section>
      <MainContent type={type} section={section} contentTitle={contentTitle} description={description} rows={rows}/>
      <section className="cp-action-panel"><button type="button" onClick={() => navigate(nextPath)}>{actionLabel} <span>→</span></button></section>
      {tracking && <><TrackingPanel heading={trackingHeading}/><ProofPanel/></>}
    </main>
  </div>;
}
