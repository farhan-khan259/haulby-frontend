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
  quoteTitle: "Where are you moving to?",
  quoteText:
    "Enter the journey and move size. Add rooms, inventory, access and moving assistance in the next steps.",
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
      "Arrange transport for a complete household inventory using suitable removal operators.",
      ["Whole-house moving quotes", "Furniture and boxed goods"],
    ),
    o(
      "Flat & Small Moves",
      "A compact move may suit a Luton van or van with the item list and access clear.",
      ["Flat and apartment moves", "Smaller household moves"],
    ),
    o(
      "Packing & Carrying Help",
      "State whether you need packing, dismantling or two-person lifting support.",
      ["Packing service options", "Loading and carrying assistance"],
    ),
    o(
      "Student & Shared Moves",
      "Transport personal belongings, small furniture and boxes between addresses.",
      ["Student moving help", "Part-household moves"],
    ),
  ],
  darkKicker: "COMMON HOME MOVING REQUESTS",
  darkTitle: "Move from one home to the next.",
  darkText:
    "Help removals operators assess the size of the job and exactly which carrying services you need.",
  darkCards: [
    ["Moving house", "Move furniture, appliances and boxes to a new property."],
    ["Moving from a flat", "Describe stairs, lifts, parking and access."],
    ["Help with packing", "Choose whether you need packing and carrying help."],
    [
      "Smaller shared moves",
      "List boxes, furniture and items for a compact move.",
    ],
  ],
  steps: [
    [
      "Describe your home move",
      "Provide inventory, addresses, dates and access.",
    ],
    [
      "Compare removals quotations",
      "Check team size, packing, carrying and protection.",
    ],
    [
      "Choose a removals operator",
      "Agree arrival, preparation and delivery details.",
    ],
  ],
  prepareImage: packingHelp,
  prepareKicker: "MAKE YOUR REMOVAL EASIER AND MORE ACCURATE",
  prepareTitle: "Prepare your home move details.",
  prepareText:
    "Detailed inventories and property access information help independent operators plan the required van, team and time.",
  prepareBullets: [
    "Rooms, furniture inventory and box estimate",
    "Property floors, stairs, lifts and access",
    "Parking distance and suitable vehicle access",
    "Packing, dismantling or lifting assistance needed",
  ],
  workTitle: "Find house removals work.",
  workText:
    "If you run a suitable removal van or moving team, find home-moving enquiries and submit quotes matching your capacity.",
  workImage: removalsWork,
  faqs: [
    [
      "Can I request a whole-house removal?",
      "Yes. Add a detailed inventory and access details.",
    ],
    [
      "Can I book a van and two movers?",
      "Request two-person assistance when describing the move.",
    ],
    [
      "Are packing materials included?",
      "Not automatically. Confirm packing services in the quote.",
    ],
    [
      "What if I live upstairs?",
      "Describe every floor, stairs, lifts and parking restrictions.",
    ],
  ],
  costKicker: "HOUSE MOVE QUOTE FACTORS",
  costTitle: "What affects house removal quotations?",
  costText:
    "A realistic removal quote needs more than two postcodes: operators must understand inventory and work involved.",
  costs: [
    [
      "Property size and inventory",
      "List furniture, appliances, cartons and special items.",
      "Start a Home Move Quote",
    ],
    [
      "Stairs, parking and handling",
      "Floors, lift access, distance to van and dismantling affect time.",
      "Prepare a Home Move",
    ],
    [
      "Dates and additional services",
      "Moving-date flexibility, packing and storage affect quotes.",
      "Compare Moving Services",
    ],
  ],
  compareKicker: "PREPARING FOR A MOVE",
  compareTitle: "How to prepare for moving day",
  compareText:
    "A clear plan helps the operator assess the required vehicle, team, loading arrangements and expected time.",
  compareCards: [
    [
      "Make a complete room-by-room list",
      "Count boxes and identify bulky items.",
    ],
    [
      "Explain both property entrances",
      "Give access instructions, stairs, lifts and parking.",
    ],
    [
      "Agree responsibilities in writing",
      "Check who packs, carries and dismantles items.",
    ],
  ],
  practicalTitle: "More questions about your house move",
  practical: [
    [
      "How do I estimate boxes for removal quotes?",
      "Provide a room-by-room list and describe large items.",
    ],
    [
      "Can I move just a few rooms of belongings?",
      "Yes. Smaller moves are possible when suitable operators quote.",
    ],
    [
      "Does HAULBY operate its own removals team?",
      "No. Independent operators perform the service.",
    ],
    [
      "Can I change my moving date?",
      "Ask the operator before confirming or changing a booking.",
    ],
  ],
  ctaTitle: "Ready to plan your house move?",
  ctaText:
    "List your belongings, dates and addresses to start comparing removal quotes.",
};
export default function HouseMoves() {
  return <ServiceDetail data={data} />;
}
