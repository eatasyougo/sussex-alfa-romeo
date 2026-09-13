import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

function Layout() {
  return (
    <>
      <header className="site-header">
        <NavLink className="brand" to="/">
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Sussex Alfa Romeo" />
          <span className="brand-copy">
            <small>Hassocks · Mid Sussex</small>
            <strong>Sussex Alfa Romeo</strong>
          </span>
        </NavLink>
        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/our-services">Our Services</NavLink>
          <NavLink to="/contact-us" className="nav-cta">
            Book in
          </NavLink>
        </nav>
      </header>
      <Outlet />
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Sussex Alfa Romeo · Alfa Romeo, Fiat & Lancia specialists</p>
        <p>Unit Z, Ditchling Common Industrial Estate, Hassocks BN6 8SG</p>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
      </Route>
    </Routes>
  );
}
