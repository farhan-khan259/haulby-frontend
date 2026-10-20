import React from "react";
import SpecialistPage from "../Common/SpecialistPage";
import "./VanTransport.css";
import a1 from "../../Assets/Pictures/HAULBY Visual Asset 01 _ 1376×768 _ KEEP SOURCE.png";
import a7 from "../../Assets/Pictures/HAULBY Visual Asset 07 _ 1376×768 _ KEEP SOURCE.png";
import a8 from "../../Assets/Pictures/HAULBY Visual Asset 08 _ 1376×768 _ KEEP SOURCE.png";
import a9 from "../../Assets/Pictures/HAULBY Visual Asset 09 _ 1376×768 _ KEEP SOURCE.png";
export default function VanTransport() {
  return (
    <SpecialistPage
      config={{
        title: "Van Transport",
        service: "Van Transport",
        heroText:
          "Compare quotes to transport commercial vans and minibuses, including vehicles that need specialist collection equipment.",
        tags: [
          "Used van purchases",
          "Fleet transfers",
          "Workshop collections",
          "Non-running vans",
        ],
        images: [a1, a1, a7, a9, a8, a7, a1],
        quoteTitle: "Where does the load need to go?",
        quoteText:
          "Enter the route and job type. Add equipment, weight, condition and collection requirements in the next steps.",
        typePlaceholder: "Car / Van / Motorcycle",
        quoteNote:
          "Van dimensions, payload and suitable transporter capacity. Include accurate details for every collection and delivery.",
        options: [
          "Small Van Collection",
          "High-Roof Van Transport",
          "Non-Running Vans",
          "Trade Fleet Movements",
        ],
        optionText: [
          "Move compact vans between dealers, buyers and workshops.",
          "Specify additional height, length and vehicle mass.",
          "Declare whether recovery equipment or winching is needed.",
          "Arrange planned vehicle repositioning and collections.",
        ],
        optionsKicker: "VAN & MINIBUS VEHICLE TRANSPORT",
        optionsTitle: "Transport for Vans & Minibuses.",
        optionsText:
          "Compare independent UK quotes for commercial vans, small fleet transfers and minibus collections, including non-running vehicles.",
        optionBullets: [
          [
            "Used van purchases",
            "Van dimensions, payload and suitable transporter capacity",
          ],
          [
            "Fleet transfers",
            "Van dimensions, payload and suitable transporter capacity",
          ],
          [
            "Workshop collections",
            "Van dimensions, payload and suitable transporter capacity",
          ],
          [
            "Non-running vans",
            "Van dimensions, payload and suitable transporter capacity",
          ],
        ],
        hideOptionLinks: true,
        bullets: [
          "Used van purchase",
          "Vehicle dimensions",
          "Non-running condition",
          "Fleet movements",
        ],
        darkKicker: "VAN TRANSPORT JOURNEYS",
        darkTitle: "Common van transport requests.",
        darkText:
          "Confirm the van's height, wheelbase, gross weight, running condition and whether access allows safe loading onto the proposed transport vehicle.",
        darkCards: [
          [
            "Commercial van collections",
            "Include wheelbase, roof height and exact collection address.",
            "truck",
          ],
          [
            "Private van purchases",
            "Share the seller's details and whether the van can be driven.",
            "route",
          ],
          [
            "Fleet transfers",
            "Describe the number of vans and any fixed arrival windows.",
            "route",
          ],
          [
            "Broken-down vans",
            "State mobility, weight and access for recovery equipment.",
            "shield",
          ],
        ],
        steps: [
          [
            "Describe your van's size and condition",
            "Vehicle details, collection, destination and access information.",
          ],
          [
            "Compare operator quotes",
            "Look at offers, provider details, services and terms.",
          ],
          [
            "Choose & arrange transport",
            "Confirm your preferred quote and manage your booking.",
          ],
        ],
        prepareKicker: "INFORMATION FOR ACCURATE QUOTES",
        prepareTitle: "Prepare your van transport details.",
        prepareText:
          "Compare quotes to transport commercial vans and minibuses, including vehicles that need specialist collection equipment. Provide the necessary equipment, access and safety details.",
        prepareBullets: [
          "Full van dimensions and gross vehicle mass",
          "Whether the van runs, rolls, steers and brakes",
          "Height and weight restrictions and access",
          "Loading equipment and approved transport method",
        ],
        workKicker: "FOR SUITABLE TRANSPORT OPERATORS",
        workTitle: "Find van transport work.",
        workText:
          "Operators must assess weight and height limits, insurance and specialist recovery equipment before accepting a van move.",
        faqs: [
          [
            "Will any flatbed carry a van?",
            "No. The operator must assess actual payload, bed dimensions and suitable equipment.",
          ],
          [
            "Can I transport a high-roof van?",
            "Provide its full height, wheelbase and mass to assess vehicle suitability.",
          ],
          [
            "Can a broken-down van be collected?",
            "State its mechanical condition and any loading constraints.",
          ],
          [
            "Can businesses move several vans?",
            "Yes. List each vehicle and route so operators can plan capacity.",
          ],
        ],
        costKicker: "VAN TRANSPORT COST FACTORS",
        costTitle: "What affects van transport quotes?",
        costText:
          "Pricing depends on route, the actual goods, access and any equipment required. Van dimensions, payload and suitable transporter capacity.",
        costs: [
          [
            "Journey and collection timing",
            "Mileage, pickup windows and delivery requirements affect the overall job.",
            "Start a Transport Quote",
          ],
          [
            "Van dimensions, payload and suitable transporter capacity",
            "Give accurate sizes, weight, condition and handling details so operators can assess suitability.",
            "Related Transport Services",
          ],
          [
            "Equipment, access and service terms",
            "Confirm the operator's loading/unloading plan, sufficient crew and equipment, insurance, exclusions, cancellations and service terms.",
            "How HAULBY Works",
          ],
        ],
        compareKicker: "VAN TRANSPORT SERVICE GUIDE",
        compareTitle: "Choosing suitable van transport",
        compareText:
          "Describe the load clearly so independent operators can assess the vehicle and service requirements.",
        compareCards: [
          [
            "Small Van Collection",
            "Move compact vans between dealers, buyers and workshops.",
            "Start a Transport Quote",
          ],
          [
            "Specify additional height, length and vehicle mass",
            "Whether the van runs, rolls, steers and brakes. Give operators the relevant collection information.",
            "Related Transport Services",
          ],
          [
            "Trade Fleet Movements",
            "Arrange planned vehicle repositioning and collections.",
            "How HAULBY Works",
          ],
        ],
        practicalTitle: "More about van transport",
        ctaTitle: "Ready to arrange van transport?",
        ctaText:
          "Give your requirements to begin comparing independent operator quotations.",
        quoteCta: "Get Vehicle Transport Quotes",
        workCta: "Find Vehicle Transport Work",
      }}
    />
  );
}
