import AuthPage from "../Common/AuthPage";
import "./OrganisationInvitation.css";
const fields = [
  { name: "token", label: "Invitation token", placeholder: "Enter invitation token" },
  { name: "name", label: "Your name", placeholder: "Enter your name", autoComplete: "name" },
  { name: "password", label: "Password", placeholder: "Enter password", type: "password", autoComplete: "new-password" },
];
export default function OrganisationInvitation() { return <AuthPage code="A09" path="/invite/[token]" title="Organisation Invitation" subtitle="Accept a business or transporter team invite" fields={fields} next="/login" />; }
