import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header, Footer, ArrowButton, LineIcon } from "./SiteChrome";
import "./ServiceDetail.css";

const SectionHead = ({ kicker, title, text, light = false }) => (
  <div className={`detail-heading${light ? " light" : ""}`}>
    <span>{kicker}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
);

export default function ServiceDetail({ data }) {
  const navigate = useNavigate();

  const startQuote = (event) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    navigate("/quote/new", {
      state: {
        collectionPostcode: values.get("collectionPostcode"),
        deliveryPostcode: values.get("deliveryPostcode"),
        transportType: values.get("transportType"),
      },
    });
  };

  return (
    <main className={`detail-page${data.variant ? ` ${data.variant}-detail` : ""}${data.styleVariant ? ` ${data.styleVariant}-detail` : ""}`}>
      <Header />
      <section className="detail-hero">
        <div className="detail-hero-copy">
          <div className="detail-shell">
            <span className={`detail-hero-eyebrow${data.breadcrumb ? " is-breadcrumb" : ""}`}>
              {data.breadcrumb || "ANYTHING. ANYWHERE. NATIONWIDE."}
            </span>
            <h1>
              {data.title}
              <em>{data.accent}</em>
            </h1>
            <p>{data.heroText}</p>
            <div className="detail-actions">
              <ArrowButton>{data.quoteCta || `Get ${data.short} Quotes`}</ArrowButton>
              <ArrowButton outline href="/services">
                Explore {data.short} Services
              </ArrowButton>
            </div>
            <b>{data.tags.join(" • ")}</b>
          </div>
        </div>
        <div
          className="detail-hero-image"
          style={{ backgroundImage: `url("${data.heroImage}")` }}
        />
      </section>
      <section className="detail-quote" id="quote">
        <div className="detail-shell">
          <SectionHead
            kicker={data.quoteKicker || `START YOUR ${data.short.toUpperCase()} QUOTE`}
            title={data.quoteTitle}
            text={data.quoteText}
          />
          <form onSubmit={startQuote}>
            <label>
              Collection postcode
              <input name="collectionPostcode" placeholder="e.g. PE11 4TA" required />
            </label>
            <label>
              Delivery postcode
              <input name="deliveryPostcode" placeholder="e.g. M1 1AE" required />
            </label>
            <label>
              {data.typeLabel}
              <select name="transportType" required>
                <option>{data.typePlaceholder}</option>
              </select>
            </label>
            <button type="submit">
              Continue <span>→</span>
            </button>
          </form>
          <small>{data.quoteNote}</small>
        </div>
      </section>
      <section className="detail-options">
        <div className="detail-shell">
          <SectionHead
            kicker={data.optionsKicker}
            title={data.optionsTitle}
            text={data.optionsText}
          />
          <div className="detail-option-grid">
            {data.options.map((item, i) => (
              <article key={item.title}>
                <div
                  className="detail-photo"
                  style={{
                    backgroundImage: `url("${item.image || data.cardImages[i % data.cardImages.length]}")`,
                  }}
                />
                <div>
                  <span className="detail-icon">
                    <LineIcon type={item.icon} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ul>
                    {item.bullets.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  {!data.hideOptionLinks && (
                    <Link to="#quote">Get {item.title} Quotes →</Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-dark">
        <div className="detail-shell">
          <SectionHead
            light
            kicker={data.darkKicker}
            title={data.darkTitle}
            text={data.darkText}
          />
          <div className="detail-mini-grid">
            {data.darkCards.map(([t, p, icon]) => (
              <article key={t}>
                <LineIcon type={icon || "route"} />
                <div>
                  <h3>{t}</h3>
                  <p>{p}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-steps">
        <div className="detail-shell">
          <SectionHead
            kicker="HOW HAULBY WORKS"
            title={`Arrange ${data.short.toLowerCase()} in three steps.`}
          />
          <div className="detail-step-grid">
            {data.steps.map(([t, p], i) => (
              <article key={t}>
                <strong>0{i + 1}</strong>
                <h3>{t}</h3>
                <p>{p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-prepare">
        <div className="detail-shell">
          <div
            className="detail-prepare-image"
            style={{ backgroundImage: `url("${data.prepareImage}")` }}
          />
          <div>
            <SectionHead
              kicker={data.prepareKicker}
              title={data.prepareTitle}
              text={data.prepareText}
            />
            <ul>
              {data.prepareBullets.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="detail-work">
        <div className="detail-shell">
          <div>
            <SectionHead
              light
              kicker={data.workKicker || "FOR HAULBY'S TRANSPORT OPERATORS"}
              title={data.workTitle}
              text={data.workText}
            />
            <ArrowButton href="/#work">
              Explore Transporter Membership
            </ArrowButton>
          </div>
          <div style={{ backgroundImage: `url("${data.workImage}")` }} />
        </div>
      </section>
      <section className="detail-faq">
        <div className="detail-shell">
          <SectionHead
            kicker="FREQUENT QUESTIONS"
            title={data.faqTitle || `${data.short} questions, answered.`}
          />
          <div className="detail-faq-grid">
            {data.faqs.map(([q, a]) => (
              <article key={q}>
                <h3>{q}</h3>
                <p>{a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-cost">
        <div className="detail-shell">
          <SectionHead
            kicker={data.costKicker}
            title={data.costTitle}
            text={data.costText}
          />
          <div className="detail-cost-grid">
            {data.costs.map(([t, p, l]) => (
              <article key={t}>
                <i />
                <h3>{t}</h3>
                <p>{p}</p>
                <Link to="#quote">{l} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-compare">
        <div className="detail-shell">
          <SectionHead
            light
            kicker={data.compareKicker}
            title={data.compareTitle}
            text={data.compareText}
          />
          <div className="detail-cost-grid dark">
            {data.compareCards.map(([t, p, label, href]) => (
              <article key={t}>
                <i />
                <h3>{t}</h3>
                <p>{p}</p>
                <Link to={href || "/services"}>{label || "Explore Services"} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-faq practical">
        <div className="detail-shell">
          <SectionHead
            kicker="PRACTICAL QUESTIONS"
            title={data.practicalTitle}
          />
          <div className="detail-faq-grid">
            {data.practical.map(([q, a]) => (
              <article key={q}>
                <h3>{q}</h3>
                <p>{a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="detail-cta">
        <div className="detail-shell">
          <SectionHead
            light
            kicker=""
            title={data.ctaTitle}
            text={data.ctaText}
          />
          <div className="detail-actions">
            <ArrowButton>{data.quoteCta || `Get ${data.short} Quotes`}</ArrowButton>
            <ArrowButton outline href="/#work">
              {data.workCta || `Find ${data.short} Work`}
            </ArrowButton>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
