import "./App.css";
import CircularGallery from "./Components/CircularGallery";

function App() {
  return (
    <div className="App">
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
      </div>
    </div>
  );
}

export default App;
