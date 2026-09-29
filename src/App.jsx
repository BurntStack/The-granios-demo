import Navbar from "./components/navbar";
import Footer from "./components/footer";

import Home from "./pages/home";
import Menu from "./pages/menu";
import Reservations from "./pages/reservations";
import Contact from "./pages/contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <div id="menu"><Menu /></div>
        <div id="reservations"><Reservations /></div>
        <div id="contact"><Contact /></div>
      </main>

      <Footer />
    </>
  );
}

export default App;
