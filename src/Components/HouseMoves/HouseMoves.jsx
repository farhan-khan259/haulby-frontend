import React from "react";
import ServiceDetail from "../Common/ServiceDetail";
import houseRemoval from "../../Assets/Pictures/HAULBY Visual Asset 18 _ 1376×768 _ KEEP SOURCE.png";
import flatMove from "../../Assets/Pictures/HAULBY Visual Asset 19 _ 1376×768 _ KEEP SOURCE.png";
import removalsWork from "../../Assets/Pictures/HAULBY Visual Asset 20 _ 1376×768 _ KEEP SOURCE.png";
import sharedMove from "../../Assets/Pictures/HAULBY Visual Asset 22 _ 1376×768 _ KEEP SOURCE.png";
import packingHelp from "../../Assets/Pictures/HAULBY Visual Asset 29 _ 1376×768 _ KEEP SOURCE.png";
import "./HouseMoves.css";
const o = (title, text, bullets) => ({ title, text, bullets, icon: "home" });
const data = {
  short: "House Move",
  title: "House & Flat Moves.",
  accent: "Sorted.",
  heroText:
    "From studio flats to complete home removals, compare quotes from independent UK removal operators.",
  heroImage: houseRemoval,
  tags: ["House removals", "Flat moves", "Packing options", "Student moves"],
  quoteKicker: "START YOUR HOUSE REMOVAL QUOTE",
  quoteTitle: "Where are you moving to?",
  quoteText:
    "Enter the journey and move size. Add rooms, inventory and property access in the next steps.",
  typeLabel: "Move size",
  typePlaceholder: "House / Flat / Small Move",
  quoteNote:
    "Mention stairs, parking, furniture volume and any help needed for carrying, packing or dismantling.",
  optionsKicker: "HOUSE REMOVALS & FLAT MOVING SERVICES",
  optionsTitle: "Choose a removals service for your move.",
  optionsText:
    "Different properties and item volumes require different equipment, staffing and loading arrangements.",
  cardImages: [houseRemoval, flatMove, packingHelp, sharedMove],
  options: [
    o(
      "House Removals",
      "Arrange transport for a complete household inventory using suitable removals operators.",
      ["Whole-house moving quotes", "Furniture and boxed goods"],
    ),
    o(
      "Flat & Small Moves",
      "A compact move may suit a 3.5-tonne Luton or van when the item list and access allow.",
      ["Flat and apartment moves", "Smaller household moves"],
    ),
    o(
      "Packing & Carrying Help",
      "Describe any packing or dismantling requested, and any heavy items so the operator can plan adequate crew and equipment.",
      ["Packing service options", "Operator-provided loading and carrying"],
    ),
    o(
      "Student & Shared Moves",
      "Transport personal belongings, small furniture and boxes between addresses.",
      ["Student moving jobs", "Part-household moves"],
    ),
  ],
  hideOptionLinks: true,
  darkKicker: "COMMON HOME MOVING REQUESTS",
  darkTitle: "Move from one home to the next.",
  darkText:
    "List rooms, furniture, bulky items, stairs and access restrictions. Your operator arranges the labour and tools required for the agreed move.",
  darkCards: [
    ["Moving house", "Move furniture, appliances and boxes to a new property."],
    [
      "Moving from a flat",
      "Describe stairs, lifts, parking and any narrow access.",
    ],
    ["Help with packing", "Choose whether you need packing and carrying help."],
    [
      "Smaller shared moves",
      "List boxes, furniture and dates for a compact move.",
    ],
  ],
  steps: [
    [
      "Describe your home move",
      "Provide inventory, addresses, dates and access.",
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
  prepareImage: packingHelp,
  prepareKicker: "MAKE YOUR REMOVALS QUOTE MORE ACCURATE",
  prepareTitle: "Prepare your home moving details.",
  prepareText:
    "Detailed inventories and property access information help independent operators plan the required van, team and time.",
  prepareBullets: [
    "Rooms, furniture inventory and box estimate",
    "Property floors, stairs, lifts and access",
    "Parking distance and suitable vehicle access",
    "Packing or dismantling requested; bulky or specialist items",
  ],
  workKicker: "FOR HOUSE REMOVALS & LUTON OPERATORS",
  workTitle: "Find house removals work.",
  workText:
    "If you run a suitable removal van or moving team, find home moving enquiries and submit quotes matching your capacity and services.",
  workImage: removalsWork,
  faqTitle: "House and flat moving questions, answered.",
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
  costKicker: "HOUSE REMOVAL COST FACTORS",
  costTitle: "What affects house removal quotations?",
  costText:
    "A realistic removal quote needs more than two postcodes: operators must understand the inventory and the work involved at both properties.",
  costs: [
    [
      "Property size and inventory",
      "List the furniture, appliances, cartons and any outdoor or garage items. Volume, heavy objects and narrow access affect van size and team requirements.",
      "Start a Home Move Quote",
    ],
    [
      "Stairs, parking and handling",
      "Floors, lifts, distance to the vehicle, parking and awkward furniture help operators assess loading time, crew and equipment.",
      "Prepare a Home Move",
    ],
    [
      "Dates and additional services",
      "Moving-date flexibility, packing, dismantling, storage arrangements and extra trips can affect quotes. Check exactly what is included.",
      "Compare Moving Services",
    ],
  ],
  compareKicker: "PREPARING FOR A MOVE",
  compareTitle: "How to prepare for moving day",
  compareText:
    "A clear plan helps the operator assess the required vehicle, team, loading arrangements and estimated time.",
  compareCards: [
    [
      "Make a complete room-by-room list",
      "Count boxes and identify large furniture and appliances. Note fragile belongings or items needing dismantling before collection.",
      "Furniture Delivery",
    ],
    [
      "Explain both property entrances",
      "Give access instructions, stairs, lift sizes, parking distance, timed restrictions and building delivery rules for both addresses.",
      "How Transport Bookings Work",
    ],
    [
      "Agree responsibilities in writing",
      "Check who will pack, protect, load, carry, dismantle and unload items; confirm terms and relevant insurance information.",
      "Find Transport",
    ],
  ],
  practicalTitle: "More questions about your house move",
  practical: [
    [
      "How do I estimate boxes for removal quotes?",
      "Provide a reasonable count and describe sizes, heavy boxes and fragile items. Update the operator if the inventory changes.",
    ],
    [
      "Can I move just a few rooms of belongings?",
      "Yes. Smaller moves are possible with an operator equipped with enough vehicle space and the appropriate crew.",
    ],
    [
      "Does HAULBY operate its own removals team?",
      "No. HAULBY connects customers with independent removals and transport operators who carry out selected jobs.",
    ],
    [
      "Can I change my moving date?",
      "Ask the operator before confirming or changing the booking. Availability and any fees depend on its agreed terms.",
    ],
  ],
  ctaTitle: "Ready to plan your house move?",
  ctaText:
    "List your belongings, dates and addresses to start comparing suitable removals quotes.",
  quoteCta: "Get House Removal Quotes",
  workCta: "Find Removals Work",
};
export default function HouseMoves() {
  return <ServiceDetail data={data} />;
}
