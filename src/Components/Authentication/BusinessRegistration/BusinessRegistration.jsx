import AuthPage from "../Common/AuthPage";
import "./BusinessRegistration.css";
const fields = [
  { name: "businessName", label: "Business name", placeholder: "Enter business name", autoComplete: "organization" },
  { name: "email", label: "Company email", placeholder: "Enter company email", type: "email", autoComplete: "email" },
  { name: "contactName", label: "Contact name", placeholder: "Enter contact name", autoComplete: "name" },
  { name: "password", label: "Password", placeholder: "Enter password", type: "password", autoComplete: "new-password" },
];
export default function BusinessRegistration() { return <AuthPage code="A03" path="/register/business" title="Business Registration" subtitle="Company and authorised user" fields={fields} next="/verify-email" />; }
