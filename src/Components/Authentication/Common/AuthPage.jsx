import { useNavigate } from "react-router-dom";
import { Header } from "../../Common/SiteChrome";
import "./AuthPage.css";

export default function AuthPage({ title, subtitle, fields, action = "Continue Securely", next, children }) {
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
    if (next) navigate(next);
  };

  return (
    <div className="auth-page">
      <Header />

      <main className="auth-main">
        <section className="auth-intro">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </section>

        <form className="auth-form" onSubmit={submit}>
          <div className="auth-card">
            <h2>Account details</h2>
            <p>Enter information securely. Validation and permissions must be implemented by the developer.</p>
            <div className="auth-fields">
              {fields?.map((field) => (
                <label key={field.name} className={field.className || ""}>
                  <span>{field.label}</span>
                  <input
                    name={field.name}
                    type={field.type || "text"}
                    placeholder={field.placeholder}
                    autoComplete={field.autoComplete || "off"}
                    required
                  />
                </label>
              ))}
              {children}
            </div>
          </div>
          <button className="auth-submit" type="submit">
            <span>{action}</span><span aria-hidden="true">→</span>
          </button>
        </form>
      </main>
    </div>
  );
}
