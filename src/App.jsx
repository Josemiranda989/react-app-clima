import { useEffect, useState } from "react";

import { getCountries } from "./services/countries";
import { getCities } from "./services/cities";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    (async () => {
      setCountries(await getCountries());
    })();
  }, []);

  const countryHandler = async (e) => {
    setCities(await getCities(e.currentTarget.value));
  };

  return (
    <div>
      <label> Elije un país</label>
      <select onChange={countryHandler} name="">
        {countries.map((country) => {
          return (
            <option key={country.cca2} value={country.cca2}>
              {country.name.common}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default App;

/* Rest countries
https://restcountries.com/v3.1/all

https://www.youtube.com/watch?v=A3SOd0c7a9s&list=WL&index=42
27min
*/
