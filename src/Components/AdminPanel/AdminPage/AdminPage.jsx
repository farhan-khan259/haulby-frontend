import { useMemo, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../Assets/Pictures/HAULBY-logo-transparent.png';
import './AdminPage.css';
import './AdminAlerts.css';
import './AdminActionModal.css';
import './AdminFirstTen.css';
import './AdminBatchTwo.css';

const navGroups = [
  { label: 'Overview', to: '/admin' },
  { label: 'Users & Organisations', links: [['User Accounts','/admin/users'],['Organisations','/admin/organisations']] },
  { label: 'Transporters & Checks', links: [['Transporter Directory','/admin/transporters'],['Verification Queue','/admin/verification'],['Compliance Documents','/admin/documents'],['Transport Categories','/admin/categories']] },
  { label: 'Requests & Matching', links: [['Posted Requests','/admin/requests']] },
  { label: 'Quotes & Bookings', links: [['Quotes','/admin/quotes'],['Transport Bookings','/admin/bookings'],['Review Moderation','/admin/reviews']] },
  { label: 'Support & Trust', links: [['Support Queue','/admin/support'],['Complaints & Disputes','/admin/disputes']] },
  { label: 'Fees & Finance', links: [['Booking Fee Rules','/admin/booking-fees/rules'],['Booking Fee Finance','/admin/booking-fees/finance']] },
  { label: 'Content & Reports', links: [['Notifications & Templates','/admin/notifications'],['Marketplace Reports','/admin/reports'],['Content Manager','/admin/content']] },
  { label: 'Audit, Risk & Settings', links: [['Audit Logs','/admin/audit-logs'],['Fraud & Safety','/admin/risk'],['Admin Settings','/admin/settings']] },
  { label: 'Sales & Onboarding', links: [['Sales Overview','/admin/sales'],['Transporter Leads','/admin/sales/leads'],['Email Journeys','/admin/sales/sequences'],['Sales Reports','/admin/sales/reports']] },
  { label: 'Communications', links: [['Call Centre Overview','/admin/telephony'],['CRM Softphone','/admin/telephony/softphone'],['Call Queues','/admin/telephony/queues'],['Call Logs','/admin/telephony/calls'],['Recordings & QA','/admin/telephony/recordings'],['Telephony Settings','/admin/telephony/settings']] },
];

const workflowRoutes = {
  'Open review':'/admin/verification/decision', 'Approve with evidence':'/admin/verification/decision',
  'Expand matching':'/admin/requests/expand-matching', 'Expand match radius':'/admin/requests/expand-matching',
  'Open dispute':'/admin/disputes/resolution', 'Record decision':'/admin/disputes/resolution',
  'Open ticket':'/admin/support/demo',
  'Create fee rule':'/admin/booking-fees/rules/create', 'Review refund':'/admin/booking-fees/finance/refund-request',
  'Reconcile payment':'/admin/booking-fees/finance/refund-approval', 'Edit role matrix':'/admin/settings/roles',
  'Open investigation':'/admin/risk/intervention', 'Hold risky action':'/admin/risk/intervention',
  'Create transporter lead':'/admin/sales/leads/create', 'Create lead':'/admin/sales/leads/create',
  'Verify account':'/admin/sales/leads/demo/onboarding', 'Send invitation':'/admin/sales/leads/demo/email',
  'Create journey':'/admin/sales/sequences/create',
};

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
  const [alertsOpen, setAlertsOpen] = useState(false);
  const [alertFilter, setAlertFilter] = useState('all');
  const [actionDialog, setActionDialog] = useState(null);
  const [actionForm, setActionForm] = useState({ details: '', assignee: '', reason: '' });
  const [alerts, setAlerts] = useState([
    { id: 1, title: 'Verification review due', detail: 'An operator verification case is awaiting review.', type: 'verification', unread: true },
    { id: 2, title: 'Unmatched request requires attention', detail: 'Review matching radius and eligible operators.', type: 'operations', unread: true },
    { id: 3, title: 'Document expiry reminder', detail: 'Compliance evidence is approaching its review date.', type: 'compliance', unread: false },
  ]);
  const [sort, setSort] = useState('Sort newest first');
  const [pageSize, setPageSize] = useState('25');
  const [selectRows, setSelectRows] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const rows = useMemo(() => c.columns.slice(0, 3), [c.columns]);
  const detailFields = c.detailFields || c.columns;
  const run = (label) => {
    if (label === 'Alerts') { setAlertsOpen(true); return; }
    if (c.actionRoutes?.[label]) { navigate(c.actionRoutes[label]); return; }
    if (workflowRoutes[label]) { navigate(workflowRoutes[label]); return; }
    if (/export/i.test(label)) {
      const blob = new Blob([`HAULBY ${c.title} export\nNo live data connected.`], { type: 'text/csv' });
      const url = URL.createObjectURL(blob); const a = document.createElement('a');
      a.href = url; a.download = `${c.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.csv`; a.click(); URL.revokeObjectURL(url);
      setNotice('CSV export prepared.'); return;
    }
    if (/view details|open record|inspect/i.test(label)) { setSelected(label); setNotice('Illustrative record selected.'); return; }
    setActionForm({ details: '', assignee: '', reason: '' });
    setActionDialog(label);
  };
  const confirmAction = (event) => {
    event.preventDefault();
    if (!actionForm.details.trim() || !actionForm.reason.trim()) {
      setNotice('Add workflow details and a reason before confirming.');
      return;
    }
    setActionDialog(null);
    setNotice(`${actionDialog} recorded successfully.`);
  };

  return <div className="admin-app">
    <header className="admin-mobile-head"><img src={logo} alt="HAULBY"/><div><button aria-label="Open alerts" onClick={() => setAlertsOpen(true)}>♢<span>{alerts.filter((alert) => alert.unread).length}</span></button><button aria-label="Open admin menu" onClick={() => setDrawer(true)}>☰</button></div></header>
    {drawer && <button className="admin-scrim" aria-label="Close menu" onClick={() => setDrawer(false)}/>} 
    <aside className={`admin-sidebar ${drawer ? 'is-open' : ''}`}>
      <div className="admin-brand"><img src={logo} alt="HAULBY"/><button onClick={() => setDrawer(false)}>×</button></div>
      <p className="admin-side-label">{c.eyebrow}</p>
      <nav>{navGroups.map((group) => {
        if (group.to) return <Link key={group.to} className={location.pathname === group.to ? 'active' : ''} to={group.to} onClick={() => setDrawer(false)}>{group.label}</Link>;
        const groupActive = group.links.some(([,to]) => location.pathname === to || location.pathname.startsWith(`${to}/`));
        return <details className="admin-nav-group" key={group.label} open={groupActive}>
          <summary className={groupActive ? 'active' : ''}>{group.label}<span>⌄</span></summary>
          <div>{group.links.map(([label,to]) => <Link key={to} className={location.pathname === to ? 'active child-active' : ''} to={to} onClick={() => setDrawer(false)}>{label}</Link>)}</div>
        </details>;
      })}</nav>
      <p className="admin-side-foot">Roles • audit • protected actions</p>
      <small className="admin-environment">DESIGN / NO LIVE DATA</small>
    </aside>
    <div className="admin-stage">
      <div className="admin-topbar"><span>Administration&nbsp; / &nbsp;{c.title}</span><div><button onClick={() => document.querySelector('.admin-search')?.focus()}>⌕ Search records</button><button onClick={() => run('Alerts')}>Alerts {alerts.some((alert) => alert.unread) && <i>{alerts.filter((alert) => alert.unread).length}</i>}</button><b>ADMIN</b></div></div>
      <main className="admin-main">
        <section className="admin-title-row"><div><h1>{c.title}</h1><p>{c.description}</p></div><div className="admin-title-actions"><button onClick={() => run('Export CSV')}>Export CSV</button><button className="primary" onClick={() => run(c.primary || c.actions[0])}>{c.primary || c.actions[0]}</button></div></section>
        <div className="admin-mobile-actions"><button className="primary" onClick={() => run(c.primary || c.actions[0])}>{c.primary || c.actions[0]}</button><button onClick={() => document.querySelector('.admin-search')?.focus()}>Search / Filter</button></div>
        <section className="admin-stats">{c.stats.map((x,i)=><article className={i===0?'featured':''} key={x}><strong>{x}</strong><b>—</b><small>{c.liveText || 'Live data required'}</small></article>)}</section>
        <section className="admin-panel admin-filters"><h3>OPERATIONS &amp; FILTERS</h3><div><input className="admin-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="⌕ Search record or ID"/>{c.filters.slice(0,3).map(x=><select key={x} defaultValue=""><option value="">{x}</option><option>All</option><option>Needs action</option><option>Completed</option></select>)}<select value={sort} onChange={e=>setSort(e.target.value)}><option>Sort newest first</option><option>Sort oldest first</option></select></div></section>
        <section className="admin-action-strip"><h3>AVAILABLE ADMINISTRATIVE ACTIONS</h3><div>{c.actions.map((x,i)=><button className={i===0?'primary':''} key={x} onClick={()=>run(x)}>{x}</button>)}</div></section>
        <div className="admin-workspace">
          <section className="admin-panel admin-records"><h2>{c.recordsTitle || c.title}</h2><h3>{c.emptyStateText || 'ILLUSTRATIVE EMPTY STATE — no production records used'}</h3><div className="admin-table-head">{c.columns.map(x=><b key={x}>{x}</b>)}</div><div className="admin-table-body">{[0,1,2,3].map(n=><button key={n} onClick={()=>{setSelected(`Illustrative record ${n+1}`);setNotice('Illustrative record selected.')}}><span>— &nbsp; Select {c.realCaseLabel || 'live record'}</span><span>{c.secureDataText || 'From secure API'}</span><span>{c.awaitingText || 'Awaiting data'}</span><em>{c.rowAction || 'Open record'} &nbsp;→</em></button>)}</div><div className="admin-mobile-cards">{rows.map(x=><article key={x}><b>{x}</b><mark>Awaiting data</mark><p>No live records loaded. Show real status and ID from the API.</p><button onClick={()=>run('View details')}>View details →</button></article>)}</div><footer><div className="admin-pagination"><label><input type="checkbox" checked={selectRows} onChange={(event)=>setSelectRows(event.target.checked)}/>Select rows</label><i>•</i><label className="page-size"><select value={pageSize} onChange={(event)=>setPageSize(event.target.value)}><option>25</option><option>50</option><option>100</option></select><span>/ 50 / 100 per page</span></label><i>•</i><div className="page-controls"><button type="button" onClick={()=>setNotice('Already on the first page.')}>Prev</button><span>/</span><button type="button" onClick={()=>setNotice('Connect live pagination to load the next page.')}>Next</button></div><i>•</i><button className="sort-column" type="button" onClick={()=>setNotice('Column sorting is ready for authorised data.')}>Sort by column</button></div><p>Connect pagination, saved views, permission-filtered results, bulk actions and record-level auditing.</p></footer></section>
          <aside className="admin-panel admin-detail"><h3><span className="detail-desktop-label">DETAIL INSPECTOR</span><span className="detail-mobile-label">DETAILS &amp; FOLLOW-UP</span></h3><h2>{c.detail}</h2><p>{selected || c.detailText || 'Selected record: none'}</p><div className="admin-detail-fields">{detailFields.map(x=><div className="admin-detail-field" key={x}><b>{x}</b><span>— Connect authorised data</span></div>)}</div>{c.detailTabs && <div className="admin-detail-tabs"><button>Comments</button><button>Decisions</button><button>History</button></div>}<button className="primary" onClick={()=>run(c.detailAction || 'Open workflow')}>{c.detailAction || 'Open workflow'}</button>{c.inspectorNote && <small className="admin-inspector-note">{c.inspectorNote}</small>}</aside>
        </div>
        <p className="admin-required-copy">{c.required}</p>
        <section className="admin-required"><h3>REQUIRED BEHAVIOUR · RBAC · AUDIT</h3><p>{c.required}</p>{c.requiredSecond && <p>{c.requiredSecond}</p>}</section>
        {c.specialties?.length > 0 && <section className={`admin-panel admin-special ${c.specialMode === 'checks' ? 'is-checklist' : ''}`}><h3>{c.specialEyebrow || 'SPECIALIST WORKFLOW CONTROLS'}</h3><h2>{c.specialTitle || c.title}</h2>{c.specialDescription && <p>{c.specialDescription}</p>}<div>{c.specialties.map((x,i)=>c.specialMode === 'checks' ? <p key={x}><b>✓</b>{x}</p> : <button key={x} className={i===0?'tint':''} onClick={()=>run(x)}>{x}{c.specialItemHelp && <small>{c.specialItemHelp}</small>}</button>)}</div>{c.specialNote && <small className="admin-special-note">{c.specialNote}</small>}</section>}
        {c.extraSections?.map((section)=><section className={`admin-panel admin-extra ${section.type || ''}`} key={section.title}>
          {section.eyebrow && <h3>{section.eyebrow}</h3>}<h2>{section.title}</h2>{section.description && <p>{section.description}</p>}
          {section.type === 'tracking' ? <div className="tracking-grid"><div className="tracking-map"><small>EXAMPLE MAP / LOCATION FROM API</small><i/><b>↗</b><em/></div><div className="tracking-status"><strong>TRACKING STATUS ・ API REQUIRED</strong><p>Last GPS update: —<br/>Vehicle position: —<br/>Estimated arrival: —<br/>Position accuracy: —</p><small>Active-job location only. When delayed, show the time of the last successful update and a tracking-unavailable state.</small></div></div> : section.type === 'checklist' ? <div className="admin-extra-checklist">{section.items?.map((item,index)=><p className={index===0?'strong':''} key={item}><b>✓</b>{item}</p>)}</div> : <div className="admin-extra-grid">{section.items?.map((item,index)=><button className={index===0?'tint':''} key={item} onClick={()=>run(item)}>{item}{section.itemHelp && <small>{section.itemHelp}</small>}</button>)}</div>}
          {section.note && <small className="admin-extra-note">{section.note}</small>}{section.action && <button className="primary admin-extra-action" onClick={()=>run(section.action)}>{section.action}</button>}
        </section>)}
        {notice && <div className="admin-toast" role="status">{notice}<button onClick={()=>setNotice('')}>×</button></div>}
      </main>
    </div>
    {alertsOpen && <><button className="alerts-scrim" aria-label="Close alerts" onClick={() => setAlertsOpen(false)}/><aside className="admin-alerts" aria-label="Admin alerts">
      <header><div><small>ADMIN NOTIFICATIONS</small><h2>Alerts</h2></div><button aria-label="Close alerts" onClick={() => setAlertsOpen(false)}>×</button></header>
      <div className="alert-tools"><select value={alertFilter} onChange={(event) => setAlertFilter(event.target.value)}><option value="all">All alerts</option><option value="unread">Unread only</option><option value="verification">Verification</option><option value="operations">Operations</option><option value="compliance">Compliance</option></select><button onClick={() => setAlerts((current) => current.map((alert) => ({ ...alert, unread: false })))}>Mark all read</button></div>
      <div className="alert-list">{alerts.filter((alert) => alertFilter === 'all' || (alertFilter === 'unread' ? alert.unread : alert.type === alertFilter)).map((alert) => <article className={alert.unread ? 'unread' : ''} key={alert.id}><button className="alert-content" onClick={() => setAlerts((current) => current.map((item) => item.id === alert.id ? { ...item, unread: false } : item))}><span>{alert.unread ? 'NEW' : 'READ'}</span><b>{alert.title}</b><p>{alert.detail}</p></button><button className="alert-dismiss" aria-label={`Dismiss ${alert.title}`} onClick={() => setAlerts((current) => current.filter((item) => item.id !== alert.id))}>Dismiss</button></article>)}</div>
      {alerts.length === 0 && <p className="alerts-empty">No alerts. You are all caught up.</p>}
    </aside></>}
    {actionDialog && <div className="admin-action-modal" role="dialog" aria-modal="true" aria-labelledby="admin-action-title">
      <button className="action-modal-scrim" aria-label="Cancel action" onClick={() => setActionDialog(null)}/>
      <form onSubmit={confirmAction}>
        <header><div><small>AUTHORISED ADMIN WORKFLOW</small><h2 id="admin-action-title">{actionDialog}</h2></div><button type="button" aria-label="Close action" onClick={() => setActionDialog(null)}>×</button></header>
        <p>Record the required information before applying this action. The frontend preserves this state for later API integration.</p>
        <label>Workflow details<textarea autoFocus value={actionForm.details} onChange={(event) => setActionForm((current) => ({ ...current, details: event.target.value }))} placeholder={`Enter details for ${actionDialog.toLowerCase()}`}/></label>
        <label>Assign to<select value={actionForm.assignee} onChange={(event) => setActionForm((current) => ({ ...current, assignee: event.target.value }))}><option value="">Current administrator</option><option>Operations team</option><option>Compliance team</option><option>Finance team</option><option>Support team</option></select></label>
        <label>Reason / audit note<textarea value={actionForm.reason} onChange={(event) => setActionForm((current) => ({ ...current, reason: event.target.value }))} placeholder="Required reason for the audit record"/></label>
        <div className="action-modal-buttons"><button type="button" onClick={() => setActionDialog(null)}>Cancel</button><button className="primary" type="submit">Confirm {actionDialog}</button></div>
      </form>
    </div>}
  </div>
}
