import axios from "axios";
import "./App.css";
// import SearchBtn from "./assets/search.svg";
// import LocationImg from "./assets/location.svg";
// import RainyImg from "./assets/Rainy.svg";
// import { useState } from "react";
// import axios from "axios";
import Search from "./components/SearchBar";
import { useEffect, useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
function App() {
  const [location, setLocation] = useState("");

  const apiKey = "8a070dbdc603fbe75754dc616a978f34";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}`;

  const weatherAPI = async () => {
    const response = await axios.get(url);

    setLocation(response.data);
  };

  useEffect(() => {
    weatherAPI();
  }, []);

  const icon  = location && location.weather && location.weather[0]
  return (
    <>
      <header>
        <h1 className="header-text">Weather App</h1>
      </header>
      <div className="container">
        <section className="weather-display">
          <Search />
          <WeatherDisplay
            location={location?.name}
            temperature={(location?.main?.temp - 273.15).toFixed(0)}
            season={icon.main}
            dt_txt={location?.dt_txt}
          />
        </section>
      </div>
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
