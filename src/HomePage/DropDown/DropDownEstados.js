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
  if (id === "1") {
    city = "Manaus";
    regiao = "Norte";
    bioma = "Amazônia";
  }
  if (id === "2") {
    city = "Pará";
    regiao = "Norte";
    bioma = "Amazônia";
  }
  if (id === "3") {
    city = "Roraima";
    regiao = "Norte";
    bioma = "Amazônia";
  }
  if (id === "4") {
    city = "Amapá";
    regiao = "Norte";
    bioma = "Amazônia";
  }
  if (id === "5") {
    city = "Rondônia";
    regiao = "Norte";
    bioma = "Amazônia";
  }
  if (id === "6") {
    city = "Acre";
    regiao = "Norte";
    bioma = "Amazônia";
  }
  if (id === "7") {
    city = "Tocantins";
    regiao = "Norte";
    bioma = "Cerrado";
  } 
   
  if (id === "8") {
    city = "Piauí";
    regiao = "Nordeste";
    bioma = "Caatinga";
  }
  if (id === "9") {
    city = "Maranhão";
    regiao = "Nordeste";
    bioma = "Cerrado";
  }
  if (id === "10") {
    city = "Pernambuco";
    regiao = "Nordeste";
    bioma = "Mata Atlântica";
  }
  if (id === "11") {
    city = "Currais Novos";
    regiao = "Nordeste";
    bioma = "Caatinga";
  }
  if (id === "12") {
    city = "Paraíba";
    regiao = "Nordeste";
    bioma = "Caatinga";
  }
  if (id === "13") {
    city = "Ceará";
    regiao = "Nordeste";
    bioma = "Caatinga";
  }
  if (id === "14") {
    city = "Bahia";
    regiao = "Nordeste";
    bioma = "Mata Atlântica";
  }
  if (id === "15") {
    city = "Alagoas";
    regiao = "Nordeste";
    bioma = "Caatinga";
  }
  if (id === "16") {
    city = "Sergipe";
    regiao = "Nordeste";
    bioma = "Caatinga";
  }
  
  if (id === "17") {
    city = "Mato Grosso";
    regiao = "Centro-Oeste";
    bioma = "Cerrado";
  }
  if (id === "18") {
    city = "Campo Grande";
    regiao = "Centro-Oeste";
    bioma = "Cerrado";
  }
  if (id === "19") {
    city = "Goiás";
    regiao = "Centro-Oeste";
    bioma = "Cerrado";
  }
  
  if (id === "20") {
    city = "São Paulo";
    regiao = "Sudeste";
    bioma = "Mata Atlântica";
  }
  if (id === "21") {
    city = "Rio de Janeiro";
    regiao = "Sudeste";
    bioma = "Mata Atlântica";
  }
  if (id === "22") {
    city = "Espírito Santo";
    regiao = "Sudeste";
    bioma = "Mata Atlântica";
  }
  if (id === "23") {
    city = "Divinópolis";
    regiao = "Sudeste";
    bioma = "Cerrado";
  }

  if (id === "24") {
    city = "Rio Grande do Sul";
    regiao = "Sul";
    bioma = "Pampa";
  }
  if (id === "25") {
    city = "Paraná";
    regiao = "Sul";
    bioma = "Mata Atlântica";
  }
  if (id === "26") {
    city = "Santa Catarina";
    regiao = "Sul";
    bioma = "Mata Atlântica";
  }
  if (id === "27") {
    city = "Brasilia";
    regiao = "Centro-Oeste";
    bioma = "Cerrado";
  }
  
  console.log("Chegou no WeatherComponent com id:", id);
  console.log("Chegou no WeatherComponent com city:", city);

  const [currentWeather, setCurrentWeather] = useState(weatherConst);
  const [background, setBackground] = useState("");
  const [data, setData] = useState(dataConst);
      
  return (
    <>
      {/* <Weather background={background} currentWeather={currentWeather} /> */}
      {regiao === "Norte" && <DadosNorte currentWeather={currentWeather} bioma={bioma}/>}
      {regiao === "Nordeste" && <DadosNordeste currentWeather={currentWeather} bioma={bioma}/>}
      {regiao === "Centro-Oeste" && <DadosCentroOeste currentWeather={currentWeather} bioma={bioma}/>}
      {regiao === "Sudeste" && <DadosSudeste currentWeather={currentWeather} bioma={bioma}/>}
      {regiao === "Sul" && <DadosSul currentWeather={currentWeather} bioma={bioma}/>}
      <FindCity
        Cidade={city}
        setData={setData}
        setCurrentWeather={setCurrentWeather}
      />
      {/* <Graphic background={background} data={data} /> */}
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
          {id: 27, name: 'DF'}
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
            onSelectChange={this.handleSelectChange}
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
