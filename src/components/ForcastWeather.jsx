/* eslint-disable react/prop-types */
import { ImageSrc } from "./ImgDisplay";
function ForcastWeather({ forecastData }) {


  let data_date = [];
  
  for (let day = 8; day < forecastData?.list?.length; day += 8) {
    data_date.push(forecastData.list[day]);
  }

  let forecast = data_date.map((data, index) => {

    const formatDate = new Date(data.dt_txt).toLocaleDateString('default', {weekday : 'short'})
    const formateTemp = data.main.temp.toFixed(0)
    const image = data.weather[0].icon

    return (
        <div className="display-each-day" key={index}>
          <h1 className="day-text">{formatDate}</h1>
          <img src={ImageSrc[image]} className="img-each-day" />
          <h2 className="temp-day">{formateTemp}°C</h2>
        </div>
    );
  });

  return (
    <>
      <div className="days-line-1">
        {forecast}
      </div>
    </>
  );
}

export default ForcastWeather;
