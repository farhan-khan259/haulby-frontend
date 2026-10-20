import React from "react";
import InformationalPage from "../Common/InformationalPage";
import "./CustomerHowItWorks.css";
export default function CustomerHowItWorks() {
  return (
    <InformationalPage
      data={{
        title: "How to Book Transport",
        description:
          "Request UK transport quotes for cars, parcels, furniture or freight, then compare offers and track your confirmed journey.",
        heroButtonLabel: "Explore For Customers: How It Works",
        steps: [
          [
            "Describe your transport need",
            "Post the correct category, goods and collection requirements.",
          ],
          [
            "Compare operator proposals",
            "Compare offers and relevant operator information.",
          ],
          [
            "Confirm pickup and delivery",
            "Agree the booking details and record completion.",
          ],
        ],
        overview: {
          kicker: "YOUR TRANSPORT BOOKING STEPS",
          title: "How to arrange a UK transport collection",
          text: "How to arrange a UK transport collection: practical steps for this type of enquiry.",
        },
        information: {
          kicker: "COLLECTION, QUOTES AND DELIVERY",
          title: "Information customers should prepare",
          text: "Information customers should prepare: check the details before proceeding.",
          cards: [
            [
              "What to include in your request",
              "List your items, weights and access restrictions clearly.",
            ],
            [
              "Operator and service terms",
              "Compare suitable independent operators and service terms.",
            ],
            [
              "Before confirming the booking",
              "Agree collection, tracking, handover and direct payment.",
            ],
          ],
        },
        nextSteps: {
          text: "Use the appropriate quote or account flow for the next step.",
        },
        importantDetails: {
          title: "Key terms and responsibilities",
          text: "Your chosen operator handles the agreed collection and unloading; pay the transporter directly under their stated terms.",
        },
        faqSection: {
          text: "Questions about this specific service and how HAULBY works.",
        },
        faqs: [
          [
            "What if my transport request needs extra matching?",
            "We work to match every suitable job through our UK-wide network, including requests needing a wider search.",
          ],
          [
            "What details help me receive accurate quotes?",
            "Describe the items, size, gross weight, access restrictions, preferred times and collection contacts.",
          ],
          [
            "Can I track a confirmed delivery?",
            "Where job-scoped driver tracking is active, your booking can show a recent location, ETA and delivery updates.",
          ],
          [
            "Who issues my transport invoice?",
            "Your booked independent transporter issues their own invoice and receives transport payment directly.",
          ],
        ],
        cta: {
          title: "Ready to arrange transport?",
          text: "Understand each stage of the customer transport booking journey.",
        },
      }}
    />
  );
}
