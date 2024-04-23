import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPageDesign from './HomePage/LandingPageDesign';
import LoginPage from './Usuario/Login/LoginPage';
import SignupPage from "./Usuario/Signup/SignupPage";
import SelecaoDeCultura from './Interno/Seleção Cultura/selecaocultura';
import Tasks from './Interno/Controle/controle';
import Regio_Estaocao from './Interno/Regiao Estacao/Regiao_Estacao';
import PlanoPlantio from './Interno/Plano de Plantio/plano';
import DadosDeSolo from './Interno/Dados do solo/DadosSolo';
import Pesticidas from './Interno/Pesticidas/pesticidas';
import HistoricoGeral from './Interno/Historico/Historico-Geral/HistoricoGeral';
import HistoricoDetalhado from './Interno/Historico/Historico-Detalhado/Detalhado';
import Suporte from './Interno/Suporte/Suporte';

const App = () => {
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<LandingPageDesign/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/Signup" element={<SignupPage/>}/>
            <Route exact path="/selcultura" element={<SelecaoDeCultura/>}/>
            <Route exact path="/controle" element={<Tasks/>}/>
            <Route exact path="/regiao" element={<Regio_Estaocao/>}/>
            <Route exact path="/plano" element={<PlanoPlantio/>}/>
            <Route exact path="/dadossolo" element={<DadosDeSolo/>}/>
            <Route exact path="/pesticidas" element={<Pesticidas/>}/>
            <Route exact path="/historico" element={<HistoricoGeral/>}/>
            <Route exact path="/historico/batata" element={<HistoricoDetalhado/>}/>
            <Route exact path="/suporte" element={<Suporte/>}/>
          </Routes>
      </Router>
    );
  }

export default App;