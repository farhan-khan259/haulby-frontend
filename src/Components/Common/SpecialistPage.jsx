import React from "react";
import ServiceDetail from "./ServiceDetail";

export default function SpecialistPage({ config }) {
  const service = config.service;
  const items = config.options;
  const data = {
    short: service,
    title: `${config.title}.`,
    accent: "Sorted.",
    heroText: config.heroText,
    heroImage: config.images[0],
    tags: config.tags,
    quoteTitle: "Where does the load need to go?",
    quoteText: "Enter the route and job type. Add equipment, weight, condition and collection requirements in the next steps.",
    typeLabel: "Service type",
    typePlaceholder: `Choose ${service} type`,
    quoteNote: "Include accurate details for every collection and delivery.",
    optionsKicker: `${service.toUpperCase()} TRANSPORT`,
    optionsTitle: `Choose your ${service.toLowerCase()} service.`,
    optionsText: config.optionsText,
    cardImages: config.images.slice(1, 5),
    options: items.map((title, index) => ({
      title,
      text: config.optionText[index] || `Arrange suitable ${title.toLowerCase()} with independent operators.`,
      bullets: [config.bullets[index] || "Suitable transport options", "Clear collection and loading details"],
      icon: index % 2 ? "route" : "truck",
    })),
    darkKicker: `POPULAR ${service.toUpperCase()} REQUESTS`,
    darkTitle: `Common ${service.toLowerCase()} requests.`,
    darkText: "Describe the load and route in sufficient detail for operators to assess capacity and suitability.",
    darkCards: items.map((title) => [title, `Provide clear details for ${title.toLowerCase()}.`]),
    steps: [
      ["Post your transport request", "Add collection, destination and load information."],
      ["Compare operator quotes", "Review offers, provider details and service terms."],
      ["Choose and arrange transport", "Confirm your preferred quote and manage the booking."],
    ],
    prepareImage: config.images[5],
    prepareKicker: "INFORMATION FOR ACCURATE QUOTES",
    prepareTitle: `Prepare your ${service.toLowerCase()} details.`,
    prepareText: config.prepareText,
    prepareBullets: config.prepareBullets,
    workTitle: `Find ${service.toLowerCase()} work.`,
    workText: `Find suitable jobs matching your transport equipment, operating area and capacity.`,
    workImage: config.images[6],
    faqs: config.faqs,
    costKicker: `${service.toUpperCase()} QUOTE FACTORS`,
    costTitle: `What affects ${service.toLowerCase()} quotes?`,
    costText: "Pricing depends on the route, timing, load details and suitable equipment.",
    costs: [
      ["Journey and collection timing", "Mileage, access and delivery windows affect the work required.", `Start ${service} Quote`],
      ["Load condition and handling", "Give accurate dimensions, condition and loading details.", "Review Transport Services"],
      ["Equipment, access and service terms", "Confirm the operator's inclusions and practical arrangements.", "How HAULBY Works"],
    ],
    compareKicker: `CHOOSING SUITABLE ${service.toUpperCase()}`,
    compareTitle: `Choosing suitable ${service.toLowerCase()}`,
    compareText: "Describe the load clearly so independent operators can assess the vehicle and service requirements.",
    compareCards: items.slice(0, 3).map((title) => [title, `Compare suitable options for ${title.toLowerCase()}.`]),
    practicalTitle: `More about ${service.toLowerCase()}`,
    practical: config.faqs,
    ctaTitle: `Ready to arrange ${service.toLowerCase()}?`,
    ctaText: "Give your requirements to begin comparing independent operator quotations.",
  };

  return <ServiceDetail data={data} />;
}
