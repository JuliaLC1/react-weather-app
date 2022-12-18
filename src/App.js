import "./App.css";
import Search from "./Search";
import Overview from "./Overview";
import Temperature from "./Temperature";
import Observations from "./Observations";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
            <Overview />
            <div className="row">
              <Temperature />
              <Observations />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
