import React, { Component } from 'react';
import './DropDown.css';
import "../styleLandingPageDesign.css";
import DynamicSelect from './DynamicSelect-Estados';

// Weather Imports
import { BackGround } from '../../Weather/style/HomeStyle';
import { useState } from "react"
import FindCity from '../../Weather/components/FindCity/FindCity';
import Graphic from '../../Weather/components/Graphic/Graphic';
import Weather from '../../Weather/components/Weather/Weather';
import { Data } from "../../Weather/common/types";
import { dataConst, weatherConst } from "../../Weather/common/constants"

import DadosNorte from '../DadosRegiao/DadosNorte';
import DadosNordeste from '../DadosRegiao/DadosNordeste';
import DadosCentroOeste from '../DadosRegiao/DadosCentroOeste';
import DadosSul from '../DadosRegiao/DadosSul';
import DadosSudeste from '../DadosRegiao/DadosSudeste';

function WeatherComponent({ id }) {
  console.log("Chegou no WeatherComponent com id:", id);
  let city = "";
  let regiao = "";
  let bioma = "";

  const cityInfo = {
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

  if (cityInfo[id]) {
      city = cityInfo[id].city;
      regiao = cityInfo[id].regiao;
      bioma = cityInfo[id].bioma;
  }

  console.log("Chegou no WeatherComponent com city:", city);

  const [currentWeather, setCurrentWeather] = useState(weatherConst);
  const [background, setBackground] = useState("");
  const [data, setData] = useState(dataConst);

  return (
      <>
          {regiao === "Norte" && <DadosNorte currentWeather={currentWeather} bioma={bioma} />}
          {regiao === "Nordeste" && <DadosNordeste currentWeather={currentWeather} bioma={bioma} />}
          {regiao === "Centro-Oeste" && <DadosCentroOeste currentWeather={currentWeather} bioma={bioma} />}
          {regiao === "Sudeste" && <DadosSudeste currentWeather={currentWeather} bioma={bioma} />}
          {regiao === "Sul" && <DadosSul currentWeather={currentWeather} bioma={bioma} />}
          <FindCity
              Cidade={city}
              setData={setData}
              setCurrentWeather={setCurrentWeather}
          />
      </>
  );
}

class DropDownEstados extends Component {
  state = {
    selectedValue: null,
  };

  handleSelectChange = (selectedValue) => {
    this.setState({
      selectedValue: selectedValue,
    });
  };

  render() {
    const { idRegiao } = this.props;
    const { selectedValue } = this.state;

    let arrayOfData = [];

    switch (idRegiao) {
      case 1:
        arrayOfData = [
          { id: 1, name: 'Amazonas' },
          { id: 2, name: 'Pará' },
          { id: 3, name: 'Roraima' },
          { id: 4, name: 'Amapá' },
          { id: 5, name: 'Rondônia' },
          { id: 6, name: 'Acre' },
          { id: 7, name: 'Tocantins' }
        ];
        break;
      case 2:
        arrayOfData = [
          { id: 8, name: 'Piauí' },
          { id: 9, name: 'Maranhão' },
          { id: 10, name: 'Pernambuco' },
          { id: 11, name: 'Rio Grande do Norte' },
          { id: 12, name: 'Paraíba' },
          { id: 13, name: 'Ceará' },
          { id: 14, name: 'Bahia' },
          { id: 15, name: 'Alagoas' },
          { id: 16, name: 'Sergipe' }
        ];
        break;
      case 3:
        arrayOfData = [
          { id: 17, name: 'Mato Grosso' },
          { id: 18, name: 'Mato Grosso do Sul' },
          { id: 19, name: 'Goiás' },
          {id: 27, name: 'Brasilia'}
        ];
        break;
      case 4:
        arrayOfData = [
          { id: 20, name: 'São Paulo' },
          { id: 21, name: 'Rio de Janeiro' },
          { id: 22, name: 'Espírito Santo' },
          { id: 23, name: 'Minas Gerais' }
        ];
        break;
      case 5:
        arrayOfData = [
          { id: 24, name: 'Rio Grande do Sul' },
          { id: 25, name: 'Paraná' },
          { id: 26, name: 'Santa Catarina' }
        ];
        break;
      default:
        break;
    }
    

    return (
      <div className="">
        <p className="DropDown-Estados">
        <DynamicSelect
          arrayOfData={arrayOfData}
          onSelectChange={(selectedValue) => {
            this.handleSelectChange(selectedValue);
            this.props.onIdSelected(selectedValue); // Chame a função de callback com o ID selecionado
          }}
        />

        </p>
        {/* Verifica se selectedValue está definido e não é null antes de renderizar o WeatherComponent */}
        {selectedValue !== null && (
          <WeatherComponent id={selectedValue} />
        )}
      </div>
    );
  }
}

export default DropDownEstados;
