import star from "/images/star.png";
// import katie from "../images/katie-zaferes.png";

export default function Card(prop) {
  let badgeText;
  if (prop.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (prop.card.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <div className="image-area">
        {badgeText && <p className="status">{badgeText}</p>}
        <img className="card-img" src={`/images/${prop.card.coverImg}`} />
      </div>
      <span>
        <img className="star" src={star} alt="Star Icon" />
        <p>{prop.card.stats.rating}</p>
        <p className="rating-gray">
          ({prop.card.stats.reviewCount}) &bull; {prop.card.location}
        </p>
      </span>
      <h2>{prop.card.title}</h2>
      <p>
        <strong>From {prop.card.price} </strong>/ person
      </p>
    </div>
  );
}
