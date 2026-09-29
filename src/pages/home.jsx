import { Link } from "react-router-dom";
import { ArrowUpRight, Bike, Coffee, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/scroll-reveal";
import { menuItems } from "../data/menu";

const hero = "/hero.png";
const picks = [1, 13, 22].map((id) => menuItems.find((item) => item.id === id));

const fadeUp = { hidden: { opacity: 0, y: 34 }, visible: { opacity: 1, y: 0 } };
const ease = { duration: .72, ease: [0.22, 1, 0.36, 1] };

export default function Home() {
  return <>
    <section className="granios-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.89), rgba(0,0,0,.35)), url(${hero})` }}>
      <div className="container granios-hero-content">
        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ ...ease, delay: .08 }} className="hero-badge">THE GRANIOS CAFE | WARANGAL</motion.p>
        <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ ...ease, delay: .18 }}>Come hungry.<br/><em>Stay awhile.</em></motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ ...ease, delay: .28 }} className="hero-lede">A relaxed cafe for loaded pizzas, burgers, wraps, shakes, ice creams and all-day bites made for your favourite people.</motion.p>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ ...ease, delay: .38 }} className="hero-buttons"><a className="btn-primary" href="https://www.swiggy.com/city/warangal/the-granios-pizza-restaurant-warangal-rest1398124" target="_blank" rel="noreferrer">Order online <ArrowUpRight size={16}/></a><Link to="/menu" className="btn-outline">See our menu</Link></motion.div>
      </div>
    </section>
    <ScrollReveal className="quick-strip"><div className="container quick-grid"><span><Coffee size={18}/> Cafe favourites all day</span><span><Bike size={18}/> Delivery and takeaway</span><span><MapPin size={18}/> Girmajipet, Warangal</span></div></ScrollReveal>
    <ScrollReveal className="granios-intro container"><div className="intro-copy"><span className="eyebrow">THE GRANIOS CAFE</span><h2>Your table for<br/><em>easy days.</em></h2><p>Whether it is a quick bite, a long catch-up or a late-night treat, The Granios brings together familiar cafe favourites with plenty to share.</p><Link className="text-link" to="/contact">Find us in Warangal <ArrowUpRight size={16}/></Link></div><div className="intro-image"><img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1100&q=85" alt="Fresh pizza served at a cafe" onError={(event) => { event.currentTarget.src = "/hero.png"; }}/></div></ScrollReveal>
    <ScrollReveal className="granios-picks"><div className="container"><div className="picks-heading"><div><span className="eyebrow">CAFE FAVOURITES</span><h2>Start with a favourite.</h2></div><Link className="text-link" to="/menu">View full menu <ArrowUpRight size={16}/></Link></div><motion.div className="signature-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .18 }} transition={{ staggerChildren: .14 }}>{picks.map(({ name, description, price, image }) => <motion.article variants={fadeUp} transition={ease} className="signature-card" key={name}><div className="signature-card-image"><img src={image} alt={name} onError={(event) => { event.currentTarget.src = "/hero.png"; }}/></div><h3>{name}</h3><p>{description}</p><span className="price">From {"\u20B9"}{price}</span></motion.article>)}</motion.div></div></ScrollReveal>
    <ScrollReveal className="order-band"><div className="container"><span className="eyebrow">MAKE IT A GRANIOS DAY</span><h2>Good food and good company, any time.</h2><p>Order your cafe favourites for delivery or takeaway in Warangal.</p><a className="btn-primary" href="https://www.swiggy.com/city/warangal/the-granios-pizza-restaurant-warangal-rest1398124" target="_blank" rel="noreferrer">Order The Granios</a></div></ScrollReveal>
  </>;
}
