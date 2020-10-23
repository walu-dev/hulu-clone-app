import React, { useState } from 'react';
import Header from "./Header.js";
import Nav from "./Nav.js";
import Results from "./Results.js";
import requests from "./requests"
import './App.css';

const App= ()=>{
  const [selectedOption, setSelectedOption] =useState(requests.fetchTrending);

  return (
    <div className="app">
      <Header/>

      <Nav  setSelectedOption={setSelectedOption} />

      <Results selectedOption={selectedOption} />
    </div>
  )
}
export default App;
