import logo from "./logo.png";

function Header() {
  return (
    <div>
      <div className="header">
        <img className="Hotel_logo" src={logo}></img>
        <p className="Hotel_name">
          <h1> SREE RISEEY VILLAS</h1>
          <h5>No,20 side street Hatton </h5>
          <h5>0729066870 </h5>
        </p>
      </div>
      <div className="itam-search">
        <input className="Hotel_input"></input>
        <button className="Hotel_button">Search</button>
      </div>
    </div>
  );
}

export default Header;
