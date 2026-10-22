import LegalDocumentLayout from "../LegalDocumentCommon/LegalDocumentLayout";
import "./PrivacyPolicyPage.css";
const sections = [
  [
    "Personal data and transparency",
    "HAULBY processes account, business, job, quote, invoices, messages, identity-verification, support and security data. Separate suppliers may act as their own controllers for carriage, customers and employees.",
  ],
  [
    "Purpose, legal basis and sales",
    "Processing must have a documented lawful basis. Telesales business leads come from screened suppliers; HAULBY respects TPS/CTPS proof and its own Do Not Call. Marketing and operational messages use separate eligibility rules.",
  ],
  [
    "Job GPS, calls and sharing",
    "Authorised active-job tracking starts after collection and stops at confirmed completion. Booked parties see location only where appropriate. VoIPstudio call records and recordings are purpose-limited and role-restricted.",
  ],
  [
    "Rights, retention and complaints",
    "Explain sharing, international transfers, retention and rights of access, correction, objection and deletion where available. UK data complaints have a formal process and must be acknowledged within 30 days; contact details remain to be confirmed.",
  ],
];
export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentLayout
      title="Privacy Policy"
      description="How HAULBY handles customer, transporter, driver, recipient, CRM, location and call information."
      sections={sections}
    />
  );
}
