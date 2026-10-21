import QuotationLayout from "../Common/QuotationLayout";
import "./CollectionDestination.css";

export default function CollectionDestination() {
  return (
    <QuotationLayout
      step={2}
      title="Collection & Destination"
      subtitle="Postcodes, stops, collection windows"
      fields={[
        {
          name: "collectionPostcode",
          label: "Collection postcode",
          placeholder: "Enter collection postcode",
        },
        {
          name: "deliveryPostcode",
          label: "Delivery postcode",
          placeholder: "Enter delivery postcode",
        },
        {
          name: "collectionContact",
          label: "Collection contact",
          placeholder: "Enter collection contact",
        },
      ]}
    />
  );
}
