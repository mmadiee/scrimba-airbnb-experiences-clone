import star from "/images/star.png";
// import katie from "../images/katie-zaferes.png";

export default function Card(prop) {
  return (
    <div className="card">
      <div className="image-area">
        <p className="status">SOLD OUT</p>
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
