import { ajax } from "../tools/ajax";

export const getCities = async (countryCode) => {
  const optionsRequest = {
    method: "GET",
    url: "https://spott.p.rapidapi.com/places",
    headers: {
      "X-RapidAPI-Key": "4a3b6cc2cfmsh60de1a428253697p10f39fjsnca1043797710",
      "X-RapidAPI-Host": "spott.p.rapidapi.com",
    },
    params: {
      limit: 100,
      type: "CITY",
      country: countryCode ?? "US",
    },
  };
  return await ajax(optionsRequest);
};
