import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Assets/Pictures/APPROVED HAULBY Landscape Logo — transparent artwork.jpg";
import "./QuotationLayout.css";

export const steps = [
  { key: "category", path: "/quote/new?step=category" },
  { key: "journey", path: "/quote/new?step=journey" },
  { key: "items", path: "/quote/new?step=items" },
  { key: "access", path: "/quote/new?step=access" },
  { key: "timing", path: "/quote/new?step=timing" },
  { key: "photos", path: "/quote/new?step=photos" },
  { key: "review", path: "/quote/new?step=review" },
  { key: "submitted", path: "/quote/submitted" },
];

export function QuotationHeader() {
  return (
    <header className="quotation-header">
      <div className="quotation-header-inner">
        <Link to="/" aria-label="HAULBY home" className="quotation-logo">
          <img src={logo} alt="HAULBY — Your transport. Sorted." />
        </Link>
        <span>Transport quotation</span>
      </div>
    </header>
  );
}

function Field({ name, label, placeholder, multiline = false, type = "text", accept }) {
  const stored = JSON.parse(sessionStorage.getItem("haulbyQuotation") || "{}");
  const Tag = multiline ? "textarea" : "input";

  const remember = (event) => {
    const current = JSON.parse(sessionStorage.getItem("haulbyQuotation") || "{}");
    const value = type === "file"
      ? Array.from(event.target.files || []).map((file) => file.name)
      : event.target.value;
    sessionStorage.setItem(
      "haulbyQuotation",
      JSON.stringify({ ...current, [name]: value })
    );
  };

  const valueProps = type === "file" ? {} : { defaultValue: stored[name] || "" };

  return (
    <label className="quotation-field">
      <span>{label}</span>
      <Tag
        name={name}
        type={multiline ? undefined : type}
        accept={type === "file" ? accept : undefined}
        multiple={type === "file"}
        {...valueProps}
        placeholder={placeholder}
        onChange={remember}
        rows={multiline ? 2 : undefined}
      />
    </label>
  );
}

export default function QuotationLayout({
  step,
  title,
  subtitle,
  cardTitle = "Request details",
  cardDescription = "This preview shows the required fields; the live wizard must save drafts and enforce server-side validation.",
  fields = [],
  notice,
  primaryLabel = "Save and Continue",
  primaryPath,
  children,
}) {
  const navigate = useNavigate();
  const nextPath = steps[Math.min(step, steps.length - 1)].path;
  const previousPath = steps[Math.max(step - 2, 0)].path;

  const submit = (event) => {
    event.preventDefault();
    navigate(primaryPath || nextPath);
  };

  return (
    <div className="quotation-page">
      <QuotationHeader />
      <main className="quotation-main">
        <h1>{title}</h1>
        <p className="quotation-subtitle">{subtitle}</p>

        <div className="quotation-progress-label">STEP {step} OF 8</div>
        <div className="quotation-progress" aria-label={`Step ${step} of 8`}>
          <span style={{ width: `${step * 12.5}%` }} />
        </div>

        <form className="quotation-form" onSubmit={submit}>
          <section className="quotation-card">
            <h2>{cardTitle}</h2>
            <p className="quotation-card-description">{cardDescription}</p>
            <div className="quotation-fields">
              {fields.map((field) => <Field key={field.name} {...field} />)}
            </div>
            {notice && (
              <aside className="quotation-notice">
                <strong>{notice.title}</strong>
                <p>{notice.text}</p>
              </aside>
            )}
            {children}
          </section>

          <div className="quotation-actions">
            <button className="quotation-primary" type="submit">
              {primaryLabel} <span aria-hidden="true">→</span>
            </button>
            {step > 1 && (
              <button
                className="quotation-previous"
                type="button"
                onClick={() => navigate(previousPath)}
              >
                <span aria-hidden="true">←</span> Previous Step
              </button>
            )}
          </div>
        </form>
      </main>
    </div>
  );
}
