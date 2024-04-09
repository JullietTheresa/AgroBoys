import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import LandingPageDesign from './LandingPageDesign';
import LoginPage from './LoginPage';
import { SignupPage } from "./SignupPage";


const App = () => {
    return (
      <Router>
          <Routes>
            <Route exact path="/" element={<LandingPageDesign/>}/>
            <Route exact path="/login" element={<LoginPage/>}/>
            <Route exact path="/Signup" element={<SignupPage/>}/>
          </Routes>
      </Router>
    );
  }

export default App;