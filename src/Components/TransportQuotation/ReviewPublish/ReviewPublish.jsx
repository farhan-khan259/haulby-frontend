import QuotationLayout from "../Common/QuotationLayout";
import "./ReviewPublish.css";

export default function ReviewPublish() {
  return (
    <QuotationLayout
      step={7}
      title="Review & Publish"
      subtitle="Confirm complete request and important terms"
      fields={[
        {
          name: "journeySummary",
          label: "Collection and delivery summary",
          placeholder: "Enter collection and delivery summary",
        },
        {
          name: "loadSummary",
          label: "Load, access and timings",
          placeholder: "Enter load, access and timings",
        },
        {
          name: "confirmation",
          label: "Agreement and publishing confirmation",
          placeholder: "Enter agreement and publishing confirmation",
        },
      ]}
    />
  );
}
