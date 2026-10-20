import React from "react";
import SpecialistPage from "../Common/SpecialistPage";
import "./VehicleRecovery.css";
import a1 from "../../Assets/Pictures/HAULBY Visual Asset 01 _ 1376×768 _ KEEP SOURCE.png";
import a7 from "../../Assets/Pictures/HAULBY Visual Asset 07 _ 1376×768 _ KEEP SOURCE.png";
import a8 from "../../Assets/Pictures/HAULBY Visual Asset 08 _ 1376×768 _ KEEP SOURCE.png";
import a9 from "../../Assets/Pictures/HAULBY Visual Asset 09 _ 1376×768 _ KEEP SOURCE.png";
export default function VehicleRecovery() {
  return (
    <SpecialistPage
      config={{
        title: "Vehicle Recovery",
        service: "Vehicle Recovery",
        heroText:
          "Arrange planned UK vehicle recovery and collection moves with suitable independent operators. HAULBY does not promise emergency roadside response.",
        tags: [
          "Planned garage collections",
          "Non-runners at home",
          "Stored vehicles",
          "Damage-disclosed",
        ],
        images: [a9, a1, a7, a9, a8, a7, a1],
        quoteKicker: "START YOUR VEHICLE RECOVERY QUOTE",
        quoteTitle: "Where does the load need to go?",
        quoteText:
          "Enter the route and job type. Add equipment, weight, condition and collection requirements in the next steps.",
        typePlaceholder: "Car / Van / Motorcycle",
        quoteNote:
          "Pre-booked only; no roadside emergency response guarantee. Include accurate details for every collection and delivery.",
        options: [
          "Pre-Booked Recovery",
          "Garage & Workshop Transfers",
          "Non-Running Vehicles",
          "Accident-Damaged Collections",
        ],
        optionText: [
          "Plan a non-emergency vehicle collection in advance.",
          "Move vehicles between repairers or storage sites.",
          "Explain the faults and actual loading restrictions.",
          "Disclose condition and whether special equipment is needed.",
        ],
        optionsKicker: "PLANNED VEHICLE COLLECTION & RECOVERY",
        optionsTitle: "Planned Vehicle Recovery & Collection.",
        optionsText:
          "Request planned collection of non-running cars and vans from a home, garage, storage site or auction. This is not emergency roadside rescue.",
        optionBullets: [
          [
            "Planned garage collections",
            "Pre-booked only; no roadside emergency response guarantee",
          ],
          [
            "Non-runners at home",
            "Pre-booked only; no roadside emergency response guarantee",
          ],
          [
            "Stored vehicle moves",
            "Pre-booked only; no roadside emergency response guarantee",
          ],
          [
            "Damage-disclosed collections",
            "Pre-booked only; no roadside emergency response guarantee",
          ],
        ],
        hideOptionLinks: true,
        bullets: [
          "Planned collection",
          "Garage transfers",
          "Non-running vehicle",
          "Damage disclosed",
        ],
        darkKicker: "VEHICLE RECOVERY JOURNEYS",
        darkTitle: "Common vehicle recovery requests.",
        darkText:
          "Tell operators if the vehicle starts, steers, rolls or brakes, and whether the site allows winching, recovery access or loading onto a flatbed.",
        darkCards: [
          ["Garage collections", "Provide workshop hours and loading access.", "truck"],
          [
            "Non-running private vehicles",
            "Describe mechanical condition, keys and restricted access.",
            "route",
          ],
          [
            "Auction recovery",
            "Share release instructions and recovery suitability details.",
            "route",
          ],
          [
            "Stored or damaged vehicles",
            "Provide photographs and any known safety or handling risks.",
            "shield",
          ],
        ],
        steps: [
          [
            "Describe the vehicle and recovery access",
            "Vehicle details, collection, destination and access information.",
          ],
          [
            "Compare operator quotes",
            "Look at offers, provider details, services and terms.",
          ],
          [
            "Choose & arrange transport",
            "Confirm your preferred quote and manage your booking.",
          ],
        ],
        prepareKicker: "INFORMATION FOR ACCURATE QUOTES",
        prepareTitle: "Prepare your vehicle recovery details.",
        prepareText:
          "Arrange planned UK vehicle recovery and collection moves with suitable independent operators. HAULBY does not promise emergency roadside response. Provide the necessary equipment, access and safety details.",
        prepareBullets: [
          "Vehicle model, condition and approximate mass",
          "Whether the wheels turn, steer or brake",
          "Safe pickup location and accessible loading area",
          "Winching, lifting and special equipment needs",
        ],
        workKicker: "FOR SUITABLE TRANSPORT OPERATORS",
        workTitle: "Find vehicle recovery work.",
        workText:
          "Recovery operators supply suitable winching, lifting or loading equipment and staff. Availability and response times are not guaranteed.",
        faqs: [
          [
            "Is this an emergency roadside breakdown service?",
            "No. These are planned recovery enquiries; do not rely on HAULBY for urgent roadside assistance.",
          ],
          [
            "Can a damaged vehicle be moved?",
            "Some operators can, depending on damage, access and suitable equipment.",
          ],
          [
            "What details are needed for recovery?",
            "Location, condition, wheel and steering status, weight and collection access.",
          ],
          [
            "Will an operator respond immediately?",
            "No response time is guaranteed. Confirm the agreed collection slot directly.",
          ],
        ],
        faqTitle: "Vehicle Recovery questions, answered.",
        costKicker: "VEHICLE RECOVERY COST FACTORS",
        costTitle: "What affects vehicle recovery quotes?",
        costText:
          "Pricing depends on route, the actual goods, access and any equipment required. Pre-booked only; no roadside emergency response guarantee.",
        costs: [
          [
            "Journey and collection timing",
            "Mileage, pickup windows and delivery requirements affect the overall job.",
            "Start a Transport Quote",
          ],
          [
            "Pre-booked only; no roadside emergency response guarantee",
            "Give accurate sizes, weight, condition and handling details so operators can assess suitability.",
            "Related Transport Services",
          ],
          [
            "Equipment, access and service terms",
            "Confirm the operator's loading/unloading plan, sufficient crew and equipment, insurance, exclusions, cancellations and service terms.",
            "How HAULBY Works",
          ],
        ],
        compareKicker: "VEHICLE RECOVERY SERVICE GUIDE",
        compareTitle: "Choosing suitable vehicle recovery",
        compareText:
          "Describe the load clearly so independent operators can assess the vehicle and service requirements.",
        compareCards: [
          [
            "Pre-Booked Recovery",
            "Plan a non-emergency vehicle collection in advance.",
            "Start a Transport Quote",
          ],
          [
            "Move vehicles between repairers or storage sites",
            "Whether the wheels turn, steer or brake. Give operators the relevant collection information.",
            "Related Transport Services",
          ],
          [
            "Accident-Damaged Collections",
            "Disclose condition and whether special equipment is needed.",
            "How HAULBY Works",
          ],
        ],
        practicalTitle: "More about vehicle recovery",
        ctaTitle: "Ready to arrange vehicle recovery?",
        ctaText:
          "Give your requirements to begin comparing independent operator quotations.",
        quoteCta: "Get Vehicle Transport Quotes",
        workCta: "Find Vehicle Transport Work",
      }}
    />
  );
}
