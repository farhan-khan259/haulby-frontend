import AdminPage from "../AdminPage/AdminPage";
import "./Transporters.css";
const page = {
  title: "Transporter Directory",
  description:
    "Driver and operator fleet search, eligibility status and service coverage.",
  stats: [
    "Operators registered",
    "Eligible to quote",
    "Verification pending",
    "Documents expiring",
  ],
  filters: ["Vehicle type", "Operator eligibility", "Region"],
  actions: [
    "View operator",
    "Send verification",
    "Flag document",
    "Export directory",
  ],
  primary: "Invite operator",
  actionRoutes: {
    "View operator": "/admin/transporters/demo",
    "Open operator": "/admin/transporters/demo",
  },
  columns: ["Operator name", "Vehicle class", "Coverage area", "Eligibility"],
  recordsTitle: "Operator fleet and coverage directory",
  detail: "Transporter account",
  detailFields: [
    "Vehicle types",
    "Insurances on file",
    "Service categories",
    "Latest activity",
  ],
  detailText: "Selected record: none",
  detailAction: "Open operator",
  inspectorNote: "Do not mark an operator approved without a verified audit.",
  required:
    "Operator filters: towing/load capacity, vehicle class, regions, availability preference, cover expiry, eligibility, service permissions; support manual matching and audit.",
  requiredSecond:
    "All sensitive updates: permission checks, reason codes, audit entry, confirmation, and reversible operations where appropriate.",
  specialEyebrow: "NEW: HAULBY OPERATOR CONTROLS",
  specialTitle: "OPERATOR COVERAGE & ZONE VERIFICATION",
  specialDescription:
    "Inspect operator-saved postcodes, radius distances, cities and vehicle assignment when reviewing coverage and matching.",
  specialties: ["Operator coverage records →", "Unmatched job queue →"],
  specialNote:
    "Coverage preferences are not licence or weight endorsements. Check independently verified eligibility.",
};
export default function Transporters() {
  return <AdminPage config={page} />;
}
