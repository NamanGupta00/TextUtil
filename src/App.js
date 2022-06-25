import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() { //functional based component
  const [mode, setMode] = useState('light')
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return ( // returning JSX - HTML+JS
  <>
  <Router>
  <Navbar title = "TextUtils" aboutText = "About Text Utils" mode={mode} toggleMode={toggleMode}/>
   <Routes>
    <Route path="/" element = {<TextForm heading="Enter the text to analyze"/>}/>
    <Route path="/about" element = {<About/>}/>
   </Routes>
    </Router>
  </>
  );
}

export default App;
