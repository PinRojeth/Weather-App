import RainyImg from "../assets/Rainy.svg";

function ForcastWeather() {
  return (
    <>
      <div className="days-line-1">
        <ul className="list-day">
          <li className="day1">
            <div className="display-each-day">
              <h1 className="day">Tue</h1>
              <img src={RainyImg} className="img-each-day" />
              <h2 className="temp-day">19°C</h2>
            </div>
          </li>
          <li className="day2">
            <div className="display-each-day">
              <h1 className="day">Tue</h1>
              <img src={RainyImg} className="img-each-day" />
              <h2 className="temp-day">19°C</h2>
            </div>
          </li>
        </ul>
      </div>
      <div className="days-line-2">
        <ul className="list-day">
          <li className="day3">
            <div className="display-each-day">
              <h1 className="day">Tue</h1>
              <img src={RainyImg} className="img-each-day" />
              <h2 className="temp-day">19°C</h2>
            </div>
          </li>

          <li className="day4">
            <div className="display-each-day">
              <h1 className="day">Tue</h1>
              <img src={RainyImg} className="img-each-day" />
              <h2 className="temp-day">19°C</h2>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ForcastWeather;
