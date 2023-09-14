/* eslint-disable react/prop-types */
import RainyImg from "../assets/Rainy.svg";

function ForcastWeather({ forecastData }) {
  let data_date = [];

  for (let day = 8; day < forecastData.list.length; day += 8) {
    data_date.push(forecastData.list[day]);
  }
  console.log(data_date);

  let forecast = data_date.map((data, index) => {
    return (
      <li className="day" key={index}>
        <div className="display-each-day">
          <h1 className="day-text">{data.dt_txt}</h1>
          <img src={RainyImg} className="img-each-day" />
          <h2 className="temp-day">{data.main.temp}</h2>
        </div>
      </li>
    );
  });

  console.log(forecast);
  return (
    <>
      <div className="days-line-1">
        <ul className="list-day">{forecast}</ul>
      </div>
    </>
  );
}

export default ForcastWeather;
