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
        bullets: [
          "Private car purchases",
          "Auction collections",
          "Non-running condition",
          "Dealer movements",
        ],
        prepareText:
          "Compare independent UK car transport quotes with accurate vehicle and collection information.",
        prepareBullets: [
          "Make, model and approximate vehicle weight",
          "Starting, rolling, steering and braking condition",
          "Keys, release documents and collection access",
          "Delivery window and suitable loading equipment",
        ],
        faqs: [
          [
            "Can I transport a car bought online?",
            "Yes. Include seller contact and vehicle condition.",
          ],
          [
            "Can an operator collect a non-runner?",
            "Suitable operators may quote when condition is clear.",
          ],
          [
            "How are car transport quotes calculated?",
            "Distance, vehicle size, condition and timing affect pricing.",
          ],
          [
            "Who handles the car?",
            "The selected independent operator performs the journey.",
          ],
        ],
      }}
    />
  );
}
