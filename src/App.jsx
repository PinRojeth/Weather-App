import axios from "axios";
import "./App.css";
import LoadingImg from "./assets/Loading.gif";
import Search from "./components/SearchBar";
import { useEffect, useState } from "react";
import ForcastWeather from "./components/ForcastWeather";
// import WeatherDisplay from "./components/WeatherDisplay";
import GetCurrentLocation from "./components/CurrentLocation";
function App() {
  const [data, setData] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const apiKey = "8a070dbdc603fbe75754dc616a978f34";

  const current_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  // const forcast_URL = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt={cnt}&appid=${apiKey}`
  const getCurrentData = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(sucess, error);
    } else {
      console.log("Geolocation not supported");
    }
  };

  const sucess = async (position) => {
    const { latitude, longitude } = position.coords;
    setLatitude(latitude);
    setLongitude(longitude);

    console.log(`lat : ${latitude}, Lng : ${longitude}`);

    // Make API Call to OpenWeather
    await axios
      .get(current_URL)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error Fetching Data", error);
      });
  };

  const error = () => {
    console.log("Unable to retrieve your location");
  };

  useEffect(() => {
    getCurrentData();
    sucess();
  }, [latitude, longitude]);

  const season = data && data.weather && data.weather[0];
  return (
    <>
      {data.length == 0 ? (
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
                location={data?.name}
                temperature={data.main.temp.toFixed(0)}
                season={season.main}
                wind={data.wind.speed}
                humidity={data.main.humidity}
                visibility={data.visibility}
                clouds={data.clouds.all}
              />
            </section>
            <section>
              <ForcastWeather />
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default App;

// {
//   /* <>
//       <header>
//         <h1 className="header-text">Weather App</h1>
//       </header>
//       <div className="container">
//         <section className="weather-display">
//           <form className="search-form">
//             <button className="search-btn">
//               <img src={SearchBtn} alt="" />
//             </button>
//             <input
//               type="text"
//               placeholder="Enter the cities"
//               className="search-input"
//               onChange={handleChange}
//               onKeyPress={searchLocation}
//             />
//           </form>
//           <div className="location-display">
//             <img className="location-img" src={LocationImg} alt="" />
//             <p className="text-location">Cambodia, Phnom Penh</p>
//           </div>
//           <div className="weather-day">
//             <img src={RainyImg} className="rainy-img" />
//             <div className="temperature-and-weather">
//               <h1 className="temperature-display">20°C</h1>
//               <h2 className="text-season">Rainy</h2>
//             </div>
//           </div>
//           <div className="week-day">
//             <h2 className="day-display">Monday</h2>
//           </div>
//           <div className="line"></div>
//           <div className="detail-weather">
//             <div className="detail-line-1">
//               <div className="box-1">
//                 <p>UV</p>
//               </div>
//               <div className="box-2">
//                 <p>UV</p>
//               </div>
//             </div>
//             <div className="detail-line-2">
//               <div className="box-3">
//                 <p>SV</p>
//               </div>
//               <div className="box-4">
//                 <p>SV</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section className="weather-week-display">
//           <div className="days-line-1">
//             <ul className="list-day">
//               <li className="day1">
//                 <div className="display-each-day">
//                   <h1 className="day">Tue</h1>
//                   <img src={RainyImg} className="img-each-day"/>
//                   <h2 className="temp-day">19°C</h2>
//                 </div>
//               </li>
//               <li className="day2">
//                 <div className="display-each-day">
//                   <h1 className="day">Tue</h1>
//                   <img src={RainyImg} className="img-each-day"/>
//                   <h2 className="temp-day">19°C</h2>
//                 </div>
//               </li>
//               <li className="day3">
//                 <div className="display-each-day">
//                   <h1 className="day">Tue</h1>
//                   <img src={RainyImg} className="img-each-day"/>
//                   <h2 className="temp-day">19°C</h2>
//                 </div>
//               </li>
//             </ul>
//           </div>

//           <div className="days-line-2">
//             <ul className="list-day">
//             <li className="day4">
//               <div className="display-each-day">
//                 <h1 className="day">Tue</h1>
//                 <img src={RainyImg} className="img-each-day"/>
//                 <h2 className="temp-day">19°C</h2>
//               </div>
//             </li>
//             <li className="day5">
//               <div className="display-each-day">
//                 <h1 className="day">Tue</h1>
//                 <img src={RainyImg} className="img-each-day"/>
//                 <h2 className="temp-day">19°C</h2>
//               </div>
//             </li>
//             <li className="day6">
//               <div className="display-each-day">
//                 <h1 className="day">Tue</h1>
//                 <img src={RainyImg} className="img-each-day"/>
//                 <h2 className="temp-day">19°C</h2>
//               </div>
//             </li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </> */
// }
