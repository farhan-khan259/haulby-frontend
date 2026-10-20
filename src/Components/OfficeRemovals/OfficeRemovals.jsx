import React from "react";
import SpecialistPage from "../Common/SpecialistPage";
import "./OfficeRemovals.css";
import a18 from "../../Assets/Pictures/HAULBY Visual Asset 18 _ 1376×768 _ KEEP SOURCE.png";
import a19 from "../../Assets/Pictures/HAULBY Visual Asset 19 _ 1376×768 _ KEEP SOURCE.png";
import a20 from "../../Assets/Pictures/HAULBY Visual Asset 20 _ 1376×768 _ KEEP SOURCE.png";
import a21 from "../../Assets/Pictures/HAULBY Visual Asset 21 _ 1376×768 _ KEEP SOURCE.png";
import a22 from "../../Assets/Pictures/HAULBY Visual Asset 22 _ 1376×768 _ KEEP SOURCE.png";
import a29 from "../../Assets/Pictures/HAULBY Visual Asset 29 _ 1376×768 _ KEEP SOURCE.png";
export default function OfficeRemovals() {
  return (
    <SpecialistPage
      config={{
        title: "Office Removals",
        service: "Office Removals",
        heroText:
          "Compare business office-removal quotes for planned furniture, equipment and workplace relocations.",
        tags: [
          "Office moves",
          "IT and boxed equipment",
          "Business furniture",
          "Multi-site relocations",
        ],
        images: [a21, a18, a19, a29, a22, a29, a20],
        quoteKicker: "START YOUR OFFICE REMOVALS QUOTE",
        typePlaceholder: "House / Flat / Small Move",
        quoteNote:
          "Business access, equipment protection and move schedule. Include accurate details for every collection and delivery.",
        optionsKicker: "OFFICE MOVES & COMMERCIAL RELOCATIONS",
        optionsTitle: "Office Removals & Business Moving Quotes.",
        options: [
          "Small Office Moves",
          "IT & Equipment Transport",
          "Business Furniture Relocation",
          "Multi-Site Office Moves",
        ],
        optionText: [
          "Move desks, chairs and boxed office contents.",
          "Declare fragile electronic items and handling needs.",
          "Arrange bulky office furniture collections.",
          "Specify sites, access windows and multiple stops.",
        ],
        bullets: [
          "Office moves",
          "IT equipment",
          "Business furniture",
          "Multiple sites",
        ],
        optionsText:
          "Plan a business relocation, office equipment delivery or multi-site move with operators equipped for commercial furniture and fragile workplace goods.",
        optionBullets: [
          [
            "Office moves",
            "Business access, equipment protection and move schedule",
          ],
          [
            "IT and boxed equipment",
            "Business access, equipment protection and move schedule",
          ],
          [
            "Business furniture",
            "Business access, equipment protection and move schedule",
          ],
          [
            "Multi-site relocations",
            "Business access, equipment protection and move schedule",
          ],
        ],
        hideOptionLinks: true,
        darkKicker: "OFFICE REMOVALS JOURNEYS",
        darkTitle: "Common office removals requests.",
        darkText:
          "List desks, filing cabinets, boxed equipment, IT hardware, floors, lift access and site timings to receive suitable office-removal quotes.",
        darkCards: [
          ["Office moves", "Move desks, chairs and boxed office contents."],
          [
            "IT and boxed equipment",
            "Declare fragile electronic items and handling needs.",
          ],
          [
            "Business furniture",
            "Arrange bulky office furniture collections.",
          ],
          [
            "Multi-site relocations",
            "Specify sites, access windows and multiple stops.",
          ],
        ],
        steps: [
          [
            "Describe your office relocation",
            "Provide an inventory, addresses, dates and access.",
          ],
          [
            "Compare removals quotations",
            "Check team size, packing, carrying and other inclusions.",
          ],
          [
            "Choose a removals operator",
            "Agree arrival, preparation and delivery details.",
          ],
        ],
        prepareText:
          "Compare business office-removal quotes for planned furniture, equipment and workplace relocations. Provide the necessary equipment, access and safety details.",
        prepareBullets: [
          "Itemised furniture and equipment inventory",
          "Building loading access and lift dimensions",
          "Packing, dismantling and carrying requirements",
          "IT equipment protection, downtime and access windows",
        ],
        workKicker: "FOR SUITABLE TRANSPORT OPERATORS",
        workTitle: "Find office removals work.",
        workText:
          "Office removal operators provide the agreed carrying crew and tools, including specialist equipment for safe handling.",
        faqTitle: "Office Removals questions, answered.",
        faqs: [
          [
            "Can I request a whole-house removal?",
            "Yes. Add a detailed inventory and access details so suitable operators can quote accurately.",
          ],
          [
            "Can I book a van and two movers?",
            "Operators must provide enough crew for the accepted job. Describe bulky items, stairs and access so the required handling is planned.",
          ],
          [
            "Are packing materials included?",
            "Not automatically. Confirm cartons, protective wrapping, dismantling and packing support in the chosen quotation.",
          ],
          [
            "What if I live upstairs?",
            "Describe every floor, stairs, lifts, long walks, parking restrictions and large or awkward furniture.",
          ],
        ],
        costKicker: "OFFICE REMOVALS COST FACTORS",
        costTitle: "What affects office removals quotes?",
        costText:
          "Pricing depends on route, the actual goods, access and any equipment required. Business access, equipment protection and move schedule.",
        costs: [
          [
            "Journey and collection timing",
            "Mileage, pickup windows and delivery requirements affect the overall job.",
            "Start a Transport Quote",
          ],
          [
            "Business access, equipment protection and move schedule",
            "Give accurate sizes, weight, condition and handling details so operators can assess suitability.",
            "Related Transport Services",
          ],
          [
            "Equipment, access and service terms",
            "Confirm the operator's loading/unloading plan, sufficient crew and equipment, insurance, exclusions, cancellations and service terms.",
            "How HAULBY Works",
          ],
        ],
        compareKicker: "OFFICE REMOVALS SERVICE GUIDE",
        compareTitle: "Choosing suitable office removals",
        compareCards: [
          [
            "Small Office Moves",
            "Move desks, chairs and boxed office contents.",
            "Start a Transport Quote",
          ],
          [
            "Declare fragile electronic items and handling needs",
            "Building loading access and lift dimensions. Give operators the relevant collection information.",
            "Related Transport Services",
          ],
          [
            "Multi-Site Office Moves",
            "Specify sites, access windows and multiple stops.",
            "How HAULBY Works",
          ],
        ],
        practicalTitle: "More about office removals",
        practical: [
          [
            "Can an office move be booked outside opening hours?",
            "Tell us your preferred window and we'll work to find an operator who can meet it.",
          ],
          [
            "Will movers pack IT equipment?",
            "Only where explicitly included in the chosen quote.",
          ],
          [
            "Can multiple office sites be involved?",
            "List all stops and each site's restrictions.",
          ],
          [
            "How should fragile equipment be prepared?",
            "Tell operators about protective packaging, handling and insurance needs.",
          ],
        ],
        ctaTitle: "Ready to arrange office removals?",
        quoteCta: "Get House Removal Quotes",
        workCta: "Find Removals Work",
      }}
    />
  );
}
