/* eslint-disable react/prop-types */
import LocationImg from "../assets/location.svg";
import {ImageSrc} from "./ImgDisplay";

function GetCurrentLocation({
  location,
  temperature,
  season,
  wind,
  humidity,
  visibility,
  clouds,
  ImgWeather,
}) {

const image = ImageSrc[ImgWeather]
  const currentDay = new Date().toLocaleDateString("default", {
    weekday: "long",
  });
  return (
    <>
      <div className="location-display">
        <img className="location-img" src={LocationImg} alt="" />
        <p className="text-location">{location}</p>
      </div>
      <div className="weather-day">
        <img src={image} className="img-description" />
        <div className="temperature-and-weather">
          <h1 className="temperature-display">{temperature}°C</h1>
          <h2 className="text-season">{season}</h2>
        </div>
      </div>
      <div className="week-day">
        <h2 className="day-display">{currentDay}</h2>
      </div>
      <div className="line"></div>
      <div className="detail-weather">
        <div className="detail-line-1">
          <div className="box-1">
            <p className="box-detail">Cloud <span>{clouds}</span></p>
          </div>
          <div className="box-2">
            <p className="box-detail">Wind <span>{wind}Km/h</span> </p>
          </div>
        </div>
        <div className="detail-line-2">
          <div className="box-3">
            <p className="box-detail">Humidity <span>{humidity}%</span></p>
          </div>
          <div className="box-4">
            <p className="box-detail">Visibility <span>{visibility}</span></p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetCurrentLocation;
