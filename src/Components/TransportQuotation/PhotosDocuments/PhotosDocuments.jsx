import QuotationLayout from "../Common/QuotationLayout";
import "./PhotosDocuments.css";

export default function PhotosDocuments() {
  return <QuotationLayout step={6} title="Photos & Documents" subtitle="Secure uploads, restrictions and validation" fields={[
    { name: "uploads", label: "Photos / document uploads", type: "file", accept: "image/*,.pdf,.doc,.docx" },
    { name: "additionalNotes", label: "Additional notes", placeholder: "Enter additional notes" },
  ]} />;
}
