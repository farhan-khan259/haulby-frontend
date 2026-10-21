import { useState } from "react";
import { TransporterShell } from "../Common/TransporterPortalLayout";
import "./CustomerInvoiceDetail.css";

export default function CustomerInvoiceDetail() {
  const [status, setStatus] = useState("Sent / status from API");
  const actions = {
    resend: () => setStatus("Invoice resent"),
    payment: () => setStatus("Payment recorded"),
    credit: () => setStatus("Credit note issued"),
  };
  return <TransporterShell active="Customer Invoices"><main className="tp-main id-main">
    <h1>Customer Invoice Detail</h1><p className="tp-desc">View a supplier-issued customer invoice, communications, amendments and payment records.</p>
    <section><small>CUSTOMER INVOICE / STATUS</small><h2>Invoice number: —</h2><span className="id-pill" role="status">{status}</span><p>The supplier remains your business. Payment received outside HAULBY is an operator-reported event.</p></section>
    <section><small>ISSUED DOCUMENT CONTROLS</small><div className="id-controls"><button type="button" onClick={() => window.print()}>Download PDF</button><button type="button" onClick={actions.resend}>Resend invoice</button><button type="button" className="primary" onClick={actions.payment}>Record payment</button><button type="button" onClick={actions.credit}>Issue credit note</button></div></section>
    <section><small>INVOICE / EVENT HISTORY</small>{["Draft created", "Issued and sent", "Customer viewed / delivery tracking", "Payment event or overdue reminder"].map(item => <article key={item}><b>{item}</b><p>— Live timestamp and source of event required</p></article>)}</section>
    <section className="id-dark"><h2>PAYMENT &amp; ACCOUNTING</h2><p>Recording a bank transfer as paid is not a bank verification. Only the issuing business can issue amendments or credits subject to its permissions.</p><p>• Locked document after issue<br />• Separate credit-note workflow<br />• Unique issuer-specific numbering<br />• Immutable dispatch and user audit</p></section>
  </main></TransporterShell>;
}
