import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../Assets/Pictures/HAULBY-logo-transparent.png';
import './AdminPage.css';

const mainNav = [
  ['Overview', '/admin'], ['Users & Organisations', '/admin/users'],
  ['Transporters & Checks', '/admin/transporters'], ['Requests & Matching', '/admin/requests'],
  ['Quotes & Bookings', '/admin/quotes'], ['Support & Trust', '/admin/support'],
  ['Fees & Finance', '/admin/booking-fees/finance'], ['Content & Reports', '/admin/reports'],
  ['Audit, Risk & Settings', '/admin/audit-logs'], ['Sales & Onboarding', '/admin/sales'],
  ['Communications', '/admin/telephony'],
];

const defaults = {
  eyebrow: 'ADMIN CONTROL CENTRE', description: 'Manage platform operations securely with traceable, permission-aware controls.',
  stats: ['Open records', 'Awaiting action', 'Under review', 'Completed today'],
  filters: ['Status', 'Category', 'Owner', 'Date range'],
  actions: ['Open record', 'Assign owner', 'Request review', 'Export records'],
  columns: ['Record', 'Category', 'Status'], detail: 'Record controls',
  detailText: 'Select a record to review its authorised data and available actions.',
  required: 'All sensitive updates require permission checks, a reason, confirmation and an immutable audit entry.',
  specialties: ['Review linked activity', 'Assign responsibility', 'Export evidence', 'Open workflow'],
};

export default function AdminPage({ config = {} }) {
  const c = { ...defaults, ...config };
  const [drawer, setDrawer] = useState(false);
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);
  const [notice, setNotice] = useState('');
  const [sort, setSort] = useState('Sort newest first');
  const location = useLocation();
  const rows = useMemo(() => c.columns.slice(0, 3), [c.columns]);
  const run = (label) => {
    if (/export/i.test(label)) {
      const blob = new Blob([`HAULBY ${c.title} export\nNo live data connected.`], { type: 'text/csv' });
      const url = URL.createObjectURL(blob); const a = document.createElement('a');
      a.href = url; a.download = `${c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.csv`; a.click(); URL.revokeObjectURL(url);
      setNotice('CSV export prepared.'); return;
    }
    if (/view details|open record|inspect/i.test(label)) { setSelected(label); setNotice('Illustrative record selected.'); return; }
    setNotice(`${label} is ready for authorised workflow input.`);
  };

  return <div className="admin-app">
    <header className="admin-mobile-head"><img src={logo} alt="HAULBY"/><button aria-label="Open admin menu" onClick={() => setDrawer(true)}>☰</button></header>
    {drawer && <button className="admin-scrim" aria-label="Close menu" onClick={() => setDrawer(false)}/>} 
    <aside className={`admin-sidebar ${drawer ? 'is-open' : ''}`}>
      <div className="admin-brand"><img src={logo} alt="HAULBY"/><button onClick={() => setDrawer(false)}>×</button></div>
      <p className="admin-side-label">{c.eyebrow}</p>
      <nav>{mainNav.map(([label, to]) => <Link key={to} className={location.pathname === to || (to !== '/admin' && location.pathname.startsWith(to)) ? 'active' : ''} to={to} onClick={() => setDrawer(false)}>{label}</Link>)}</nav>
      <p className="admin-side-foot">Roles • audit • protected actions</p>
    </aside>
    <div className="admin-stage">
      <div className="admin-topbar"><span>Administration&nbsp; / &nbsp;{c.title}</span><div><button onClick={() => document.querySelector('.admin-search')?.focus()}>⌕ Search records</button><button onClick={() => run('Alerts')}>Alerts</button><b>ADMIN</b></div></div>
      <main className="admin-main">
        <section className="admin-title-row"><div><h1>{c.title}</h1><p>{c.description}</p></div><div className="admin-title-actions"><button onClick={() => run('Export CSV')}>Export CSV</button><button className="primary" onClick={() => run(c.primary || c.actions[0])}>{c.primary || c.actions[0]}</button></div></section>
        <div className="admin-mobile-actions"><button className="primary" onClick={() => run(c.primary || c.actions[0])}>{c.primary || c.actions[0]}</button><button onClick={() => document.querySelector('.admin-search')?.focus()}>Search / Filter</button></div>
        <section className="admin-stats">{c.stats.map((x,i)=><article className={i===0?'featured':''} key={x}><strong>{x}</strong><b>—</b><small>{c.liveText || 'Live data required'}</small></article>)}</section>
        <section className="admin-panel admin-filters"><h3>OPERATIONS &amp; FILTERS</h3><div><input className="admin-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="⌕ Search record or ID"/>{c.filters.slice(0,3).map(x=><select key={x} defaultValue=""><option value="">{x}</option><option>All</option><option>Needs action</option><option>Completed</option></select>)}<select value={sort} onChange={e=>setSort(e.target.value)}><option>Sort newest first</option><option>Sort oldest first</option></select></div></section>
        <section className="admin-action-strip"><h3>AVAILABLE ADMINISTRATIVE ACTIONS</h3><div>{c.actions.map((x,i)=><button className={i===0?'primary':''} key={x} onClick={()=>run(x)}>{x}</button>)}</div></section>
        <div className="admin-workspace">
          <section className="admin-panel admin-records"><h2>{c.recordsTitle || c.title}</h2><h3>ILLUSTRATIVE STATE — CONNECT RECORDS</h3><div className="admin-table-head">{[...c.columns, 'Review action'].map(x=><b key={x}>{x}</b>)}</div><div className="admin-table-body">{[0,1,2,3].map(n=><button key={n} onClick={()=>{setSelected(`Illustrative record ${n+1}`);setNotice('Illustrative record selected.')}}><span>— Select actual record</span><span>No live data</span><span>Awaiting data</span><em>Inspect →</em></button>)}</div><div className="admin-mobile-cards">{rows.map(x=><article key={x}><b>{x}</b><mark>Awaiting data</mark><p>No live records loaded. Show real status and ID from the API.</p><button onClick={()=>run('View details')}>View details →</button></article>)}</div><footer>□ Select rows　 •　 25 / 50 / 100 per page　 •　 Prev / Next　 •　 Sort by column</footer></section>
          <aside className="admin-panel admin-detail"><h3>DETAILS &amp; FOLLOW-UP</h3><h2>{c.detail}</h2><p>{selected || c.detailText}</p><div className="admin-detail-fields">{c.columns.map(x=><label key={x}>{x}<input placeholder="Connect authorised data"/></label>)}</div><button className="primary" onClick={()=>run(c.detailAction || 'Open workflow')}>{c.detailAction || 'Open workflow'}</button></aside>
        </div>
        <p className="admin-required-copy">{c.required}</p>
        <section className="admin-required"><h3>REQUIRED BEHAVIOUR · RBAC · AUDIT</h3><p>{c.required}</p></section>
        {c.specialties?.length > 0 && <section className="admin-panel admin-special"><h3>SPECIALIST WORKFLOW CONTROLS</h3><h2>{c.specialTitle || c.title}</h2><div>{c.specialties.map((x,i)=><button key={x} className={i===0?'tint':''} onClick={()=>run(x)}>{x}<small>Requires policy &amp; permissions</small></button>)}</div></section>}
        {notice && <div className="admin-toast" role="status">{notice}<button onClick={()=>setNotice('')}>×</button></div>}
      </main>
    </div>
  </div>
}
