import QuotationLayout from "../Common/QuotationLayout";
import "./ItemsVehicleDetails.css";

export default function ItemsVehicleDetails() {
  return <QuotationLayout step={3} title="Items / Vehicle Details" subtitle="Conditional vehicle, furniture, parcel or pallet fields" fields={[
    { name: "itemDescription", label: "Item or vehicle description", placeholder: "Enter item or vehicle description" },
    { name: "quantity", label: "Quantity / dimensions", placeholder: "Enter quantity / dimensions" },
    { name: "weight", label: "Approximate loaded weight", placeholder: "Enter approximate loaded weight" },
  ]} />;
}
