/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import "./App.css";
import LoadingImg from "./assets/Loading.gif";
import Search from "./components/SearchBar";
import { useEffect, useState } from "react";
import ForcastWeather from "./components/ForcastWeather";
import GetCurrentLocation from "./components/CurrentLocation";
function App() {
  const [currentData, setCurrentData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const apiKey = "8a070dbdc603fbe75754dc616a978f34";

  const current_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  const forecast_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  const getCurrentData = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        // Make API Call to Current OpenWeather
        await axios
          .get(current_URL)
          .then((response) => {
            setCurrentData(response.data);
          })
          .catch((error) => {
            console.error("Error Fetching Data", error);
          });
      });
    } else {
      console.log("Geolocation not supported");
    }
  };

  const getForcastData = async () => {
    await axios
      .get(forecast_URL)
      .then((response) => {
        setForecastData(response.data);
      })
      .catch((error) => {
        console.error("Error Fetching Data Forecast", error);
      });
  };

  useEffect(() => {
    getCurrentData();
    getForcastData();
  }, [latitude, longitude]);

  const season = currentData && currentData.weather && currentData.weather[0];
  // const weatherDescription = forecastData && forecastData.weather && forecastData.weather[0];
  return (
    <>
      {currentData.length == 0 ? (
        <img src={LoadingImg} className="Loading-screen" />
      ) : (
        <>
          <header>
            <h1 className="header-text">Weather App</h1>
          </header>
          <div className="container">
            <section className="weather-display">
              <Search />
              <GetCurrentLocation
                location={currentData?.name}
                temperature={currentData?.main?.temp.toFixed(0)}
                season={season?.main}
                wind={currentData?.wind?.speed}
                humidity={currentData?.main?.humidity}
                visibility={currentData?.visibility}
                clouds={currentData?.clouds.all}
                ImgWeather={currentData?.weather && currentData?.weather[0]?.icon}
              />
            </section>
            <section className="weather-week-display">
              <ForcastWeather
                forecastData={forecastData}
                ImgWeather={forecastData}
              />
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default App;
