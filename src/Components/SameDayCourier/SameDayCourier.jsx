import React from "react";
import SpecialistPage from "../Common/SpecialistPage";
import "./SameDayCourier.css";
import a2 from "../../Assets/Pictures/HAULBY Visual Asset 02 _ 1376×768 _ KEEP SOURCE.png";
import a10 from "../../Assets/Pictures/HAULBY Visual Asset 10 _ 1376×768 _ KEEP SOURCE.png";
import a11 from "../../Assets/Pictures/HAULBY Visual Asset 11 _ 1376×768 _ KEEP SOURCE.png";
import a12 from "../../Assets/Pictures/HAULBY Visual Asset 12 _ 1376×768 _ KEEP SOURCE.png";
export default function SameDayCourier() {
  return (
    <SpecialistPage
      config={{
        title: "Same-Day Courier",
        service: "Same-Day Courier",
        heroText:
          "Request urgent courier collection or dedicated van transport where suitable independent operators have capacity.",
        tags: [
          "Urgent customer orders",
          "Business spare parts",
          "Direct van journeys",
          "Same-day collection",
        ],
        images: [a10, a10, a2, a11, a12, a11, a10],
        quoteKicker: "START YOUR SAME-DAY COURIER QUOTE",
        quoteTitle: "Where does the load need to go?",
        quoteText:
          "Enter the route and job type. Add equipment, weight, condition and collection requirements in the next steps.",
        typePlaceholder: "Same-day / Scheduled / Van",
        quoteNote:
          "Availability-dependent same-day timing. Include accurate details for every collection and delivery.",
        options: [
          "Urgent Document & Box Delivery",
          "Same-Day Van Collection",
          "Direct Dedicated Courier",
          "Business Emergency Deliveries",
        ],
        optionText: [
          "Describe secure packaging, item count and delivery deadlines.",
          "Request a van for suitable time-sensitive goods.",
          "State when a direct point-to-point journey is needed.",
          "Post time-critical business consignments for review.",
        ],
        optionsKicker: "URGENT SAME-DAY UK COURIER SERVICES",
        optionsTitle: "Same-Day Courier & Dedicated Van Quotes.",
        optionsText:
          "Request a dedicated or urgent UK courier run where an eligible operator can meet your collection and delivery window.",
        optionBullets: [
          ["Urgent customer orders", "Availability-dependent same-day timing"],
          ["Business spare parts", "Availability-dependent same-day timing"],
          ["Direct van journeys", "Availability-dependent same-day timing"],
          [
            "Same-day collection requests",
            "Availability-dependent same-day timing",
          ],
        ],
        hideOptionLinks: true,
        bullets: [
          "Urgent collection",
          "Same-day availability",
          "Direct journey",
          "Business delivery",
        ],
        darkKicker: "SAME-DAY COURIER JOURNEYS",
        darkTitle: "Common same-day courier requests.",
        darkText:
          "For time-sensitive deliveries, state packed dimensions, weight, earliest pickup, handover contact and latest acceptable delivery time.",
        darkCards: [
          [
            "Urgent customer orders",
            "Describe secure packaging, item count and delivery deadlines.",
            "truck",
          ],
          [
            "Business spare parts",
            "Request a van for suitable time-sensitive goods.",
            "route",
          ],
          [
            "Direct van journeys",
            "State when a direct point-to-point journey is needed.",
            "route",
          ],
          [
            "Same-day collection requests",
            "Post time-critical business consignments for review.",
            "shield",
          ],
        ],
        steps: [
          [
            "Describe the courier job",
            "Enter route, collection deadlines and item details.",
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
        prepareKicker: "INFORMATION FOR ACCURATE QUOTES",
        prepareTitle: "Prepare your same-day courier details.",
        prepareText:
          "Request urgent courier collection or dedicated van transport where suitable independent operators have capacity. Provide the necessary equipment, access and safety details.",
        prepareBullets: [
          "Exact pickup readiness and latest delivery time",
          "Full parcel sizes, weight and contents declaration",
          "Pickup and delivery contact details",
          "Loading access and proof-of-delivery requirements",
        ],
        workKicker: "FOR SUITABLE TRANSPORT OPERATORS",
        workTitle: "Find same-day courier work.",
        workText:
          "Couriers must quote for the service window and the appropriate loading, securing and handover arrangements.",
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
        faqTitle: "Same-Day Courier questions, answered.",
        costKicker: "SAME-DAY COURIER COST FACTORS",
        costTitle: "What affects same-day courier quotes?",
        costText:
          "Pricing depends on route, the actual goods, access and any equipment required. Availability-dependent same-day timing.",
        costs: [
          [
            "Journey and collection timing",
            "Mileage, pickup windows and delivery requirements affect the overall job.",
            "Start a Transport Quote",
          ],
          [
            "Availability-dependent same-day timing",
            "Give accurate sizes, weight, condition and handling details so operators can assess suitability.",
            "Related Transport Services",
          ],
          [
            "Equipment, access and service terms",
            "Confirm the operator's loading/unloading plan, sufficient crew and equipment, insurance, exclusions, cancellations and service terms.",
            "How HAULBY Works",
          ],
        ],
        compareKicker: "SAME-DAY COURIER SERVICE GUIDE",
        compareTitle: "Choosing suitable same-day courier",
        compareText:
          "Describe the load clearly so independent operators can assess the vehicle and service requirements.",
        compareCards: [
          [
            "Urgent Document & Box Delivery",
            "Describe secure packaging, item count and delivery deadlines.",
            "Start a Transport Quote",
          ],
          [
            "Request a van for suitable time-sensitive goods",
            "Full parcel sizes, weight and contents declaration. Give operators the relevant collection information.",
            "Related Transport Services",
          ],
          [
            "Business Emergency Deliveries",
            "Post time-critical business consignments for review.",
            "How HAULBY Works",
          ],
        ],
        practicalTitle: "More about same-day courier",
        practical: [
          [
            "Is same-day delivery guaranteed?",
            "We work to find an urgent courier, and the collection and delivery times are confirmed with the selected operator.",
          ],
          [
            "Can I arrange an urgent van?",
            "Yes, if suitable participating operators can quote for the route.",
          ],
          [
            "Should I list a delivery deadline?",
            "Yes. Make it clear before comparing offers.",
          ],
          [
            "Can businesses request repeat urgent work?",
            "Businesses may post additional urgent consignments with relevant details.",
          ],
        ],
        ctaTitle: "Ready to arrange same-day courier?",
        ctaText:
          "Give your requirements to begin comparing independent operator quotations.",
        quoteCta: "Get Courier Quotes",
        workCta: "Find Courier Work",
      }}
    />
  );
}
