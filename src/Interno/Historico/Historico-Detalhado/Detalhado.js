import React from "react";
import Arrow from "../../../components/Arrow/arrow";
import "./styleDetalhado.css";

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
              <span className="span">AgroBoys</span>
            </p>
            <div className="text-wrapper-2">www.AgroBoys.com</div>
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
            <div className="text-wrapper-7">Sobre AgroBoys</div>
          </div>
        </div>
        <div className="dados">
          <div className="lucro">
            <div className="overlap-group-3">
              <div className="overlap">
                <div className="rectangle-3" />
                <div className="text-wrapper-8">X</div>
                <div className="text-wrapper-9">Quanto você ganhou?</div>
              </div>
              <div className="overlap-2">
                <div className="rectangle-4" />
                <div className="text-wrapper-10">X</div>
                <p className="text-wrapper-9">Quanto você gastou durante esse plantio?</p>
              </div>
              <div className="text-wrapper-11">$$</div>
            </div>
          </div>
          <div className="hectare">
            <div className="overlap-3">
              <div className="overlap-4">
                <div className="rectangle-5" />
                <div className="text-wrapper-9">Quantidade de Hectares Aproveitados</div>
              </div>
              <div className="overlap-group-4">
                <div className="rectangle-6" />
                <div className="text-wrapper-12">X</div>
                <div className="text-wrapper-9">Quantidade de Hectares Plantados</div>
              </div>
              <div className="text-wrapper-13">Hectare</div>
            </div>
          </div>
          <div className="pragas">
            <div className="overlap-5">
              <p className="para-a-praga-x-voc">
                Para a praga X, você utilizou o pesticida
                <br />
                Para a praga X, você utilizou o pesticida Y<br />
                Para a praga X, você utilizou o pesticida Y
              </p>
              <div className="text-wrapper-14">Pragas e pesticidas</div>
            </div>
          </div>
          <div className="data-de-plantio">
            <div className="overlap-3">
              <div className="overlap-group-5">
                <div className="rectangle-7" />
                <div className="text-wrapper-15">DD/MM/AA</div>
                <div className="text-wrapper-16">Data de Colheita *</div>
              </div>
              <div className="overlap-6">
                <div className="rectangle-8" />
                <div className="text-wrapper-17">DD/MM/AA</div>
                <div className="text-wrapper-16">Data de Plantio*</div>
              </div>
              <div className="text-wrapper-18">Data de Plantio</div>
            </div>
          </div>
          <div className="detalhes">
            <div className="overlap-7">
              <div className="overlap-group-6">
                <div className="text-wrapper-19">Batata Inglesa</div>
                <div className="text-wrapper-20">Batata</div>
              </div>
              <div className="overlap-8">
                <img className="imagem" alt="Imagem" src="https://c.animaapp.com/nQh2W4E3/img/imagem.svg" />
                <div className="text-wrapper-20">Detalhes</div>
              </div>
            </div>
          </div>
          <div className="overlap-9">
            <div className="text-wrapper-21">Histórico Plantio</div>
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
            <a className="text-wrapper-25" href="/" >AgroBoys</a>
          </div>
        </header>
      </div>
    </div>
  );
};

export default HistoricoDetalhado