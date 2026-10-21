import QuotationLayout from "../Common/QuotationLayout";
import "./RequestPublished.css";

export default function RequestPublished() {
  return <QuotationLayout
    step={8}
    title="Request Published"
    subtitle="Your request is ready for nationwide operator matching."
    cardTitle="We're finding the right transporter for your job"
    cardDescription="HAULBY works to match your request with suitable UK operators. Your booking is confirmed when an operator accepts."
    primaryLabel="View Transport Request"
    primaryPath="/find-transport"
    fields={[
      { name: "requestReference", label: "Published request reference", placeholder: "Reference generated after successful publication" },
      { name: "requestQuotes", label: "View request and quotes", placeholder: "Check your matching progress in My Requests" },
    ]}
  />;
}
