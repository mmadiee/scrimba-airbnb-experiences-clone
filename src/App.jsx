import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardsArray from "./components/data";

export default function App() {
  const cardElements = cardsArray.map((card) => {
    return (
      <Card
        key={card.id}
        card={card}
      />
    );
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards">{cardElements}</section>
    </>
  );
}
