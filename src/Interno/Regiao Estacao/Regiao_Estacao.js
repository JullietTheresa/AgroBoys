import React from "react";
import React, { useState, useEffect } from "react";
import "./styleRegiao_Estacao.css";

// Weather Imports
import { BackGround } from '../../Weather/style/HomeStyle';
import { useState } from "react"
import FindCity from '../../Weather/components/FindCity/FindCity';
import Graphic from '../../Weather/components/Graphic/Graphic';
import Weather from '../../Weather/components/Weather/Weather';
import { Data } from "../../Weather/common/types";
import { dataConst, weatherConst } from "../../Weather/common/constants"

export const Regio_Estaocao = () => {
  const [currentWeather, setCurrentWeather] = useState(weatherConst);
  const [background, setBackground] = useState("");
  const [data, setData] = useState(dataConst);
  const [city, setCity] = useState(null); // Estado para armazenar a cidade temporária

  useEffect(() => {
    const fetchCidadeTemporaria = async () => {
      try {
        const response = await fetch('http://localhost:3000/cidadearmazenada');
        if (!response.ok) {
          throw new Error('Erro ao buscar a cidade temporária do backend');
        }
        const data = await response.json();
        setCity(data.cidade); // Definir o estado da cidade com o valor recebido do backend
      } catch (error) {
        console.error('Erro ao buscar a cidade temporária:', error);
      }
    };

    fetchCidadeTemporaria();
  }, []); // Executa apenas uma vez após a montagem inicial do componente

  useEffect(() => {
    city !== null && (console.log("A cidade que chegou no região foi", city))
  }, [city]);
  

  regiao = "Centro-Oeste";
  bioma = "Cerrado";


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
    {city !== null && (
      <FindCity
        Cidade={city}
        setData={setData}
        setCurrentWeather={setCurrentWeather}
      />
    )}


    <div className="regio-e-estao">
      <div className="div">
        <div className="overlap">
          <div className="dados">
            <div className="informaes-climaticas">
              <div className="overlap-group-2">
                <div className="rectangle-3" />
                <img className="image" alt="Image" src="https://c.animaapp.com/bqR5CWSn/img/image-2@2x.png" />
                <div className="text-wrapper-8">Umidade: {currentWeather.humidity}%</div>
                <div className="text-wrapper-9">Clima: {currentWeather.weather}</div>
                <div className="text-wrapper-11">Informações climaticas</div>
              </div>
            </div>
            <div className="regio">
              <div className="overlap-2">
                <div className="overlap-group-3">
                  <img className="OBJECTS" alt="Objects" src="https://c.animaapp.com/bqR5CWSn/img/objects@2x.png" />
                  <div className="text-wrapper-12">Região</div>
                </div>
                <div className="group">
                  <div className="text-wrapper-13">Região: {regiao}</div>
                  <div className="text-wrapper-14">Estação: {estacao}</div>
                  <div className="text-wrapper-15">Bioma: {bioma}</div>
                </div>
              </div>
            </div>
            <div className="temperatura">
              <div className="overlap-2">
                <div className="text-wrapper-16">Temperatura</div>
                <img className="img" alt="Image" src="https://c.animaapp.com/bqR5CWSn/img/image-1@2x.png" />
                <p className="text-wrapper-17">Media: {media.toFixed(2)}</p>
                <p className="text-wrapper-18">Máxima: {currentWeather.max}</p>
                <p className="text-wrapper-19">Mínima: {currentWeather.min}</p>
              </div>
            </div>
            <div className="text-wrapper-20">Região e Estação</div>
          </div>
          <div className="overlap-3">
            <div className="menu">
              <div className="overlap-4">
                <div className="rectangle-4" />
                <div className="rectangle-5" />
                <div className="rectangle-6" />
                <a className="text-wrapper-21" href="/suporte" >Suporte</a>
                <img className="house" alt="House" src="https://c.animaapp.com/bqR5CWSn/img/house-4@2x.png" />
                <a className="text-wrapper-22" href="/dadossolo" >Dados do Solo</a>
                <div className="group-2">
                  <a className="text-wrapper-23" href="/pesticidas" >Pragas e Agrotóxico</a>
                  <img className="img-2" alt="House" src="https://c.animaapp.com/bqR5CWSn/img/house-4@2x.png" />
                </div>
                <img className="house-2" alt="House" src="https://c.animaapp.com/bqR5CWSn/img/house-4@2x.png" />

                  <a className="text-wrapper-24" href="/historico" >Histórico Plantio</a>
                  <a className="text-wrapper-25" href="/plano" >Plano Plantio</a>
                  <img className="plano-house" alt="Calendar" src="https://c.animaapp.com/bqR5CWSn/img/house-4@2x.png" />
                  <a className="text-wrapper-26" href="/controle" >Controle</a>
                  <img className="controle-house" alt="Calendar" src="https://c.animaapp.com/bqR5CWSn/img/house-4@2x.png" />

                <div className="rectangle-7" />
                <div className="div-wrapper">
                  <div className="text-wrapper-27">Região e Estação</div>
                </div>
                <a className="text-wrapper-28" href="/selcultura">Seleção Cultura</a>
                <img className="house-3" alt="House" src="https://c.animaapp.com/bqR5CWSn/img/house-4@2x.png" />
                <img className="house-4" alt="House" src="https://c.animaapp.com/bqR5CWSn/img/house-4@2x.png" />
              </div>
            </div>
            <header className="header">
              <a className="text-wrapper-29" href="/" >TerraTech</a>
              <div className="overlap-5">
                <p className="usuario-gmail-com">
                  <span className="text-wrapper-30">usuario</span>
                  <a href="mailto:spandan@gmail.com" rel="noopener noreferrer" target="_blank">
                    <span className="text-wrapper-30">@gmail.com</span>
                  </a>
                </p>
                <div className="text-wrapper-31">admin</div>
                <div className="overlap-group-4">
                  <div className="ellipse" />
                  <div className="text-wrapper-32">S</div>
                </div>
              </div>
            </header>
          </div>
        </div>
        <div className="fotter">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="text-wrapper">Location, street, 1234</div>
            <div className="text-wrapper-2">Email@gmail.com</div>
            <div className="text-wrapper-3">+55 (61) 999123456</div>
            <div className="text-wrapper-4">www.TerraTech.com</div>
            <div className="text-wrapper-5">Sobre TerraTech</div>
            <div className="text-wrapper-6">Contacts</div>
            <p className="p">
              Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de maneira
              eficiente.
            </p>
            <img className="envelope" alt="Envelope" src="https://c.animaapp.com/bqR5CWSn/img/envelope@2x.png" />
            <img
              className="hand-with-smartphone"
              alt="Hand with smartphone"
              src="https://c.animaapp.com/bqR5CWSn/img/hand-with-smartphone@2x.png"
            />
            <img className="internet" alt="Internet" src="https://c.animaapp.com/bqR5CWSn/img/internet@2x.png" />
            <img className="copyright" alt="Copyright" src="https://c.animaapp.com/bqR5CWSn/img/copyright@2x.png" />
            <p className="copyright-2">
              <span className="span">copyright 2024 </span>
              <span className="text-wrapper-7">TerraTech</span>
            </p>
            <img
              className="place-marker"
              alt="Place marker"
              src="https://c.animaapp.com/bqR5CWSn/img/place-marker@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Regio_Estaocao