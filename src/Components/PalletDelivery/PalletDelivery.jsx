import React from "react";
import SpecialistPage from "../Common/SpecialistPage";
import "./PalletDelivery.css";
import a3 from "../../Assets/Pictures/HAULBY Visual Asset 03 _ 1376×768 _ KEEP SOURCE.png";
import a11 from "../../Assets/Pictures/HAULBY Visual Asset 11 _ 1376×768 _ KEEP SOURCE.png";
import a13 from "../../Assets/Pictures/HAULBY Visual Asset 13 _ 1376×768 _ KEEP SOURCE.png";
import a17 from "../../Assets/Pictures/HAULBY Visual Asset 17 _ 1376×768 _ KEEP SOURCE.png";
export default function PalletDelivery() {
  return (
    <SpecialistPage
      config={{
        title: "Pallet Delivery",
        service: "Pallet Delivery",
        heroText:
          "Compare independent UK pallet delivery quotations for properly packed single and multi-pallet consignments.",
        tags: [
          "Warehouse stock delivery",
          "Single trade pallets",
          "Multi-pallet replenishment",
          "Forklift",
        ],
        images: [a11, a13, a17, a3, a11, a17, a13],
        quoteKicker: "START YOUR PALLET DELIVERY QUOTE",
        quoteTitle: "Where does the load need to go?",
        quoteText:
          "Enter the route and job type. Add equipment, weight, condition and collection requirements in the next steps.",
        typePlaceholder: "Parcels / Pallets / Mixed",
        quoteNote:
          "Loaded mass, stable pallets and loading equipment. Include accurate details for every collection and delivery.",
        options: [
          "Single Pallet Collections",
          "Multi-Pallet Delivery",
          "Trade & Warehouse Pallets",
          "Tail-Lift & Forklift Requirements",
        ],
        optionText: [
          "Post one loaded pallet with its full dimensions and weight.",
          "Declare pallet count, gross weights and handling access.",
          "Move boxed goods between compatible commercial sites.",
          "Specify suitable loading equipment at each site.",
        ],
        optionsKicker: "SINGLE & MULTI-PALLET ROAD DELIVERY",
        optionsTitle: "Pallet Delivery Quotes Across the UK.",
        optionsText:
          "Request pallet delivery quotes for properly packed commercial loads, single pallets and multi-pallet consignments.",
        optionBullets: [
          [
            "Warehouse stock delivery",
            "Loaded mass, stable pallets and loading equipment",
          ],
          [
            "Single trade pallets",
            "Loaded mass, stable pallets and loading equipment",
          ],
          [
            "Multi-pallet replenishment",
            "Loaded mass, stable pallets and loading equipment",
          ],
          [
            "Forklift or tail-lift jobs",
            "Loaded mass, stable pallets and loading equipment",
          ],
        ],
        hideOptionLinks: true,
        bullets: [
          "Single pallet",
          "Multiple pallets",
          "Warehouse delivery",
          "Loading equipment",
        ],
        darkKicker: "PALLET DELIVERY JOURNEYS",
        darkTitle: "Common pallet delivery requests.",
        darkText:
          "Provide pallet count, footprint, stacked height, gross weight and loading-bay access. Operators arrange appropriate safe handling equipment and staff.",
        darkCards: [
          [
            "Warehouse stock delivery",
            "Post one loaded pallet with its full dimensions and weight.",
            "truck",
          ],
          [
            "Single trade pallets",
            "Declare pallet count, gross weights and handling access.",
            "route",
          ],
          [
            "Multi-pallet replenishment",
            "Move boxed goods between compatible commercial sites.",
            "route",
          ],
          [
            "Forklift or tail-lift jobs",
            "Specify suitable loading equipment at each site.",
            "shield",
          ],
        ],
        steps: [
          [
            "Describe the shipment",
            "Enter quantities, dimensions, weight and addresses.",
          ],
          [
            "Compare suitable delivery quotes",
            "Review capacity, handling arrangements and operator terms.",
          ],
          [
            "Confirm the consignment",
            "Select an operator and agree collection and delivery.",
          ],
        ],
        prepareKicker: "INFORMATION FOR ACCURATE QUOTES",
        prepareTitle: "Prepare your pallet delivery details.",
        prepareText:
          "Compare independent UK pallet delivery quotations for properly packed single and multi-pallet consignments. Provide the necessary equipment, access and safety details.",
        prepareBullets: [
          "Number of pallets, loaded width, length and height",
          "Gross pallet weights including packaging",
          "Pallet stability and securing requirements",
          "Forklift, tail-lift, kerbside and dock access",
        ],
        workKicker: "FOR SUITABLE TRANSPORT OPERATORS",
        workTitle: "Find pallet delivery work.",
        workText:
          "Operators must supply and price the crew or mechanical handling their chosen service requires.",
        faqs: [
          [
            "Can I arrange just one pallet?",
            "Yes. Supply its full gross weight, size, collection details and loading arrangements.",
          ],
          [
            "Can I combine boxes and pallets?",
            "Describe all items in your request so operators can confirm total capacity and suitable securing arrangements.",
          ],
          [
            "Does HAULBY provide pallet delivery vehicles?",
            "No. Independent transport operators provide the delivery services selected through HAULBY.",
          ],
          [
            "Do pallet collections need a forklift?",
            "Describe loading docks and available site facilities so the operator can bring or coordinate the necessary equipment.",
          ],
        ],
        faqTitle: "Pallet Delivery questions, answered.",
        costKicker: "PALLET DELIVERY COST FACTORS",
        costTitle: "What affects pallet delivery quotes?",
        costText:
          "Pricing depends on route, the actual goods, access and any equipment required. Loaded mass, stable pallets and loading equipment.",
        costs: [
          [
            "Journey and collection timing",
            "Mileage, pickup windows and delivery requirements affect the overall job.",
            "Start a Transport Quote",
          ],
          [
            "Loaded mass, stable pallets and loading equipment",
            "Give accurate sizes, weight, condition and handling details so operators can assess suitability.",
            "Related Transport Services",
          ],
          [
            "Equipment, access and service terms",
            "Confirm the operator's loading/unloading plan, sufficient crew and equipment, insurance, exclusions, cancellations and service terms.",
            "How HAULBY Works",
          ],
        ],
        compareKicker: "PALLET DELIVERY SERVICE GUIDE",
        compareTitle: "Choosing suitable pallet delivery",
        compareText:
          "Describe the load clearly so independent operators can assess the vehicle and service requirements.",
        compareCards: [
          [
            "Single Pallet Collections",
            "Post one loaded pallet with its full dimensions and weight.",
            "Start a Transport Quote",
          ],
          [
            "Declare pallet count, gross weights and handling access",
            "Gross pallet weights including packaging. Give operators the relevant collection information.",
            "Related Transport Services",
          ],
          [
            "Tail-Lift & Forklift Requirements",
            "Specify suitable loading equipment at each site.",
            "How HAULBY Works",
          ],
        ],
        practicalTitle: "More about pallet delivery",
        practical: [
          [
            "Is a forklift always necessary?",
            "No. Tell us about the site's unloading facilities and restrictions; the operator must arrange the appropriate handling method.",
          ],
          [
            "How should I specify pallet weight?",
            "Include goods, pallet, wrapping and any other load materials.",
          ],
          [
            "Can a 3.5-tonne vehicle take pallets?",
            "Only when total load fits its legal payload and secure loading limits.",
          ],
          [
            "Are goods insured automatically?",
            "Do not assume coverage; check the selected operator's relevant terms and insurance.",
          ],
        ],
        ctaTitle: "Ready to arrange pallet delivery?",
        ctaText:
          "Give your requirements to begin comparing independent operator quotations.",
        quoteCta: "Get Parcel & Pallet Quotes",
        workCta: "Find Delivery Work",
      }}
    />
  );
}
