import React from "react";
import "./styleLandingPageDesign.css";
import DropDown from "./DropDown/DropDown";
import fazenda from '../components/Images/Login/nc-fazenda-itu-061220.jpg';


export const LandingPageDesign = () => {
  return (
    <div className="landing-page-design">
      <div className="div-2">
        <div className="fotter">
          <div className="overlap-group-2">
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="text-wrapper-2">Location, street, 1234</div>
            <div className="text-wrapper-3">Email@gmail.com</div>
            <div className="text-wrapper-4">+55 (61) 999123456</div>
            <div className="text-wrapper-5">www.TerraTech.com</div>
            <div className="text-wrapper-6">Sobre TerraTech</div>
            <div className="text-wrapper-7">Contacts</div>
            <p className="p">
              Empresa de sistema agricula ajudando pequenos agricultores desde 2024 a manejar suas plantações de maneira
              eficiente.
            </p>
            <img className="envelope" alt="Envelope" src="https://c.animaapp.com/ZUyH8RTL/img/envelope@2x.png" />
            <img
              className="hand-with-smartphone"
              alt="Hand with smartphone"
              src="https://c.animaapp.com/ZUyH8RTL/img/hand-with-smartphone@2x.png"
            />
            <img className="internet" alt="Internet" src="https://c.animaapp.com/ZUyH8RTL/img/internet@2x.png" />
            <img className="copyright" alt="Copyright" src="https://c.animaapp.com/ZUyH8RTL/img/copyright@2x.png" />
            <p className="copyright-2">
              <span className="span">copyright 2024 </span>
              <span className="text-wrapper-8">TerraTech</span>
            </p>
            <img
              className="place-marker"
              alt="Place marker"
              src="https://c.animaapp.com/ZUyH8RTL/img/place-marker@2x.png"
            />
          </div>
        </div>
        <div className="seleo-de-regio">
          <img className="img" alt="Objects" src="https://c.animaapp.com/ZUyH8RTL/img/objects-5.png" />
          <div className="text-wrapper-9">Selecione sua região</div>
          <DropDown
            chevronClassName="design-component-instance-node"
            className="listbox-component-instance"
          />
          <div className="frame">
            <div className="text-wrapper-10">Região</div>
          </div>
          <div className="div-wrapper">
            <a className="text-wrapper-22" href="/historicoClimatico">Previsão do Tempo</a>
          </div>
          <div className="overlap-2">
            <div className="rectangle-3" />
            <a className="text-wrapper-23" exact href="/controle">Proximo</a>
          </div>
        </div>

        {/* PEGAR PLANTAS DA TELA SELEÇÃO CULTURA */}
        
        <header className="header">
          <div className="overlap-3">
            <img className="rectangle-6" alt="Rectangle" src={fazenda} />
            <div className="rectangle-wrapper">
              <div className="rectangle-5" />
            </div>
            <div className="frame-6">
              <p className="text-wrapper-26">Seu sistema para acompanhar sua plantação</p>
            </div>
            <div className="bem-vindo-a-ao-wrapper">
              <p className="bem-vindo-a-ao">
                Bem vindo(a) ao TerraTech
                <br />
                Seu sistema que ajuda você a ter a maior eficiencia possivel na sua <br />
                plantação
              </p>
            </div>

          </div>
          <div className="navbar-wrapper">
            <div className="navbar">
              <div className="text-wrapper-27">TerraTech</div>
              <div className="navbar-buttons">
                <div className="text-wrapper-28">Home</div>
                <a className="text-wrapper-28" exact href="/Login">Login</a>
                <a className="text-wrapper-28" exact href="/SignUp">SignUp</a>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default LandingPageDesign