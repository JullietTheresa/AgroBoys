import React, { useState, useEffect } from "react";
import { FindCityStyle } from "./FindCityStyle";
import axios from "axios";
import { formatStringDate, translateWeather } from "../../utils/findCityUtils";

export default function FindCity({ Cidade, setData, setCurrentWeather }) {
  const city = Cidade;

  useEffect(() => {
    findWeather(city);
  }, [city]);

  async function findWeather(city) {
    const coordinatesRes = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=8a52fbfd41280128056a0b25b392c7b8&lang=pt_br`
    );

    const lon = coordinatesRes.data[0].lon;
    const lat = coordinatesRes.data[0].lat;
    console.log("FindCity Latidude:", lat);
    console.log("FindCity Longitude:", lon)
    console.log("FindCity Cidade:", city)
    const currentWeather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8a52fbfd41280128056a0b25b392c7b8`
    );

    const weather = translateWeather(currentWeather.data.weather[0].main);

    findForecast(lat, lon);

    setCurrentWeather({
      weather: weather,
      name: coordinatesRes.data[0].name,
      max: currentWeather.data.main.temp_max,
      min: currentWeather.data.main.temp_min,
      temp: currentWeather.data.main.temp,
      humidity: currentWeather.data.main.humidity,
    });

    // enviarDadosParaBackend(city, currentWeather.data); // Envie os dados para o backend após receber a resposta da API
  }

  async function findForecast(lat, lon) {
    try {
      const forecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&units=metric&lon=${lon}&appid=8a52fbfd41280128056a0b25b392c7b8`
      );

      const data = forecast.data.list.map((o) => {
        const date = formatStringDate(o.dt_txt.slice(5, 10));
        return { temp: o.main.temp, day: date + `     ` };
      });

      setData(data);
    } catch (error) {
      console.error("Erro ao buscar previsão do tempo:", error);
    }
  }

  // async function enviarDadosParaBackend(city, weatherData) {
  //   try {
  //     const response = await fetch("http://localhost:3000/api/cidade", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ cidade: city, dados: weatherData }), // Envie o nome da cidade e os dados para o backend
  //     });
  //     if (!response.ok) {
  //       throw new Error("Erro ao enviar os dados para o backend");
  //     }
  //     console.log(`Dados enviados com sucesso para o backend: ${city} e ${weatherData}`);
  //   } catch (error) {
  //     console.error("Erro:", error);
  //   }
  // }
}
