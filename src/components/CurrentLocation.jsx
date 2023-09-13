/* eslint-disable react/prop-types */

import LocationImg from "../assets/location.svg";
import RainyImg from "../assets/Rainy.svg";





function GetCurrentLocation({location, temperature, season, wind, humidity, visibility, clouds}) {

    const currentDay = new Date().toLocaleDateString('default', {weekday : 'short'})
  return (
    <><div className="location-display">
            <img className="location-img" src={LocationImg} alt="" />
            <p className="text-location">{location}</p>
        </div><div className="weather-day">
                <img src={RainyImg} className="rainy-img" />
                <div className="temperature-and-weather">
                    <h1 className="temperature-display">{temperature}°C</h1>
                    <h2 className="text-season">{season}</h2>
                </div>
            </div><div className="week-day">
                <h2 className="day-display">{currentDay}</h2>
            </div><div className="line"></div><div className="detail-weather">
                <div className="detail-line-1">
                    <div className="box-1">
                        <p className="box-detail">Clouds  {clouds}</p>
                    </div>
                    <div className="box-2">
                        <p className="box-detail">Wind Speed  {wind} Km/h</p>
                    </div>
                </div>
                <div className="detail-line-2">
                    <div className="box-3">
                        <p className="box-detail">Humidity {humidity}%</p>
                    </div>
                    <div className="box-4">
                        <p className="box-detail">Visibility {visibility}</p>
                    </div>
                </div>
            </div></>
  )
}

export default GetCurrentLocation

