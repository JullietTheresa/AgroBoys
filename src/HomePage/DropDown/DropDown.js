import React, { Component } from 'react';
import './DropDown.css';
import "../styleLandingPageDesign.css";
import DynamicSelect from './DynamicSelect';


// Importe os componentes de conteúdo específicos para cada região
import DadosNorte from '../DadosRegiao/DadosNorte';
import DadosNordeste from '../DadosRegiao/DadosNordeste';
import DadosCentroOeste from '../DadosRegiao/DadosCentroOeste';
import DadosSul from '../DadosRegiao/DadosSul';
import DadosSudeste from '../DadosRegiao/DadosSudeste';

const arrayOfData = [
  {
    id: '1 - Norte',
    name: 'Norte'    
  },
  {
    id: '2 - Nordeste',
    name: 'Nordeste'    
  },
  {
    id: '3 - Centro-Oeste',
    name: 'Centro-Oeste'    
  },
  {
    id: '4 - Sudeste',
    name: 'Sudeste'    
  },
  {
    id: '5 - Sul',
    name: 'Sul'    
  },
];

// Mapeamento dos conteúdos para cada região
const regionContents = {
  '1 - Norte': <DadosNorte />,
  '2 - Nordeste': <DadosNordeste />,
  '3 - Centro-Oeste': <DadosCentroOeste />,
  '4 - Sudeste': <DadosSudeste />,
  '5 - Sul': <DadosSul />
};

class DropDown extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedValue: 'Nothing selected',
      selectedContent: null // Inicialmente não há conteúdo selecionado
    }
  }

  handleSelectChange = (selectedValue) => {
    // Atualiza o estado com o valor selecionado e o conteúdo correspondente
    this.setState({
      selectedValue: selectedValue,
      selectedContent: regionContents[selectedValue] // Obtém o conteúdo correspondente
    });
  }

  render() {
    return (
      <div className="">
        <p className="DropDown-intro">
          <DynamicSelect arrayOfData={arrayOfData} onSelectChange={this.handleSelectChange} />
        </p>
        <div>
          {this.state.selectedContent}
        </div>
      </div>
    );
  }
}

export default DropDown;
