import React from "react";
import ServiceDetail from "../Common/ServiceDetail";
import recoveryRoad from "../../Assets/Pictures/HAULBY Visual Asset 01 _ 1376×768 _ KEEP SOURCE.png";
import motorcycleVan from "../../Assets/Pictures/HAULBY Visual Asset 07 _ 1376×768 _ KEEP SOURCE.png";
import auctionCollection from "../../Assets/Pictures/HAULBY Visual Asset 08 _ 1376×768 _ KEEP SOURCE.png";
import recoveryHero from "../../Assets/Pictures/HAULBY Visual Asset 09 _ 1376×768 _ KEEP SOURCE.png";
import "./VehicleTransport.css";
const data = {
  short: "Vehicle Transport",
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
      "Moving a non-running vehicle? Include access, rolling and loading conditions.",
      ["Non-runners", "Planned recovery transport"],
      "truck",
    ],
    [
      "Auction & Trade Collections",
      "Move vehicles purchased from auctions, dealers or trade suppliers.",
      ["Auction pickup", "Motor trade collections"],
      "box",
    ],
  ].map(([title, text, bullets, icon]) => ({ title, text, bullets, icon })),
  darkKicker: "TRANSPORT THAT FITS YOUR SITUATION",
  darkTitle: "From the forecourt to your front door.",
  darkText:
    "Use HAULBY to describe your requirements and receive quotes from suitable independent operators.",
  darkCards: [
    ["Auction purchases", "Arrange collection from UK vehicle auction sites."],
    ["Private purchases", "Move a newly purchased car without driving it."],
    [
      "Motor trade movements",
      "Dealer-to-dealer and trade vehicle collections.",
    ],
    [
      "Non-running vehicles",
      "Explain loading and access requirements upfront.",
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
      "Include its condition and loading details so operators can assess the right equipment.",
    ],
    [
      "Do you cover collections across the UK?",
      "Yes. Post your journey and suitable operators can quote.",
    ],
    [
      "Who transports my vehicle?",
      "The independent operator you select performs the agreed service.",
    ],
    [
      "Can I arrange motorcycle transport?",
      "Yes. Choose the relevant category and provide suitable collection details.",
    ],
  ],
  costKicker: "CAR TRANSPORT COSTS",
  costTitle: "What affects vehicle transport quotations?",
  costText:
    "A vehicle transport quote reflects the route, vehicle condition and practical equipment required.",
  costs: [
    [
      "Distance and collection route",
      "Local collection and cross-country moves have different timing, mileage and return-load options.",
      "Get Car Transport Quotes",
    ],
    [
      "Vehicle size and condition",
      "Vehicle type, size, model and whether it runs affect equipment and handling.",
      "Non-running Vehicle Transport",
    ],
    [
      "Transporter and loading method",
      "Open flatbed, trailers and enclosed transport offer different services.",
      "View Vehicle Transport Works",
    ],
  ],
  compareKicker: "BOOK WITH THE RIGHT COLLECTION",
  compareTitle: "Prepare your car or motorcycle for transport",
  compareText:
    "Clear collection details and a documented handover help the operator understand the job.",
  compareCards: [
    [
      "Confirm the pickup arrangements",
      "Share access, collection contact and timing details.",
    ],
    [
      "Record the vehicle condition",
      "Take clear photographs and note existing damage.",
    ],
    [
      "Check the proposed service",
      "Review loading arrangements, timing and protection information.",
    ],
  ],
  practicalTitle: "More vehicle transport questions",
  practical: [
    [
      "Can you arrange transport for a non-running car?",
      "Yes. Explain the condition and loading requirements.",
    ],
    [
      "What detail do I need for a car transport quote?",
      "Provide collection and delivery postcodes, vehicle details and condition.",
    ],
    [
      "How much does UK car transport cost?",
      "It depends on distance, vehicle dimensions, access and timing.",
    ],
    [
      "Who transports my car?",
      "The independent operator carries out the service under the agreed terms.",
    ],
  ],
  ctaTitle: "Ready to move your vehicle?",
  ctaText:
    "Share the route and vehicle details to begin comparing transport quotes.",
};
export default function VehicleTransport() {
  return <ServiceDetail data={data} />;
}
