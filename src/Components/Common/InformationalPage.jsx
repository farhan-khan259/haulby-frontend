import React from "react";
import { Header, Footer, ArrowButton } from "./SiteChrome";
import hero from "../../Assets/Pictures/transporters.png";
import "./InformationalPage.css";

const Heading = ({ kicker, title, text, light = false }) => (
  <div className={`informational-heading ${light ? "light" : ""}`}>
    <span>{kicker}</span><h2>{title}</h2>{text && <p>{text}</p>}
  </div>
);

export default function InformationalPage({ data }) {
  const overview = data.overview || {};
  const information = data.information || {};
  const nextSteps = data.nextSteps || {};
  const importantDetails = data.importantDetails || {};
  const faqSection = data.faqSection || {};
  const cta = data.cta || {};
  const secondaryLinks = cta.secondaryLinks || (cta.secondaryLink ? [cta.secondaryLink] : []);
  const informationCards = information.cards || [
    ["What to know", data.description],
    [
      "Check the terms",
      "Compare the actual operator terms, access conditions and suitability for your journey.",
    ],
    [
      "Confirm before acting",
      "Keep requirements, eligibility and service details accurate and clearly explained.",
    ],
  ];
  const renderCards = (cards, className = "informational-grid") => (
    <div className={className}>{cards.map(([t,p]) => <article key={t}><i/><h3>{t}</h3><p>{p}</p></article>)}</div>
  );

  return (
    <main className={`informational-page ${data.pageClass || ""}`}>
      <Header />
      <section className="informational-hero">
        <div className="informational-hero-copy"><div className="informational-shell">
          <span className="informational-eyebrow">ANYTHING. ANYWHERE. NATIONWIDE.</span>
          <h1>{data.title}</h1><p>{data.description}</p>
          <ArrowButton href="#overview">{data.heroButtonLabel || `Explore ${data.title}`}</ArrowButton>
        </div></div>
        <div className="informational-hero-image" style={{ backgroundImage: `url("${data.image || hero}")` }} />
      </section>
      <section className="informational-section" id="overview"><div className="informational-shell">
        <Heading kicker={overview.kicker || "WHAT THIS PAGE HELPS YOU DO"} title={overview.title || "What this page helps you do"} text={overview.text || data.description} />
        {overview.search && <label className="informational-search"><span className="sr-only">Search</span><input type="search" placeholder={overview.search} /></label>}
        {renderCards(overview.cards || data.steps)}
      </div></section>
      <section className="informational-section alternate"><div className="informational-shell">
        <Heading kicker={information.kicker || "KEY INFORMATION AND REQUIREMENTS"} title={information.title || "Key information and requirements"} text={information.text || data.description} />
        {data.customInformation || renderCards(informationCards, information.layout === "list" ? "informational-list" : "informational-grid")}
        {information.note && <p className="informational-note">{information.note}</p>}
      </div></section>
      <section className="informational-section"><div className="informational-shell">
        <Heading kicker={nextSteps.kicker || "NEXT STEPS"} title={nextSteps.title || "Next steps"} text={nextSteps.text || "Follow a clear journey and check relevant requirements before committing."} />
        <div className="informational-grid compact">{(nextSteps.cards || data.steps).map(([t],i) => <article key={t}><strong>0{i+1}</strong><h3>{t}</h3></article>)}</div>
      </div></section>
      <section className="informational-dark"><div className="informational-shell"><Heading light kicker={importantDetails.kicker || "IMPORTANT DETAILS"} title={importantDetails.title || "Clear information for every user"} text={importantDetails.text || "HAULBY works to match suitable jobs through its UK-wide operator network. Transport is confirmed with an eligible operator under agreed terms."} /></div></section>
      <section className="informational-section alternate"><div className="informational-shell">
        <Heading kicker={faqSection.kicker || "FREQUENTLY ASKED QUESTIONS"} title={faqSection.title || "Frequently asked questions"} text={faqSection.text || "Practical answers for customers and transporters."} />
        <div className="informational-faq">{data.faqs.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}</div>
      </div></section>
      <section className="informational-cta"><div className="informational-shell"><Heading light kicker={cta.kicker || "HAULBY"} title={cta.title || "Ready for the next step?"} text={cta.text || data.description}/><div className="informational-cta-actions"><ArrowButton href={cta.href || "/find-transport"}>{cta.buttonLabel || "Continue"}</ArrowButton>{secondaryLinks.map(({ href, label }) => <ArrowButton outline href={href} key={href}>{label}</ArrowButton>)}</div></div></section>
      <Footer />
    </main>
  );
}
