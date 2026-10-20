import React from "react";
import InformationalPage from "../Common/InformationalPage";
import "./RetailersOnlineSellers.css";
import image from "../../Assets/Pictures/HAULBY Visual Asset 13 _ 1376×768 _ KEEP SOURCE.png";
export default function RetailersOnlineSellers() {
  return (
    <InformationalPage
      data={{
        title: "Delivery for Online Sellers",
        description:
          "Arrange courier, van and bulky-item transport quotes for online orders, retail deliveries and customer collections across the UK.",
        heroButtonLabel: "Explore For Retailers & Online Sellers",
        image,
        steps: [
          [
            "Bulky customer deliveries",
            "Record customer item dimensions and handling needs.",
          ],
          [
            "Retail collections",
            "Arrange store, seller and warehouse collection requests.",
          ],
          [
            "eCommerce consignments",
            "Describe recurring boxed or bulky deliveries accurately.",
          ],
        ],
        overview: {
          kicker: "RETAIL AND ECOMMERCE DELIVERY",
          title: "Arrange deliveries for online orders",
          text: "Arrange deliveries for online orders: practical steps for this type of enquiry.",
        },
        information: {
          kicker: "ORDER HANDOVER & CUSTOMER SERVICE",
          title: "Retail dispatch and handover requirements",
          text: "Retail dispatch and handover requirements: check the details before proceeding.",
          cards: [
            [
              "What to include in your request",
              "Post parcel, furniture or van delivery enquiries.",
            ],
            [
              "Operator and service terms",
              "Provide packed dimensions, customer address and time window.",
            ],
            [
              "Before confirming the booking",
              "Confirm suitable handling, proof of delivery and returns process.",
            ],
          ],
        },
        nextSteps: {
          text: "Use the appropriate quote or account flow for the next step.",
        },
        importantDetails: {
          title: "Key terms and responsibilities",
          text: "Provide parcel dimensions, weight, ready-for-collection times and recipient delivery details to receive relevant quotes.",
        },
        faqSection: {
          text: "Questions about this specific service and how HAULBY works.",
        },
        faqs: [
          [
            "Do transporters provide loading and unloading?",
            "Transport operators supply appropriate labour or handling equipment for their agreed service; provide clear access details before quoting.",
          ],
          [
            "Who arranges loading of bulky retail orders?",
            "The chosen transporter provides suitable staff and equipment for the agreed delivery; tell them about item size and stairs.",
          ],
          [
            "Can I arrange regular retailer collections?",
            "You can submit repeat delivery requests and save business shipping details for authorised staff.",
          ],
          [
            "How is proof of delivery recorded?",
            "A completed booking can include authorised recipient details, a signature or a documented exception.",
          ],
        ],
        cta: {
          title: "Ready to arrange transport?",
          text: "Compare van, courier and furniture-delivery options for customer orders.",
        },
      }}
    />
  );
}
