import AuthPage from "../Common/AuthPage";
import "./Login.css";
const fields = [
  { name: "email", label: "Email address", placeholder: "Enter email address", type: "email", autoComplete: "email" },
  { name: "password", label: "Password", placeholder: "Enter password", type: "password", autoComplete: "current-password" },
];
export default function Login() { return <AuthPage code="A05" path="/login" title="Log In" subtitle="Single sign-in and role-aware redirect" fields={fields} next="/security/mfa" />; }
