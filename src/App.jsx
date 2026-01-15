import Header from "./components/Header";
import Card from "./components/Card";
import "./App.css";
import messi from "./assets/messi.jpg";
import dhoni from "./assets/MS-Dhoni.jpg";
import mcCullam from "./assets/brendon-mccullum.webp";

function App() {
  return (
    <>
      {/* Header stays at top */}
      <Header />

      {/* Cards section */}
      <div className="page-center">
        <div className="card-row">
          <Card
            name="Leo Messi"
            image={messi}
            desc="Lionel Messi is an Argentine football legend known for his extraordinary dribbling, vision, and record-breaking achievements."
          />
          <Card
            name="MS Dhoni"
            image={dhoni}
            desc="MS Dhoni is an iconic Indian cricketer known for his calm leadership, sharp wicketkeeping, and finishing skills."
          />
          <Card
            name="BR McCullum"
            image={mcCullam}
            desc="Brendon McCullum is a former New Zealand captain known for his aggressive batting and fearless style of leadership."
          />
        </div>
      </div>
    </>
  );
}

export default App;
