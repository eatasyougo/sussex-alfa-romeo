import { Link } from "react-router-dom";

const services = [
  {
    n: "01",
    title: "Maintenance & restoration",
    copy: "Age is no barrier — we work on classics and more recent models of Alfa Romeo. Did we say that we love Alfas?",
  },
  {
    n: "02",
    title: "Servicing and MOTs",
    copy: "Cost-effective servicing using genuine Alfa or OEM parts at an affordable price, including Stelvio and Giulia models.",
  },
  {
    n: "03",
    title: "Cambelts & water pumps",
    copy: "Cambelts and water pumps should be maintained at regular intervals. Our pricing is exceptional — ask for a quote for your vehicle.",
  },
  {
    n: "04",
    title: "Diagnostics",
    copy: "Pay a minimal fee for our latest diagnostics so you can make an informed decision for necessary works.",
  },
];

export default function Services() {
  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Our services</p>
        <h1>Simply call or WhatsApp to discuss your car.</h1>
        <p className="lede">
          Local expertise for Alfa Romeo, Fiat and Lancia — from routine servicing to restoration, with customers always
          first.
        </p>
        <div className="actions">
          <a className="btn btn-primary" href="https://wa.me/4407935326373">
            WhatsApp the workshop
          </a>
          <Link className="btn btn-ghost" to="/contact-us">
            Contact details
          </Link>
        </div>
      </section>

      <section className="section section-light">
        <div className="grid-2">
          <div className="service-list">
            {services.map((item) => (
              <article className="service-item" key={item.n}>
                <strong>{item.n}</strong>
                <div>
                  <h3>{item.title}</h3>
                  <p className="muted" style={{ marginTop: "0.45rem" }}>
                    {item.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="photo">
            <img src="/images/workshop.jpg" alt="Work in the Sussex Alfa Romeo workshop" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="split">
          <div>
            <p className="eyebrow">Local expertise for you</p>
            <h2>Our customers come first.</h2>
            <p className="lede">
              The mix of Alfas, Fiats and Lancias that have come our way over the years has given us a depth of knowledge
              to help new and existing customers with great value and service. We love hearing your feedback.
            </p>
          </div>
          <div className="photo">
            <img src="/images/frontage.jpg" alt="Alfa and Fiat garage frontage" />
          </div>
        </div>
      </section>
    </main>
  );
}
