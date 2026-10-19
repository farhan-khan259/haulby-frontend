import React from "react";
import ServiceDetail from "../Common/ServiceDetail";
import business from "../../Assets/Pictures/business.png";
import transporters from "../../Assets/Pictures/transporters.png";
import cta from "../../Assets/Pictures/cta.png";
import "./PlantMachinery.css";
const o = (title, text, bullets) => ({ title, text, bullets, icon: "truck" });
const data = {
  short: "Machinery Transport",
  title: "Plant & Machinery.",
  accent: "Sorted.",
  heroText:
    "Move compact plant, landscaping equipment and heavy machinery with independent UK transport operators suited to the load.",
  heroImage: business,
  tags: ["Mini plant", "Garden equipment", "Site tools", "Heavy machinery"],
  quoteTitle: "Where does your equipment need to go?",
  quoteText:
    "Enter the route and equipment type. Add the loaded weight, dimensions, attachments and loading details next.",
  typeLabel: "Equipment type",
  typePlaceholder: "Mini Plant / Garden / Heavy",
  quoteNote:
    "Machine mass, dimensions, attachments and loading access determine suitable vehicle and transport arrangements.",
  optionsKicker: "PLANT, EQUIPMENT & MACHINERY TRANSPORT SERVICES",
  optionsTitle: "The right transport for your equipment.",
  optionsText:
    "From compact machines to heavier site plant, choose a category and provide accurate weight, dimension and loading information.",
  cardImages: [business, transporters, cta],
  options: [
    o(
      "Mini Diggers & Compact Plant",
      "Arrange collection or delivery for compact tracked machinery with a properly rated vehicle and securing equipment.",
      ["Mini & micro excavators", "Compact construction plant"],
    ),
    o(
      "Garden & Landscaping Equipment",
      "Move commercial garden and landscaping machines and grounds-maintenance equipment.",
      ["Commercial garden tools", "Light grounds equipment"],
    ),
    o(
      "Tools & Site Equipment",
      "Deliver boxed equipment, generators, attachments and smaller commercial site tools.",
      ["Tools and site equipment", "Site-equipment collections"],
    ),
    o(
      "Heavy & Specialist Machinery",
      "Larger equipment may need low-loaders, specialist restraints and appropriately licensed operators.",
      ["Larger specialist machines", "Specialist low-loader moves"],
    ),
  ],
  darkKicker: "EQUIPMENT MOVEMENTS ACROSS THE UK",
  darkTitle: "From compact tools to specialist plant.",
  darkText:
    "Help operators assess the equipment, collection site, weight and loading arrangements before quoting.",
  darkCards: [
    [
      "Auction & dealer collections",
      "Collect purchased machinery from dealers or auction yards.",
    ],
    [
      "Site-to-site movements",
      "Move equipment between construction or trade locations.",
    ],
    [
      "Landscaping equipment moves",
      "Transport compact garden machinery and attachments.",
    ],
    [
      "Specialist heavy machinery",
      "State lifting, route and loading requirements.",
    ],
  ],
  steps: [
    [
      "Describe the machine",
      "Specify make, model, mass, dimensions and attachments.",
    ],
    [
      "Compare transport quotes",
      "Review loading plans, vehicle suitability and terms.",
    ],
    [
      "Confirm the collection",
      "Agree access, lifting arrangements and delivery details.",
    ],
  ],
  prepareImage: business,
  prepareKicker: "SAFE TRANSPORT STARTS WITH ACCURATE DETAILS",
  prepareTitle: "Prepare your machinery details.",
  prepareText:
    "The operator needs the full transport weight, dimensions, attachments and realistic loading arrangements to assess equipment and legal capacity.",
  prepareBullets: [
    "Machine make, model, operating and loaded weight",
    "Height, width, length and detachable attachments",
    "Running condition, loading ramps or lifting support",
    "Site access, ground conditions and delivery restrictions",
  ],
  workTitle: "Find machinery transport work.",
  workText:
    "With a suitable flatbed, plant trailer or specialist low-loader, quote for equipment collections and site-to-site machinery moves.",
  workImage: transporters,
  faqs: [
    [
      "Can HAULBY arrange mini digger transport?",
      "Post accurate dimensions, mass and attachments so suitable operators can quote.",
    ],
    [
      "Can a 3.5-tonne van carry plant equipment?",
      "Only when equipment and total loaded weight remain within legal limits.",
    ],
    [
      "Do you provide loading equipment?",
      "Loading equipment depends on the operator and quote.",
    ],
    [
      "What if my machinery does not run?",
      "Disclose its condition and lifting or winching requirements.",
    ],
  ],
  costKicker: "UK PLANT TRANSPORT PRICING",
  costTitle: "What affects machinery transport quotations?",
  costText:
    "Plant transportation costs reflect complete load size, vehicle and loading arrangements—not distance alone.",
  costs: [
    [
      "Machinery mass, dimensions and attachments",
      "Give operating and loaded mass plus every detachable attachment.",
      "Get Plant Transport Quotes",
    ],
    [
      "Collection access and loading conditions",
      "Describe ground firmness, gradients, lifting support and restraints.",
      "Plant Transport Services",
    ],
    [
      "Distance, equipment and timings",
      "Specialist ramps, low-loaders and planned delivery windows affect pricing.",
      "View HAULBY Work",
    ],
  ],
  compareKicker: "CHOOSE SUITABLE EQUIPMENT TRANSPORT",
  compareTitle: "The right vehicle for plant and machinery",
  compareText:
    "A 3.5-tonne vehicle is suitable only for equipment within its actual payload and dimensions. Larger machines require appropriately equipped operators.",
  compareCards: [
    [
      "Compact plant and small machinery",
      "Very light equipment may suit light vehicles with rated capacity.",
    ],
    [
      "Garden equipment and trade tools",
      "Vans may move mowers, tools and generators.",
    ],
    [
      "Heavy machinery and specialist movements",
      "Bigger excavators or awkward industrial equipment may need low-loaders.",
    ],
  ],
  practicalTitle: "Plant transport and machinery delivery FAQs",
  practical: [
    [
      "How much does mini digger transport cost?",
      "Quotes vary with machine weight, distance, journey dates and equipment.",
    ],
    [
      "What details are needed for machinery transport?",
      "Include make, model, dimensions, total weight and attachments.",
    ],
    [
      "Can I send tools and garden machinery in a van?",
      "Small equipment may fit a suitable rated vehicle.",
    ],
    [
      "Who is responsible for securing the machine?",
      "Agree loading, securing and equipment arrangements before the job.",
    ],
  ],
  ctaTitle: "Ready to move your machinery?",
  ctaText:
    "Describe the load, dimensions and collection needs to compare transport quotations.",
};
export default function PlantMachinery() {
  return <ServiceDetail data={data} />;
}
