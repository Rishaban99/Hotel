function Card(props) {
  return (
    <div className="card">
      <img
        className="card_profile"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJlVjG1qmS1PLitj3275Kk4yFNHeCSY8d2bw&s"
      ></img>
      <h1 className="card_tittle">{props.name}</h1>
      <p className="card_peragrap">price : {props.price}.00</p>
    </div>
  );
}

export default Card;
