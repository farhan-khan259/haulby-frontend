import AuthPage from "../Common/AuthPage";
import "./MultiFactorAuthentication.css";
const fields = [
  { name: "authenticationCode", label: "Authentication code", placeholder: "Enter authentication code", autoComplete: "one-time-code" },
  { name: "backupCode", label: "Backup code (alternative)", placeholder: "Enter backup code (alternative)" },
];
export default function MultiFactorAuthentication() { return <AuthPage code="A10" path="/security/mfa" title="Multi-Factor Authentication" subtitle="Required for privileged accounts" fields={fields} next="/" />; }
