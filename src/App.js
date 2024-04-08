import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LoginPage from './LoginPage';
import LandingPageDesign from './LandingPageDesign';


const App = () => {
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<LandingPageDesign/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
          </Routes>
      </Router>
    );
  }

export default App;