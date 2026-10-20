import React from "react";
import ServiceDetail from "../Common/ServiceDetail";
import compactPlant from "../../Assets/Pictures/HAULBY Visual Asset 23 _ 1376×768 _ KEEP SOURCE.png";
import plantHero from "../../Assets/Pictures/HAULBY Visual Asset 24 _ 1376×768 _ KEEP SOURCE.png";
import gardenEquipment from "../../Assets/Pictures/HAULBY Visual Asset 25 _ 1376×768 _ KEEP SOURCE.png";
import siteEquipment from "../../Assets/Pictures/HAULBY Visual Asset 26 _ 1376×768 _ KEEP SOURCE.png";
import heavyMachinery from "../../Assets/Pictures/HAULBY Visual Asset 27 _ 1376×768 _ KEEP SOURCE.png";
import "./PlantMachinery.css";
const o = (title, text, bullets) => ({ title, text, bullets, icon: "truck" });
const data = {
  short: "Machinery Transport",
  title: "Plant & Machinery.",
  accent: "Sorted.",
  heroText:
    "Move compact plant, landscaping equipment and heavy machinery with independent UK transport operators suited to the load.",
  heroImage: plantHero,
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
  cardImages: [compactPlant, gardenEquipment, siteEquipment, heavyMachinery],
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
  prepareImage: plantHero,
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
    "Have a suitable flatbed, plant trailer or specialist low-loader? Find machinery collections and quote for jobs matching your vehicle and capacity.",
  workImage: gardenEquipment,
  faqs: [
    [
      "Can HAULBY arrange mini digger transport?",
      "You can request mini plant transport. Provide the machine mass, dimensions and attachments for suitable operator quotes.",
    ],
    [
      "Can a 3.5-tonne van carry plant equipment?",
      "Only smaller equipment within that vehicle's actual payload, dimensions and securing capabilities is suitable.",
    ],
    [
      "Do you provide loading equipment?",
      "The operator must bring the equipment and crew appropriate for the agreed service, including ramps, winches or lifting gear where needed.",
    ],
    [
      "What if my machinery does not run?",
      "Disclose its condition, ability to roll and lifting or winching requirements. Operators must assess loading arrangements.",
    ],
  ],
  costKicker: "UK PLANT TRANSPORT PRICING",
  costTitle: "What affects machinery transport quotations?",
  costText:
    "Plant transportation costs reflect complete load size, vehicle and loading arrangements—not distance alone.",
  costs: [
    [
      "Machinery mass, dimensions and attachments",
      "Give the manufacturer and model, transport weight, height, width, length and all buckets or separate attachments. This information determines capacity and load restraint needs.",
      "Get Plant Transport Quotes",
    ],
    [
      "Collection access and loading conditions",
      "Describe ground firmness, gradients, gate width and whether the machine starts, drives or rolls. Operators must establish how loading and unloading can be carried out safely.",
      "Plant Transport Services",
    ],
    [
      "Distance, equipment and timings",
      "Specialist ramps, low-loaders, collection deadlines, site inductions and any abnormal-load requirements can affect suitability and pricing.",
      "How HAULBY Works",
    ],
  ],
  compareKicker: "CHOOSE SUITABLE EQUIPMENT TRANSPORT",
  compareTitle: "The right vehicle for plant and machinery",
  compareText:
    "A 3.5-tonne vehicle is suitable only for equipment within its actual payload and dimensions. Larger machines require appropriately equipped operators.",
  compareCards: [
    [
      "Compact plant and small machinery",
      "Very light equipment or compact machinery may suit a properly rated flatbed or plant trailer with suitable securing points. Always declare operating and loaded weights.",
    ],
    [
      "Garden equipment and trade tools",
      "Vans may carry mowers, portable tools, generators and attachments when within legal limits and correctly restrained. State if the goods contain fuels or other hazards.",
    ],
    [
      "Heavy machinery and specialist movements",
      "Bigger excavators or awkward industrial equipment may require low-loaders, suitable lifting equipment, route checks and operator licensing where applicable.",
    ],
  ],
  practicalTitle: "Plant transport and machinery delivery FAQs",
  practical: [
    [
      "How much does mini digger transport cost?",
      "Quotes vary with machine weight and dimensions, journey distance, transport equipment, access and collection timing. Post the actual load for offers.",
    ],
    [
      "What details are needed for machinery transport?",
      "Include make, model, transport dimensions, total weight including attachments, running condition and how the equipment can be loaded at each site.",
    ],
    [
      "Can I send tools and garden machinery in a van?",
      "Some light equipment may fit a suitable van if payload, load security and handling requirements are met. The operator must check suitability.",
    ],
    [
      "Who is responsible for securing the machine?",
      "The operator and others involved in loading have relevant responsibilities. Agree loading, securing and equipment arrangements before the job.",
    ],
  ],
  ctaTitle: "Ready to move your machinery?",
  ctaText:
    "Describe the load, dimensions and collection needs to compare transport quotations.",
};
export default function PlantMachinery() {
  return <ServiceDetail data={data} />;
}
