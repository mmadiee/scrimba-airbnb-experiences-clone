import star from "../images/star.png";
import katie from "../images/katie-zaferes.png";

export default function Card() {
  return (
    <section className="cards">
      <div className="card">
        <div className="image-area">
          <p className="status">SOLD OUT</p>
          <img className="card-img" src={katie} alt="Image of Katie Zaferes"/>
        </div>
        <span>
          <img className="star" src={star} alt="Star Icon"/>
          <p>5.0 </p>
          <p className="rating-gray"> (6) &bull; USA </p>
        </span>
        <h2>Life Lessons with Katie Zaferes</h2>
        <p><strong>From $136 </strong>/ person</p>
      </div>
    </section>
  );
}
