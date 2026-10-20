import React from "react";
import InformationalPage from "../Common/InformationalPage";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <InformationalPage
      data={{
        title: "How Transport Works",
        description:
          "Post your transport job, compare offers from eligible UK operators and confirm the agreed service directly with your transporter.",
        steps: [
          [
            "Post a clear request",
            "Give routes, goods, dates and access details for an informed quote.",
          ],
          [
            "Review suitable quotes",
            "Compare services, transport equipment and terms of offers.",
          ],
          [
            "Choose your operator",
            "Choose a suitable operator and confirm collection arrangements.",
          ],
        ],
        overview: {
          kicker: "POST, COMPARE AND ARRANGE",
          title: "From transport request to confirmed booking",
          text: "From transport request to confirmed booking: practical steps for this type of enquiry.",
        },
        information: {
          kicker: "HOW TRANSPORT QUOTES WORK",
          title: "What to check before booking",
          text: "What to check before booking: check the details before proceeding.",
          cards: [
            [
              "What to include in your request",
              "Choose the relevant service, route and timing.",
            ],
            [
              "Operator and service terms",
              "Review the operator's actual quotation, cover and inclusions.",
            ],
            [
              "Before confirming the booking",
              "Confirm handover, delivery proof and direct payment terms.",
            ],
          ],
        },
        nextSteps: {
          text: "Use the appropriate quote or account flow for the next step.",
        },
        importantDetails: {
          title: "Key terms and responsibilities",
          text: "Enter accurate items and route details; operators provide suitable vehicles, loading help and transparent service terms.",
        },
        faqSection: {
          text: "Questions about this specific service and how HAULBY works.",
        },
        faqs: [
          [
            "Can I compare offers?",
            "Yes. We'll work to source suitable quotations through our UK-wide network; you can compare the offers received.",
          ],
          [
            "Who supplies loading and unloading?",
            "The independent transporter arranges suitable staff and equipment for the service they agree to provide.",
          ],
          [
            "When is a booking confirmed?",
            "Only after an eligible operator accepts the actual transport job and the service terms are agreed.",
          ],
          [
            "Does HAULBY collect the transport fare?",
            "No. Customers pay their chosen transporter directly under that supplier's payment terms.",
          ],
        ],
        cta: {
          title: "Ready to arrange transport?",
          text: "Understand the HAULBY marketplace, from request to transport booking.",
          secondaryLink: {
            label: "How It Works for Customers",
            href: "/how-it-works/customers",
          },
        },
      }}
    />
  );
}
