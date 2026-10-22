import AdminPage from "../AdminPage/AdminPage";
import "./Disputes.css";
const page = {
  title: "Complaints & Disputes",
  description:
    "Investigate service complaints fairly, document both parties and apply controlled resolution decisions.",
  stats: [
    "Open disputes",
    "Evidence requested",
    "Awaiting resolution",
    "Escalated cases",
  ],
  filters: ["Dispute reason", "Escalation state", "Case owner"],
  actions: [
    "Open dispute",
    "Request evidence",
    "Assign mediator",
    "Record decision",
  ],
  primary: "Open case",
  actionRoutes: {
    "Open dispute": "/admin/disputes/resolution",
    "Record decision": "/admin/disputes/resolution",
    "Review dispute": "/admin/disputes/resolution",
  },
  columns: ["Dispute ID", "Job / parties", "Dispute type", "Response due"],
  recordsTitle: "Dispute cases & resolution workflow",
  detail: "Dispute resolution",
  detailFields: [
    "Allegation and evidence",
    "Customer statement",
    "Operator statement",
    "Decision / appeal",
  ],
  detailText: "Selected record: none",
  detailAction: "Review dispute",
  inspectorNote:
    "Investigate service complaints fairly, document both parties and apply controlled resolution decisions.",
  required:
    "Require evidence packets, independent staff decision, reason-coded outcomes, communications, incident preservation, appeal history and privacy controls.",
  requiredSecond:
    "All sensitive updates: permission checks, reason codes, audit entry, confirmation, and reversible operations where appropriate.",
  specialEyebrow: "SPECIALIST WORKFLOW CONTROLS",
  specialTitle: "Dispute cases & resolution workflow",
  specialties: [
    "Collect both-party evidence",
    "Propose resolution",
    "Issue outcome notice",
    "Escalate formal complaint",
  ],
  specialNote:
    "Configure valid input, confirm destructive actions, record reason/actor and show success/failure states.",
  realCaseLabel: "actual record",
  secureDataText: "No live data",
  rowAction: "Inspect",
};
export default function Disputes() {
  return <AdminPage config={page} />;
}
