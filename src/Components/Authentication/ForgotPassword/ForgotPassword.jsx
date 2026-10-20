import AuthPage from "../Common/AuthPage";
import "./ForgotPassword.css";
const fields = [{ name: "email", label: "Email address", placeholder: "Enter email address", type: "email", autoComplete: "email" }];
export default function ForgotPassword() { return <AuthPage code="A06" path="/forgot-password" title="Forgot Password" subtitle="Secure email reset request" fields={fields} next="/reset-password" />; }
