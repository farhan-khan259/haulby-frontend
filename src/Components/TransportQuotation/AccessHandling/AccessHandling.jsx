import QuotationLayout from "../Common/QuotationLayout";
import "./AccessHandling.css";

export default function AccessHandling() {
  return <QuotationLayout step={4} title="Access & Handling" subtitle="Tell us about access and any specialist requirements. The transporter arranges suitable crew and equipment." fields={[
    { name: "collectionAccess", label: "Collection access", placeholder: "Enter collection access" },
    { name: "deliveryAccess", label: "Delivery access", placeholder: "Enter delivery access" },
    { name: "handlingDetails", label: "Access or specialist handling details", placeholder: "e.g. stairs, narrow access, tail-lift or heavy item", multiline: true },
  ]} notice={{ title: "Loading & unloading arranged by your transporter", text: "You don't need to arrange lifting help. Describe stairs, narrow access, heavy items or site facilities so the operator can bring the right crew and equipment for your agreed service." }} />;
}
