/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import "./App.css";
import LoadingImg from "./assets/Loading.svg";
import Search from "./components/SearchBar";
import { useEffect, useState } from "react";
import ForcastWeather from "./components/ForecastWeather";
import GetCurrentLocation from "./components/CurrentLocation";
function App() {
  const [currentData, setCurrentData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_CURRENT_URL = import.meta.env.VITE_CURRENT_URL;
  const BASE_FORECAST_URL = import.meta.env.VITE_FORECAST_URL;
  const BASE_SEARCH_CURRENT_URL = import.meta.env.VITE_SEARCH_CURRENT_URL;
  const BASE_SEARCH_FORECAST_URL = import.meta.env.VITE_SEARCH_FORECAST_URL;

  const current_URL = `${BASE_CURRENT_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  const forecast_URL = `${BASE_FORECAST_URL}lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;


  // This calling is using for Fetching the current location 
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
  // This calling is using for Fetching the forecast weather Data

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

  const searchCity = async (search) => {
    await axios.get(`${BASE_SEARCH_CURRENT_URL}q=${search}&appid=${API_KEY}&units=metric`)
    .then((response) => {
      setCurrentData(response.data)
    })
    await axios.get(`${BASE_SEARCH_FORECAST_URL}q=${search}&appid=${API_KEY}&units=metric`)
    .then((response) => {
      setForecastData(response.data)
    })
    .catch((error) => {
      console.error(`Error Searching Data`);
    })
  }


  // useEffect is using for render each fetching
  useEffect(() => {
    getCurrentData();
    getForcastData();
  }, [latitude, longitude]);


  return (
    <>
      {currentData.length === 0 ? (
        <img src={LoadingImg} className="Loading-screen" />
      ) : (
        <>
          <header>
            <h1 className="header-text">Weather App</h1>
          </header>
          <div className="container">
            <section className="weather-display">
              <Search  SearchCity={searchCity}/>
              <GetCurrentLocation
                location={currentData?.name}
                temperature={currentData?.main?.temp.toFixed(0)}
                season={currentData && currentData.weather && currentData.weather[0].main}
                wind={currentData?.wind?.speed}
                humidity={currentData?.main?.humidity}
                visibility={currentData?.visibility}
                clouds={currentData?.clouds?.all}
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
