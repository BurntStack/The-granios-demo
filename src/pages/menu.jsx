import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { menuItems } from "../data/menu";
import ScrollReveal from "../components/scroll-reveal";

const featuredItemIds = [1, 2, 6, 13, 15, 22];
const reveal = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };
const transition = { duration: .62, ease: [0.22, 1, 0.36, 1] };

export default function Menu() {
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(12);
  const categories = useMemo(() => ["All", ...new Set(menuItems.map((item) => item.category))], []);
  const filteredItems = useMemo(() => category === "All" ? [...featuredItemIds.map((id) => menuItems.find((item) => item.id === id)).filter(Boolean), ...menuItems.filter((item) => !featuredItemIds.includes(item.id))] : menuItems.filter((item) => item.category === category), [category]);
  const items = filteredItems.slice(0, visibleCount);
  const chooseCategory = (next) => { setCategory(next); setVisibleCount(12); };

  return <section className="page menu-page"><ScrollReveal className="container page-header" animateOnLoad><span className="eyebrow">THE GRANIOS CAFE | WARANGAL</span><h1>Our menu</h1><p>Real Granios favourites - pizzas, quick bites, burgers, wraps, shakes and sweet finishes.</p></ScrollReveal><ScrollReveal className="categories" delay={.08}>{categories.map((name) => <button key={name} type="button" className={category === name ? "category active" : "category"} onClick={() => chooseCategory(name)}>{name}</button>)}</ScrollReveal><ScrollReveal className="menu-count" delay={.12}>Showing {items.length} of {filteredItems.length} items</ScrollReveal><motion.div className="menu-list" initial="hidden" whileInView="visible" viewport={{ once: true, amount: .08 }} transition={{ staggerChildren: .055 }}>{items.map((item) => <motion.article className="menu-row" key={item.id} variants={reveal} transition={transition}><div className="menu-row-thumb"><img src={item.image} alt={item.name} loading="lazy" decoding="async" onError={(event) => { event.currentTarget.src = "/hero.png"; }}/></div><div className="menu-row-body"><div className="menu-row-top"><h2>{item.name}</h2><span className="menu-row-price">{"\u20B9"}{item.price}</span></div><p className="menu-row-desc">{item.description}</p><span className="menu-row-tag">{item.category}</span></div></motion.article>)}</motion.div>{visibleCount < filteredItems.length && <ScrollReveal className="menu-more"><p>More from The Granios cafe</p><button type="button" className="view-more-button" onClick={() => setVisibleCount((count) => count + 12)}>View more <span aria-hidden="true">↓</span></button></ScrollReveal>}</section>;
}
