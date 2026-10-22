import AuthPage from "../Common/AuthPage";
import "./CustomerRegistration.css";
const fields = [
  {
    name: "fullName",
    label: "Full name",
    placeholder: "Enter full name",
    autoComplete: "name",
  },
  {
    name: "email",
    label: "Email address",
    placeholder: "Enter email address",
    type: "email",
    autoComplete: "email",
  },
  {
    name: "mobile",
    label: "Mobile number",
    placeholder: "Enter mobile number",
    type: "tel",
    autoComplete: "tel",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    autoComplete: "new-password",
  },
];
export default function CustomerRegistration() {
  return (
    <AuthPage
      code="A02"
      path="/register/customer"
      title="Customer Registration"
      subtitle="Individual customer account"
      fields={fields}
      next="/verify-email"
    />
  );
}
