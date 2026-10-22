import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminWorkflow.css';

export default function AdminWorkflow({ config }) {
  const navigate = useNavigate();
  const initial = Object.fromEntries(config.fields.map((field) => [field, config.values?.[field] || '']));
  const [values, setValues] = useState(initial);
  const [checks, setChecks] = useState(config.checks.map(() => false));
  const [message, setMessage] = useState('');
  const update = (field, value) => setValues((current) => ({ ...current, [field]: value }));
  const save = (primary) => {
    if (primary && config.requireChecks && checks.some((checked) => !checked)) {
      setMessage('Complete all required checks before submitting.');
      return;
    }
    setMessage(primary ? `${config.primary} prepared successfully.` : `${config.secondary || 'Draft'} saved.`);
  };

  return <main className="admin-workflow">
    <header className="workflow-header">
      <button className="workflow-back" onClick={() => navigate(-1)}>← Back</button>
      <p>{config.eyebrow}</p><h1>{config.title}</h1><small>SECURE ACTION</small>
    </header>
    <p className="workflow-description">{config.description}</p>
    <form onSubmit={(event) => { event.preventDefault(); save(true); }}>
      {config.sectionTitle && <h2>{config.sectionTitle}</h2>}
      <section className="workflow-fields">
        {config.fields.map((field, index) => <label key={field}>
          <b>{field}</b>
          {config.longFields?.includes(field)
            ? <textarea value={values[field]} onChange={(e) => update(field, e.target.value)} placeholder={config.placeholders?.[field] || 'Enter or choose verified data / API state'} />
            : <input value={values[field]} onChange={(e) => update(field, e.target.value)} placeholder={config.placeholders?.[field] || 'Select or enter verified information'} />}
        </label>)}
      </section>
      <section className="workflow-checks"><h2>{config.checkTitle || 'REQUIRED CHECKS BEFORE SUBMISSION'}</h2>{config.checks.map((check, index) => <label key={check}><input type="checkbox" checked={checks[index]} onChange={() => setChecks((all) => all.map((value, i) => i === index ? !value : value))}/><span>{check}</span></label>)}</section>
      <section className="workflow-warning"><p>{config.warning}</p><div className="workflow-buttons">{config.secondary && <button type="button" onClick={() => save(false)}>{config.secondary}</button>}<button className="primary" type="submit">{config.primary}</button></div></section>
      {message && <div className={`workflow-message ${message.startsWith('Complete') ? 'error' : ''}`} role="status">{message}</div>}
    </form>
  </main>;
}
