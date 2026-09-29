import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "home"],
  ["Menu", "menu"],
  ["Reservations", "reservations"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = links.map(([, id]) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (visible.length) setActive(visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0].target.id);
    }, { rootMargin: "-32% 0px -56% 0px", threshold: [0.05, 0.25, 0.55] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo" aria-label="The Granios Pizza home">
          <img className="logo-mark" src="/logo.png" alt="The Granios Pizza" />
          <span className="logo-name">The Granios</span>
        </a>

        <nav className="desktop-nav">
          {links.map(([name, id]) => (
            <a
              key={name}
              href={`#${id}`}
              className={active === id ? "active" : ""}
            >
              {name}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <a className="nav-button" href="#reservations">
            Book a table
          </a>
          <button
            className="mobile-menu-button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-nav container">
          {links.map(([name, id]) => (
            <a
              key={name}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={active === id ? "active" : ""}
            >
              {name}
            </a>
          ))}
          <a href="#reservations" onClick={() => setOpen(false)}>
            Book a table
          </a>
        </div>
      )}
    </header>
  );
}
