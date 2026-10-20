import React from "react";
import InformationalPage from "../Common/InformationalPage";
import "./TransporterHowItWorks.css";
export default function TransporterHowItWorks() {
  return (
    <InformationalPage
      data={{
        title: "How It Works for Transporters",
        description:
          "Register your transport business, complete eligibility checks, find suitable loads and submit authorised quotes in HAULBY.",
        heroButtonLabel: "Explore For Transporters: How It Works",
        steps: [
          [
            "Register an operator account",
            "Enter business identity and available transport equipment.",
          ],
          [
            "Complete required verification",
            "Complete required verification for the chosen services.",
          ],
          [
            "Find, quote and fulfil work",
            "Quote for suitable work and manage confirmed journeys.",
          ],
        ],
        overview: {
          kicker: "REGISTER, VERIFY AND FIND WORK",
          title: "Register and find UK transport work",
          text: "Register and find UK transport work: practical steps for this type of enquiry.",
        },
        information: {
          kicker: "VEHICLE, INSURANCE AND MEMBERSHIP",
          title: "Before operators may quote for a load",
          text: "Before operators may quote for a load: check the details before proceeding.",
          cards: [
            [
              "What to include in your request",
              "Set up your company, vehicles, operating areas and users.",
            ],
            [
              "Operator and service terms",
              "Complete insurance, identity and eligibility checks.",
            ],
            [
              "Before confirming the booking",
              "Quote only where you have suitable equipment and loading staff.",
            ],
          ],
        },
        nextSteps: {
          text: "Use the appropriate quote or account flow for the next step.",
        },
        importantDetails: {
          title: "Key terms and responsibilities",
          text: "Access to work depends on verification, lawful operating permissions, suitable equipment and an active eligible membership.",
        },
        faqSection: {
          text: "Questions about this specific service and how HAULBY works.",
        },
        faqs: [
          [
            "Does registering guarantee jobs?",
            "No. Suitable work depends on demand and route matching.",
          ],
          [
            "Can an employed driver submit a quote?",
            "Only a company owner or someone explicitly authorised to price work may place or revise a quote.",
          ],
          [
            "What must I provide before accepting work?",
            "Relevant verification, appropriate insurance, suitable vehicles, loading equipment and staff.",
          ],
          [
            "How does membership payment work?",
            "HAULBY invoices your operator business for its subscription; transport customers pay you separately.",
          ],
        ],
        cta: {
          title: "Ready to arrange transport?",
          text: "See how operators register, complete checks, quote and manage work.",
        },
      }}
    />
  );
}
