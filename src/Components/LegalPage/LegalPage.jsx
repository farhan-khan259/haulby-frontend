import InformationalPage from "../Common/InformationalPage";
import "./LegalPage.css";

const documents = {
  privacy: ["Privacy Policy", "How HAULBY collects, uses and protects personal information.", "Personal information and your choices"],
  cookies: ["Cookie Policy", "How HAULBY uses essential and optional cookies across its website.", "Cookies and website preferences"],
  terms: ["Terms of Use", "The terms that apply when accessing and using the HAULBY marketplace.", "Using HAULBY responsibly"],
  transporter: ["Transporter Agreement", "The platform terms that apply to independent transport operators using HAULBY.", "Independent operator responsibilities"],
  complaints: ["Complaints Procedure", "How to raise a concern and what information helps HAULBY review it.", "Raising and resolving concerns"],
  accessibility: ["Accessibility", "HAULBY's approach to making its website and transport marketplace easier to use.", "Accessible use of HAULBY"],
};

export default function LegalPage({ document = "terms" }) {
  const [title, description, sectionTitle] = documents[document] || documents.terms;
  return <InformationalPage data={{
    pageClass: "legal-page", title, description,
    overview: { kicker: "HELP & LEGAL", title: sectionTitle, cards: [
      ["What this document covers", description],
      ["Your responsibilities", "Provide accurate information, protect account access and follow the terms relevant to your activity."],
      ["Questions and support", "Contact HAULBY if you need help understanding how this information applies to your account."],
    ]},
    information: { kicker: "IMPORTANT INFORMATION", title: "Clear information and support", cards: [
      ["Review the current version", "Check this page when using HAULBY because policies and operational details may be updated."],
      ["Keep useful records", "Retain relevant booking, account and communication records where they may be needed."],
      ["Contact the right party", "Transport services are provided by independent operators; HAULBY supports marketplace and account enquiries."],
    ]},
    steps: [["Read the information", ""], ["Check your responsibilities", ""], ["Contact support if needed", ""]],
    importantDetails: { title: sectionTitle, text: description },
    faqs: [
      ["Where can I ask a question?", "Use the HAULBY contact page and select the enquiry type that best matches your question."],
      ["Who provides the transport service?", "The independent operator accepted for the booking provides the transport service."],
      ["Can these documents change?", "They may be updated when services, legal requirements or marketplace processes change."],
      ["How can I report a concern?", "Keep relevant evidence and use the complaints or contact route to send the details to HAULBY."],
    ],
    cta: { title: "Need help with this information?", text: "Contact the appropriate HAULBY team for account, booking or operator support.", href: "/contact", buttonLabel: "Contact HAULBY" },
  }} />;
}
