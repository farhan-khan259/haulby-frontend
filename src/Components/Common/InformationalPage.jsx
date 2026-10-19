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
  return (
    <main className="informational-page">
      <Header />
      <section className="informational-hero">
        <div className="informational-hero-copy"><div className="informational-shell">
          <span className="informational-eyebrow">HAULBY / HOW IT WORKS</span>
          <h1>{data.title}</h1><p>{data.description}</p>
          <ArrowButton href="#overview">Explore {data.title}</ArrowButton>
        </div></div>
        <div className="informational-hero-image" style={{ backgroundImage: `url("${data.image || hero}")` }} />
      </section>
      <section className="informational-section" id="overview"><div className="informational-shell">
        <Heading kicker="WHAT THIS PAGE HELPS YOU DO" title="What this page helps you do" text={data.description} />
        <div className="informational-grid">{data.steps.map(([t,p]) => <article key={t}><i/><h3>{t}</h3><p>{p}</p></article>)}</div>
      </div></section>
      <section className="informational-section alternate"><div className="informational-shell">
        <Heading kicker="KEY INFORMATION AND REQUIREMENTS" title="Key information and requirements" text={data.description} />
        <div className="informational-grid">{[["What to know",data.description],["Check the terms","Compare the actual operator terms, access conditions and suitability for your journey."],["Confirm before acting","Keep requirements, eligibility and service details accurate and clearly explained."]].map(([t,p]) => <article key={t}><i/><h3>{t}</h3><p>{p}</p></article>)}</div>
      </div></section>
      <section className="informational-section"><div className="informational-shell">
        <Heading kicker="NEXT STEPS" title="Next steps" text="Follow a clear journey and check relevant requirements before committing." />
        <div className="informational-grid compact">{data.steps.map(([t],i) => <article key={t}><strong>0{i+1}</strong><h3>{t}</h3></article>)}</div>
      </div></section>
      <section className="informational-dark"><div className="informational-shell"><Heading light kicker="IMPORTANT DETAILS" title="Clear information for every user" text="HAULBY works to match suitable jobs through its UK-wide operator network. Transport is confirmed with an eligible operator under agreed terms." /></div></section>
      <section className="informational-section alternate"><div className="informational-shell">
        <Heading kicker="FREQUENTLY ASKED QUESTIONS" title="Frequently asked questions" text="Practical answers for customers and transporters." />
        <div className="informational-faq">{data.faqs.map(([q,a]) => <article key={q}><h3>{q}</h3><p>{a}</p></article>)}</div>
      </div></section>
      <section className="informational-cta"><div className="informational-shell"><Heading light kicker="HAULBY" title="Ready for the next step?" text={data.description}/><ArrowButton href="/find-transport">Continue</ArrowButton></div></section>
      <Footer />
    </main>
  );
}
