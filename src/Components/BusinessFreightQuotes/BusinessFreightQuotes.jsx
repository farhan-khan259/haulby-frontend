import InformationalPage from "../Common/InformationalPage";
import hero from "../../Assets/Pictures/business.png";
import "./BusinessFreightQuotes.css";

export default function BusinessFreightQuotes() {
  return (
    <InformationalPage
      data={{
        title: "Business Freight Quotes",
        description:
          "Plan single and multi-pallet deliveries, commercial freight and compatible part-load journeys through independent UK operators.",
        image: hero,
        overview: {
          kicker: "FREIGHT SHIPPER WORKFLOWS",
          title: "Request commercial pallet and freight transport",
          text: "Request commercial pallet and freight transport: practical steps for this type of enquiry.",
          cards: [
            [
              "Palletised freight",
              "Provide loaded pallet dimensions and total weight.",
            ],
            [
              "Part loads and backloads",
              "Consider compatible return-route and part-load capacity.",
            ],
            [
              "Regular road freight",
              "Include warehouse loading windows and site restrictions.",
            ],
          ],
        },
        information: {
          kicker: "PALLET SIZE, LOAD WEIGHT & ACCESS",
          title: "Freight details operators need",
          text: "Freight details operators need: check the details before proceeding.",
          cards: [
            [
              "What to include in your request",
              "Enter the pallet count and fully loaded weight.",
            ],
            [
              "Operator and service terms",
              "Describe forklift, tail-lift, bay and site access.",
            ],
            [
              "Before confirming the booking",
              "Confirm agreed operator equipment and the shipping terms.",
            ],
          ],
        },
        steps: [
          ["Palletised freight", ""],
          ["Part loads and backloads", ""],
          ["Regular road freight", ""],
        ],
        importantDetails: {
          title: "Key terms and responsibilities",
          text: "Declare full gross weights, handling-site equipment and delivery restrictions; operators must supply agreed loading resources.",
        },
        faqs: [
          [
            "What information is needed?",
            "Gross weights, sizes, loading access, route and timing.",
          ],
          [
            "What are the key details for a pallet quote?",
            "Declare pallet count, gross weight, dimensions, loading access and whether the site has a suitable loading bay.",
          ],
          [
            "Can a part load share available vehicle space?",
            "Only where the goods, route, timing, vehicle capacity and legal load-securing requirements are compatible.",
          ],
          [
            "Who provides unloading equipment?",
            "The transporter must arrange the crew and equipment needed for the agreed collection and delivery.",
          ],
        ],
        cta: {
          title: "Ready to arrange transport?",
          text: "Request quotes for pallets, part loads and other business freight.",
        },
      }}
    />
  );
}
