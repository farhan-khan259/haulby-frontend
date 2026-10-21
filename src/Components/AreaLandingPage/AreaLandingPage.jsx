import InformationalPage from "../Common/InformationalPage";
import "./AreaLandingPage.css";
export default function AreaLandingPage() {
  return (
    <InformationalPage
      data={{
        title: "Transport in [Location]",
        description:
          "Example area page: describe real local collection routes and transport options only after verifying location-specific information.",
        overview: {
          kicker: "LOCAL TRANSPORT — CMS CONTENT REQUIRED",
          title: "Local transport information for a real UK area",
          cards: [
            [
              "Actual area details",
              "Include distinctive, genuine location-specific evidence.",
            ],
            [
              "Relevant local service information",
              "Publish only accurate local information; use the nationwide network to pursue suitable job coverage.",
            ],
            [
              "Useful collection guidance",
              "Provide useful local access, routes and service details.",
            ],
          ],
        },
        information: {
          kicker: "VERIFIABLE COVERAGE BY AREA",
          title: "Nationwide coverage and matching",
          cards: [
            [
              "What to include in your request",
              "Provide real road, parking and access information.",
            ],
            [
              "Operator and service terms",
              "Show only verified local service details, not invented depots.",
            ],
            [
              "Before confirming the booking",
              "Publish only substantively unique, researched location pages.",
            ],
          ],
        },
        steps: [
          ["Actual area details", ""],
          ["Relevant local service information", ""],
          ["Useful collection guidance", ""],
        ],
        importantDetails: {
          title: "Nationwide matching and confirmed bookings",
          text: "Publish local pages only with substantively verified location information. Avoid mass-produced city-name replacements.",
        },
        faqs: [
          [
            "Should all towns have pages?",
            "No. Publish only areas with genuine, distinct evidence and useful content.",
          ],
          [
            "Should each town have a nearly identical page?",
            "No. Area pages should exist only where independently useful and verifiable local information can be published.",
          ],
          [
            "Does a local page mean HAULBY operates a depot there?",
            "No. The platform matches enquiries with independent operators and must not invent local offices or depots.",
          ],
          [
            "Can customers request transport without an area page?",
            "Yes. Use the nationwide quote journey with the actual collection and delivery postcodes.",
          ],
        ],
        cta: {
          title: "Continue to the relevant transport service",
          text: "A locality-specific page template for verifiable transport information.",
        },
      }}
    />
  );
}
