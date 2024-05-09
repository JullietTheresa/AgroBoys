import React, { useState } from "react";
import "./styleplano.css";

const PlanoPlantio = () => {
  const [isColhido, setIsColhido] = useState(false);

  const handleClick = () => {
    setIsColhido(!isColhido);
  };

  return (
    <div className="plano-plantio">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            {/* Elementos compartilhados */}
            <div className="rectangle" />
            <div className="ellipse" />
            <div className="text-wrapper">S</div>
            <a className="div" href="mailto:spandan@gmail.com" rel="noopener noreferrer" target="_blank">
              spandan@gmail.com
            </a>
            <div className="text-wrapper-2">admin</div>
            <div className="flexcontainer">
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <div key={num} className="text">
                  <span className="span">{num}</span>
                </div>
              ))}
            </div>
            <div className="text-wrapper-3">Orders</div>
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <img className="house" alt="House" src="https://c.animaapp.com/AneYV77i/img/house-4@2x.png" />
            <a className="text-wrapper-4" href="/suporte" >Suporte</a>
            <a className="text-wrapper-5" href="/historico" >Histórico Plantio</a>
            <img className="img" alt="House" src="https://c.animaapp.com/AneYV77i/img/house-4@2x.png" />
            <a className="text-wrapper-6" href="/dadossolo" >Dados do Solo</a>
            <a className="text-wrapper-7" href="/" >TerraTech</a>
            <div className="group">
              <a className="text-wrapper-8" href="/pesticidas" >Pragas e Agrotóxico</a>
              <img className="house-2" alt="House" src="https://c.animaapp.com/AneYV77i/img/house-4@2x.png" />
            </div>
            <img className="rectangle-4" alt="Rectangle" src="https://c.animaapp.com/AneYV77i/img/house-4@2x.png" />
            <div className="group-2">
              <a className="text-wrapper-9" href="/regiao" >Região e Estação</a>
              <img className="house-2" alt="House" src="https://c.animaapp.com/AneYV77i/img/house-4@2x.png" />
            </div>
            <div className="overlap-group-wrapper">
              <div className="div-wrapper">
                <a className="text-wrapper-10" href="/plano" >Plano Plantio</a>
              </div>
            </div>
            <div className="group-3">
              <a className="text-wrapper-11" href="/controle">Controle</a>
              <img className="house-controle" alt="House" src="https://c.animaapp.com/AneYV77i/img/house-4@2x.png" />
            </div>
            <a className="text-wrapper-12" href="/selcultura">Seleção Cultura</a>
            <img className="house-3" alt="House" src="https://c.animaapp.com/AneYV77i/img/house-4@2x.png" />
            <div className="rotter">
              <div className="overlap-2">
                <div className="rectangle-6" />
                <div className="rectangle-7" />
                <div className="text-wrapper-13">Location, street, 1234</div>
                <div className="text-wrapper-14">Email@gmail.com</div>
                <div className="text-wrapper-15">+55 (61) 999123456</div>
                <div className="text-wrapper-16">www.TerraTech.com</div>
                <div className="text-wrapper-17">Sobre TerraTech</div>
                <div className="text-wrapper-18">Contacts</div>
                <p className="p">
                  Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de
                  maneira eficiente.
                </p>
                <img className="envelope" alt="Envelope" src="https://c.animaapp.com/AneYV77i/img/envelope@2x.png" />
                <img
                  className="hand-with-smartphone"
                  alt="Hand with smartphone"
                  src="https://c.animaapp.com/AneYV77i/img/hand-with-smartphone@2x.png"
                />
                <img className="internet" alt="Internet" src="https://c.animaapp.com/AneYV77i/img/internet@2x.png" />
                <img className="copyright" alt="Copyright" src="https://c.animaapp.com/AneYV77i/img/copyright@2x.png" />
                <p className="copyright-2">
                  <span className="text-wrapper-19">copyright 2024 </span>
                  <span className="text-wrapper-20">TerraTech</span>
                </p>
                <img
                  className="place-marker"
                  alt="Place marker"
                  src="https://c.animaapp.com/AneYV77i/img/place-marker@2x.png"
                />
              </div>
            </div>
          </div>
          {/* Elementos específicos de Plano Plantio */}
          <div className="text-wrapper-21">Plano Plantio</div>
          <p className="cultura">Cultura Selecionada: </p>
          <div className="overlap-3">
            <div className="group-4">
              <div className="overlap-4">
                <div className="text-wrapper-35">Cenoura</div>
                <div className="text-wrapper-22">24 h - 1h/dia</div>
                <div className="text-wrapper-23">20/12/2024</div>
                <div className="text-wrapper-24">Atrazina</div>
                <div className="text-wrapper-25">10/12/2024</div>
                <div className="text-wrapper-220">10/11/2024</div>
                <img className="line" alt="Line" src="https://c.animaapp.com/AneYV77i/img/line-1.svg" />
                <img className="line-2" alt="Line" src="https://c.animaapp.com/AneYV77i/img/line-3.svg" />
                <img className="line-3" alt="Line" src="https://c.animaapp.com/AneYV77i/img/line-2.svg" />
                <img className="line-4" alt="Line" src="https://c.animaapp.com/AneYV77i/img/line-4.svg" />
                <img className="line-5" alt="Line" src="https://c.animaapp.com/AneYV77i/img/line-6.svg" />
                <img className="line-6" alt="Line" src="https://c.animaapp.com/AneYV77i/img/line-7.svg" />
                <img className="line-7" alt="Line" src="https://c.animaapp.com/AneYV77i/img/line-8.svg" />
              </div>
            </div>
            <div className="menu-plano">
              <div className="text-wrapper-28">Ordem de Cultura</div>
              <div className="text-wrapper-29">Data Fertilização</div>
              <div className="text-wrapper-30">Data Plantio</div>
              <div className="text-wrapper-31">Agrotóxico</div>
              <div className="text-wrapper-32">Data Agrotóxico</div>
              <div className="text-wrapper-33">Colheita</div>
              <div className="text-wrapper-34">Irrigação</div>
            </div>
            <div className="text-wrapper-36">Batata</div>
            <div className="text-wrapper-37">Milho</div>
            <div className="group-6">
              <div className="overlap-5">
                <button className="button" onClick={handleClick}>
                  <div className="text-wrapper-38">{isColhido ? "Colhido" : "Não colhido"}</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanoPlantio;
