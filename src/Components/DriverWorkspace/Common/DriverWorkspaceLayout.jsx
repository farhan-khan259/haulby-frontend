import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../Assets/Pictures/HAULBY-logo-transparent.png";
import "./DriverWorkspaceLayout.css";

const links = [["Dashboard", "/driver/today"], ["Requests & Jobs", "/driver/jobs/assigned"], ["Quotes", "/driver/quotes"], ["Messages", "/driver/messages"], ["Account & Settings", "/driver/profile"]];
const read = () => { try { return JSON.parse(localStorage.getItem("haulbyDriverWorkspace") || "{}"); } catch { return {}; } };

export function DriverInput({ id, placeholder, type = "text" }) {
  const [value, setValue] = useState(() => read()[id] || "");
  const update = (event) => { const next = event.target.value; setValue(next); localStorage.setItem("haulbyDriverWorkspace", JSON.stringify({ ...read(), [id]: next })); };
  return <input className="dw-input" type={type} value={value} onChange={update} placeholder={placeholder} />;
}

function Brand() { return <Link className="dw-logo" to="/"><img src={logo} alt="HAULBY" /></Link>; }
function Sidebar({ open, onClose, active }) { return <><aside className={`dw-sidebar ${open ? "open" : ""}`}><button className="dw-close" type="button" onClick={onClose} aria-label="Close menu">×</button><Brand /><strong>Driver workspace</strong><nav>{links.map(([label, path]) => <Link className={active === label ? "active" : ""} to={path} onClick={onClose} key={label}>{label}</Link>)}</nav></aside>{open && <button className="dw-overlay" type="button" onClick={onClose} aria-label="Close navigation" />}</>; }

export function DriverShell({ children, active = "Dashboard" }) {
  const [open, setOpen] = useState(false);
  return <div className="dw-page"><Sidebar open={open} onClose={() => setOpen(false)} active={active} /><header className="dw-mobile-header"><Brand /><b>ASSIGNED DRIVER WORKSPACE</b><button className="dw-menu" type="button" onClick={() => setOpen(true)} aria-label="Open menu"><i /><i /><i /></button></header>{children}</div>;
}

export default function DriverWorkspaceLayout({ title, description, active = "Dashboard", section = "DASHBOARD", contentTitle = "At-a-glance overview", evidence = false, next = "/driver/today", button = "Continue", extra = false }) {
  const navigate = useNavigate(), { pathname } = useLocation();
  const [checks, setChecks] = useState(() => read()[`${pathname}-checks`] || [false, false, false]);
  const toggle = (index) => { const nextChecks = checks.map((value, position) => position === index ? !value : value); setChecks(nextChecks); localStorage.setItem("haulbyDriverWorkspace", JSON.stringify({ ...read(), [`${pathname}-checks`]: nextChecks })); };
  return <DriverShell active={active}><main className="dw-main"><h1>{title}</h1><p className="dw-description">{description}</p><nav className="dw-tabs"><Link to="/driver/today">OVERVIEW</Link><Link to="/driver/jobs/assigned">ACTIVITY</Link><Link to="/driver/profile">SETTINGS</Link></nav><section className="dw-stats">{(evidence ? ["Collection", "Delivery", "Proof"] : ["Requests", "Bookings", "Actions"]).map((label, index) => <article className={index === 1 ? "mint" : ""} key={label}><b>{label}</b><span>{evidence ? "No live data loaded" : "—"}</span>{!evidence && <small>Connect authorised live metrics</small>}</article>)}</section><section className="dw-panel"><small>{section}</small><h2>{contentTitle}</h2><p>{description}</p><div className="dw-content">{evidence ? ["Collection completed", "Load secured", "Delivery confirmation"].map((label, index) => <label className={checks[index] ? "checked" : ""} key={label}><input type="checkbox" checked={checks[index]} onChange={() => toggle(index)} /><span>{label}</span></label>) : <><DriverInput id={`${pathname}-status`} placeholder="Current status / authorised data" /><DriverInput id={`${pathname}-activity`} placeholder="Marketplace activity" /></>}</div></section><section className="dw-action"><button type="button" onClick={() => navigate(next)}>{button} →</button></section>{extra && <section className="dw-extra"><small>DRIVER WORKSPACE</small><h2>YOUR ASSIGNED AREAS AND AVAILABILITY</h2><p>Personal radius and city preferences support job alerts and scheduling within the operator's verified service capabilities.</p><div><button type="button" onClick={() => navigate("/driver/availability")}>Edit my working areas →</button><button type="button" onClick={() => navigate("/driver/jobs/assigned")}>My assigned jobs →</button></div></section>}</main></DriverShell>;
}
