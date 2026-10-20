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
    quoteCta: config.quoteCta,
    workCta: config.workCta,
    heroImage: config.images[0],
    tags: config.tags,
    quoteTitle: config.quoteTitle || "Where does the load need to go?",
    quoteText:
      config.quoteText ||
      "Enter the route and job type. Add equipment, weight, condition and collection requirements in the next steps.",
    typeLabel: config.typeLabel || "Service type",
    typePlaceholder:
      config.typePlaceholder || `Choose ${service} type`,
    quoteNote:
      config.quoteNote ||
      "Include accurate details for every collection and delivery.",
    optionsKicker: config.optionsKicker || `${service.toUpperCase()} TRANSPORT`,
    optionsTitle:
      config.optionsTitle || `Choose your ${service.toLowerCase()} service.`,
    optionsText: config.optionsText,
    cardImages: config.images.slice(1, 5),
    options: items.map((title, index) => ({
      title,
      text:
        config.optionText[index] ||
        `Arrange suitable ${title.toLowerCase()} with independent operators.`,
      bullets: config.optionBullets?.[index] || [
        config.bullets[index] || "Suitable transport options",
        "Clear collection and loading details",
      ],
      icon: index % 2 ? "route" : "truck",
    })),
    hideOptionLinks: config.hideOptionLinks,
    darkKicker:
      config.darkKicker || `POPULAR ${service.toUpperCase()} REQUESTS`,
    darkTitle:
      config.darkTitle || `Common ${service.toLowerCase()} requests.`,
    darkText:
      config.darkText ||
      "Describe the load and route in sufficient detail for operators to assess capacity and suitability.",
    darkCards:
      config.darkCards ||
      items.map((title) => [
        title,
        `Provide clear details for ${title.toLowerCase()}.`,
      ]),
    steps: config.steps || [
      [
        "Post your transport request",
        "Add collection, destination and load information.",
      ],
      [
        "Compare operator quotes",
        "Review offers, provider details and service terms.",
      ],
      [
        "Choose and arrange transport",
        "Confirm your preferred quote and manage the booking.",
      ],
    ],
    prepareImage: config.images[5],
    prepareKicker:
      config.prepareKicker || "INFORMATION FOR ACCURATE QUOTES",
    prepareTitle:
      config.prepareTitle || `Prepare your ${service.toLowerCase()} details.`,
    prepareText: config.prepareText,
    prepareBullets: config.prepareBullets,
    workKicker:
      config.workKicker || "FOR HAULBY'S TRANSPORT OPERATORS",
    workTitle: config.workTitle || `Find ${service.toLowerCase()} work.`,
    workText:
      config.workText ||
      `Find suitable jobs matching your transport equipment, operating area and capacity.`,
    workImage: config.images[6],
    faqs: config.faqs,
    costKicker:
      config.costKicker || `${service.toUpperCase()} QUOTE FACTORS`,
    costTitle:
      config.costTitle || `What affects ${service.toLowerCase()} quotes?`,
    costText:
      config.costText ||
      "Pricing depends on the route, timing, load details and suitable equipment.",
    costs: config.costs || [
      [
        "Journey and collection timing",
        "Mileage, access and delivery windows affect the work required.",
        `Start ${service} Quote`,
      ],
      [
        "Load condition and handling",
        "Give accurate dimensions, condition and loading details.",
        "Review Transport Services",
      ],
      [
        "Equipment, access and service terms",
        "Confirm the operator's inclusions and practical arrangements.",
        "How HAULBY Works",
      ],
    ],
    compareKicker:
      config.compareKicker || `CHOOSING SUITABLE ${service.toUpperCase()}`,
    compareTitle:
      config.compareTitle || `Choosing suitable ${service.toLowerCase()}`,
    compareText:
      config.compareText ||
      "Describe the load clearly so independent operators can assess the vehicle and service requirements.",
    compareCards:
      config.compareCards ||
      items
        .slice(0, 3)
        .map((title) => [
          title,
          `Compare suitable options for ${title.toLowerCase()}.`,
        ]),
    practicalTitle:
      config.practicalTitle || `More about ${service.toLowerCase()}`,
    practical: config.faqs,
    ctaTitle:
      config.ctaTitle || `Ready to arrange ${service.toLowerCase()}?`,
    ctaText:
      config.ctaText ||
      "Give your requirements to begin comparing independent operator quotations.",
  };

  return <ServiceDetail data={data} />;
}
