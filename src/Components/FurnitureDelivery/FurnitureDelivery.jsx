import React from "react";
import ServiceDetail from "../Common/ServiceDetail";
import sofaDelivery from "../../Assets/Pictures/HAULBY Visual Asset 18 _ 1376×768 _ KEEP SOURCE.png";
import furnitureHero from "../../Assets/Pictures/HAULBY Visual Asset 19 _ 1376×768 _ KEEP SOURCE.png";
import furnitureMove from "../../Assets/Pictures/HAULBY Visual Asset 20 _ 1376×768 _ KEEP SOURCE.png";
import marketplaceCollection from "../../Assets/Pictures/HAULBY Visual Asset 22 _ 1376×768 _ KEEP SOURCE.png";
import applianceDelivery from "../../Assets/Pictures/HAULBY Visual Asset 31 _ 1376×768 _ KEEP SOURCE.png";
import "./FurnitureDelivery.css";
const o = (title, text, bullets, icon = "home") => ({
  title,
  text,
  bullets,
  icon,
});
const data = {
  short: "Furniture Delivery",
  title: "Furniture Delivery.",
  accent: "Sorted.",
  heroText:
    "Move sofas, beds, appliances and bulky purchases with suitable independent UK furniture transport operators.",
  heroImage: furnitureHero,
  tags: ["Sofas & chairs", "Beds", "Appliances", "Online purchases"],
  quoteTitle: "Where does your furniture need to go?",
  quoteText:
    "Enter the route and item type, then add size, weight, access and carrying assistance needed.",
  typeLabel: "Furniture type",
  typePlaceholder: "Sofa / Bed / Appliance",
  quoteNote:
    "List stairs, narrow doorways, item dimensions and whether you need two-person help.",
  optionsKicker: "FURNITURE & LARGE-ITEM DELIVERIES",
  optionsTitle: "A transport service for every bulky item.",
  optionsText:
    "Compare independent quotations for single items and furniture collections from homes, sellers or retailers.",
  cardImages: [sofaDelivery, furnitureMove, applianceDelivery, marketplaceCollection],
  options: [
    o(
      "Sofas & Armchairs",
      "Collect sofas, armchairs and large seating that may need careful handling.",
      ["Sofa collections", "Upholstered furniture"],
    ),
    o(
      "Beds & Wardrobes",
      "Move assembled or dismantled beds, wardrobes and other bulky furnishings.",
      ["Bed and mattress delivery", "Large wardrobes"],
    ),
    o(
      "Appliances & Bulky Items",
      "Arrange transport for suitably packaged household appliances and awkward items.",
      ["Large appliances", "Bulky-item delivery"],
      "box",
    ),
    o(
      "Marketplace Collections",
      "Arrange a collection from a seller, store, auction or online purchase.",
      ["Private seller purchases", "Retail collection"],
      "route",
    ),
  ],
  darkKicker: "EVERYDAY FURNITURE COLLECTIONS",
  darkTitle: "From the seller to your front door.",
  darkText:
    "Specify each item, its condition and whether handling support is needed before booking.",
  darkCards: [
    ["Second-hand sofas", "Collect a sofa purchased from a private seller."],
    ["Bedroom furniture", "Transport beds, wardrobes and cabinets."],
    [
      "Large household appliances",
      "Arrange transport for bulky or heavy items.",
    ],
    [
      "Retailer furniture deliveries",
      "Collect large purchases from a store or warehouse.",
    ],
  ],
  steps: [
    ["Describe the furniture", "List items, dimensions, access and condition."],
    [
      "Compare furniture quotes",
      "Check vehicle space, protection and carrying assistance.",
    ],
    [
      "Choose delivery arrangements",
      "Agree collection, item handling and delivery timing.",
    ],
  ],
  prepareImage: furnitureHero,
  prepareKicker: "HELP OPERATORS UNDERSTAND THE ITEM",
  prepareTitle: "Prepare your furniture details.",
  prepareText:
    "Measurements, condition, photos and collection access help operators assess the right van, equipment and number of people.",
  prepareBullets: [
    "Item dimensions, quantity and approximate weight",
    "Stairs, doorways, lifts and parking restrictions",
    "Protection, packing and two-person carrying",
    "Seller or retailer collection contacts",
  ],
  workTitle: "Find single-item transport work.",
  workText:
    "With suitable cover, a Luton or furniture-removal van, quote for individual furniture collections and bulky-item deliveries.",
  workImage: marketplaceCollection,
  faqs: [
    [
      "Can I arrange delivery for one sofa?",
      "Yes. Give its approximate size, weight and access requirements.",
    ],
    [
      "Can an operator carry furniture upstairs?",
      "Only when carrying help is included in the quote.",
    ],
    [
      "Do you offer delivery from online sellers?",
      "Post a collection from a private seller or retailer.",
    ],
    [
      "Does HAULBY deliver furniture itself?",
      "No. Independent operators carry out the selected service.",
    ],
  ],
  costKicker: "FURNITURE DELIVERY QUOTE FACTORS",
  costTitle: "What affects bulky furniture delivery quotes?",
  costText:
    "Furniture delivery prices depend on the item, handling route and access requirements.",
  costs: [
    [
      "Dimensions, condition and handling",
      "Give width, height, depth and approximate weight.",
      "Get Furniture Delivery Quotes",
    ],
    [
      "Floors, doorways and parking",
      "Operators need to know stairs, narrow doors, lifts and parking access.",
      "Find Work",
    ],
    [
      "Delivery distance and assistance",
      "Journey length, date flexibility and carrying help affect the quote.",
      "Home Moves and Furniture Delivery",
    ],
  ],
  compareKicker: "PREPARE A LARGE ITEM FOR MOVING",
  compareTitle: "How to prepare furniture for collection",
  compareText:
    "Clear item information and agreed handling arrangements help independent operators plan collection.",
  compareCards: [
    [
      "Record the item and its condition",
      "Take photographs and describe existing marks or fragile fittings.",
    ],
    [
      "Confirm the collection contact",
      "Provide seller contact details, opening hours and access.",
    ],
    [
      "Check what the quote includes",
      "Agree protection, dismantling and carrying assistance.",
    ],
  ],
  practicalTitle: "More questions about furniture delivery",
  practical: [
    [
      "How much does it cost to move a sofa?",
      "It varies by size, access, distance and carrying help.",
    ],
    [
      "Can I arrange delivery for a wardrobe?",
      "Yes. Provide measurements and whether it can be dismantled.",
    ],
    [
      "Can you move a fridge or washing machine?",
      "Describe dimensions, weight and handling requirements.",
    ],
    [
      "Should I book Home Moves for several rooms?",
      "Use House Moves for larger household inventories.",
    ],
  ],
  ctaTitle: "Ready to move your furniture?",
  ctaText: "Describe the item and collection access to start comparing quotes.",
};
export default function FurnitureDelivery() {
  return <ServiceDetail data={data} />;
}
