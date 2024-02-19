import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  const title = "Luke this is your father";
  const likes = 50;
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
