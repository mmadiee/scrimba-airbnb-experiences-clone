import star from "/images/star.png";
// import katie from "../images/katie-zaferes.png";

export default function Card(prop) {
  let badgeText;
  if (prop.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (prop.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <div className="image-area">
        {badgeText && <p className="status">{badgeText}</p>}
        <img className="card-img" src={`/images/${prop.coverImg}`} />
      </div>
      <span>
        <img className="star" src={star} alt="Star Icon" />
        <p>{prop.rating}</p>
        <p className="rating-gray">
          {" "}
          ({prop.reviewCount}) &bull; {prop.location}{" "}
        </p>
      </span>
      <h2>{prop.title}</h2>
      <p>
        <strong>From {prop.price} </strong>/ person
      </p>
    </div>
  );
}
