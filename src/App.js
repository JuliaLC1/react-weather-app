import "./App.css";
import Temperature from "./Temperature";
import OpenSource from "./OpenSource";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="row">
              <Temperature defaultCity="London" />
            </div>
          </div>
          <OpenSource />
        </div>
      </div>
    </div>
  );
}

export default App;
