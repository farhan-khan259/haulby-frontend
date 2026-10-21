import { useState } from "react";
import { TransporterShell } from "./TransporterPortalLayout";
import "./CoverageEditor.css";

export default function CoverageEditor({ onboarding = false }) {
  const [method, setMethod] = useState("both"), [postcode, setPostcode] = useState(""), [distance, setDistance] = useState("25"), [city, setCity] = useState("");
  const [zones, setZones] = useState(() => { try { return JSON.parse(localStorage.getItem("haulbyCoverage")) || []; } catch { return []; } });
  const [saved, setSaved] = useState(false);
  const add = label => { if (label.trim()) { setZones(items => [...items, label.trim()]); setPostcode(""); setCity(""); setSaved(false); } };
  const save = () => { localStorage.setItem("haulbyCoverage", JSON.stringify(zones)); setSaved(true); };
  return <TransporterShell active="My Service Areas"><main className="tp-main cv-main"><h1>{onboarding ? "Coverage & Routes" : "My Transport Coverage"}</h1><p className="tp-desc">Set one or more postcode radius zones, select cities or towns, and manage which vehicles receive matching job alerts.</p>
    <section className="cv-method"><small>CHOOSE YOUR COVERAGE METHOD</small><div>{[["postcode","Postcode + radius"],["cities","Cities & towns"],["both","✓   Combine both"]].map(([value,label]) => <button type="button" className={method === value ? "selected" : ""} onClick={() => setMethod(value)} key={value}>{label}</button>)}</div></section>
    <div className="cv-grid"><section><h2>01 POSTCODE RADIUS</h2><p>Add a pickup base. You can create several zones and apply different distances.</p><label>Base postcode<input value={postcode} onChange={event => setPostcode(event.target.value)} placeholder="e.g. SW1A 1AA" /></label><label>Distance (miles)<select value={distance} onChange={event => setDistance(event.target.value)}><option>10</option><option>25</option><option>50</option><option>100</option></select></label><button type="button" onClick={() => add(`${postcode} • ${distance} miles`)}>+ Add radius zone</button></section>
    <section><h2>02 CITIES & TOWNS</h2><p>Search for multiple places across the UK. Include nearby areas if you choose.</p><label>Search city / town<input value={city} onChange={event => setCity(event.target.value)} placeholder="e.g. Leeds, Bristol, Nottingham" /></label><div className="cv-chips"><span>City only</span><span>+ 10 miles</span><span>Custom</span></div><button type="button" onClick={() => add(`City: ${city}`)}>+ Add city or town</button></section></div>
    <section className="cv-zones"><h2>03 YOUR SELECTED COVERAGE ZONES</h2>{zones.length ? zones.map((zone,index) => <div key={`${zone}-${index}`}>{zone}<button type="button" onClick={() => setZones(zones.filter((_,position) => position !== index))} aria-label={`Remove ${zone}`}>×</button></div>) : <p>No areas added yet.</p>}</section>
    <section className="cv-match"><h2>04 VEHICLES, JOB ALERTS & MATCHING</h2><select><option>All suitable vehicles</option></select><label><input type="radio" name="coverage-alert" defaultChecked /> Only alert me about selected areas</label><label><input type="radio" name="coverage-alert" /> Also show extra suitable UK jobs</label><label><input type="checkbox" /> Include compatible backloads / route corridors</label></section>
    <section className="cv-save"><b>SAVE YOUR COVERAGE PREFERENCES</b><p role="status">{saved ? "Your coverage preferences have been saved." : "Zones are saved to your operator account. New matching alerts will use the latest preferences after validation."}</p><button type="button" onClick={save}>Save my coverage →</button></section>
  </main></TransporterShell>;
}
