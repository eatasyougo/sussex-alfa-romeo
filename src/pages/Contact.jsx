import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Workshop enquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nPhone: ${data.get("phone")}\nVehicle: ${data.get("vehicle")}\n\n${data.get("message")}`
    );
    window.location.href = `mailto:sussex.alfaromeo@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Contact us</p>
        <h1>Book the workshop.</h1>
        <p className="lede">
          Established for over 20 years, you can be assured of our expertise and the pride we take in looking after
          customers. We will carefully look after your Alfa Romeo, Fiat or Lancia — without alarming main dealer prices.
        </p>
      </section>

      <section className="section">
        <div className="contact-grid">
          <div className="contact-card">
            <h2>The garage</h2>
            <p className="lede" style={{ margin: "0.8rem 0 0" }}>
              Unit Z, Ditchling Common Industrial Estate,
              <br />
              Hassocks BN6 8SG
            </p>
            <div className="hours">
              <div>
                <span>Mon–Fri</span>
                <span>9:00am – 5:30pm</span>
              </div>
              <div>
                <span>Saturday</span>
                <span>9:00am – 12:00 noon</span>
              </div>
              <div>
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <a href="tel:01444257707">01444 257707</a>
            <a href="tel:01273567866">01273 567866</a>
            <a href="mailto:sussex.alfaromeo@gmail.com">sussex.alfaromeo@gmail.com</a>
            <a href="https://wa.me/4407935326373">WhatsApp 07935 326373</a>
            <div className="actions" style={{ marginTop: "1.4rem" }}>
              <a className="btn btn-primary" href="tel:01444257707">
                Call now
              </a>
              <a className="btn btn-ghost" href="https://wa.me/4407935326373">
                WhatsApp
              </a>
            </div>
          </div>

          <form className="contact-card" onSubmit={onSubmit}>
            <h3>Send a message</h3>
            <label>
              Name
              <input name="name" required placeholder="Your name" />
            </label>
            <label>
              Phone
              <input name="phone" required placeholder="Mobile or landline" />
            </label>
            <label>
              Vehicle
              <input name="vehicle" placeholder="e.g. Giulia, 156, Panda" />
            </label>
            <label>
              How can we help?
              <textarea name="message" required placeholder="Servicing, MOT, diagnostics, cambelt…" />
            </label>
            <button className="btn btn-primary" type="submit">
              Open email to send
            </button>
            {sent && <p className="toast">Your email app should open with the enquiry ready to send.</p>}
          </form>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <iframe
          className="map"
          title="Sussex Alfa Romeo location"
          src="https://maps.google.com/maps?q=Unit%20Z%20Ditchling%20Common%20Industrial%20Estate%20Hassocks%20BN6%208SG&t=&z=14&ie=UTF8&iwloc=&output=embed"
          loading="lazy"
        />
      </section>
    </main>
  );
}
