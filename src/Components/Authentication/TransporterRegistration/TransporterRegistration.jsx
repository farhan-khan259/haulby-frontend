import AuthPage from "../Common/AuthPage";
import "./TransporterRegistration.css";
const fields = [
  { name: "businessName", label: "Operator business name", placeholder: "Enter operator business name", autoComplete: "organization" },
  { name: "email", label: "Contact email", placeholder: "Enter contact email", type: "email", autoComplete: "email" },
  { name: "telephone", label: "Telephone", placeholder: "Enter telephone", type: "tel", autoComplete: "tel" },
  { name: "password", label: "Password", placeholder: "Enter password", type: "password", autoComplete: "new-password" },
];
export default function TransporterRegistration() { return <AuthPage code="A04" path="/register/transporter" title="Transporter Registration" subtitle="Create operator account and start verification" fields={fields} next="/verify-email" />; }
