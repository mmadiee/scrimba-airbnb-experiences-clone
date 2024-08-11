import photo from "/images/photo-grid.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="text-area">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </p>
      </div>
      <img src={photo} alt="photo grid" className="photo-grid" />
    </section>
  );
}
