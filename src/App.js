import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPageDesign from './LandingPageDesign';
import LoginPage from './LoginPage';
import SignupPage from "./SignupPage";
import SelecaoDeCultura from './selecaocultura';
import Tasks from './controle';

const App = () => {
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<LandingPageDesign/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/Signup" element={<SignupPage/>}/>
            <Route exact path="/selcultura" element={<SelecaoDeCultura/>}/>
            <Route exact path="/controle" element={<Tasks/>}/>
          </Routes>
      </Router>
    );
  }

export default App;