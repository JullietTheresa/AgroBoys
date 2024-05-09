import React from "react";
import "./style.css";

// Weather Imports
import { BackGround } from '../../Weather/style/HomeStyle';
import { useState } from "react"
import FindCity from '../../Weather/components/FindCity/FindCity';
import Graphic from '../../Weather/components/Graphic/Graphic';
import Weather from '../../Weather/components/Weather/Weather';
import { Data } from "../../Weather/common/types";
import { dataConst, weatherConst } from "../../Weather/common/constants"

export const HistoricoClimatico = () => {
  const [currentWeather, setCurrentWeather] = useState(weatherConst);
  const [background, setBackground] = useState("");
  const [data, setData] = useState(dataConst);

  return (
    <div className="historico-climatico">
      <div className="div">
        <div className="rotter">
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
            <img className="envelope" alt="Envelope" src="https://c.animaapp.com/YAxtneS4/img/envelope@2x.png" />
            <img
              className="hand-with-smartphone"
              alt="Hand with smartphone"
              src="https://c.animaapp.com/YAxtneS4/img/hand-with-smartphone@2x.png"
            />
            <img className="internet" alt="Internet" src="https://c.animaapp.com/YAxtneS4/img/internet@2x.png" />
            <img className="copyright" alt="Copyright" src="https://c.animaapp.com/YAxtneS4/img/copyright@2x.png" />
            <p className="copyright-2">
              <span className="span">copyright 2024 </span>
              <span className="text-wrapper-7">TerraTech</span>
            </p>
            <img
              className="place-marker"
              alt="Place marker"
              src="https://c.animaapp.com/YAxtneS4/img/place-marker@2x.png"
            />
          </div>
        </div>
        <div className="graficos">
          {/* <div className="historico">
            <div className="text-wrapper-8">Historico Climatico</div>
            // Adicionar historico climatico
          </div> */}
          <div className="previsao">
            <div className="text-wrapper-9">Previsão do tempo</div>
            <FindCity
              Cidade={city='brasilia'}
              setData={setData}
              setCurrentWeather={setCurrentWeather}
            />
            <div className="grafico-previsao">
              <Graphic background={background} data={data} />
            </div>
          </div>
        </div>
        <header className="header">
          <div className="overlap">
            <a className="text-wrapper-10 "href="/"> TerraTech</a>
            <a className="text-wrapper-11 "href="/">Home</a>
            <a className="text-wrapper-14" href="/Login">Login</a>
            <a className="text-wrapper-15" href="/SignUp">SignUp</a>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HistoricoClimatico