import React, { useState, useEffect } from "react"
import { FindCityStyle } from "./FindCityStyle"
import axios from "axios"
import { formatStringDate, translateWeather } from "../../utils/findCityUtils"

export default function FindCity({ Cidade, setData, setCurrentWeather }) {
  console.log("Cheguei com cidade:", Cidade)
  const city = Cidade
  useEffect(() => {
    findWeather(city);
  }, [city]);  

  async function findWeather(city) {
      const coordinatesRes = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=8a52fbfd41280128056a0b25b392c7b8&lang=pt_br`
      )

      const lon = coordinatesRes.data[0].lon
      const lat = coordinatesRes.data[0].lat
      console.log("Latencia", lat)
      const currentWeather = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=8a52fbfd41280128056a0b25b392c7b8`
      )

      const weather = translateWeather(currentWeather.data.weather[0].main)

      findForecast(lat, lon)

      setCurrentWeather({
        weather: weather,
        name: coordinatesRes.data[0].name,
        max: currentWeather.data.main.temp_max,
        min: currentWeather.data.main.temp_min,
        temp: currentWeather.data.main.temp,
        humidity: currentWeather.data.main.humidity,
      })


  async function findForecast(lat, lon) {
    try {
      const forecast = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&units=metric&lon=${lon}&appid=8a52fbfd41280128056a0b25b392c7b8`
      )

      const weekday = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"]

      const data = forecast.data.list.map(o => {
        const day = new Date(o.dt_txt)
        const date = formatStringDate(o.dt_txt.slice(5, 10))
        return { temp: o.main.temp, day: date + ` (${weekday[day.getDay()]})` }
      })

      setData(data)
    } catch (error) {
      console.error("Erro ao buscar previsão do tempo:", error)
    }
  }
}
}
