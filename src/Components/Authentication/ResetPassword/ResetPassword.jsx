import AuthPage from "../Common/AuthPage";
import "./ResetPassword.css";
const fields = [
  { name: "password", label: "New password", placeholder: "Enter new password", type: "password", autoComplete: "new-password" },
  { name: "confirmPassword", label: "Confirm new password", placeholder: "Enter confirm new password", type: "password", autoComplete: "new-password" },
];
export default function ResetPassword() { return <AuthPage code="A07" path="/reset-password" title="Reset Password" subtitle="One-time-token password reset" fields={fields} next="/login" />; }
