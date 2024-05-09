import React from "react";
import "./styleHistoricoGeral.css";
import cafeImage from "../../../components/Images/Interno/cafe.jpg";
import laranjaImage from "../../../components/Images/Interno/laranja.jpg";
import sojaImage from "../../../components/Images/Interno/soja.jpg";
import cacauImage from "../../../components/Images/Interno/cacau.jpg";
import milhoImage from "../../../components/Images/Interno/milho.jpg";

export const HistoricoGeral = () => {
  return (
    <div className="histrico-bsico">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="fotter">
            <div className="overlap-group">
              <div className="rectangle" />
              <div className="div" />
              <p className="copyright">
                <span className="text-wrapper">copyright 2024 </span>
                <span className="span">TerraTech</span>
              </p>
              <div className="text-wrapper-2">www.TerraTech.com</div>
              <img className="internet" alt="Internet" src="https://c.animaapp.com/V72d7Rn8/img/internet@2x.png" />
              <div className="text-wrapper-3">+55 (61) 999123456</div>
              <img
                className="hand-with-smartphone"
                alt="Hand with smartphone"
                src="https://c.animaapp.com/V72d7Rn8/img/hand-with-smartphone@2x.png"
              />
              <div className="text-wrapper-4">Email@gmail.com</div>
              <img className="envelope" alt="Envelope" src="https://c.animaapp.com/V72d7Rn8/img/envelope@2x.png" />
              <div className="text-wrapper-5">Location, street, 1234</div>
              <img
                className="place-marker"
                alt="Place marker"
                src="https://c.animaapp.com/V72d7Rn8/img/place-marker@2x.png"
              />
              <div className="text-wrapper-6">Contacts</div>
              <p className="p">
                Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de
                maneira eficiente.
              </p>
              <div className="text-wrapper-7">Sobre TerraTech</div>
            </div>
          </div>
          <div className="tabela">
            <div className="overlap-2">
              <div className="rectangle-2" />
              <div className="flexcontainer">
                <p className="text">
                  <span className="text-wrapper-8">
                    Café
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-8">
                    Laranja
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-8">
                    Cacau
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-8">
                    Milho
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-8">
                    Soja
                    <br />
                  </span>
                </p>
                <p className="text">
                  <span className="text-wrapper-8">{""}</span>
                </p>
              </div>
              <img className="line" alt="Line" src="https://c.animaapp.com/V72d7Rn8/img/line-15.svg" />
              <div className="cebola">
                <div className="view-cebola">
                  <div className="div-wrapper">
                    <div className="text-wrapper-9">View</div>
                  </div>
                </div>
                <div className="text-wrapper-10">2 Hectares</div>
                <div className="text-wrapper-11">8</div>
                <div className="text-wrapper-12">10</div>
                <img className="img" alt="Rectangle" src={sojaImage} />
                <img className="line-2" alt="Line" src="https://c.animaapp.com/V72d7Rn8/img/line-14.svg" />
              </div>
              <div className="macaxeira">
                <div className="view-macaxeira">
                  <div className="div-wrapper">
                    <div className="text-wrapper-9">View</div>
                  </div>
                </div>
                <div className="text-wrapper-13">1 Hectar</div>
                <div className="text-wrapper-14">19</div>
                <div className="text-wrapper-15">20</div>
                <img
                  className="rectangle-3"
                  alt="Rectangle"
                  src={milhoImage}
                />
                <img className="line-3" alt="Line" src="https://c.animaapp.com/V72d7Rn8/img/line-13.svg" />
              </div>
              <div className="batata">
                <div className="view-batata">
                  <div className="div-wrapper">
                    <a className="text-wrapper-9" href="/historico/batata">View</a>
                  </div>
                </div>
                <div className="text-wrapper-16">1 Hectar</div>
                <div className="text-wrapper-17">9</div>
                <img
                  className="rectangle-4"
                  alt="Rectangle"
                  src={cacauImage}
                />
                <div className="text-wrapper-18">10</div>
                <img className="line-4" alt="Line" src="https://c.animaapp.com/V72d7Rn8/img/line-12.svg" />
              </div>
              <div className="cenoura">
                <div className="view-cenoura">
                  <div className="div-wrapper">
                    <div className="text-wrapper-9">View</div>
                  </div>
                </div>
                <div className="text-wrapper-19">1 Hectar</div>
                <div className="text-wrapper-20">14</div>
                <img
                  className="rectangle-5"
                  alt="Rectangle"
                  src={laranjaImage}
                />
                <div className="text-wrapper-21">15</div>
                <img className="line-5" alt="Line" src="https://c.animaapp.com/V72d7Rn8/img/line-11.svg" />
              </div>
              <div className="milho">
                <div className="view-milho">
                  <div className="div-wrapper">
                    <div className="text-wrapper-9">View</div>
                  </div>
                </div>
                <div className="text-wrapper-22">2 Hectares</div>
                <div className="text-wrapper-23">26</div>
                <img
                  className="rectangle-6"
                  alt="Rectangle"
                  src={cafeImage}
                />
                <div className="text-wrapper-24">28</div>
                <img className="line-6" alt="Line" src="https://c.animaapp.com/V72d7Rn8/img/line-10.svg" />
              </div>
              <div className="navbar">
                <div className="text-wrapper-25">Name</div>
                <div className="text-wrapper-26">Images</div>
                <div className="text-wrapper-27">Hectares Plantados</div>
                <div className="text-wrapper-28">Hectares Colhidos</div>
                <div className="text-wrapper-29">Desperdício</div>
                <div className="text-wrapper-30">Action</div>
              </div>
            </div>
            <div className="text-wrapper-31">Histórico Plantio</div>
          </div>
          <div className="menu">
            <div className="overlap-3">
              <img
                className="suporte-house"
                alt="Suporte house"
                src="https://c.animaapp.com/V72d7Rn8/img/suporte-house@2x.png"
              />
              <a className="text-wrapper-32"href="/suporte">Suporte</a>
              <div className="group">
                <div className="overlap-group-2">
                  <div className="rectangle-7" />
                  <div className="text-wrapper-33">Histórico Plantio</div>
                </div>
              </div>
              <img
                className="pragas-e-agrotxico"
                alt="Pragas e agrotxico"
                src="https://c.animaapp.com/V72d7Rn8/img/pragas-e-agrot-xico-house@2x.png"
              />
              <div className="overlap-4">
                <a className="text-wrapper-34" href="/pesticidas">Pragas e Agrotóxico</a>
                <a className="text-wrapper-35" href="/dadossolo">Dados do Solo</a>
              </div>
              <img
                className="dados-do-solo-house"
                alt="Dados do solo house"
                src="https://c.animaapp.com/V72d7Rn8/img/dados-do-solo-house@2x.png"
              />
              <img
                className="seleo-cultura-house"
                alt="Seleo cultura house"
                src="https://c.animaapp.com/V72d7Rn8/img/sele--o-cultura-house@2x.png"
              />
              <div className="overlap-5">
                <a className="text-wrapper-36" href="/selcultura">Seleção Cultura</a>
                <a className="text-wrapper-37" href="/regiao">Região e Estação</a>
                <a className="text-wrapper-38" href="/plano">Plano Plantio</a>
              </div>
              <img
                className="regio-e-estao-house"
                alt="Regio e estao house"
                src="https://c.animaapp.com/V72d7Rn8/img/regi-o-e-esta--o-house@2x.png"
              />
              <img
                className="plano-plantio-house"
                alt="Plano plantio house"
                src="https://c.animaapp.com/V72d7Rn8/img/plano-plantio-house@2x.png"
              />
              <img
                className="controle-house"
                alt="Controle house"
                src="https://c.animaapp.com/V72d7Rn8/img/controle-house@2x.png"
              />
              <a className="text-wrapper-39" href="/controle">Controle</a>
            </div>
          </div>
          <header className="header">
            <div className="overlap-6">
              <div className="overlap-group-3">
                <div className="ellipse" />
                <div className="text-wrapper-40">S</div>
              </div>
              <a className="text-wrapper-41" href="mailto:spandan@gmail.com" rel="noopener noreferrer" target="_blank">
                spandan@gmail.com
              </a>
              <div className="text-wrapper-42">admin</div>
            </div>
            <a className="text-wrapper-43" href="/">TerraTech</a>
          </header>
        </div>
      </div>
    </div>
  );
};

export default HistoricoGeral