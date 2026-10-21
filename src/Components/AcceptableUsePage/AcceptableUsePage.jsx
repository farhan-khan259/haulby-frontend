import LegalDocumentLayout from "../LegalDocumentCommon/LegalDocumentLayout";
import "./AcceptableUsePage.css";
const sections = [
  [
    "Truthful listings and operators",
    "No fictitious loads, false business credentials, inaccurate insurance, manipulated quotations, forged delivery proof or unapproved driver bidding. Provide accurate job and access information.",
  ],
  [
    "Unsafe and restricted transport",
    "Do not arrange unlawful goods or work requiring permissions the selected operator lacks. Hazardous, waste, towing, livestock or specialist work is allowed only under applicable safety, licensing and insurance rules.",
  ],
  [
    "Respect, marketing and reviews",
    "No harassment, threats, discriminatory abuse, spam or unauthorised promotion. Reviews must reflect genuine experience; fake, concealed paid or misleadingly curated reviews are prohibited.",
  ],
  [
    "Security and fair enforcement",
    "No scraping, malware, unauthorised account access or bypassing CRM permissions and tracking rules. HAULBY may investigate and restrict unsafe conduct proportionately, with appropriate review procedures.",
  ],
];
export default function AcceptableUsePage() {
  return (
    <LegalDocumentLayout
      title="Acceptable Use"
      description="Safety, honest job listings, truthful quotations, reviews, messaging and account security rules."
      sections={sections}
    />
  );
}
