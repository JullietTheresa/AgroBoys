import React, { useState } from "react";
import "./styleLandingPageDesign.css";
import DropDown from "./DropDown/DropDown";
import fazenda from '../components/Images/Login/nc-fazenda-itu-061220.jpg';


  export const LandingPageDesign = () => {
    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedRegiao, setSelectedRegiao] = useState(null);
    const [selectedBioma, setSelectedBioma] = useState(null);

    const handleIdSelected = (id) => {
      console.log("ID selecionado em home.js:", id);

      const cityMap = {
        "1": { city: "Manaus", regiao: "Norte", bioma: "Amazônia" },
        "2": { city: "Pará", regiao: "Norte", bioma: "Amazônia" },
        "3": { city: "Roraima", regiao: "Norte", bioma: "Amazônia" },
        "4": { city: "Amapá, BR", regiao: "Norte", bioma: "Amazônia" },
        "5": { city: "Rondônia", regiao: "Norte", bioma: "Amazônia" },
        "6": { city: "Acre", regiao: "Norte", bioma: "Amazônia" },
        "7": { city: "Tocantins", regiao: "Norte", bioma: "Cerrado" },
        "8": { city: "Piauí", regiao: "Nordeste", bioma: "Caatinga" },
        "9": { city: "Maranhão", regiao: "Nordeste", bioma: "Cerrado" },
        "10": { city: "Pernambuco", regiao: "Nordeste", bioma: "Mata Atlântica" },
        "11": { city: "Currais Novos", regiao: "Nordeste", bioma: "Caatinga" },
        "12": { city: "Paraíba", regiao: "Nordeste", bioma: "Caatinga" },
        "13": { city: "Ceará", regiao: "Nordeste", bioma: "Caatinga" },
        "14": { city: "Bahia", regiao: "Nordeste", bioma: "Mata Atlântica" },
        "15": { city: "Alagoas", regiao: "Nordeste", bioma: "Caatinga" },
        "16": { city: "Sergipe", regiao: "Nordeste", bioma: "Caatinga" },
        "17": { city: "Mato Grosso", regiao: "Centro-Oeste", bioma: "Cerrado" },
        "18": { city: "Campo Grande", regiao: "Centro-Oeste", bioma: "Cerrado" },
        "19": { city: "Goiás", regiao: "Centro-Oeste", bioma: "Cerrado" },
        "20": { city: "São Paulo", regiao: "Sudeste", bioma: "Mata Atlântica" },
        "21": { city: "Rio de Janeiro", regiao: "Sudeste", bioma: "Mata Atlântica" },
        "22": { city: "Espírito Santo", regiao: "Sudeste", bioma: "Mata Atlântica" },
        "23": { city: "Divinópolis", regiao: "Sudeste", bioma: "Cerrado" },
        "24": { city: "Rio Grande do Sul", regiao: "Sul", bioma: "Pampa" },
        "25": { city: "Paraná", regiao: "Sul", bioma: "Mata Atlântica" },
        "26": { city: "Santa Catarina", regiao: "Sul", bioma: "Mata Atlântica" },
        "27": { city: "Brasília", regiao: "Centro-Oeste", bioma: "Cerrado" }
    };

    const selectedCity = cityMap[id]?.city || ""; // Acessando apenas a propriedade 'city' do objeto correspondente ao ID
    const selectedRegiao = cityMap[id]?.regiao || ""; // Acessando apenas a propriedade 'regiao' do objeto correspondente ao ID
    const selectedBioma = cityMap[id]?.bioma || ""; // Acessando apenas a propriedade 'bioma' do objeto correspondente ao ID
  
    setSelectedCity(selectedCity); // Armazena a cidade selecionada no estado
    setSelectedRegiao(selectedRegiao); // Armazena a região selecionada no estado
    setSelectedBioma(selectedBioma); // Armazena o bioma selecionado no estado
  };

async function SendToBackEnd(selectedCity, selectedRegiao, selectedBioma) {
  try {
    const response = await fetch("http://localhost:3000/confirmaestado", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cidade: selectedCity, regiao: selectedRegiao, bioma: selectedBioma }), // Envie o nome da cidade e os dados para o backend
    });
    if (!response.ok) {
      throw new Error("Erro ao enviar os dados para o backend");
    }
    console.log(`Dados enviados com sucesso para o backend: ${selectedCity}, ${selectedRegiao} e ${selectedBioma}`);
  } catch (error) {
    console.error("Erro:", error);
  }
}

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
            onIdSelected={handleIdSelected}
          />
          <div className="frame">
            <div className="text-wrapper-10">Região</div>
          </div>
          <div className="div-wrapper">
            <a className="text-wrapper-22" href="/historicoClimatico">Previsão do Tempo</a>
          </div>
          <div className="overlap-2">
            <div className="rectangle-3">
              <a onClick={() => SendToBackEnd(selectedCity, selectedRegiao, selectedBioma)} className="text-wrapper-23" exact href="/controle">Proximo</a>
            </div>
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