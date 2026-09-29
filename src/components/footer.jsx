import ScrollReveal from "./scroll-reveal";

export default function Footer() {
  return (
    <ScrollReveal className="footer">
      <div className="container footer-container">
        <div>
          <h2 className="footer-logo">THE GRANIOS CAFE</h2>
          <p>
            A welcoming cafe for shareable bites, pizzas, burgers, shakes and sweet
            finishes in Warangal.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#reservations">Reservations</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h3>Find us</h3>
          <p>Mandi Bazar, Desaipet Main Road</p>
          <p>Girmajipet, Warangal</p>
          <a href="tel:+919281193565">+91 92811 93565</a>
        </div>

        <div>
          <h3>Order</h3>
          <p>Delivery and takeaway</p>
          <p>Pizza | burgers | shakes</p>
          <p>Warangal, Telangana</p>
        </div>
      </div>

      <div className="container footer-bottom">
        Copyright {new Date().getFullYear()} The Granios Cafe, Warangal.
      </div>
    </ScrollReveal>
  );
}
