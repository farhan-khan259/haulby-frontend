import React from "react";
import ServiceDetail from "../Common/ServiceDetail";
import sameDayVan from "../../Assets/Pictures/HAULBY Visual Asset 10 _ 1376×768 _ KEEP SOURCE.png";
import multiDrop from "../../Assets/Pictures/HAULBY Visual Asset 11 _ 1376×768 _ KEEP SOURCE.png";
import scheduledVan from "../../Assets/Pictures/HAULBY Visual Asset 02 _ 1376×768 _ KEEP SOURCE.png";
import courierRoad from "../../Assets/Pictures/HAULBY Visual Asset 12 _ 1376×768 _ KEEP SOURCE.png";
import "./CourierDeliveries.css";
const data = {
  short: "Courier Delivery",
  title: "Courier Deliveries.",
  accent: "Sorted.",
  heroText:
    "Compare quotes for same-day courier collections, scheduled deliveries and dedicated van journeys with independent UK operators.",
  heroImage: courierRoad,
  tags: ["Same-day requests", "Scheduled runs", "Multi-drop", "Dedicated van"],
  quoteTitle: "Where is your delivery going?",
  quoteText:
    "Enter route and service requirements, then provide item, timing and handling details.",
  typeLabel: "Courier service",
  typePlaceholder: "Same-day / Scheduled / Van",
  quoteNote:
    "Same-day services depend on operator availability. Add required collection and delivery windows.",
  optionsKicker: "COURIER AND DELIVERY VAN SERVICES",
  optionsTitle: "Choose your courier delivery service.",
  optionsText:
    "From urgent point-to-point deliveries to planned commercial collections, explain the goods, route and deadline.",
  cardImages: [sameDayVan, scheduledVan, multiDrop, courierRoad],
  options: [
    [
      "Same-Day Courier Vans",
      "Post urgent deliveries and work with operators who can assess the route.",
      ["Urgent van collections", "Deadline focus"],
      "truck",
    ],
    [
      "Scheduled Van Deliveries",
      "Plan a courier collection around your preferred date and delivery window.",
      ["Booked courier runs", "Planned collections"],
      "route",
    ],
    [
      "Business Multi-Drop",
      "Arrange business goods movements with several collection or delivery stops.",
      ["Multi-drop routes", "Commercial deliveries"],
      "box",
    ],
    [
      "Dedicated Van Couriers",
      "Reserve suitable van capacity for one specific point-to-point request.",
      ["Dedicated van journey", "UK-wide consignments"],
      "truck",
    ],
  ].map(([title, text, bullets, icon]) => ({ title, text, bullets, icon })),
  darkKicker: "POPULAR COURIER DELIVERY REQUESTS",
  darkTitle: "From urgent delivery to planned van runs.",
  darkText:
    "Provide details of the goods, handling needs and timing before comparing offers.",
  darkCards: [
    [
      "Urgent business deliveries",
      "Time-sensitive collections where a courier can assess the job.",
    ],
    [
      "Scheduled parcel runs",
      "Organise collection and delivery windows in advance.",
    ],
    [
      "Multi-drop collections",
      "Provide every stop, quantity and handling requirement.",
    ],
    [
      "Dedicated van loads",
      "Book suitable van space for larger or multiple goods.",
    ],
  ],
  steps: [
    [
      "Describe the courier job",
      "Enter route, collection deadline and item details.",
    ],
    [
      "Compare van courier quotes",
      "Review timing, capacity, service scope and terms.",
    ],
    [
      "Choose a courier operator",
      "Select the suitable option and agree the delivery.",
    ],
  ],
  prepareImage: multiDrop,
  prepareKicker: "DETAILS THAT HELP COURIERS PLAN",
  prepareTitle: "Prepare your delivery information.",
  prepareText:
    "The number of items, total dimensions, collection deadline and access requirements help operators assess suitability.",
  prepareBullets: [
    "Package count, approximate size and weight",
    "Deadline and collection availability",
    "Delivery access and number of stops",
    "Special handling or proof-of-delivery needs",
  ],
  workTitle: "Find courier delivery work.",
  workText:
    "With a suitable van or courier fleet, find urgent, scheduled and multi-stop delivery requests through HAULBY.",
  workImage: sameDayVan,
  faqs: [
    [
      "Can I request a same-day courier?",
      "Yes. Tell us the deadline so operators can assess suitability and availability.",
    ],
    [
      "Can I arrange a dedicated van?",
      "Yes. Dedicated delivery capacity can be requested for specific goods.",
    ],
    [
      "Does HAULBY deliver the items itself?",
      "No. Independent transport operators perform the agreed courier service.",
    ],
    [
      "Can I book regular business courier jobs?",
      "Business users can create repeat requests for recurring or multi-stop needs.",
    ],
  ],
  costKicker: "UK-WIDE COURIER COSTS",
  costTitle: "What affects same-day and scheduled courier costs?",
  costText:
    "Courier prices reflect timing, mileage and the handling required by the number of packages.",
  costs: [
    [
      "Urgency and collection window",
      "Give the collection address and latest delivery time.",
      "Get Courier Quote",
    ],
    [
      "Mileage, stops and waiting",
      "Collection and delivery addresses, extra stops and waiting affect the route.",
      "Find Transport Work",
    ],
    [
      "Van capacity and service terms",
      "The size, total mass and handling requirements affect suitable vehicles.",
      "Courier Service Categories",
    ],
  ],
  compareKicker: "COMPARE COURIER SERVICES",
  compareTitle: "Same-day, scheduled or dedicated van delivery?",
  compareText:
    "The best courier option depends on when items must move, how many stops are required and the capacity needed.",
  compareCards: [
    [
      "Same-day collection",
      "Give accurate pickup times and delivery deadlines.",
    ],
    [
      "Scheduled business deliveries",
      "Plan recurring or scheduled business runs.",
    ],
    [
      "Dedicated van for larger goods",
      "Request suitable capacity for multiple items.",
    ],
  ],
  practicalTitle: "More courier delivery questions",
  practical: [
    [
      "What information is needed for a courier quote?",
      "Provide addresses, number of items, sizes, weights and delivery deadline.",
    ],
    [
      "Can I request delivery between UK regions?",
      "Yes. Post any route and suitable operators may quote.",
    ],
    [
      "Is a same-day delivery guaranteed?",
      "No. Availability depends on suitable operators and timing.",
    ],
    [
      "Can a courier carry palletised goods?",
      "Use the Parcels & Pallets category for palletised freight.",
    ],
  ],
  ctaTitle: "Ready to arrange a courier?",
  ctaText: "Tell us the route, items and deadline to compare courier quotes.",
};
export default function CourierDeliveries() {
  return <ServiceDetail data={data} />;
}
