import "./App.css";
import Search from "./Search";
import Overview from "./Overview";
import Temperature from "./Temperature";
import Observations from "./Observations";
import OpenSource from "./OpenSource";

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
          <OpenSource />
        </div>
      </div>
    </div>
  );
}

export default App;
