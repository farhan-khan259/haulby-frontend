import QuotationLayout from "../Common/QuotationLayout";
import "./ChooseTransportType.css";

export default function ChooseTransportType() {
  return <QuotationLayout step={1} title="Choose Transport Type" subtitle="Select service category; saves a draft" fields={[
    { name: "transportCategory", label: "Transport category", placeholder: "Enter transport category" },
    { name: "moving", label: "What are you moving?", placeholder: "Enter what are you moving?" },
  ]} />;
}
