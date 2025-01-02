function Card(props) {
  return (
    <div className="card">
      <center>
        <img className="card_profile" src={props.link}></img>
      </center>

      <h1 className="card_tittle">{props.name}</h1>
      <p className="card_peragrap">price : {props.price}.00</p>
    </div>
  );
}

export default Card;
