import AuthPage from "../Common/AuthPage";
import "./EmailVerification.css";
const fields = [{ name: "code", label: "Verification code", placeholder: "Enter verification code", autoComplete: "one-time-code" }];
export default function EmailVerification() { return <AuthPage code="A08" path="/verify-email" title="Email Verification" subtitle="Verify email and return to onboarding" fields={fields} next="/login" />; }
