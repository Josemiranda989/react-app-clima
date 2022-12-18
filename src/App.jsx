import { useEffect, useState } from "react";

import { getCountries } from "./services/countries";
import { getCities } from "./services/cities";
import { getCityWeather } from "./services/weather";
getCityWeather

const App = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(null);


  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
    })();
  }, []);

  const countryHandler = async (e) => {
    e.currentTarget.value && setCities(await getCities(e.currentTarget.value));
    setWeather(null)
  }
  const cityHandler = async (e) => {
    e.currentTarget.value && setWeather(await getCityWeather(e.currentTarget.value));
  }

  console.log(weather);



  return (
    <>
      <div>
        <label>Elije un país:</label>
        <select onChange={countryHandler} name="">
          <option value="">Selecciona un pais</option>
          {countries.map((country) => {
            return (
              <option key={country.cca2} value={country.cca2}>
                {country.name.common}
              </option>
            );
          })}
        </select>
      </div>

      {cities.length > 0 && (
        <div>
          <label htmlFor="">Elige una ciudad </label>
          <select onChange={cityHandler}>
            {cities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      )}

      <br />

      {weather && (
        <div>
          <h2>Temperatura actual: {weather.main.temp}°</h2>
          <p>min: {weather.main.temp_min.toFixed()}°</p>
          <p>max: {weather.main.temp_max.toFixed()}°</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="weather icon" />
          <pre>
          {JSON.stringify(weather, null, 2)}
          </pre>
        </div>
      )}
    </>
  );
};
export default App;

/* Rest countries
https://restcountries.com/v3.1/all
  Cities
https://spott.p.rapidapi.com
  Weather cities


https://www.youtube.com/watch?v=A3SOd0c7a9s&list=WL&index=42
1:55min
*/
