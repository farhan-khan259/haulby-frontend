import React from "react";
import SpecialistPage from "../Common/SpecialistPage";
import "./OfficeRemovals.css";
import a18 from "../../Assets/Pictures/HAULBY Visual Asset 18 _ 1376×768 _ KEEP SOURCE.png";
import a19 from "../../Assets/Pictures/HAULBY Visual Asset 19 _ 1376×768 _ KEEP SOURCE.png";
import a20 from "../../Assets/Pictures/HAULBY Visual Asset 20 _ 1376×768 _ KEEP SOURCE.png";
import a21 from "../../Assets/Pictures/HAULBY Visual Asset 21 _ 1376×768 _ KEEP SOURCE.png";
import a22 from "../../Assets/Pictures/HAULBY Visual Asset 22 _ 1376×768 _ KEEP SOURCE.png";
import a29 from "../../Assets/Pictures/HAULBY Visual Asset 29 _ 1376×768 _ KEEP SOURCE.png";
export default function OfficeRemovals() {
  return (
    <SpecialistPage
      config={{
        title: "Office Removals",
        service: "Office Removals",
        heroText:
          "Compare business office-removal quotes for planned furniture, equipment and workplace relocations.",
        tags: [
          "Office moves",
          "IT and boxed equipment",
          "Business furniture",
          "Multi-site relocations",
        ],
        images: [a21, a18, a19, a29, a22, a29, a20],
        options: [
          "Small Office Moves",
          "IT & Equipment Transport",
          "Business Furniture Relocation",
          "Multi-Site Office Moves",
        ],
        optionText: [
          "Move desks, chairs and boxed office contents.",
          "Declare fragile electronic items and handling needs.",
          "Arrange bulky office furniture collections.",
          "Specify sites, access windows and multiple stops.",
        ],
        bullets: [
          "Office moves",
          "IT equipment",
          "Business furniture",
          "Multiple sites",
        ],
        optionsText:
          "Compare business office-removal quotes for planned furniture, equipment and workplace relocations.",
        prepareText: "Prepare an inventory and workplace access details.",
        prepareBullets: [
          "Itemised furniture and equipment inventory",
          "Building loading access and lift dimensions",
          "Packing, dismantling and carrying requirements",
          "IT protection, downtime and access windows",
        ],
        faqs: [
          [
            "Can an office move be booked outside opening hours?",
            "State your preferred window and access needs.",
          ],
          [
            "Will movers pack IT equipment?",
            "Only where explicitly included in the quote.",
          ],
          [
            "Can multiple office sites be involved?",
            "List every site and restriction.",
          ],
          [
            "How should fragile equipment be prepared?",
            "Confirm protection, packaging and handling needs.",
          ],
        ],
      }}
    />
  );
}
