import React from "react";
import ServiceDetail from "../Common/ServiceDetail";
import recoveryRoad from "../../Assets/Pictures/HAULBY Visual Asset 01 _ 1376×768 _ KEEP SOURCE.png";
import motorcycleVan from "../../Assets/Pictures/HAULBY Visual Asset 07 _ 1376×768 _ KEEP SOURCE.png";
import auctionCollection from "../../Assets/Pictures/HAULBY Visual Asset 08 _ 1376×768 _ KEEP SOURCE.png";
import recoveryHero from "../../Assets/Pictures/HAULBY Visual Asset 09 _ 1376×768 _ KEEP SOURCE.png";
import "./VehicleTransport.css";
const data = {
  variant: "vehicle",
  short: "Vehicle Transport",
  breadcrumb: "HOME  /  TRANSPORT SERVICES  /  VEHICLE TRANSPORT",
  title: "Vehicle Transport.",
  accent: "Sorted.",
  heroText:
    "Move cars, vans and motorcycles through our network of independent UK transport operators.",
  heroImage: recoveryHero,
  tags: ["Planned collections", "Auction vehicles", "Non-runners"],
  quoteTitle: "Where does your vehicle need to go?",
  quoteText:
    "Enter a few starting details. You will complete the transport requirements before submitting the request.",
  typeLabel: "Vehicle type",
  typePlaceholder: "Car / Van / Motorcycle",
  quoteNote:
    "Vehicles that are not roadworthy or have restricted access require extra details during quotation.",
  optionsKicker: "VEHICLE TRANSPORT SOLUTIONS",
  optionsTitle: "A transport service for every vehicle.",
  optionsText:
    "Tell operators exactly what you need moved — from a running family car to a motorcycle or auction purchase.",
  cardImages: [recoveryRoad, motorcycleVan, recoveryHero, auctionCollection],
  options: [
    [
      "Car & Van Transport",
      "Arrange single-vehicle collections, dealer movements and longer-distance journeys.",
      ["Running cars", "Vans & light commercials"],
      "truck",
    ],
    [
      "Motorcycle Transport",
      "Transport bikes and scooters using operators with suitable loading and restraint equipment.",
      ["Motorcycles & scooters", "Secure loading arrangements"],
      "route",
    ],
    [
      "Non-Running Vehicles",
      "Moving a non-running vehicle? Include access, rolling and loading conditions in your request.",
      ["Non-runners", "Planned recovery transport"],
      "truck",
    ],
    [
      "Auction & Trade Collections",
      "Move vehicles purchased from auctions, dealers or trade suppliers to your chosen destination.",
      ["Auction pickup", "Motor trade collections"],
      "box",
    ],
  ].map(([title, text, bullets, icon]) => ({ title, text, bullets, icon })),
  darkKicker: "TRANSPORT THAT FITS YOUR SITUATION",
  darkTitle: "From the forecourt to your front door.",
  darkText:
    "Use HAULBY to describe your requirements and receive quotes from suitable independent operators.",
  darkCards: [
    ["Auction purchases", "Arrange collection from UK vehicle auction sites.", "truck"],
    ["Private purchases", "Move a newly purchased car without driving it.", "route"],
    [
      "Motor trade movements",
      "Dealer-to-dealer and trade vehicle collections.",
      "route",
    ],
    [
      "Non-running vehicles",
      "Explain loading and access requirements upfront.",
      "shield",
    ],
  ],
  steps: [
    [
      "Post your transport request",
      "Vehicle details, collection, destination and access information.",
    ],
    [
      "Compare operator quotes",
      "Look at offers, provider details, reviews and terms.",
    ],
    [
      "Choose and arrange transport",
      "Confirm your preferred quote and manage the booking.",
    ],
  ],
  prepareImage: motorcycleVan,
  prepareKicker: "BETTER INFORMATION. BETTER QUOTES.",
  prepareTitle: "Tell us about your vehicle.",
  prepareText:
    "Giving operators clear information helps them assess the right vehicle, loading equipment and collection arrangements.",
  prepareBullets: [
    "Make, model and approximate dimensions",
    "Running or non-running condition",
    "Collection and delivery access",
    "Keys, rolling wheels and special loading needs",
  ],
  workTitle: "Find vehicle transport jobs.",
  workText:
    "Have a recovery flatbed, suitable van or transporter? Search opportunities, submit quotes and manage transport work through HAULBY.",
  workImage: recoveryRoad,
  faqs: [
    [
      "Can I transport a non-running car?",
      "Include the vehicle's condition and loading details so operators can assess whether they can take the job.",
    ],
    [
      "Do you cover collections across the UK?",
      "Yes. Post any UK journey and we'll work to connect it with suitable vehicle transport operators.",
    ],
    [
      "Who transports my vehicle?",
      "An independent operator you select performs the transport service under the agreed booking terms.",
    ],
    [
      "Can I arrange motorcycle transport?",
      "Yes. Select the relevant category and provide collection requirements and vehicle details.",
    ],
  ],
  costKicker: "CAR TRANSPORT COSTS UK",
  costTitle: "What affects vehicle transport quotations?",
  costText:
    "A vehicle transport quote reflects the route, vehicle condition and practical equipment required—not mileage alone.",
  costs: [
    [
      "Distance and collection route",
      "Local collections and cross-country vehicle moves involve different driving time, mileage and schedules. Fixed auction slots or hard-to-reach addresses can affect the journey.",
      "Get Car Transport Quotes",
    ],
    [
      "Vehicle size and condition",
      "Provide the make, model and approximate weight. Explain whether the vehicle starts, steers, rolls and brakes; non-runners may require winches or other loading equipment.",
      "Non-running Vehicle Transport",
    ],
    [
      "Transporter and loading method",
      "Open flatbeds, trailers and enclosed transport offer different services. Discuss lowered cars, missing keys, unusual dimensions and protection needs before booking.",
      "How Vehicle Transport Works",
    ],
  ],
  compareKicker: "BEFORE YOUR VEHICLE COLLECTION",
  compareTitle: "Prepare your car or motorcycle for transport",
  compareText:
    "Clear collection details and a documented handover help the operator understand the job.",
  compareCards: [
    [
      "Confirm the pickup arrangements",
      "Share the correct address, access limits and contact details. For auction collections, confirm opening hours, vehicle release information and key availability.",
      "Start a Transport Request",
      "/find-transport",
    ],
    [
      "Record the vehicle condition",
      "Note existing damage and take dated photographs. Remove personal belongings unless agreed, and disclose leaks, loose components or mechanical limitations.",
      "Compare Service Details",
      "/services/vehicle-transport",
    ],
    [
      "Check the proposed service",
      "Agree the planned vehicle, loading arrangements, collection window, delivery handover, applicable terms and relevant insurance information.",
      "Operator Checks & Safety",
      "/services/vehicle-transport",
    ],
  ],
  practicalTitle: "More vehicle transport questions",
  practical: [
    [
      "Can you arrange transport for a non-running car?",
      "Some operators can. State whether it can roll, steer and brake, whether keys are present and any access problems.",
    ],
    [
      "What details do I need for a car transport quote?",
      "Collection and delivery postcodes, make and model, running condition, preferred dates and loading restrictions.",
    ],
    [
      "How much does UK car transport cost?",
      "It depends on mileage, vehicle dimensions, condition, access, timing and service terms. Compare quotes for your actual journey.",
    ],
    [
      "Who transports my car?",
      "The independent operator you select carries out the work. Review their terms and insurance details before confirming.",
    ],
  ],
  ctaTitle: "Ready to move your vehicle?",
  ctaText:
    "Share the route and vehicle details to begin comparing transport quotes.",
};
export default function VehicleTransport() {
  return <ServiceDetail data={data} />;
}
