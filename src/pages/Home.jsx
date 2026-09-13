import { Link } from "react-router-dom";

const reasons = [
  {
    n: "01",
    title: "Cost",
    copy: "Labour charges around 50% lower than a typical main dealer, without cutting corners on the work.",
  },
  {
    n: "02",
    title: "Experience",
    copy: "Specialising in Alfa Romeo, Fiat and Lancia for over 20 years — classics through to current models.",
  },
  {
    n: "03",
    title: "Diagnostics",
    copy: "A nominal diagnostic fee so you can identify the right action first, and only spend what you need to.",
  },
  {
    n: "04",
    title: "Free car loan",
    copy: "Courtesy cars are available, or we can drop you at the station — including a Hailsham drop-off.",
  },
];

const quotes = [
  {
    q: "Sussex Alfa really know their stuff. When someone knows how to solve your problem before you've finished describing it, you know you're in good hands.",
    a: "FP",
  },
  {
    q: "Cannot rate this man any higher than complete Alfa Guru. Great rapport and a font of Alfa knowledge. Great service.",
    a: "PR",
  },
  {
    q: "Extremely knowledgeable, great price, gave some wonderful advice and feedback. I will definitely be using Sussex Alfa Romeo again.",
    a: "MB",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-media">
          <img src="/images/hero.webp" alt="Alfa Romeo in the Sussex workshop" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Established over 20 years</p>
          <h1>
            Sussex Alfa Romeo
            <br />
            <em>&amp; Sussex Fiat</em>
          </h1>
          <p className="lede">
            Your local specialist garage for Alfa Romeo, Fiat and Lancia — serving Brighton and Mid Sussex at sensible
            prices.
          </p>
          <div className="actions">
            <Link className="btn btn-primary" to="/contact-us">
              Call or WhatsApp
            </Link>
            <Link className="btn btn-ghost" to="/our-services">
              View services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Why choose us</p>
            <h2>Specialist care, dealer-free prices.</h2>
          </div>
          <p className="muted" style={{ maxWidth: "26rem" }}>
            Independent workshop on Ditchling Common, close to Burgess Hill, Haywards Heath and Brighton.
          </p>
        </div>
        <div className="grid-4">
          {reasons.map((item) => (
            <article className="card" key={item.n}>
              <p className="num">{item.n}</p>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-light">
        <div className="split">
          <div>
            <p className="eyebrow">About the garage</p>
            <h2>A proper Italian-car workshop in Hassocks.</h2>
            <p className="lede">
              Located on Ditchling Common, we look after Alfa Romeo, Fiat and Lancia owners who want expertise without
              main-dealer bills. Age is no barrier — from cherished classics to Stelvio and Giulia.
            </p>
            <p className="muted">
              Follow the workshop on Facebook for regular news and images of work in progress. Highly rated by customers
              on Google.
            </p>
            <div className="actions" style={{ marginTop: "1.6rem" }}>
              <a
                className="btn btn-primary"
                href="https://www.facebook.com/p/Sussex-Alfa-Romeo-100063489375897/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
              <a
                className="btn btn-ghost"
                href="https://www.google.com/search?q=Sussex+Alfa+Romeo+Hassocks"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#0c0c0d", borderColor: "#cfc6b8" }}
              >
                Google reviews
              </a>
            </div>
          </div>
          <div className="photo">
            <img src="/images/workshop.jpg" alt="Classic and modern Alfas in the workshop" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Client testimonials</p>
            <h2>Check the excellent feedback on Google.</h2>
          </div>
        </div>
        <div className="quote-grid">
          {quotes.map((item) => (
            <blockquote className="quote" key={item.a}>
              <p>“{item.q}”</p>
              <span>{item.a}</span>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
