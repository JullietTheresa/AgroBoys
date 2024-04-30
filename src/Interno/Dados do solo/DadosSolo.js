import React from "react";
import "./styleDadosSolo.css";

export const DadosDeSolo = () => {
  return (
    <div className="dados-de-solo">
      <div className="div">
        <div className="fotter">
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <p className="copyright">
              <span className="text-wrapper">copyright 2024 </span>
              <span className="span">AgroBoys</span>
            </p>
            <img className="internet" alt="Internet" src="https://c.animaapp.com/Jx8XCm2E/img/internet@2x.png" />
            <div className="text-wrapper-2">www.AgroBoys.com</div>
            <img
              className="hand-with-smartphone"
              alt="Hand with smartphone"
              src="https://c.animaapp.com/Jx8XCm2E/img/hand-with-smartphone@2x.png"
            />
            <div className="text-wrapper-3">+55 (61) 999123456</div>
            <img className="envelope" alt="Envelope" src="https://c.animaapp.com/Jx8XCm2E/img/envelope@2x.png" />
            <div className="text-wrapper-4">Email@gmail.com</div>
            <img
              className="place-marker"
              alt="Place marker"
              src="https://c.animaapp.com/Jx8XCm2E/img/place-marker@2x.png"
            />
            <div className="text-wrapper-5">Location, street, 1234</div>
            <div className="text-wrapper-6">Contacts</div>
            <p className="sobre">
              Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de maneira
              eficiente.
            </p>
            <div className="text-wrapper-7">Sobre AgroBoys</div>
          </div>
        </div>
        <div className="overlap">
          <div className="dados-do-solo">
            <div className="analise">
              <div className="overlap-group-2">
                <div className="overlap-2">
                  <div className="text-wrapper-8">Porcentagem Areia: Label</div>
                  <div className="text-wrapper-9">Textura do solo: Label</div>
                </div>
                <div className="overlap-3">
                  <div className="text-wrapper-10">Porcentagem Argila: Label</div>
                  <div className="text-wrapper-11">Análise granulométrica</div>
                </div>
                <div className="text-wrapper-12">Porcentagem Silte: Label</div>
              </div>
            </div>
            <div className="analise-quimica">
              <div className="overlap-4">
                <div className="text-wrapper-13">Nutrientes: Label</div>
                <div className="text-wrapper-14">Saturação: Label</div>
                <div className="text-wrapper-15">Matéria orgânica: Label</div>
                <div className="text-wrapper-16">Salinidade: Label</div>
                <div className="text-wrapper-17">PH: Label</div>
                <div className="text-wrapper-18">Analise Quimica</div>
                <div className="text-wrapper-19">Fertilidade: Label</div>
              </div>
            </div>
            <div className="text-wrapper-20">Dados do Solo</div>
          </div>
          <div className="overlap">
            <div className="menu">
              <div className="overlap-5">
                <img
                  className="suporte-house"
                  alt="Suporte house"
                  src="https://c.animaapp.com/Jx8XCm2E/img/controle-house@2x.png"
                />
                <a className="text-wrapper-21" href="/suporte">Suporte</a>
                <img
                  className="histrico-plantio"
                  alt="Histrico plantio"
                  src="https://c.animaapp.com/Jx8XCm2E/img/controle-house@2x.png"
                />
                <div className="overlap-6">
                  <a className="text-wrapper-22" href="/historico">Histórico Plantio</a>
                  <a className="text-wrapper-23" href="/pesticidas">Pragas e Agrotóxico</a>
                </div>
                <img
                  className="pragas-e-agrotxico"
                  alt="Pragas e agrotxico"
                  src="https://c.animaapp.com/Jx8XCm2E/img/controle-house@2x.png"
                />
                <div className="overlap-7">
                  <div className="overlap-8">
                    <div className="overlap-group-3">
                      <div className="rectangle-3" />
                      <div className="text-wrapper-24">Dados do solo</div>
                      <a className="text-wrapper-25" href="/selcultura">Seleção Cultura</a>
                    </div>
                    <img
                      className="seleo-cultura-house"
                      alt="Seleo cultura house"
                      src="https://c.animaapp.com/Jx8XCm2E/img/controle-house@2x.png"
                    />
                  </div>
                  <a className="text-wrapper-26" href="/regiao">Região e Estação</a>
                </div>
                <img
                  className="regio-e-estao-house"
                  alt="Regio e estao house"
                  src="https://c.animaapp.com/Jx8XCm2E/img/controle-house@2x.png"
                />
                <img
                  className="plano-plantio-house"
                  alt="Plano plantio house"
                  src="https://c.animaapp.com/Jx8XCm2E/img/controle-house@2x.png"
                />
                <a className="text-wrapper-27" href="/plano">Plano Plantio</a>
                <img
                  className="controle-house"
                  alt="Controle house"
                  src="https://c.animaapp.com/Jx8XCm2E/img/controle-house@2x.png"
                />
                <a className="text-wrapper-28" href="/controle">Controle</a>
              </div>
            </div>
            <div className="headder">
              <div className="overlap-9">
                <div className="overlap-group-4">
                  <div className="ellipse" />
                  <div className="text-wrapper-29">S</div>
                </div>
                <p className="usuario-gmail-com">
                  <span className="text-wrapper-30">usuario</span>
                  <a href="mailto:spandan@gmail.com" rel="noopener noreferrer" target="_blank">
                    <span className="text-wrapper-30">@gmail.com</span>
                  </a>
                </p>
                <div className="text-wrapper-31">admin</div>
              </div>
              <a className="text-wrapper-32" href="/">AgroBoys</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DadosDeSolo