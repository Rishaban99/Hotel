function Card(props) {
  return (
    <div className="card">
      <img className="card_profile" src={props.link}></img>

      <h1 className="card_tittle">{props.name}</h1>
      <p className="card_peragrap">price : {props.price}.00</p>
      <button className="Order_button">Order</button>
    </div>
  );
}

export default Card;
