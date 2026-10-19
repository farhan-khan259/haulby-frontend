import React from "react";
import InformationalPage from "../Common/InformationalPage";
import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <InformationalPage
      data={{
        title: "How It Works",
        description:
          "Understand the HAULBY marketplace, from request to transport booking.",
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
        faqs: [
          [
            "Can I compare offers?",
            "Yes. We'll work to source suitable quotations through our UK-wide network; you can compare the offers received.",
          ],
          [
            "What should I check before booking?",
            "Review the relevant terms, operator information, load details and service inclusions.",
          ],
          [
            "How does HAULBY work to cover my transport job?",
            "We aim to get every suitable job covered through UK-wide matching. A booking is confirmed when an operator accepts.",
          ],
          [
            "Where can I get more help?",
            "Use the Help Centre or the relevant contact route for your enquiry.",
          ],
        ],
      }}
    />
  );
}
