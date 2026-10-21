import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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

function readPortalData() {
  try { return JSON.parse(localStorage.getItem("haulbyCustomerPortal") || "{}"); }
  catch { return {}; }
}

function CustomInput({ storageKey, placeholder, multiline = false, className = "" }) {
  const [value, setValue] = useState(() => readPortalData()[storageKey] || "");
  const Tag = multiline ? "textarea" : "input";
  const update = (event) => {
    const next = event.target.value;
    setValue(next);
    localStorage.setItem("haulbyCustomerPortal", JSON.stringify({ ...readPortalData(), [storageKey]: next }));
  };
  return <Tag className={`cp-custom-input ${className}`} value={value} onChange={update} placeholder={placeholder} rows={multiline ? 3 : undefined}/>;
}

export function PortalBrand() {
  return <Link className="cp-logo" to="/" aria-label="HAULBY home"><img src={logo} alt="HAULBY — Your transport. Sorted." /></Link>;
}

function Sidebar({ active = "Dashboard", mobileOpen = false, onClose }) {
  return <aside className={`cp-sidebar ${mobileOpen ? "mobile-open" : ""}`}>
    <button className="cp-sidebar-close" type="button" onClick={onClose} aria-label="Close navigation">×</button>
    <PortalBrand />
    <strong className="cp-portal-name">Customer portal</strong>
    <nav>{sidebarLinks.map(([label, path]) => <Link className={label === active ? "active" : ""} to={path} onClick={onClose} key={label}>{label}</Link>)}</nav>
  </aside>;
}

function MobileHeader({ open, onToggle }) {
  return <header className="cp-mobile-header">
    <PortalBrand />
    <strong>CUSTOMER PORTAL</strong>
    <button className={`cp-hamburger ${open ? "is-open" : ""}`} type="button" onClick={onToggle} aria-label="Toggle customer portal navigation" aria-expanded={open}>
      <span/><span/><span/>
    </button>
  </header>;
}

function MobileTabs() {
  return <nav className="cp-mobile-tabs">
    <Link to="/account/dashboard">OVERVIEW</Link>
    <Link to="/account/notifications">ACTIVITY</Link>
    <Link to="/account/settings/profile">SETTINGS</Link>
  </nav>;
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
  const downloadProof = () => {
    const content = "HAULBY Proof of Delivery\n\nNo signed proof of delivery is currently available.";
    const url = URL.createObjectURL(new Blob([content], { type: "text/plain" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "haulby-proof-of-delivery.txt";
    link.click();
    URL.revokeObjectURL(url);
  };
  return <section className="cp-extra-card cp-proof-card">
    <span className="cp-kicker">DELIVERY EVIDENCE &amp; RECIPIENT SIGNATURE</span>
    <h2>View your proof of delivery</h2>
    <p>Available after a recorded handover. Signed evidence or an authorised no-signature exception is stored against the booking.</p>
    <div className="cp-proof-grid">
      <div><strong>RECIPIENT SIGNATURE</strong><p>— &nbsp;Awaiting a valid signed POD record</p></div>
      <div><strong>RECIPIENT &amp; DELIVERY RECORD</strong><p>Recipient: — &nbsp;&nbsp; Company / role: —<br/>Delivered at: — &nbsp;&nbsp; Photo evidence: —</p></div>
    </div>
    <button type="button" onClick={downloadProof}>View / download POD PDF <span>→</span></button>
  </section>;
}

function EvidenceChecks({ pageKey }) {
  const labels = ["Collection completed", "Load secured", "Delivery confirmation"];
  const [checked, setChecked] = useState(() => readPortalData()[`${pageKey}-checks`] || []);
  const toggle = (label) => {
    const next = checked.includes(label) ? checked.filter(x => x !== label) : [...checked, label];
    setChecked(next);
    localStorage.setItem("haulbyCustomerPortal", JSON.stringify({ ...readPortalData(), [`${pageKey}-checks`]: next }));
  };
  return <div className="cp-checks">{labels.map(label => <label key={label}><input type="checkbox" checked={checked.includes(label)} onChange={() => toggle(label)}/> {label}</label>)}</div>;
}

function SearchRecords() {
  const records = useMemo(() => ["No live records connected", "No live records connected"], []);
  const [query, setQuery] = useState("");
  const visible = records.filter(record => record.toLowerCase().includes(query.toLowerCase()));
  return <div className="cp-content-rows"><input className="cp-search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search by reference, name or status..."/>{visible.length ? visible.map((record,index) => <div key={`${record}-${index}`}>— &nbsp;{record}</div>) : <div>No matching records</div>}</div>;
}

function MainContent({ type, section, contentTitle, description, rows, pageKey }) {
  if (type === "evidence") return <div className="cp-content-card"><span className="cp-kicker">JOB EVIDENCE/DRIVER FLOW</span><h2>Complete work evidence</h2><p>{description}</p><EvidenceChecks pageKey={pageKey}/></div>;
  if (type === "search") return <div className="cp-content-card"><span className="cp-kicker">DATA LIST/SEARCH</span><h2>Search and filter records</h2><p>{description}</p><SearchRecords/></div>;
  if (type === "settings") return <div className="cp-content-card"><span className="cp-kicker">SETTINGS/MANAGEMENT</span><h2>Manage your settings</h2><p>{description}</p><div className="cp-content-rows">{["Name / details", "Applicable permissions", "Document or preference"].map((placeholder,index) => <CustomInput key={placeholder} storageKey={`${pageKey}-setting-${index}`} placeholder={placeholder}/>)}</div></div>;
  return <div className="cp-content-card"><span className="cp-kicker">{section}</span><h2>{contentTitle}</h2><p>{description}</p><div className="cp-content-rows">{rows.map((placeholder,index) => <CustomInput key={placeholder} storageKey={`${pageKey}-detail-${index}`} placeholder={placeholder} multiline={section === "MESSAGING" || section === "QUOTE COMPARISON"}/>)}</div></div>;
}

export default function CustomerPortalLayout({
  title, description, cards = fallbackCards, cardText = "No live data loaded",
  type = "detail", section = "DETAIL/STATUS VIEW", contentTitle = "Request information",
  rows = ["Current status / authorised data", "Next action / supporting details"], active = "Dashboard",
  nextPath = "/account/dashboard", actionLabel = "Continue", tracking = false, trackingHeading,
}) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isTrackingPage = tracking;
  return <div className={`cp-page ${isTrackingPage ? "has-tracking" : ""}`}>
    <Sidebar active={active} mobileOpen={menuOpen} onClose={() => setMenuOpen(false)}/>
    {menuOpen && <button className="cp-menu-overlay" type="button" onClick={() => setMenuOpen(false)} aria-label="Close navigation"/>}
    <MobileHeader open={menuOpen} onToggle={() => setMenuOpen(current => !current)}/>
    <main className="cp-main">
      <h1>{title}</h1><p className="cp-description">{description}</p>
      <MobileTabs/>
      <section className="cp-stat-grid">{cards.map((card, i) => <article className={i === 1 ? "tinted" : ""} key={card}><strong>{card}</strong><span>{cardText}</span></article>)}</section>
      <MainContent type={type} section={section} contentTitle={contentTitle} description={description} rows={rows} pageKey={pathname}/>
      <section className="cp-action-panel"><button type="button" onClick={() => navigate(nextPath)}>{actionLabel} <span>→</span></button></section>
      {tracking && <><TrackingPanel heading={trackingHeading}/><ProofPanel/></>}
    </main>
  </div>;
}
