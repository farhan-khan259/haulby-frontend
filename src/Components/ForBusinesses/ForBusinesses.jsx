import React from "react";
import InformationalPage from "../Common/InformationalPage";
import "./ForBusinesses.css";

export default function ForBusinesses() {
  return (
    <InformationalPage
      data={{
        title: "Business Transport",
        description:
          "Request and manage UK business transport for customer orders, pallets, equipment and recurring collections from one business account.",
        heroButtonLabel: "Explore For Businesses",
        steps: [
          [
            "Business delivery requests",
            "Organise single, multi-stop and repeat business deliveries.",
          ],
          [
            "Repeat shipment planning",
            "Compare offers matching capacity and delivery windows.",
          ],
          [
            "Multi-user organisation",
            "Keep business shipping requests accessible to authorised staff.",
          ],
        ],
        overview: {
          kicker: "BUSINESS TRANSPORT REQUIREMENTS",
          title: "Manage business deliveries in HAULBY",
          text: "Manage business deliveries in HAULBY: practical steps for this type of enquiry.",
        },
        information: {
          kicker: "MULTIPLE CONSIGNMENTS & RECORDS",
          title: "Business shipping details to confirm",
          text: "Business shipping details to confirm: check the details before proceeding.",
          cards: [
            [
              "What to include in your request",
              "Create enquiries for one-off and recurring consignments.",
            ],
            [
              "Operator and service terms",
              "Let authorised team members manage quotes and records.",
            ],
            [
              "Before confirming the booking",
              "Check supplier invoices, delivery proof and direct payment.",
            ],
          ],
        },
        nextSteps: {
          text: "Use the appropriate quote or account flow for the next step.",
        },
        importantDetails: {
          title: "Key terms and responsibilities",
          text: "Your independent transport supplier invoices you directly. Track consignments and retain agreed delivery evidence.",
        },
        faqSection: {
          text: "Questions about this specific service and how HAULBY works.",
        },
        faqs: [
          [
            "Can we organise recurring transport?",
            "Yes. Describe repeated business consignments and their requirements.",
          ],
          [
            "Can employees organise deliveries for our business?",
            "Authorised business-account users can create requests and manage the company's bookings.",
          ],
          [
            "Who is responsible for moving and unloading our goods?",
            "Your selected operator must arrange the people and handling equipment included in the agreed service.",
          ],
          [
            "How are business delivery invoices handled?",
            "The transport supplier invoices your business directly; HAULBY provides shipment and delivery records.",
          ],
        ],
        cta: {
          title: "Ready to arrange transport?",
          text: "Organise quotations and transport requests for UK businesses.",
        },
      }}
    />
  );
}
