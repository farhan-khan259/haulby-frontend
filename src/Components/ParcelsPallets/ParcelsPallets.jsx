import React from "react";
import ServiceDetail from "../Common/ServiceDetail";
import services from "../../Assets/Pictures/services.png";
import cta from "../../Assets/Pictures/cta.png";
import business from "../../Assets/Pictures/business.png";
import "./ParcelsPallets.css";
const opt = (title, text, bullets, icon = "box") => ({
  title,
  text,
  bullets,
  icon,
});
const data = {
  short: "Parcel & Pallet",
  title: "Parcels & Pallets.",
  accent: "Delivered.",
  heroText:
    "Compare quotes for boxed goods, parcel consignments and pallet deliveries through independent UK transport operators.",
  heroImage: services,
  tags: ["Parcels & boxes", "Single pallets", "Trade consignments"],
  quoteTitle: "Where is your consignment going?",
  quoteText:
    "Enter the route and load type. Add package counts, pallet weights and handling details next.",
  typeLabel: "Shipment type",
  typePlaceholder: "Parcels / Pallets / Mixed",
  quoteNote:
    "Include accurate packed weights, dimensions and access details at both ends.",
  optionsKicker: "PARCEL & PALLET DELIVERY SERVICES",
  optionsTitle: "Delivery options for every consignment.",
  optionsText:
    "Tell us about the quantity, packed dimensions and gross weight so suitable operators can assess the shipment.",
  cardImages: [services, cta, business],
  options: [
    opt(
      "Parcels & Boxes",
      "From individual boxes to grouped packages that need a suitable courier or van.",
      ["Boxes and packaged goods", "Bulky parcel collections"],
    ),
    opt(
      "Single Pallet Delivery",
      "One pallet or a small palletised consignment, with loading arrangements specified.",
      ["Single-pallet quotes", "Gross loaded pallet weight"],
      "truck",
    ),
    opt(
      "Multi-Pallet Loads",
      "Several pallets needing appropriate vehicle capacity, restraint and handling equipment.",
      ["Multiple pallets", "Warehouse collection"],
      "truck",
    ),
    opt(
      "Business Consignments",
      "Regular stock movements and packaged deliveries between commercial premises.",
      ["Trade stock deliveries", "Business shipment requests"],
      "route",
    ),
  ],
  darkKicker: "COMMON SHIPMENT TYPES",
  darkTitle: "From a parcel to a pallet of stock.",
  darkText:
    "Provide the full dimensions, gross weight and collection requirements to get accurate transport quotes.",
  darkCards: [
    ["Parcel collections", "Arrange transport for carefully packaged boxes."],
    [
      "Single pallet jobs",
      "Move one pallet between compatible loading locations.",
    ],
    [
      "Commercial stock moves",
      "Send boxed or palletised stock between businesses.",
    ],
    [
      "Mixed-item consignments",
      "List every package and pallet included in the load.",
    ],
  ],
  steps: [
    [
      "Describe the shipment",
      "Enter quantities, dimensions, weight and addresses.",
    ],
    [
      "Compare suitable delivery quotes",
      "Review capacity, handling arrangements and provider terms.",
    ],
    [
      "Confirm the consignment",
      "Select an operator and agree collection and delivery.",
    ],
  ],
  prepareImage: business,
  prepareKicker: "CLEAR LOADING DETAILS MAKE BETTER QUOTES",
  prepareTitle: "Prepare your consignment details.",
  prepareText:
    "Accurate package size, pallet weights, load stability and handling access help operators choose a suitable vehicle.",
  prepareBullets: [
    "Package and pallet quantities",
    "Full loaded dimensions and gross weights",
    "Packaging, securing and fragile contents",
    "Forklift, tail-lift and site access requirements",
  ],
  workTitle: "Find delivery and pallet jobs.",
  workText:
    "With a suitable courier van, rigid curtain-side vehicle or pallet-capable truck, find consignments through HAULBY.",
  workImage: cta,
  faqs: [
    [
      "Can I arrange just one pallet?",
      "Yes. Supply its gross weight, size, collection details and loading arrangements.",
    ],
    [
      "Can I combine boxes and pallets?",
      "Describe every item so operators can confirm capacity and suitable securing arrangements.",
    ],
    [
      "Does HAULBY provide pallet vehicles?",
      "Independent operators provide the delivery service selected through HAULBY.",
    ],
    [
      "Do pallet collections need a forklift?",
      "Not always. Explain whether loading equipment or a tail-lift is available.",
    ],
  ],
  costKicker: "PARCEL & PALLET DELIVERY PRICES",
  costTitle: "What affects parcel and pallet delivery costs?",
  costText:
    "A quote depends on the actual consignment, route and loading arrangements rather than the number of pieces alone.",
  costs: [
    [
      "Size, quantity and loaded weight",
      "Give dimensions and gross weight for every pallet or package.",
      "Request Delivery Quotes",
    ],
    [
      "Addresses and collection timing",
      "Distance, loading windows, waiting time and site access affect planning.",
      "View HAULBY Works",
    ],
    [
      "Handling and equipment",
      "A forklift, pallet truck, loading dock or tail-lift may be required.",
      "Compare Freight Options",
    ],
  ],
  compareKicker: "MATCH THE SERVICE TO YOUR GOODS",
  compareTitle: "Should you choose parcels or pallet delivery?",
  compareText:
    "Packaging, load stability and how goods can be handled determine whether a courier van or specialist pallet vehicle is appropriate.",
  compareCards: [
    [
      "Boxes and packaged parcels",
      "Separate bundled items may suit courier or delivery van transport.",
    ],
    [
      "A single secured pallet",
      "Provide footprint, height, gross loaded mass and handling details.",
    ],
    [
      "Several pallets or commercial stock",
      "Use road freight when capacity and loading equipment matter.",
    ],
  ],
  practicalTitle: "More parcel and pallet delivery questions",
  practical: [
    [
      "How do I prepare goods for pallet transport?",
      "Secure goods on a stable pallet and supply accurate dimensions.",
    ],
    [
      "Can I send a bulky boxed item?",
      "Yes. Include its measurements and weight.",
    ],
    [
      "Does a 3.5-tonne vehicle carry any pallet load?",
      "No. Suitability depends on weight, dimensions and payload.",
    ],
    [
      "Who is responsible for the delivery?",
      "The independent operator carries out the agreed service.",
    ],
  ],
  ctaTitle: "Ready to send your shipment?",
  ctaText: "Give the dimensions, weights and journey to compare quotes.",
};
export default function ParcelsPallets() {
  return <ServiceDetail data={data} />;
}
