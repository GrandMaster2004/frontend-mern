import { useState } from "react";
// import "./App.css";
import Tours from "./components/Tours";
import data from "./data";
function App() {
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  function refresh() {
    setTours(data);
  }
  if (tours.length == 0) {
    return (
      <div>
        <h1>NO tours left</h1>
        <button onClick={refresh}>Refres</button>
      </div>
    );
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
      {}
    </div>
  );
}

export default App;
