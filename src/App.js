import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./Pages/HomePage";
import Pokemon from "./Components/Pokemon";
import React, {useEffect} from "react";

function App() {
  return (
    <div className="App">
     <HomePage/>
    </div>
  );
}

export default App;
