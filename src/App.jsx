import Card from "./Card.jsx";
import Header from "./Header.jsx";

function App() {
  return (
    <>
      <Header />
      <div className="App_card">
        <Card name="prota" price={40} />
        <Card name="Rolls" price={60} />
        <Card name="vadai" price={60} />
        <Card name="veg.Rotti" price={40} />
        <Card name="prota" price={40} />
        <Card name="prota" price={40} />
        <Card name="prota" price={40} />
        <Card name="prota" price={40} />
        <Card name="prota" price={40} />
        <Card name="prota" price={40} />
        <Card name="prota" price={40} />
        <Card name="prota" price={40} />
      </div>
    </>
  );
}

export default App;
