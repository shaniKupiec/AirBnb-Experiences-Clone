import Header from "./components/Header";
import Hero from "./components/Hero";
import Card from "./components/Card";
import carsJson from "./assets/data/cards";

function App() {
  const cards = carsJson.map((cardInfo) => {
    return <Card key={cardInfo.id} card={cardInfo} />;
  });

  return (
    <main className="app">
      <Header />
      <Hero />
      <section className="app__card-list">{cards}</section>
    </main>
  );
}

export default App;
