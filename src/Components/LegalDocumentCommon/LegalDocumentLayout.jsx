import { Footer } from "../Common/SiteChrome";
import { HomepageHeader } from "../Homepage/Homepage";
import "./LegalDocumentLayout.css";
export default function LegalDocumentLayout({ title, description, sections }) {
  return (
    <div className="ld-page">
      <div className="ld-dark">
        <HomepageHeader />
        <section className="ld-hero">
          <h1>{title}</h1>
          <p>{description}</p>
        </section>
      </div>
      <main className="ld-main">
        <section className="ld-cards">
          {sections.map(([heading, text], index) => (
            <article key={heading}>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
              <h2>{heading}</h2>
              <p>{text}</p>
            </article>
          ))}
        </section>
      </main>
      <section className="ld-help">
        <div>
          <h2>Need clarification?</h2>
          <p>
            After legal approval, contact and complaints links must lead to the
            real, monitored HAULBY support and privacy channels.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
