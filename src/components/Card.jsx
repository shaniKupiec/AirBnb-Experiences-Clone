import starIcon from "../../public/imgs/icons/star.png";

function Card(props) {
  return (
    <section className="card">
      <img className="card__img" src={props.card.img} alt="" />
      {!props.card.openSpots && <span className="card__status">Sold out</span>}
      <div className="card__row1">
        <img className="card__row1__star" src={starIcon} alt="" />
        <span className="card__row1__reviews">{props.card.stats.rating}</span>({props.card.stats.reviewCount}) · {props.card.location}
      </div>
      <div>{props.card.title}</div>
      <div>
        <span className="bold">From ${props.card.price}</span>/ person
      </div>
    </section>
  );
}

export default Card;
