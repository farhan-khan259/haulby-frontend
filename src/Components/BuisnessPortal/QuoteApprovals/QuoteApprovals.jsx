import L from "../Common/BusinessPortalLayout";
import "./QuoteApprovals.css";
export default function QuoteApprovals() {
  return (
    <L
      title="Quote Approvals"
      description="Approve bookings by spend or company role"
      cards={["Profile", "Permissions", "Preferences"]}
      type="settings"
      active="Quotes"
      next="/business/reports"
    />
  );
}
