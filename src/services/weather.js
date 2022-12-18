import { ajax } from "../tools/ajax";

export const getCityWeather = async (city) => {
  const optionsRequest = {
    method: "GET",
    url: "https://api.openweathermap.org/data/2.5/weather",
    params: {
      q: city,
      appid: "ce0d4da1b616e3c17db9b76b60eaa603",
      units: "metric",
    },
  };
  return await ajax(optionsRequest);
};
