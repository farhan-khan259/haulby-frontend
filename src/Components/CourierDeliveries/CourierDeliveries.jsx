import React from "react";
import ServiceDetail from "../Common/ServiceDetail";
import sameDayVan from "../../Assets/Pictures/HAULBY Visual Asset 10 _ 1376×768 _ KEEP SOURCE.png";
import multiDrop from "../../Assets/Pictures/HAULBY Visual Asset 11 _ 1376×768 _ KEEP SOURCE.png";
import scheduledVan from "../../Assets/Pictures/HAULBY Visual Asset 02 _ 1376×768 _ KEEP SOURCE.png";
import courierRoad from "../../Assets/Pictures/HAULBY Visual Asset 12 _ 1376×768 _ KEEP SOURCE.png";
import "./CourierDeliveries.css";
const data = {
  variant: "courier",
  styleVariant: "vehicle",
  short: "Courier Delivery",
  quoteCta: "Get Courier Quotes",
  workCta: "Find Courier Work",
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
      "Time-sensitive collections when a courier can take the job.",
      "truck",
    ],
    [
      "Scheduled parcel runs",
      "Organise collection and delivery windows in advance.",
      "route",
    ],
    [
      "Multi-drop collections",
      "Provide every stop, quantity and handling requirement.",
      "route",
    ],
    [
      "Dedicated van loads",
      "Book suitable van space for larger or multiple goods.",
      "shield",
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
      "Yes. Tell us the deadline so we can work to find a suitable courier and confirm a realistic collection time.",
    ],
    [
      "Can I arrange a dedicated van?",
      "You can request direct van capacity. Operators decide whether they can service the route and load.",
    ],
    [
      "Does HAULBY deliver the items itself?",
      "No. HAULBY connects customers with independent operators who provide the agreed courier service.",
    ],
    [
      "Can I book regular business courier jobs?",
      "Businesses can create delivery requests for recurring or multi-stop transport requirements.",
    ],
  ],
  costKicker: "UK VAN COURIER QUOTES",
  costTitle: "What affects same-day and scheduled courier costs?",
  costText:
    "Courier prices reflect timing, mileage and the delivery work required—not simply the number of packages.",
  costs: [
    [
      "Urgency and collection window",
      "Give the collection readiness and latest delivery time. We'll prioritise matching urgent jobs with couriers able to meet the window.",
      "Get Courier Quotes",
    ],
    [
      "Mileage, stops and waiting",
      "Collection and delivery addresses, extra stops, waiting periods, route flexibility and tolls can affect an operator's offer.",
      "How Transport Works",
    ],
    [
      "Van capacity and service terms",
      "The size, total mass, loading requirements and whether a dedicated vehicle is needed should be included before comparing quotes.",
      "Courier Service Categories",
    ],
  ],
  compareKicker: "CHOOSE A COURIER SERVICE",
  compareTitle: "Same-day, scheduled or dedicated van delivery?",
  compareText:
    "The best courier option depends on when the items must move, how many stops are required and the capacity needed.",
  compareCards: [
    [
      "Same-day collection",
      "Give accurate pickup times and delivery deadlines. We'll work to find a courier able to meet the required service.",
      "Same-Day Courier",
      "/services/same-day-courier",
    ],
    [
      "Scheduled and business deliveries",
      "A planned collection may suit a regular delivery round, a business van run or several stops. Declare any fixed arrival times.",
      "Business Transport",
      "/for-businesses",
    ],
    [
      "Dedicated van for larger goods",
      "Bulky consignments require an appropriately equipped vehicle and operator-provided handling, rather than an unsuitable standard parcel service.",
      "Parcels & Pallets",
      "/services/parcels-pallets",
    ],
  ],
  practicalTitle: "More courier delivery questions",
  practical: [
    [
      "What information is needed for a courier quote?",
      "Collection and delivery locations, number of items, size, weight, timing, access and any special handling requirements.",
    ],
    [
      "Can I request delivery between UK regions?",
      "Yes. Post any cross-region courier request and we'll work to connect it with a suitable UK operator.",
    ],
    [
      "Is a same-day delivery guaranteed?",
      "No. Ask the operator to confirm collection and delivery timing and its terms before booking.",
    ],
    [
      "Can a courier carry palletised goods?",
      "Only if the vehicle and loading equipment are suitable. Use the Parcels & Pallets category to describe pallet handling requirements.",
    ],
  ],
  ctaTitle: "Ready to arrange a courier?",
  ctaText: "Tell us the route, items and deadline to compare courier quotes.",
};
export default function CourierDeliveries() {
  return <ServiceDetail data={data} />;
}
