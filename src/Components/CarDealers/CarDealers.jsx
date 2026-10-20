import React from "react";
import InformationalPage from "../Common/InformationalPage";
import "./CarDealers.css";
import image from "../../Assets/Pictures/HAULBY Visual Asset 13 _ 1376×768 _ KEEP SOURCE.png";
export default function CarDealers() {
  return (
    <InformationalPage
      data={{
        title: "Motor Trade Transport",
        description:
          "Organise dealer-to-dealer car transport, auction collections and planned vehicle movements with suitably equipped UK operators.",
        heroButtonLabel: "Explore For Car Dealers & Motor Trade",
        image,
        steps: [
          [
            "Dealership collections",
            "Provide vehicle specifications and collection contacts.",
          ],
          [
            "Auction purchases",
            "Include auction release and dealer opening information.",
          ],
          [
            "Workshop and fleet transfers",
            "Disclose non-running condition and special loading needs.",
          ],
        ],
        overview: {
          kicker: "MOTOR TRADE COLLECTION SERVICES",
          title: "Organise motor trade vehicle collections",
          text: "Organise motor trade vehicle collections: practical steps for this type of enquiry.",
        },
        information: {
          kicker: "DEALERS, AUCTIONS AND VEHICLES",
          title: "Vehicle information dealers should provide",
          text: "Vehicle information dealers should provide: check the details before proceeding.",
          cards: [
            [
              "What to include in your request",
              "Identify each vehicle, running condition and release contact.",
            ],
            [
              "Operator and service terms",
              "State auction, dealership and collection-site access.",
            ],
            [
              "Before confirming the booking",
              "Confirm recovery equipment, insurance and collection slot.",
            ],
          ],
        },
        nextSteps: {
          text: "Use the appropriate quote or account flow for the next step.",
        },
        importantDetails: {
          title: "Key terms and responsibilities",
          text: "Provide VIN/registration where appropriate, release paperwork, running condition and collection-site requirements.",
        },
        faqSection: {
          text: "Questions about this specific service and how HAULBY works.",
        },
        faqs: [
          [
            "Can non-running cars be collected?",
            "Describe their condition so suitable operators can quote.",
          ],
          [
            "What should I provide for an auction collection?",
            "Enter the vehicle identification, seller or auction release process and the agreed collection window.",
          ],
          [
            "Can non-running cars be transported?",
            "Yes, where an eligible operator has the necessary recovery equipment and site access.",
          ],
          [
            "Who pays for dealer vehicle transport?",
            "The dealership or customer pays the chosen independent supplier under its agreed terms.",
          ],
        ],
        cta: {
          title: "Ready to arrange transport?",
          text: "Arrange planned motor-trade vehicle collections and transfers.",
        },
      }}
    />
  );
}
