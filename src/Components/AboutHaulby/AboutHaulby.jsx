import InformationalPage from "../Common/InformationalPage";
import "./AboutHaulby.css";
export default function AboutHaulby() {
  return (
    <InformationalPage
      data={{
        title: "About HAULBY",
        description:
          "Learn how HAULBY connects customers and businesses with suitable independent UK operators for everyday and specialist transport.",
        overview: {
          kicker: "OUR UK TRANSPORT MARKETPLACE",
          title: "An independent marketplace for UK transport",
          cards: [
            [
              "Simple transport requests",
              "Describe a transport journey in one understandable request.",
            ],
            [
              "Useful operator comparisons",
              "Give independent operators visibility of suitable work.",
            ],
            [
              "Nationwide transport ambitions",
              "Cover vehicles, deliveries, furniture, freight and eligible plant.",
            ],
          ],
        },
        information: {
          kicker: "CUSTOMERS, OPERATORS & COVERAGE",
          title: "What HAULBY does and does not provide",
          cards: [
            [
              "What to include in your request",
              "Connect customers and businesses to independent operators.",
            ],
            [
              "Operator and service terms",
              "Support quotes, messages and job tracking on one platform.",
            ],
            [
              "Before confirming the booking",
              "Suppliers—not HAULBY—provide transport and take payment.",
            ],
          ],
        },
        steps: [
          ["Simple transport requests", ""],
          ["Useful operator comparisons", ""],
          ["Nationwide transport ambitions", ""],
        ],
        importantDetails: {
          title: "Key terms and responsibilities",
          text: "HAULBY operates a matching platform, not its own nationwide carrier fleet. Bookings are agreed with independent suppliers.",
        },
        faqs: [
          [
            "Does HAULBY own the pictured vehicles?",
            "No. Brand imagery illustrates transport services, not an owned fleet.",
          ],
          [
            "Does HAULBY provide the driver and vehicle?",
            "No. The transport is carried out by independent suppliers who accept the agreed booking.",
          ],
          [
            "Where can customers request transport?",
            "HAULBY accepts suitable UK-wide enquiries and works to identify eligible operators; availability is not guaranteed.",
          ],
          [
            "How does the marketplace earn revenue?",
            "Operators pay HAULBY membership subscriptions, while customers pay transport fares to operators directly.",
          ],
        ],
        cta: {
          title: "Ready to arrange transport?",
          text: "Learn about HAULBY's mission as an independent UK transport marketplace.",
        },
      }}
    />
  );
}
