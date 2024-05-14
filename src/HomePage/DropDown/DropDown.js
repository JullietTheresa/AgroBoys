import React, { Component } from 'react';
import './DropDown.css';
import "../styleLandingPageDesign.css";
import DynamicSelect from './DynamicSelect';


// Importe os componentes de conteúdo específicos para cada região.
import DropDownEstados from './DropDownEstados';
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

class DropDown extends Component {

  handleIdSelected = (selectedId) => {
    console.log("ID selecionado:", selectedId);
    // Enviar o selectedId para a função de callback
    this.props.onIdSelected(selectedId);
  };
  
  constructor(props){
    super(props);
    this.state={
      selectedValue: 'Nada selecionado',
      selectedContent: null // Inicialmente não há conteúdo selecionado
    };
  
    this.regionContents = {
      // Mapeamento dos conteúdos para cada região
      '1 - Norte': <DropDownEstados idRegiao={1} onIdSelected={this.handleIdSelected}/>,
      '2 - Nordeste': <DropDownEstados idRegiao={2} onIdSelected={this.handleIdSelected}/>,
      '3 - Centro-Oeste': <DropDownEstados idRegiao={3} onIdSelected={this.handleIdSelected}/>,
      '4 - Sudeste': <DropDownEstados idRegiao={4} onIdSelected={this.handleIdSelected}/>,
      '5 - Sul': <DropDownEstados idRegiao={5} onIdSelected={this.handleIdSelected}/>
    };
  }
  

  handleSelectChange = (selectedValue) => {
    // Atualiza o estado com o valor selecionado e o conteúdo correspondente
    this.setState({
      selectedValue: selectedValue,
      selectedContent: this.regionContents[selectedValue] // Obtém o conteúdo correspondente
    });
  }

  render() {
    return (
      <div>
        <p>
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
