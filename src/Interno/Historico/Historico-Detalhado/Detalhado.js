import React from "react";
import Arrow from "../../../components/Arrow/arrow";
import "./styleDetalhado.css";
import cacauImage from "../../../components/Images/Interno/cacau.jpg";

export const HistoricoDetalhado = () => {
  return (
    <div className="histrico-detalhado">
      <div className="div">
        <div className="fotter">
          <div className="overlap-group-2">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <p className="copyright">
              <span className="text-wrapper">copyright 2024 </span>
              <span className="span">TerraTech</span>
            </p>
            <div className="text-wrapper-2">www.TerraTech.com</div>
            <img className="internet" alt="Internet" src="https://c.animaapp.com/nQh2W4E3/img/internet@2x.png" />
            <div className="text-wrapper-3">+55 (61) 999123456</div>
            <img
              className="hand-with-smartphone"
              alt="Hand with smartphone"
              src="https://c.animaapp.com/nQh2W4E3/img/hand-with-smartphone@2x.png"
            />
            <div className="text-wrapper-4">Email@gmail.com</div>
            <img className="envelope" alt="Envelope" src="https://c.animaapp.com/nQh2W4E3/img/envelope@2x.png" />
            <div className="text-wrapper-5">Location, street, 1234</div>
            <img
              className="place-marker"
              alt="Place marker"
              src="https://c.animaapp.com/nQh2W4E3/img/place-marker@2x.png"
            />
            <div className="text-wrapper-6">Contacts</div>
            <p className="p">
              Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de maneira
              eficiente.
            </p>
            <div className="text-wrapper-7">Sobre TerraTech</div>
          </div>
        </div>
        <div className="dados">
        <div className="pLano">
              <pre className="caixa-texto"></pre> {/*Adição de plano de plantio feito pela IA*/}
            </div>
          <div className="lucro">

          </div>
          <div className="hectare">

          </div>
          <div className="pragas">
          </div>
          <div className="data-de-plantio">
          </div>
          <div className="overlap-9">
            <div className="text-wrapper-21">Histórico Detalhado</div>
            <a href="/historico"> <Arrow className="circle-arrow-left-instance" /></a>
          </div>
        </div>
        <header className="header">
          <div className="overlap-10">
            <div className="overlap-group-7">
              <div className="ellipse" />
              <div className="text-wrapper-22">S</div>
            </div>
            <div className="text-wrapper-23">spandan@gmail.com</div>
            <div className="text-wrapper-24">admin</div>
            <a className="text-wrapper-25" href="/" >TerraTech</a>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HistoricoDetalhado