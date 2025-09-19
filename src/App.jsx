import { React, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  let hour = new Date().getHours();

  //let img1 = "mist.jpg"

  //console.log(hour)
  const [time, setTime] = useState("");
  const [city, setCity] = useState("");
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [Country, setCountry] = useState("");
  const [icon, setIcon] = useState();
  const [condition, setCondition] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
  const [temp, setTemp] = useState("");
  const [wind, setWind] = useState("");
  const [humidity, setHumidity] = useState("");
  const [firstHour, setFirstHour] = useState("");
  const [firstTemp, setFirstTemp] = useState("");
  const [secondHour, setSecondHour] = useState("");
  const [secondTemp, setSecondTemp] = useState("");
  const [thirdHour, setThirdHour] = useState("");
  const [thirdTemp, setThirdTemp] = useState("");
  const [fourthHour, setFourthHour] = useState("");
  const [fourthTemp, setFourthTemp] = useState("");
  const [fifthHour, setFifthHour] = useState("");
  const [fifthTemp, setFifthTemp] = useState("");
  const [sixthHour, setSixthHour] = useState("");
  const [sixthTemp, setSixthTemp] = useState("");

  const[current1, setCurrent1] = useState('')
  const[current2, setCurrent2] = useState('')
  const[current3, setCurrent3] = useState('')
  const[current4, setCurrent4] = useState('')
  const[current5, setCurrent5] = useState('')
  const[current6, setCurrent6] = useState('')
  const[available, setAvailable] = useState(false)


  // const[pic, setPic] = useState(null)/


  /////////////////////////////////////////

  function checkWeather() {

    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=412b492bf8de4497ae193119252801&q=${city}`
      )
      .then((res) => {
        console.log(res);
        setCity("");

        setName(res.data.location.name);
        setRegion(res.data.location.region);
        setCountry(res.data.location.country);
        setIcon(res.data.current.condition.icon);
        setCondition(res.data.current.condition.text);
        setSunrise(res.data.forecast.forecastday[0].astro.sunrise);
        setSunset(res.data.forecast.forecastday[0].astro.sunset);
        setTemp(res.data.current.temp_c + "°C");
        setWind(res.data.current.wind_kph);
        setHumidity(res.data.current.humidity);
        setTime(res.data.location.localtime);

        setFirstHour(
          res.data.forecast.forecastday[0].hour[(hour + 1) % 24].time.slice(
            11,
            16
          )
        );
        setSecondHour(
          res.data.forecast.forecastday[0].hour[(hour + 2) % 24].time.slice(
            11,
            16
          )
        );
        setThirdHour(
          res.data.forecast.forecastday[0].hour[(hour + 3) % 24].time.slice(
            11,
            16
          )
        );
        setFourthHour(
          res.data.forecast.forecastday[0].hour[(hour + 4) % 24].time.slice(
            11,
            16
          )
        );
        setFifthHour(
          res.data.forecast.forecastday[0].hour[(hour + 5) % 24].time.slice(
            11,
            16
          )
        );
        setSixthHour(
          res.data.forecast.forecastday[0].hour[(hour + 6) % 24].time.slice(
            11,
            16
          )
        );

        setFirstTemp(
          res.data.forecast.forecastday[0].hour[(hour + 1) % 24].temp_c + "°C"
        );
        setSecondTemp(
          res.data.forecast.forecastday[0].hour[(hour + 2) % 24].temp_c + "°C"
        );
        setThirdTemp(
          res.data.forecast.forecastday[0].hour[(hour + 3) % 24].temp_c + "°C"
        );
        setFourthTemp(
          res.data.forecast.forecastday[0].hour[(hour + 4) % 24].temp_c + "°C"
        );
        setFifthTemp(
          res.data.forecast.forecastday[0].hour[(hour + 5) % 24].temp_c + "°C"
        );
        setSixthTemp(
          res.data.forecast.forecastday[0].hour[(hour + 6) % 24].temp_c + "°C"
        );

        setCurrent1(res.data.forecast.forecastday[0].hour[(hour + 1) % 24].condition.icon);
        setCurrent2(res.data.forecast.forecastday[0].hour[(hour + 2) % 24].condition.icon);
        setCurrent3(res.data.forecast.forecastday[0].hour[(hour + 3) % 24].condition.icon);
        setCurrent4(res.data.forecast.forecastday[0].hour[(hour + 4) % 24].condition.icon);
        setCurrent5(res.data.forecast.forecastday[0].hour[(hour + 5) % 24].condition.icon);
        setCurrent6(res.data.forecast.forecastday[0].hour[(hour + 6) % 24].condition.icon);

       

        setAvailable(true)

      })
      .catch(() => {
        alert("Please enter city name");
        setCity("");
      });
  }
  return (
    <>
      <div id="parent">
        <div id="navbar">
            <ul>
              <li><h3 className="bungee-regular">Weather</h3></li>
              <li>
                <p className="heading" id="head">
                  {name} {region} {Country}
                </p>
              </li>
              <li id="head-icon">
                <img src={icon} alt="" width="20" />
              </li>
              <li id="inp-box">
                <input
                  type="text"
                  id="inp"
                  placeholder="Enter city name ..."
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                />
                <button onClick={checkWeather}>
                  <img src="search.png" alt="" width="15" />
                </button>
              </li>
              <li id="logo">
                <img src="logo.png" alt="" width="40px" />
              </li>
            </ul>
          </div>
        {/*Left side things here */}
        
          {available && <div id="left">
          
          <div id="condition">
            
            <img src={icon} alt="" />
            <p id="temp">{temp}</p>
            <p>{condition}</p>
            <p className="heading">
                  {name} {region} {Country}
                </p>
          </div>
        </div>}
        {/*Right side things here */}

        {available && <div id="right">
          <div id="heading-icon">
            <img src="clock.png" alt="" width="20"/>
          <p className="heading">Next Six Hours</p>
          </div>
          <div id="forecast">
            <div className="forecast-box">
              <p>{firstHour}</p>
              <img src={current1} alt="" width="30" />
              <p>{firstTemp}</p>
            </div>
            <div className="forecast-box">
              <p>{secondHour}</p>
              <img src={current2} alt="" width="30" />
              <p>{secondTemp}</p>
            </div>
            <div className="forecast-box">
              <p>{thirdHour}</p>
              <img src={current3} alt="" width="30" />
              <p>{thirdTemp}</p>
            </div>
            <div className="forecast-box">
              <p>{fourthHour}</p>
              <img src={current4} alt="" width="30" />
              <p>{fourthTemp}</p>
            </div>
            <div className="forecast-box">
              <p>{fifthHour}</p>
              <img src={current5} alt="" width="30" />
              <p>{fifthTemp}</p>
            </div>
            <div className="forecast-box">
              <p>{sixthHour}</p>
              <img src={current6} alt="" width="30" />
              <p>{sixthTemp}</p>
            </div>
          </div>
          <div id="heading-icon">
            <img src="stars.png" alt="" width="30"/>
          <p className="heading">Today's Highlights</p>
          </div>
          <div id="highlights">
            <div className="sunrise">
              <p>Sunrise & Sunset</p>
              <div className="sun">
                <img src="sunrise.png" alt="" width="30" />
                <p>{sunrise}</p>
              </div>

              <div className="sun">
                <img src="sunset.png" alt="" width="30" />
                <p>{sunset}</p>
              </div>
            </div>

            <div className="sunrise">
              <p>Wind speed</p>
              <img src="wind-turbine.png" alt="" width="30" />
              <p>{wind}</p>
            </div>

            <div className="sunrise">
              <p>Humidity</p>
              <img src="humidity.png" alt="" width="30" />
              <p>{humidity}</p>
            </div>
          </div>
        </div>}

      </div>
    </>
  );
}

export default App;
