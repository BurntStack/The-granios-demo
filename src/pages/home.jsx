import { ArrowUpRight, Bike, Coffee, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/scroll-reveal";
import { menuItems } from "../data/menu";

const picks = [1, 13, 22].map((id) => menuItems.find((item) => item.id === id));

const fadeUp = { hidden: { opacity: 0, y: 34 }, visible: { opacity: 1, y: 0 } };
const ease = { duration: .72, ease: [0.22, 1, 0.36, 1] };

export default function Home() {
  return <>
    <section id="home" className="granios-hero granios-product-hero">
      <div className="hero-stamp hero-stamp-left">PIZZA • SHAKES • GOOD TIMES</div>
      <div className="hero-stamp hero-stamp-right">WARANGAL · EST. 2024</div>
      <div className="container granios-hero-content product-hero-content">
        <div className="product-hero-copy">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ ...ease, delay: .08 }} className="hero-badge">THE GRANIOS PIZZA CAFÉ · WARANGAL</motion.p>
          <motion.h1 initial="hidden" animate="visible" variants={fadeUp} transition={{ ...ease, delay: .18 }}>Pizza nights<br/><em>start here.</em></motion.h1>
          <motion.h2 initial="hidden" animate="visible" variants={fadeUp} transition={{ ...ease, delay: .26 }} className="hero-support">Loaded pizzas, chilled shakes and easy café moments.</motion.h2>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ ...ease, delay: .32 }} className="hero-lede">Come in for a quick bite, stay for the catch-up, or order your favourites straight to your door.</motion.p>
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ ...ease, delay: .4 }} className="hero-buttons"><a className="btn-primary" href="https://www.swiggy.com/city/warangal/the-granios-pizza-restaurant-warangal-rest1398124" target="_blank" rel="noreferrer">Order online <ArrowUpRight size={16}/></a><a href="#menu" className="btn-outline">Explore menu</a></motion.div>
          <motion.p initial="hidden" animate="visible" variants={fadeUp} transition={{ ...ease, delay: .46 }} className="hero-reassurance">Dine in <span>•</span> Takeaway <span>•</span> Delivery</motion.p>
        </div>
        <motion.div className="hero-products" initial={{ opacity: 0, scale: .86, rotate: -4 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: .95, delay: .22, ease: [0.22, 1, 0.36, 1] }}>
          <motion.div className="hero-product hero-pizza" animate={{ y: [0, -12, 0], rotate: [-3, 1, -3] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}><span className="product-label">HAND-TOSSED<br/>PIZZAS</span><img src="/products/pizza.jpg" alt="Granios loaded pizza" /></motion.div>
          <motion.div className="hero-product hero-shake" animate={{ y: [0, 11, 0], rotate: [4, -1, 4] }} transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut", delay: .3 }}><span className="product-label">CHILLED<br/>SHAKES</span><img src="/products/kitkat-shake.jpg" alt="Granios chocolate shake" /></motion.div>
          <motion.div className="hero-scribble" animate={{ rotate: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>✦</motion.div>
        </motion.div>
      </div>
    </section>
    <ScrollReveal className="quick-strip"><div className="container quick-grid"><span><Coffee size={18}/> Cafe favourites all day</span><span><Bike size={18}/> Delivery and takeaway</span><span><MapPin size={18}/> Girmajipet, Warangal</span></div></ScrollReveal>
    <ScrollReveal className="granios-intro container"><div className="intro-copy"><span className="eyebrow">THE GRANIOS CAFE</span><h2>Your table for<br/><em>easy days.</em></h2><p>Whether it is a quick bite, a long catch-up or a late-night treat, The Granios brings together familiar cafe favourites with plenty to share.</p><a className="text-link" href="#contact">Find us in Warangal <ArrowUpRight size={16}/></a></div><div className="intro-image"><img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1100&q=85" alt="Fresh pizza served at a cafe" onError={(event) => { event.currentTarget.src = "/hero.png"; }}/></div></ScrollReveal>
    <ScrollReveal className="granios-picks"><div className="container"><div className="picks-heading"><div><span className="eyebrow">CAFE FAVOURITES</span><h2>Start with a favourite.</h2></div><a className="text-link" href="#menu">View full menu <ArrowUpRight size={16}/></a></div><motion.div className="signature-grid" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .18 }} transition={{ staggerChildren: .14 }}>{picks.map(({ name, description, price, image }) => <motion.article variants={fadeUp} transition={ease} className="signature-card" key={name}><div className="signature-card-image"><img src={image} alt={name} onError={(event) => { event.currentTarget.src = "/hero.png"; }}/></div><h3>{name}</h3><p>{description}</p><span className="price">From {"\u20B9"}{price}</span></motion.article>)}</motion.div></div></ScrollReveal>
    <ScrollReveal className="order-band"><div className="container"><span className="eyebrow">MAKE IT A GRANIOS DAY</span><h2>Good food and good company, any time.</h2><p>Order your cafe favourites for delivery or takeaway in Warangal.</p><a className="btn-primary" href="https://www.swiggy.com/city/warangal/the-granios-pizza-restaurant-warangal-rest1398124" target="_blank" rel="noreferrer">Order The Granios</a></div></ScrollReveal>
  </>;
}
