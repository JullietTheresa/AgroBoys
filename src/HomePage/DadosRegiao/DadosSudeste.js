import React from "react";
import "../styleLandingPageDesign.css";

function DadosSudeste({currentWeather, bioma}) {
    // Função para determinar a estação com base na data
    function getEstacao(data) {
      const mes = data.getMonth() + 1; // Os meses são indexados a partir de zero (janeiro = 0)
      if (mes >= 3 && mes <= 5) {
        return "Outono";
      } else if (mes >= 6 && mes <= 8) {
        return "Inverno";
      } else if (mes >= 9 && mes <= 11) {
        return "Primavera";
      } else {
        return "Verão";
      }
    }
  
    // Supondo que currentWeather.max e currentWeather.min são variáveis que contêm os números floats
    var max = currentWeather.max;
    var min = currentWeather.min;
    var media = (max + min) / 2; // Calcula a média e arredonda
  
    const estacao = getEstacao(new Date()); // Obtém a estação atual com base na data atual

    return (
      <>
      <img className="img-sudeste" alt="SudesteOverlay" src="https://c.animaapp.com/ZUyH8RTL/img/objects-3@2x.png" />
        <div className="overlap">
          <div className="text-wrapper-11">Informações da Região</div>
          <div className="text-wrapper-12">Temperatura:</div>
          <div className="text-wrapper-13">Media: {media.toFixed(2)}</div>
        </div>
        <div className="text-wrapper-14">Estação: {estacao}</div>
        <div className="text-wrapper-15">Informações climaticas:</div>
        <div className="text-wrapper-16">Umidade: {currentWeather.humidity}%</div>
        <div className="text-wrapper-17">Clima: {currentWeather.weather}</div>
        <div className="text-wrapper-19">Maxima: {currentWeather.max}</div>
        <div className="text-wrapper-20">Minima: {currentWeather.min}</div>
        <div className="text-wrapper-21">Bioma: {bioma}</div>
      </>
    );
  }

export default DadosSudeste