import QuotationLayout from "../Common/QuotationLayout";
import "./DatesAvailability.css";

export default function DatesAvailability() {
  return (
    <QuotationLayout
      step={5}
      title="Dates & Availability"
      subtitle="Flexible and specific collection/delivery dates"
      fields={[
        {
          name: "collectionDate",
          label: "Preferred collection date",
          placeholder: "Enter preferred collection date",
          type: "date",
        },
        {
          name: "deliveryTimeframe",
          label: "Delivery timeframe",
          placeholder: "Enter delivery timeframe",
          type: "time",
        },
        {
          name: "dateFlexibility",
          label: "Date flexibility",
          placeholder: "Enter date flexibility",
          type: "date",
        },
      ]}
    />
  );
}
