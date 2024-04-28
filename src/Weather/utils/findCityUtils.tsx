export function formatStringDate(date: string) {
  const day = date.split("-")[0];
  const month = date.split("-")[1];

  return ("0" + month).slice(-2) + "/" + ("0" + day).slice(-2);
}

export function translateWeather(
  weather: string,
) {
  if (weather === "Rain") {
    return "Chovendo";
  }
  if (weather === "Clear") {
    return "Céu aberto";
  }
  if (weather === "Snow") {
    return "Nevando";
  }
  if (weather === "Thunderstorm") {
    return "Tempestade";
  }
  if (weather === "Drizzle") {
    return "Chuviscando";
  }
  if (weather === "Mist") {
    return "Neblina";
  }
  if (weather === "Clouds") {
    return "Nublado";
  }
  return "error";
}
