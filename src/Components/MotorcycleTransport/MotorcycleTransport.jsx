import React from "react";
import SpecialistPage from "../Common/SpecialistPage";
import "./MotorcycleTransport.css";
import a1 from "../../Assets/Pictures/HAULBY Visual Asset 01 _ 1376×768 _ KEEP SOURCE.png";
import a7 from "../../Assets/Pictures/HAULBY Visual Asset 07 _ 1376×768 _ KEEP SOURCE.png";
import a8 from "../../Assets/Pictures/HAULBY Visual Asset 08 _ 1376×768 _ KEEP SOURCE.png";
import a9 from "../../Assets/Pictures/HAULBY Visual Asset 09 _ 1376×768 _ KEEP SOURCE.png";
export default function MotorcycleTransport() {
  return (
    <SpecialistPage
      config={{
        title: "Motorcycle Transport",
        service: "Motorcycle Transport",
        heroText:
          "Find operators for motorcycle and scooter collections, with appropriate protection, loading equipment and tie-down arrangements.",
        tags: [
          "Motorbike purchases",
          "Scooter collections",
          "Non-running bikes",
          "Dealer stock",
        ],
        images: [a7, a1, a7, a9, a8, a7, a1],
        options: [
          "Motorcycle Collections",
          "Scooter & Moped Delivery",
          "Non-Running Motorbikes",
          "Dealer & Track Motorcycles",
        ],
        optionText: [
          "Collect road bikes from a seller, auction or dealer.",
          "Arrange suitably restrained small two-wheeler transport.",
          "Declare if the bike cannot roll or needs extra handling.",
          "Book planned movements for trade or leisure motorcycles.",
        ],
        optionsKicker: "MOTORBIKE & SCOOTER TRANSPORT SERVICES",
        optionsTitle: "Motorcycle Transport & Collection Quotes.",
        optionsText:
          "From motorbike purchases to scooter collections, provide bike dimensions, condition and any access constraints so suitable operators can quote.",
        optionBullets: [
          [
            "Motorbike purchases",
            "Motorcycle securing and protective equipment",
          ],
          [
            "Scooter collections",
            "Motorcycle securing and protective equipment",
          ],
          [
            "Non-running bike moves",
            "Motorcycle securing and protective equipment",
          ],
          [
            "Dealer and track-day bikes",
            "Motorcycle securing and protective equipment",
          ],
        ],
        hideOptionLinks: true,
        bullets: [
          "Motorbike purchases",
          "Secure loading",
          "Non-running condition",
          "Dealer movements",
        ],
        darkKicker: "MOTORCYCLE TRANSPORT JOURNEYS",
        darkTitle: "Common motorcycle transport requests.",
        darkText:
          "Specify bike make, model, weight, fairings and accessories; disclose whether it rolls and whether ramps or specialist motorcycle restraints are required.",
        darkCards: [
          [
            "Auction motorbikes",
            "Provide seller details, bike documents and release instructions.",
            "truck",
          ],
          [
            "Private bike purchases",
            "State model, collection window and access to the pickup location.",
            "route",
          ],
          [
            "Dealer and track bikes",
            "Share dimensions, value and any loose parts requiring protection.",
            "route",
          ],
          [
            "Non-running motorcycles",
            "State whether wheels turn and how the operator can access the bike.",
            "shield",
          ],
        ],
        steps: [
          [
            "Describe your bike and collection",
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
        prepareTitle: "Prepare your motorcycle transport details.",
        prepareText:
          "Find operators for motorbike and scooter collections, with appropriate protection, loading equipment and tie-down arrangements. Provide the necessary equipment, access and safety details.",
        prepareBullets: [
          "Bike make, model and approximate weight",
          "Keys, condition and whether it rolls",
          "Motorcycle ramp and secure tie-down requirements",
          "Collection access and protection arrangements",
        ],
        workKicker: "FOR SUITABLE TRANSPORT OPERATORS",
        workTitle: "Find motorcycle transport work.",
        workText:
          "Bike transporters should supply the appropriate ramp, wheel support, straps and loading crew.",
        faqs: [
          [
            "Do motorcycles need special securing?",
            "Suitable bikes require stable support and properly rated restraints.",
          ],
          [
            "Can I ship a non-running motorbike?",
            "Describe whether it rolls and any winching, lifting or site-access constraints so the operator can provide appropriate equipment.",
          ],
          [
            "Is enclosed motorcycle transport available?",
            "Ask operators to specify whether an enclosed vehicle is offered.",
          ],
          [
            "Can I request a dealer pickup?",
            "Yes. Give opening hours, contact details and release requirements.",
          ],
        ],
        costKicker: "MOTORCYCLE TRANSPORT COST FACTORS",
        costTitle: "What affects motorcycle transport quotes?",
        costText:
          "Pricing depends on route, the actual goods, access and any equipment required. Motorcycle securing and protective equipment.",
        costs: [
          [
            "Journey and collection timing",
            "Mileage, pickup windows and delivery requirements affect the overall job.",
            "Start a Transport Quote",
          ],
          [
            "Motorcycle securing and protective equipment",
            "Give accurate sizes, weight, condition and handling details so operators can assess suitability.",
            "Related Transport Services",
          ],
          [
            "Equipment, access and service terms",
            "Confirm the operator's loading/unloading plan, sufficient crew and equipment, insurance, exclusions, cancellations and service terms.",
            "How HAULBY Works",
          ],
        ],
        compareKicker: "MOTORCYCLE TRANSPORT SERVICE GUIDE",
        compareTitle: "Choosing suitable motorcycle transport",
        compareText:
          "Describe the load clearly so independent operators can assess the vehicle and service requirements.",
        compareCards: [
          [
            "Motorcycle Collections",
            "Collect road bikes from a seller, auction or dealer.",
            "Start a Transport Quote",
          ],
          [
            "Arrange suitably restrained small two-wheeler transport",
            "Keys, condition and whether it rolls. Give operators the relevant collection information.",
            "Related Transport Services",
          ],
          [
            "Dealer & Track Motorcycles",
            "Book planned movements for trade or leisure motorcycles.",
            "How HAULBY Works",
          ],
        ],
        practicalTitle: "More about motorcycle transport",
        ctaTitle: "Ready to arrange motorcycle transport?",
        ctaText:
          "Give your requirements to begin comparing independent operator quotations.",
        quoteCta: "Get Vehicle Transport Quotes",
        workCta: "Find Vehicle Transport Work",
      }}
    />
  );
}
