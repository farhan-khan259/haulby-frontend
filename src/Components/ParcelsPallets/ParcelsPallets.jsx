import React from "react";
import ServiceDetail from "../Common/ServiceDetail";
import businessConsignments from "../../Assets/Pictures/HAULBY Visual Asset 11 _ 1376×768 _ KEEP SOURCE.png";
import parcelsBoxes from "../../Assets/Pictures/HAULBY Visual Asset 02 _ 1376×768 _ KEEP SOURCE.png";
import singlePallet from "../../Assets/Pictures/HAULBY Visual Asset 17 _ 1376×768 _ KEEP SOURCE.png";
import multiPallet from "../../Assets/Pictures/HAULBY Visual Asset 13 _ 1376×768 _ KEEP SOURCE.png";
import "./ParcelsPallets.css";
const opt = (title, text, bullets, icon = "box") => ({
  title,
  text,
  bullets,
  icon,
});
const data = {
  variant: "parcels",
  styleVariant: "vehicle",
  short: "Parcel & Pallet",
  quoteCta: "Get Parcel & Pallet Quotes",
  workCta: "Find Delivery Work",
  title: "Parcels & Pallets.",
  accent: "Delivered.",
  heroText:
    "Compare quotes for boxed goods, parcel consignments and pallet deliveries through independent UK transport operators.",
  heroImage: businessConsignments,
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
  cardImages: [parcelsBoxes, singlePallet, multiPallet, businessConsignments],
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
    ["Parcel collections", "Arrange transport for carefully packaged boxes.", "truck"],
    [
      "Single pallet jobs",
      "Move one pallet between compatible loading locations.",
      "route",
    ],
    [
      "Commercial stock moves",
      "Send boxed or palletised stock between businesses.",
      "route",
    ],
    [
      "Mixed-item consignments",
      "List every package and pallet included in the load.",
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
      "Review capacity, handling arrangements and provider terms.",
    ],
    [
      "Confirm the consignment",
      "Select an operator and agree collection and delivery.",
    ],
  ],
  prepareImage: singlePallet,
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
    "With a suitable courier van, light curtain-side vehicle or pallet-capable truck, find consignments and quote for suitable requests.",
  workImage: multiPallet,
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
      "Does HAULBY provide pallet vehicles?",
      "No. Independent transport operators provide the delivery services selected through HAULBY.",
    ],
    [
      "Do pallet collections need a forklift?",
      "Describe loading docks and available site facilities so the operator can bring or coordinate the necessary equipment.",
    ],
  ],
  costKicker: "PARCEL & PALLET DELIVERY PRICES",
  costTitle: "What affects parcel and pallet delivery costs?",
  costText:
    "A quote depends on the actual consignment, route and loading arrangements rather than the number of pallets alone.",
  costs: [
    [
      "Size, quantity and loaded weight",
      "Give the dimensions and gross weight for every pallet, including the pallet itself, and count all boxes. Capacity and safe loading depend on the full load.",
      "Request Delivery Quotes",
    ],
    [
      "Addresses and collection timing",
      "Distance, loading windows, waiting times, location and delivery flexibility can change which operators are suitable.",
      "How HAULBY Works",
    ],
    [
      "Handling and equipment",
      "A forklift, pallet truck, loading dock or tail-lift may be needed. The operator must plan the necessary handling equipment and crew, coordinating with any controlled site facilities.",
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
      "Separate or bundled items may suit a courier or delivery van if their combined weight, dimensions and handling needs are appropriate.",
      "Courier Deliveries",
      "/services/courier-deliveries",
    ],
    [
      "A single secured pallet",
      "Provide the footprint, height, gross loaded mass and condition of the pallet, with clear loading and unloading information.",
      "Single Pallet Transport",
      "/services/pallet-delivery",
    ],
    [
      "Several pallets or commercial stock",
      "Heavier and multi-pallet loads need suitable vehicle payload, safe restraint and site access. Declare special handling restrictions.",
      "Road Freight",
      "/services/road-freight",
    ],
  ],
  practicalTitle: "More parcel and pallet delivery questions",
  practical: [
    [
      "How do I prepare goods for pallet transport?",
      "Ensure goods are secured as a stable unit on a sound pallet, with appropriate wrapping or strapping for the load.",
    ],
    [
      "Can I send a bulky boxed item?",
      "Yes. Include its measurements and approximate weight so operators can assess the required van, team and handling equipment.",
    ],
    [
      "Does a 3.5-tonne vehicle carry any pallet load?",
      "No. It may carry only loads within its actual payload, dimensions and appropriate loading and securing limits.",
    ],
    [
      "Who is responsible for the delivery?",
      "The selected independent operator carries out the service under the agreed terms. Confirm any special protection or insurance requirements.",
    ],
  ],
  ctaTitle: "Ready to send your shipment?",
  ctaText: "Give the dimensions, weights and journey to compare quotes.",
};
export default function ParcelsPallets() {
  return <ServiceDetail data={data} />;
}
