import React from "react";
import SpecialistPage from "../Common/SpecialistPage";
import "./CarTransport.css";
import a1 from "../../Assets/Pictures/HAULBY Visual Asset 01 _ 1376×768 _ KEEP SOURCE.png";
import a7 from "../../Assets/Pictures/HAULBY Visual Asset 07 _ 1376×768 _ KEEP SOURCE.png";
import a8 from "../../Assets/Pictures/HAULBY Visual Asset 08 _ 1376×768 _ KEEP SOURCE.png";
import a9 from "../../Assets/Pictures/HAULBY Visual Asset 09 _ 1376×768 _ KEEP SOURCE.png";
export default function CarTransport() {
  return (
    <SpecialistPage
      config={{
        title: "Car Transport",
        service: "Car Transport",
        heroText:
          "Compare independent UK car transport quotes for private purchases, auction collections and planned vehicle movements.",
        tags: [
          "Private car purchases",
          "Auction collections",
          "Non-running vehicles",
          "Dealer movements",
        ],
        images: [a1, a1, a7, a9, a8, a7, a1],
        options: [
          "Private Car Transport",
          "Auction Car Collections",
          "Non-Running Car Transport",
          "Dealer & Trade Cars",
        ],
        optionText: [
          "Arrange transport for a car between two UK addresses.",
          "Share auction release details and collection windows.",
          "Disclose whether the vehicle rolls, steers and brakes.",
          "Move purchased or sold cars between trade premises.",
        ],
        optionsKicker: "CAR COLLECTION & DELIVERY SERVICES",
        optionsTitle: "Car Transport Quotes for UK Collections.",
        optionsText:
          "Arrange car delivery for online purchases, auction lots or dealer transfers. Include registration, roadworthiness, access and collection contacts.",
        optionBullets: [
          ["Private car purchases", "Car condition and loading equipment"],
          ["Auction collections", "Car condition and loading equipment"],
          ["Non-running vehicles", "Car condition and loading equipment"],
          ["Dealer vehicle movements", "Car condition and loading equipment"],
        ],
        hideOptionLinks: true,
        darkKicker: "CAR TRANSPORT JOURNEYS",
        darkTitle: "Common car transport requests.",
        darkText:
          "Provide the make, model, running condition, wheel movement, collection postcode and delivery instructions so operators can choose suitable recovery or transport equipment.",
        darkCards: [
          [
            "Auction purchases",
            "Share the auction release instructions and buyer collection reference.",
            "truck",
          ],
          [
            "Private car purchases",
            "Include seller availability, registration and vehicle condition.",
            "route",
          ],
          [
            "Motor trade movements",
            "List dealer sites, delivery times and any multi-car requirements.",
            "route",
          ],
          [
            "Non-running cars",
            "Tell operators if the car steers, rolls and brakes for safe loading.",
            "shield",
          ],
        ],
        bullets: [
          "Private car purchases",
          "Auction collections",
          "Non-running condition",
          "Dealer movements",
        ],
        prepareText:
          "Compare independent UK car transport quotes for private purchases, auction collections and planned vehicle movements. Provide the necessary equipment, access and safety details.",
        prepareBullets: [
          "Make, model and approximate vehicle weight",
          "Starting, rolling, steering and braking condition",
          "Keys, release documents and collection access",
          "Delivery window and suitable loading equipment",
        ],
        workKicker: "FOR SUITABLE TRANSPORT OPERATORS",
        workTitle: "Find car transport work.",
        workText:
          "Approved car-transport operators must provide suitable loading equipment, vehicle restraints and staff.",
        faqs: [
          [
            "Can I transport a car bought online?",
            "Yes. Include seller contact and vehicle condition for collection quotes.",
          ],
          [
            "Can an operator collect a non-runner?",
            "Suitable operators must arrange appropriate winching or loading equipment for the agreed job.",
          ],
          [
            "How are car transport quotes calculated?",
            "Distance, vehicle size, running condition, access and timing all affect pricing.",
          ],
          [
            "Who handles the car?",
            "The independent operator you choose carries out the journey under agreed terms.",
          ],
        ],
        costKicker: "CAR TRANSPORT COST FACTORS",
        costTitle: "What affects car transport quotes?",
        costText:
          "Pricing depends on route, the actual goods, access and any equipment required. Car condition and loading equipment.",
        costs: [
          [
            "Journey and collection timing",
            "Mileage, pickup windows and delivery requirements affect the overall job.",
            "Start a Transport Quote",
          ],
          [
            "Car condition and loading equipment",
            "Give accurate sizes, weight, condition and handling details so operators can assess suitability.",
            "Related Transport Services",
          ],
          [
            "Equipment, access and service terms",
            "Confirm the operator's loading/unloading plan, sufficient crew and equipment, insurance, exclusions, cancellations and service terms.",
            "How HAULBY Works",
          ],
        ],
        compareKicker: "CAR TRANSPORT SERVICE GUIDE",
        compareTitle: "Choosing suitable car transport",
        compareText:
          "Describe the load clearly so independent operators can assess the vehicle and service requirements.",
        compareCards: [
          [
            "Private Car Transport",
            "Arrange transport for a car between two UK addresses.",
            "Start a Transport Quote",
          ],
          [
            "Share auction release details and collection windows",
            "Starting, rolling, steering and braking condition. Give operators the relevant collection information.",
            "Related Transport Services",
          ],
          [
            "Dealer & Trade Cars",
            "Move purchased or sold cars between trade premises.",
            "How HAULBY Works",
          ],
        ],
        practicalTitle: "More about car transport",
        ctaTitle: "Ready to arrange car transport?",
        ctaText:
          "Give your requirements to begin comparing independent operator quotations.",
        quoteCta: "Get Vehicle Transport Quotes",
        workCta: "Find Vehicle Transport Work",
      }}
    />
  );
}
