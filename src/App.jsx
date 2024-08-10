import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/Card";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </>
  );
}
