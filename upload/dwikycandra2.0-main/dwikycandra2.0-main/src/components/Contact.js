import React, { useState } from 'react';
import './contact.css';

// To enable real email sending via Formspree:
// 1) You have created a form and provided the endpoint below.
// 2) If you want to change it later, replace the string with your new endpoint.
const FORM_ENDPOINT = 'https://formspree.io/f/xpwybogk';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    const form = e.target;
    const data = new FormData(form);

    if (!FORM_ENDPOINT) {
      // fallback mock behavior
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      form.reset();
      return;
    }

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSent(true);
        form.reset();
        setTimeout(() => setSent(false), 3000);
      } else {
        const json = await res.json();
        setError(json.error || 'Gagal mengirim.');
      }
    } catch (err) {
      setError('Network error.');
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <input name="name" placeholder="Name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" rows="4" required />
          <button type="submit">Send</button>
        </form>
        {sent && <p className="success">Thank you, the message was sent!</p>}
        {error && <p className="error">{error}</p>}
        {!FORM_ENDPOINT && (
          <p className="muted">Form masih mock. Untuk kirim email, tambahkan endpoint Formspree ke <code>FORM_ENDPOINT</code> di file ini.</p>
        )}
      </div>
    </section>
  );
}
