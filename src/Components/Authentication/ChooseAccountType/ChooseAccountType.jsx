import { useState } from "react";
import AuthPage from "../Common/AuthPage";
import "./ChooseAccountType.css";

export default function ChooseAccountType() {
  const [accountType, setAccountType] = useState("customer");
  const choices = [
    ["customer", "Customer", "Customer account"],
    ["business", "Business", "Business account"],
    ["transporter", "Transporter", "Transporter account"],
  ];

  return (
    <AuthPage code="A01" path="/register" title="Choose Account Type" subtitle="Customer, business shipper or transport operator" action="Choose Account Type" next={`/register/${accountType}`}>
      {choices.map(([value, label, description]) => (
        <label key={value}>
          <span>{label}</span>
          <button
            className={`account-choice${accountType === value ? " is-selected" : ""}`}
            type="button"
            onClick={() => setAccountType(value)}
            aria-pressed={accountType === value}
          >
            <span>Select</span> {description}
          </button>
        </label>
      ))}
    </AuthPage>
  );
}
