import "./App.css";
import SearchBtn from "./assets/search.svg";
import LocationImg from "./assets/location.svg";
import RainyImg from "./assets/Rainy.svg";
function App() {
  return (
    <>
      <div className="container">
        <header>
          <h1 className="header-text">Weather App</h1>
        </header>
        <form className="search-form">
          <button className="search-btn">
            <img src={SearchBtn} alt="" />
          </button>
          <input
            type="text"
            placeholder="Enter the cities"
            className="search-input"
          />
        </form>

        <div className="weather-display">
          <div className="location-display">
            <img className="location-img" src={LocationImg} alt="" />
            <p className="text-location">Cambodia, Phnom Penh</p>
          </div>
          <div className="weather-day">
            <img src={RainyImg} className="rainy-img" />
            <div className="temperature-and-weather">
            <h1 className="temperature-display">20°C</h1>
            <h2 className="text-season">Rainy</h2>
            </div>
            
          </div>
          <div className="week-day">
            <h2 className="day-display">Monday</h2>
          </div>
          <div className="line"></div>
          <div className="detail-weather">
            <div className="detail-line-1">
              <div className="box-1">
                <p>UV</p>
              </div>
              <div className="box-2">
                <p>UV</p>
              </div>
            </div>
            <div className="detail-line-2">
              <div className="box-3">
                <p>SV</p>
              </div>
              <div className="box-4">
                <p>SV</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
