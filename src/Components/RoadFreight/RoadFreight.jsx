import React from "react";
import ServiceDetail from "../Common/ServiceDetail";
import lightFreight from "../../Assets/Pictures/HAULBY Visual Asset 13 _ 1376×768 _ KEEP SOURCE.png";
import partLoad from "../../Assets/Pictures/HAULBY Visual Asset 15 _ 1376×768 _ KEEP SOURCE.png";
import palletFreight from "../../Assets/Pictures/HAULBY Visual Asset 17 _ 1376×768 _ KEEP SOURCE.png";
import articFreight from "../../Assets/Pictures/HAULBY Visual Asset 16 _ 1376×768 _ KEEP SOURCE.png";
import "./RoadFreight.css";
const o = (title, text, bullets) => ({ title, text, bullets, icon: "truck" });
const data = {
  short: "Road Freight",
  title: "Road Freight.",
  accent: "Sorted.",
  heroText:
    "Compare road freight quotes for light commercial loads, part loads and larger consignments through independent UK operators.",
  heroImage: lightFreight,
  tags: ["Light freight", "Part loads", "Pallets", "Larger freight"],
  quoteTitle: "Where does your freight need to go?",
  quoteText:
    "Enter the route and freight category. Add dimensions, gross weight and loading requirements next.",
  typeLabel: "Freight type",
  typePlaceholder: "Light / Part Load / HGV",
  quoteNote:
    "The actual payload and dimensions must fit the selected vehicle. Disclose all special handling needs.",
  optionsKicker: "ROAD FREIGHT & COMMERCIAL TRANSPORT",
  optionsTitle: "Suitable road freight for your load.",
  optionsText:
    "From light commercial vehicles to specialist HGVs, let independent operators assess the job.",
  cardImages: [lightFreight, partLoad, palletFreight, articFreight],
  options: [
    o(
      "Light Commercial Freight",
      "Transport general commercial goods using vans and suitable light-goods vehicles.",
      ["Van & curtain-side loads", "Commercial collections"],
    ),
    o(
      "Part Loads & Backloads",
      "Share available vehicle capacity on suitable planned routes.",
      ["Part-load deliveries", "Backload opportunities"],
    ),
    o(
      "Palletised Road Freight",
      "Move palletised goods using an operator with the correct payload and loading equipment.",
      ["Pallet transport", "Forklift & tail-lift needs"],
    ),
    o(
      "Larger Rigid & Artic Freight",
      "Heavy or high-volume consignments can require licensed rigid or articulated operation.",
      ["Larger road transport", "Specialist vehicle capacity"],
    ),
  ],
  darkKicker: "BUSINESS & GENERAL FREIGHT USE CASES",
  darkTitle: "Road freight for loads big and small.",
  darkText:
    "Accurate dimensions, weights, access and loading requirements help match suitable operators.",
  darkCards: [
    ["General commercial freight", "Move stock, equipment and packaged goods."],
    [
      "Warehouse collections",
      "Arrange supplier and distribution-centre collections.",
    ],
    [
      "Return-load opportunities",
      "Post flexible routes for operators with capacity.",
    ],
    [
      "Larger trade consignments",
      "Provide full dimensions, weights and access needs.",
    ],
  ],
  steps: [
    ["Describe the load", "Provide freight type, dimensions, mass and access."],
    [
      "Compare freight offers",
      "Check equipment, capacity, service scope and terms.",
    ],
    [
      "Confirm the transport",
      "Select a suitable operator and agree loading details.",
    ],
  ],
  prepareImage: partLoad,
  prepareKicker: "CLEAR FREIGHT DETAILS MAKE BETTER QUOTES",
  prepareTitle: "Prepare your load information.",
  prepareText:
    "Operators need the total mass, dimensions, collection access and appropriate handling and restraint requirements.",
  prepareBullets: [
    "Freight items, counts, dimensions and gross weights",
    "Loading docks, forks, tail-lifts or other equipment",
    "Hazardous, fragile or restricted-goods declarations",
    "Site access, windows and full delivery contacts",
  ],
  workTitle: "Find road freight jobs.",
  workText:
    "If you operate suitable vans, curtain-siders, rigid trucks or HGVs, browse light freight and larger work that fits your fleet.",
  workImage: lightFreight,
  faqs: [
    [
      "Can I post light freight for a van?",
      "Yes. If suitable van operators can carry the load they can quote.",
    ],
    [
      "Can I arrange part loads or backloads?",
      "Describe the goods, route and available dates.",
    ],
    [
      "Will I need a larger lorry?",
      "Capacity depends on weight and dimensions.",
    ],
    [
      "Does HAULBY run its own freight fleet?",
      "No. Independent operators fulfil bookings.",
    ],
  ],
  costKicker: "ROAD FREIGHT COST FACTORS",
  costTitle: "What affects UK road freight quotations?",
  costText:
    "A quote depends on distance, load size, handling requirements, schedules and legally suitable vehicle capacity.",
  costs: [
    [
      "Freight size, mass and loading",
      "Total weight and dimensions affect vehicle type and payload.",
      "Get Road Freight Quotes",
    ],
    [
      "Routes, timing and additional stops",
      "Mileage, delivery windows and extra stops affect planning.",
      "Find Work",
    ],
    [
      "Service scope and protection",
      "Confirm loading support, responsibility and service information.",
      "Business Shipping",
    ],
  ],
  compareKicker: "MATCH THE VEHICLE TO THE FREIGHT",
  compareTitle: "Light freight, part loads or larger road freight?",
  compareText:
    "Matching equipment and capacity to the shipment is more important than choosing a vehicle by name alone.",
  compareCards: [
    [
      "Vans and light vehicles",
      "Light commercial consignments may suit smaller vehicles.",
    ],
    [
      "Shared and part-load journeys",
      "Use suitable planned capacity when dates are flexible.",
    ],
    [
      "Rigid and articulated road freight",
      "High-volume or heavier consignments may require licensed operation.",
    ],
  ],
  practicalTitle: "Road freight and part-load FAQs",
  practical: [
    [
      "How do I calculate total freight weight?",
      "Include all goods, packaging and loading materials.",
    ],
    [
      "Can I request regular trade deliveries?",
      "Business users can post repeat or multi-location needs.",
    ],
    [
      "Can I move machinery as road freight?",
      "Use Plant & Machinery for specialist equipment.",
    ],
    [
      "Who handles loading and unloading?",
      "Clarify responsibilities before booking.",
    ],
  ],
  ctaTitle: "Ready to transport your freight?",
  ctaText:
    "Share dimensions, weight, route and loading needs to compare quotations.",
};
export default function RoadFreight() {
  return <ServiceDetail data={data} />;
}
