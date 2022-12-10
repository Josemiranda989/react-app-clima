import { ajax } from "../tools/ajax";

export const getCountries = async () => {
  const options = {
    method: "GET",
    url: "https://restcountries.com/v3.1/all",
  };
  return await ajax(options);
};

export const saveCountry = async () => {
  const options = {
    method: "POST",
    url: "https://restcountries.com/v3.1/all",
  };
  return await ajax(options);
};
