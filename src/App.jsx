
import './App.css'
import {useState} from 'react'
import axios from 'axios'

function App() {

   let hour = new Date().getHours();

   const [city, setCity] = useState("");
   const [name, setName] = useState("");
  const [region, setRegion] = useState("");
  const [country, setCountry] = useState("");
   const [icon, setIcon] = useState();
  const [condition, setCondition] = useState("");
  const[clock, setClock] = useState('')
  const [temp, setTemp] = useState("");
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
   const[available, setAvailable] = useState(false)

  const[current1, setCurrent1] = useState('')
  const[current2, setCurrent2] = useState('')
  const[current3, setCurrent3] = useState('')
  const[current4, setCurrent4] = useState('')
  const[current5, setCurrent5] = useState('')
  const[current6, setCurrent6] = useState('')

  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");
   const [wind, setWind] = useState("");
    const [humidity, setHumidity] = useState("");

    const [bgImage, setBgImage] = useState("day.jpg");

    const [localDate, setLocalDate] = useState("");

    
  function checkWeather(){
    axios
      .get(`https://api.weatherapi.com/v1/forecast.json?key=412b492bf8de4497ae193119252801&q=${city}`

      )
      .then((res)=>{
        console.log(res)
        setCity('')

        let localTime = res.data.location.localtime;  // "2025-09-22 04:30"
   let localHour = parseInt(localTime.slice(11, 13)); // "04" → 4

   //////////////
let dateObj = new Date(localTime);

// Format options
let options = { weekday: 'long' }; // gives "Monday"
let dayName = dateObj.toLocaleDateString("en-US", options);

let day = String(dateObj.getDate()).padStart(2, "0");
let month = String(dateObj.getMonth() + 1).padStart(2, "0");
let year = dateObj.getFullYear();

// Final formatted date
let formattedDate = `${dayName}, ${day}-${month}-${year}`;

   ////////

   let bgImage = localHour >= 6 && localHour < 18 ? "day.jpg" : "night.jpg";

   setBgImage(localHour >= 6 && localHour < 18 ? "day.jpg" : "night.jpg");

        setName(res.data.location.name);
        setRegion(res.data.location.region);
        setCountry(res.data.location.country);
         setIcon(res.data.current.condition.icon);
        setCondition(res.data.current.condition.text);
        setClock(res.data.location.localtime);
        setTemp(res.data.current.temp_c);
        

        setFirstHour(
          res.data.forecast.forecastday[0].hour[(localHour + 1) % 24].time.slice(
            11,
            16
          )
        );
        setSecondHour(
          res.data.forecast.forecastday[0].hour[(localHour + 2) % 24].time.slice(
            11,
            16
          )
        );
        setThirdHour(
          res.data.forecast.forecastday[0].hour[(localHour + 3) % 24].time.slice(
            11,
            16
          )
        );
        setFourthHour(
          res.data.forecast.forecastday[0].hour[(localHour + 4) % 24].time.slice(
            11,
            16
          )
        );
        setFifthHour(
          res.data.forecast.forecastday[0].hour[(localHour + 5) % 24].time.slice(
            11,
            16
          )
        );
        setSixthHour(
          res.data.forecast.forecastday[0].hour[(localHour + 6) % 24].time.slice(
            11,
            16
          )
        );

        setFirstTemp(
          res.data.forecast.forecastday[0].hour[(localHour + 1) % 24].temp_c + "°C"
        );
        setSecondTemp(
          res.data.forecast.forecastday[0].hour[(localHour + 2) % 24].temp_c + "°C"
        );
        setThirdTemp(
          res.data.forecast.forecastday[0].hour[(localHour + 3) % 24].temp_c + "°C"
        );
        setFourthTemp(
          res.data.forecast.forecastday[0].hour[(localHour + 4) % 24].temp_c + "°C"
        );
        setFifthTemp(
          res.data.forecast.forecastday[0].hour[(localHour + 5) % 24].temp_c + "°C"
        );
        setSixthTemp(
          res.data.forecast.forecastday[0].hour[(localHour + 6) % 24].temp_c + "°C"
        );

        setCurrent1(res.data.forecast.forecastday[0].hour[(hour + 1) % 24].condition.icon);
        setCurrent2(res.data.forecast.forecastday[0].hour[(hour + 2) % 24].condition.icon);
        setCurrent3(res.data.forecast.forecastday[0].hour[(hour + 3) % 24].condition.icon);
        setCurrent4(res.data.forecast.forecastday[0].hour[(hour + 4) % 24].condition.icon);
        setCurrent5(res.data.forecast.forecastday[0].hour[(hour + 5) % 24].condition.icon);
        setCurrent6(res.data.forecast.forecastday[0].hour[(hour + 6) % 24].condition.icon);

         setSunrise(res.data.forecast.forecastday[0].astro.sunrise);
        setSunset(res.data.forecast.forecastday[0].astro.sunset);
        setWind(res.data.current.wind_kph);
        setHumidity(res.data.current.humidity);

        setLocalDate(formattedDate);

        setAvailable(true)

        ////////////////////



        ///////////////////////

      })

      .catch(()=>{
        alert("Please enter city name")
        setCity('')
      });
      
    
  }
  return (
   <>
   <div id="navbar">
    <p id='bungee-regular'>Weather</p>
    <div>
    <input type="text"  id="inp-box" value={city} placeholder='Enter City Name' 
    onChange={(event)=> setCity(event.target.value)} />
    <button onClick={checkWeather} id='btn'>Check</button>
    </div>
   </div>

   {/* Main body */}

   {!available && <div id='not-main'
     style={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
   >
    
    </div>}

   {available && <div id='main'
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
   >
    <div id="first">
      <p id='name'>
        {name} {region} {country}
      </p>

      <img src={icon} />

      <p>{temp}<span >&#8451;</span></p>

      <p>{condition}</p>

      <p>{localDate}</p>



    </div>

    <div id="heading">
      <p>&nbsp;&nbsp;Next 6 Hours</p>
    </div>

    <div id="second">
      <div className="box">
        <p>{firstHour}</p>
        <img src={current1} alt="" />
        <p>{firstTemp}</p>
      </div>

      <div className="box">
        <p>{secondHour}</p>
        <img src={current2} alt="" />
        <p>{secondTemp}</p>
      </div>

      <div className="box">
        <p>{thirdHour}</p>
        <img src={current3} alt="" />
        <p>{thirdTemp}</p>
      </div>

      <div className="box">
        <p>{fourthHour}</p>
        <img src={current4} alt="" />
        <p>{fourthTemp}</p>
      </div>

      <div className="box">
        <p>{fifthHour}</p>
        <img src={current5} alt="" />
        <p>{fifthTemp}</p>
      </div>

      <div className="box">
        <p>{sixthHour}</p>
        <img src={current6} alt="" />
        <p>{sixthTemp}</p>
      </div>
      


    </div>

    <div id="heading">
      <p>&nbsp;&nbsp;Today's Highlights</p>
    </div>

    <div id="third">
      <div className="box2">
        <p>Sunrise</p>
        <img src="sunrise.png" alt="" />
        {sunrise}
      </div>

      <div className="box2">
        <p>Sunset</p>
        <img src="sunset.png" alt="" />
        {sunset}
      </div>

      <div className="box2">
        <p>Wind speed</p>
        <img src="wind-turbine.png" />
        {wind}
      </div>

      <div className="box2">
        <p>Humidity</p>
        <img src="humidity.png" alt="" />
        {humidity}
      </div>

      

    </div>
   </div>}
   </>
  )
}

export default App